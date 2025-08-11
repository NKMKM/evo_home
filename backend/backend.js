import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Загрузка переменных окружения
dotenv.config();

// Определяем __dirname для ES модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Проверка наличия всех необходимых переменных окружения
const requiredEnvVars = ['PGUSER', 'PGHOST', 'PGDATABASE', 'PGPASSWORD', 'PGPORT', 'SESSION_SECRET', 'ADMIN_USERNAME', 'ADMIN_PASSWORD_HASH', 'FRONTEND_URL_1', 'FRONTEND_URL_2'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingEnvVars.length > 0) {
  console.error('❌ Ошибка: отсутствуют переменные окружения:', missingEnvVars.join(', '));
  process.exit(1);
}

// Настройка пула подключений к PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  ssl: { rejectUnauthorized: false }, // Для продакшена лучше использовать сертификат
});

// Проверка подключения к базе данных
pool.connect()
  .then(client => {
    console.log('✅ Подключение к базе успешно');
    client.release();
  })
  .catch(err => {
    console.error('❌ Ошибка подключения к базе:', err.message);
    process.exit(1);
  });

const app = express();
const PORT = process.env.PORT || 3001;

// Разрешённые фронтенды
const allowedOrigins = [
  'https://new.evohome.it',
  'https://admin.evohome.it',
  'http://localhost:5173',  // Frontend development
  'http://localhost:5174',  // Admin panel development
  'http://localhost:3000',  // Alternative development ports
  'http://localhost:3001'   // Backend development (for testing)
];

// Настройка CORS
app.use(cors({
  origin: (origin, callback) => {
    console.log('CORS origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin || true);
    } else {
      callback(new Error(`CORS error: origin ${origin} not allowed`));
    }
  },
  credentials: true
}));

// Парсинг JSON
app.use(express.json());

// Отладка входящих куки
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Cookies:', req.headers.cookie);
  next();
});

// Настройка сессий
app.use(session({
  secret: process.env.SESSION_SECRET || 'development-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true только в продакшене
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    domain: process.env.NODE_ENV === 'production' ? '.evohome.it' : undefined,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Маршрут логина
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Логин и пароль обязательны' });
  }

  try {
    if (
      username === process.env.ADMIN_USERNAME &&
      await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)
    ) {
      req.session.user = { username, role: 'admin' };
      console.log('Login success, session:', req.session.user);
      return res.json({ success: true });
    }

    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        req.session.user = { username: user.username, role: 'user' };
        console.log('Login success, session:', req.session.user);
        return res.json({ success: true });
      }
    }

    res.status(401).json({ success: false, message: 'Неверный логин или пароль' });
  } catch (err) {
    console.error('Ошибка при логине:', err.message);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
});

// Проверка авторизации
app.get('/check-auth', (req, res) => {
  console.log('Check-auth session:', req.session.user);
  if (req.session.user) {
    res.json({ authenticated: true, user: req.session.user });
  } else {
    res.json({ authenticated: false });
  }
});

// Логаут
app.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Ошибка при логауте:', err.message);
      return res.status(500).json({ success: false, message: 'Ошибка при выходе' });
    }
    res.json({ success: true });
  });
});

// Получение заявок (только для авторизованных)
app.get('/api/submissions', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const result = await pool.query('SELECT * FROM submissions ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка при получении заявок:', err.message);
    res.status(500).json({ error: 'Ошибка базы данных' });
  }
});

// Создание заявки (без авторизации)
app.post('/submissions', async (req, res) => {
  const {
    buildingType, roomType, repairType, area,
    urgency, additionalInfo, name, phone, promoCode
  } = req.body;

  const validBuildingTypes = ['option1', 'option2'];
  const validRoomTypes = ['option1', 'option2'];
  const validRepairTypes = ['option1', 'option2'];
  const validUrgencies = ['option1', 'option2'];

  if (!validBuildingTypes.includes(buildingType) ||
      !validRoomTypes.includes(roomType) ||
      !validRepairTypes.includes(repairType) ||
      !validUrgencies.includes(urgency)) {
    return res.status(400).json({ error: 'Некорректные данные' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO submissions
      (buildingType, roomType, repairType, area, urgency, additionalInfo, name, phone, promoCode, date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
      RETURNING *`,
      [buildingType, roomType, repairType, area, urgency, additionalInfo, name, phone, promoCode]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Ошибка при добавлении заявки:', err.message);
    res.status(500).json({ error: 'Ошибка базы данных' });
  }
});

// Удаление заявки (только для авторизованных)
app.delete('/api/submissions/:id', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM submissions WHERE id = $1 RETURNING id', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Заявка не найдена' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Ошибка при удалении заявки:', err.message);
    res.status(500).json({ error: 'Ошибка базы данных' });
  }
});

// Получение всех изображений из frontend проекта (только для авторизованных)
app.get('/api/images/scan', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const frontendAssetsPath = path.join(__dirname, '../frontend/src/assets');
    
    function scanImages(dirPath, relativePath = '') {
      const images = [];
      
      if (!fs.existsSync(dirPath)) {
        return images;
      }
      
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const relativeItemPath = relativePath ? `${relativePath}/${item}` : item;
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Рекурсивно сканируем подпапки
          images.push(...scanImages(itemPath, relativeItemPath));
        } else if (stat.isFile()) {
          // Проверяем что это изображение
          const ext = path.extname(item).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
            const sizeKB = Math.round(stat.size / 1024);
            const category = getCategoryFromPath(relativeItemPath);
            
            images.push({
              id: Buffer.from(relativeItemPath).toString('base64'),
              name: item,
              path: relativeItemPath,
              category: category,
              size: `${sizeKB} KB`,
              dimensions: { width: 0, height: 0 }, // Можно добавить определение размеров
              fullPath: `frontend/src/assets/${relativeItemPath}`,
              usedIn: [], // Можно добавить анализ использования
              lastModified: stat.mtime.toISOString()
            });
          }
        }
      }
      
      return images;
    }
    
    function getCategoryFromPath(imagePath) {
      const pathParts = imagePath.split('/');
      
      if (pathParts.includes('our_works_gallery')) return 'Галерея работ';
      if (pathParts.includes('team_images')) return 'Команда';
      if (pathParts.includes('about_us_achievments')) return 'Достижения';
      if (pathParts.includes('turnkey_renovation')) return 'Ремонт под ключ';
      if (pathParts.includes('room_renovation')) return 'Ремонт комнат';
      if (pathParts.includes('commercial_premises')) return 'Коммерческие помещения';
      if (pathParts.includes('systems')) return 'Системы';
      if (pathParts.includes('reviews')) return 'Отзывы';
      if (pathParts.includes('projects')) return 'Проекты';
      if (pathParts.includes('services')) return 'Услуги';
      if (pathParts.includes('process')) return 'Процесс работ';
      if (pathParts.includes('icons/works')) return 'Иконки работ';
      if (pathParts.includes('icons')) return 'Иконки';
      if (pathParts.includes('images') && pathParts.length === 2) return 'Основные';
      if (imagePath.includes('vector')) return 'Векторы';
      if (imagePath.includes('decoration')) return 'Декорации';
      if (imagePath.includes('bg')) return 'Фоны';
      if (imagePath.includes('star')) return 'Рейтинг';
      if (imagePath.includes('arrow')) return 'Стрелки';
      if (imagePath.includes('flag')) return 'Языки';
      if (imagePath.includes('facebook') || imagePath.includes('instagram') || imagePath.includes('google') || imagePath.includes('whatsap')) return 'Социальные сети';
      
      return 'Разное';
    }
    
    const allImages = scanImages(frontendAssetsPath);
    
    console.log(`Найдено изображений: ${allImages.length}`);
    res.json(allImages);
    
  } catch (err) {
    console.error('Ошибка при сканировании изображений:', err.message);
    res.status(500).json({ error: 'Ошибка сканирования' });
  }
});

// Статические файлы - доступ к изображениям frontend
app.use('/frontend-assets', express.static(path.join(__dirname, '../frontend/src/assets')));

// Создание бэкапа изображения перед заменой
app.post('/api/images/backup', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { imagePath } = req.body;
    const originalPath = path.join(__dirname, '../frontend/src/assets', imagePath);
    
    if (!fs.existsSync(originalPath)) {
      return res.status(404).json({ error: 'Файл не найден' });
    }
    
    // Создаем папку бэкапов если не существует
    const backupDir = path.join(__dirname, '../backups/images');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Создаем бэкап с временной меткой
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = path.basename(imagePath);
    const fileExt = path.extname(fileName);
    const fileBaseName = path.basename(fileName, fileExt);
    const backupFileName = `${fileBaseName}_${timestamp}${fileExt}`;
    const backupPath = path.join(backupDir, backupFileName);
    
    fs.copyFileSync(originalPath, backupPath);
    
    res.json({ 
      success: true, 
      backupPath: backupFileName,
      message: 'Бэкап создан успешно' 
    });
    
  } catch (err) {
    console.error('Ошибка при создании бэкапа:', err.message);
    res.status(500).json({ error: 'Ошибка создания бэкапа' });
  }
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Глобальная ошибка:', err.stack);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});