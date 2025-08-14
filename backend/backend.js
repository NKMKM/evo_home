import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import BackupManager from './backupManager.js';

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
const upload = multer({ storage: multer.memoryStorage() });
const backupManager = new BackupManager();

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

// Замена изображения с авто-бэкапом
app.post('/api/images/replace', upload.single('file'), async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { imagePath } = req.body;
    const file = req.file;

    if (!imagePath || !file) {
      return res.status(400).json({ error: 'imagePath и файл обязательны' });
    }

    const originalPath = path.join(__dirname, '../frontend/src/assets', imagePath);

    if (!fs.existsSync(originalPath)) {
      return res.status(404).json({ error: 'Файл не найден' });
    }

    const allowedExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const originalExt = path.extname(originalPath).toLowerCase();
    if (!allowedExts.includes(originalExt)) {
      return res.status(400).json({ error: 'Недопустимый тип файла' });
    }

    // Бэкап
    const backupDir = path.join(__dirname, '../backups/images');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = path.basename(imagePath);
    const fileBaseName = path.basename(fileName, originalExt);
    const backupFileName = `${fileBaseName}_${timestamp}${originalExt}`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.copyFileSync(originalPath, backupPath);

    // Запись нового файла
    fs.writeFileSync(originalPath, file.buffer);

    res.json({ success: true, backupPath: backupFileName, message: 'Изображение заменено' });
  } catch (err) {
    console.error('Ошибка при замене изображения:', err.message);
    res.status(500).json({ error: 'Ошибка замены изображения' });
  }
});

// Получение текстов локализации
app.get('/api/texts', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { lang, ns } = req.query;
    if (!lang || !ns) {
      return res.status(400).json({ error: 'Параметры lang и ns обязательны' });
    }
    const localePath = path.join(__dirname, `../frontend/public/locales/${lang}/${ns}.json`);
    if (!fs.existsSync(localePath)) {
      return res.status(404).json({ error: 'Файл локализации не найден' });
    }
    const raw = fs.readFileSync(localePath, 'utf-8');
    const json = JSON.parse(raw);
    res.json({ language: lang, namespace: ns, path: `frontend/public/locales/${lang}/${ns}.json`, content: json });
  } catch (err) {
    console.error('Ошибка при чтении локали:', err.message);
    res.status(500).json({ error: 'Ошибка чтения локали' });
  }
});

// Сохранение (замена) текстов локализации с бэкапом
app.put('/api/texts', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { language, namespace, content } = req.body;
    if (!language || !namespace || typeof content !== 'object') {
      return res.status(400).json({ error: 'language, namespace и content обязательны' });
    }
    const localePath = path.join(__dirname, `../frontend/public/locales/${language}/${namespace}.json`);
    const localeDir = path.dirname(localePath);
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true });
    }

    // Бэкап
    const backupDir = path.join(__dirname, `../backups/texts/${language}`);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const safeNs = namespace.replace(/[\\/]/g, '__');
    const backupFileName = `${safeNs}_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    if (fs.existsSync(localePath)) {
      fs.copyFileSync(localePath, backupPath);
    }

    fs.writeFileSync(localePath, JSON.stringify(content, null, 2), 'utf-8');
    res.json({ success: true, backupPath: `texts/${language}/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении локали:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения локали' });
  }
});

// Сканирование видео в исходниках (поиск YouTube embed)
app.get('/api/videos/scan', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const srcDir = path.join(__dirname, '../frontend/src');
    const results = [];
    const exts = new Set(['.jsx', '.js', '.tsx', '.ts']);

    function walk(dir) {
      if (!fs.existsSync(dir)) return;
      for (const entry of fs.readdirSync(dir)) {
        const full = path.join(dir, entry);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          walk(full);
        } else if (stat.isFile() && exts.has(path.extname(entry))) {
          const content = fs.readFileSync(full, 'utf-8');
          const regex = /https?:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]+)([^"\s>]*)/g;
          let match;
          let index = 0;
          while ((match = regex.exec(content)) !== null) {
            results.push({
              id: Buffer.from(`${full}:${index}`).toString('base64'),
              title: path.basename(full),
              youtubeId: match[1],
              filePath: full,
              location: path.relative(path.join(__dirname, '..'), full)
            });
            index += 1;
          }
        }
      }
    }

    walk(srcDir);
    res.json(results);
  } catch (err) {
    console.error('Ошибка при сканировании видео:', err.message);
    res.status(500).json({ error: 'Ошибка сканирования видео' });
  }
});

// Замена YouTube ID в исходниках с бэкапом
app.put('/api/videos', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { filePath, youtubeId } = req.body;
    if (!filePath || !youtubeId) {
      return res.status(400).json({ error: 'filePath и youtubeId обязательны' });
    }
    const absPath = path.isAbsolute(filePath) ? filePath : path.join(__dirname, '..', filePath);
    if (!fs.existsSync(absPath)) {
      return res.status(404).json({ error: 'Файл не найден' });
    }

    const original = fs.readFileSync(absPath, 'utf-8');
    // Бэкап файла
    const backupDir = path.join(__dirname, '../backups/videos');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const base = path.basename(absPath);
    const backupName = `${base}.${timestamp}.bak`;
    fs.writeFileSync(path.join(backupDir, backupName), original, 'utf-8');

    // Замена только ID, сохраняя возможные query-параметры
    const replaced = original.replace(/(https?:\/\/www\.youtube\.com\/embed\/)([A-Za-z0-9_-]+)((?:\?[^"\s>]*)?)/g, `$1${youtubeId}$3`);
    fs.writeFileSync(absPath, replaced, 'utf-8');

    res.json({ success: true, backupPath: `videos/${backupName}` });
  } catch (err) {
    console.error('Ошибка при замене видео ID:', err.message);
    res.status(500).json({ error: 'Ошибка замены видео ID' });
  }
});

// Получение изображений для конкретной страницы
app.get('/api/pages/:pageId/images', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { pageId } = req.params;
    const frontendDir = path.join(__dirname, '../frontend/src');
    const images = [];
    
    // Сканируем все изображения и определяем, какие используются на странице
    function scanImagesForPage(dirPath, relativePath = '') {
      if (!fs.existsSync(dirPath)) return;
      
      for (const entry of fs.readdirSync(dirPath)) {
        const fullPath = path.join(dirPath, entry);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanImagesForPage(fullPath, path.join(relativePath, entry));
        } else if (stat.isFile() && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(entry)) {
          // Проверяем, используется ли изображение на указанной странице
          const isUsedOnPage = checkImageUsageOnPage(fullPath, pageId);
          if (isUsedOnPage) {
            const relativeImagePath = path.join(relativePath, entry);
            const normalizedRelPath = relativeImagePath.split(path.sep).join('/');
            images.push({
              id: Buffer.from(normalizedRelPath).toString('base64'),
              name: entry,
              path: normalizedRelPath,
              fullPath: fullPath,
              size: formatFileSize(stat.size),
              usedIn: [pageId]
            });
          }
        }
      }
    }
    
    function checkImageUsageOnPage(imagePath, pageId) {
      // Маппинг страниц к их файлам
      const pageFiles = {
        'home': ['Main.jsx'],
        'about-us': ['AboutUs.jsx'],
        'our-works': ['OurWorks.jsx'],
        'contacts': ['Contacts.jsx'],
        'reviews': ['Reviews.jsx'],
        'turnkey-renovation': ['turnkey_renovation/TurnkeyRenovation.jsx'],
        'designer-renovation': ['turnkey_renovation/DesignerRenovation.jsx'],
        'exclusive-renovation': ['turnkey_renovation/ExclusiveRenovation.jsx'],
        'studio': ['turnkey_renovation/Studio.jsx'],
        'two-room-apartment': ['turnkey_renovation/TworoomApartment.jsx'],
        'three-room-apartment': ['turnkey_renovation/ThreeroomApartment.jsx'],
        'four-room-apartment': ['turnkey_renovation/FourroomApartment.jsx'],
        'two-story-apartment': ['turnkey_renovation/TwostoryApartment.jsx'],
        'room-renovation': ['room_renovation/RoomRenovation.jsx'],
        'living-room': ['room_renovation/LivingRoom.jsx'],
        'bedroom': ['room_renovation/Bedroom.jsx'],
        'children-room': ['room_renovation/ChildrenRoom.jsx'],
        'corridor': ['room_renovation/Corridor.jsx'],
        'kitchen': ['room_renovation/Kitchen.jsx'],
        'bathroom': ['room_renovation/Bathroom.jsx'],
        'stairs': ['room_renovation/Stairs.jsx'],
        'systems': ['systems/Systems.jsx'],
        'electrical-system': ['systems/ElectricalSystem.jsx'],
        'gas-system': ['systems/GasSystem.jsx'],
        'floor-heating': ['systems/FloorHeating.jsx'],
        'sewage': ['systems/Sewage.jsx'],
        'climate-control': ['systems/ClimateControl.jsx'],
        'commercial-premises': ['commercial_premises/CommercialPremises.jsx'],
        'business-center': ['commercial_premises/BusinessCenter.jsx'],
        'restaurant': ['commercial_premises/Restaurant.jsx'],
        'commercial-premises-renovation': ['commercial_premises/CommercialPremisesRenovation.jsx'],
        'office': ['commercial_premises/Office.jsx'],
        'warehouse': ['commercial_premises/Warehouse.jsx'],
        'fitness-club': ['commercial_premises/FitnessClub.jsx'],
        'hotel': ['commercial_premises/Hotel.jsx'],
        'services': ['servises/ServisesPhone.jsx'],
        'turnkey-renovation-services': ['servises/TurnkeyRenovationServices.jsx'],
        'room-renovation-services': ['servises/RoomRenovationServices.jsx'],
        'commercial-premises-services': ['servises/CommercialPremisesServices.jsx'],
        'systems-services': ['servises/SystemsServices.jsx']
      };
      
      const pageFileList = pageFiles[pageId];
      if (!pageFileList) return false;
      
      const imageName = path.basename(imagePath);
      const imageNameWithoutExt = path.basename(imagePath, path.extname(imagePath));
      const imageRelativePath = path.relative(path.join(frontendDir, 'assets'), imagePath).replace(/\\/g, '/');
      
      // Функция для проверки содержимого файла
      function checkFileContent(filePath) {
        if (!fs.existsSync(filePath)) return false;
        
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          
          // Проверяем импорты (import statements)
          const importPattern = new RegExp(`import\\s+\\w+\\s+from\\s+['"][^'"]*${imageNameWithoutExt}[^'"]*['"]`, 'i');
          if (importPattern.test(content)) {
            return true;
          }
          
          // Проверяем прямые упоминания
          if (content.includes(imageName) || 
              content.includes(imageNameWithoutExt) ||
              content.includes(imageRelativePath) ||
              content.includes(imagePath.replace(/\\/g, '/'))) {
            return true;
          }
          
          // Проверяем использование в src атрибутах
          const srcPattern = new RegExp(`src\\s*=\\s*['"][^'"]*${imageNameWithoutExt}[^'"]*['"]`, 'i');
          if (srcPattern.test(content)) {
            return true;
          }
          
          return false;
        } catch (error) {
          console.error(`Ошибка при чтении файла ${filePath}:`, error.message);
          return false;
        }
      }
      
      // Проверяем основные файлы страниц
      for (const pageFile of pageFileList) {
        const pageFilePath = path.join(frontendDir, 'pages', pageFile);
        if (checkFileContent(pageFilePath)) {
          return true;
        }
      }
      
      // Для главной страницы и о нас также проверяем компоненты
      if (pageId === 'home' || pageId === 'about-us') {
        const componentsDir = path.join(frontendDir, 'components');
        if (fs.existsSync(componentsDir)) {
          // Проверяем mainpage_components
          const mainpageComponentsDir = path.join(componentsDir, 'mainpage_components');
          if (fs.existsSync(mainpageComponentsDir)) {
            for (const entry of fs.readdirSync(mainpageComponentsDir)) {
              if (entry.endsWith('.jsx')) {
                const componentPath = path.join(mainpageComponentsDir, entry);
                if (checkFileContent(componentPath)) {
                  return true;
                }
              }
            }
          }
        }
      }
      
      // Для страниц систем проверяем systems_components
      if (pageId.includes('system') || pageId.includes('electrical') || pageId.includes('gas') || pageId.includes('floor') || pageId.includes('sewage') || pageId.includes('climate')) {
        const componentsDir = path.join(frontendDir, 'components');
        if (fs.existsSync(componentsDir)) {
          const systemsComponentsDir = path.join(componentsDir, 'systems_components');
          if (fs.existsSync(systemsComponentsDir)) {
            for (const entry of fs.readdirSync(systemsComponentsDir)) {
              if (entry.endsWith('.jsx')) {
                const componentPath = path.join(systemsComponentsDir, entry);
                if (checkFileContent(componentPath)) {
                  return true;
                }
              }
            }
          }
        }
      }
      
      // Для страниц ремонта комнат проверяем room_renovation_components
      if (pageId.includes('room') || pageId.includes('living') || pageId.includes('bedroom') || pageId.includes('children') || pageId.includes('corridor') || pageId.includes('kitchen') || pageId.includes('bathroom') || pageId.includes('stairs')) {
        const componentsDir = path.join(frontendDir, 'components');
        if (fs.existsSync(componentsDir)) {
          const roomComponentsDir = path.join(componentsDir, 'room_renovation_components');
          if (fs.existsSync(roomComponentsDir)) {
            for (const entry of fs.readdirSync(roomComponentsDir)) {
              if (entry.endsWith('.jsx')) {
                const componentPath = path.join(roomComponentsDir, entry);
                if (checkFileContent(componentPath)) {
                  return true;
                }
              }
            }
          }
        }
      }
      
      return false;
      
      return false;
    }
    
    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // Важно: передаём базовые префиксы, чтобы формировать корректные относительные пути
    scanImagesForPage(path.join(frontendDir, 'assets/images'), 'images');
    scanImagesForPage(path.join(frontendDir, 'assets/icons'), 'icons');
    
    console.log(`Found ${images.length} images for page ${pageId}:`, images.map(img => img.path));
    
    res.json(images);
  } catch (err) {
    console.error('Ошибка при получении изображений страницы:', err.message);
    res.status(500).json({ error: 'Ошибка получения изображений страницы' });
  }
});

// Получение текстов для конкретной страницы
app.get('/api/pages/:pageId/texts', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { pageId } = req.params;
    const localesDir = path.join(__dirname, '../frontend/public/locales');
    const texts = [];
    
    // Маппинг страниц к их namespace
    const pageNamespaces = {
      'home': ['home/HomeStart', 'home/Calculator', 'home/Guarantees'],
      'about-us': ['AboutUs'],
      'our-works': ['OurWorks'],
      'contacts': ['Contacts'],
      'reviews': ['Reviews'],
      'turnkey-renovation': ['turnkey_renovation/TurnkeyRenovation'],
      'designer-renovation': ['turnkey_renovation/DesignerRenovation'],
      'exclusive-renovation': ['turnkey_renovation/ExclusiveRenovation'],
      'studio': ['turnkey_renovation/Studio'],
      'two-room-apartment': ['turnkey_renovation/TworoomApartment'],
      'three-room-apartment': ['turnkey_renovation/ThreeroomApartment'],
      'four-room-apartment': ['turnkey_renovation/FourroomApartment'],
      'two-story-apartment': ['turnkey_renovation/TwolevelApartment'],
      'room-renovation': ['room_renovation/RoomRenovation'],
      'living-room': ['room_renovation/LivingRoom'],
      'bedroom': ['room_renovation/Bedroom'],
      'children-room': ['room_renovation/ChildrenRoomRenovation'],
      'corridor': ['room_renovation/Corridor'],
      'kitchen': ['room_renovation/Kitchen'],
      'bathroom': ['room_renovation/Bathroom'],
      'stairs': ['room_renovation/Stairs'],
      'systems': ['systems/Systems'],
      'electrical-system': ['systems/ElectricalSystem'],
      'gas-system': ['systems/GasSystem'],
      'floor-heating': ['systems/FloorHeating'],
      'sewage': ['systems/Sewage'],
      'climate-control': ['systems/ClimateControl'],
      'commercial-premises': ['commercial_premises/CommercialPremises'],
      'business-center': ['commercial_premises/BusinessCenter'],
      'restaurant': ['commercial_premises/Restaurant'],
      'commercial-premises-renovation': ['commercial_premises/CommercialSpaces'],
      'office': ['commercial_premises/Ofice'],
      'warehouse': ['commercial_premises/Warehouse'],
      'fitness-club': ['commercial_premises/FitnessClub'],
      'hotel': ['commercial_premises/Hotel'],
      'services': ['home/Services'], // Временно используем Services.json пока нет servises
      'turnkey-renovation-services': ['turnkey_renovation/TurnkeyRenovation'], // Временно
      'room-renovation-services': ['room_renovation/RoomRenovation'], // Временно
      'commercial-premises-services': ['commercial_premises/CommercialPremises'], // Временно
      'systems-services': ['systems/Systems'] // Временно
    };
    
    const namespaces = pageNamespaces[pageId];
    if (!namespaces) {
      return res.json([]);
    }
    
    const languages = ['ru', 'en', 'it'];
    
    for (const namespace of namespaces) {
      for (const language of languages) {
        const filePath = path.join(localesDir, language, `${namespace}.json`);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf-8');
          const jsonContent = JSON.parse(content);
          texts.push({
            language,
            namespace,
            path: filePath,
            content: jsonContent
          });
        }
      }
    }
    
    res.json(texts);
  } catch (err) {
    console.error('Ошибка при получении текстов страницы:', err.message);
    res.status(500).json({ error: 'Ошибка получения текстов страницы' });
  }
});

// Получение SEO данных для конкретной страницы
app.get('/api/pages/:pageId/seo', async (req, res) => {
	if (!req.session.user) {
		return res.status(401).json({ error: 'Не авторизован' });
	}
	try {
		const { pageId } = req.params;
		const localesBase = path.join(__dirname, '../frontend/public/locales');
		const languagesList = ['ru', 'en', 'it'];
		const languages = { ru: {}, en: {}, it: {} };

		// Маппинг страниц к их namespace (используем существующий)
		const pageNamespaces = {
			'home': ['home/HomeStart', 'home/Calculator', 'home/Guarantees'],
			'about-us': ['AboutUs'],
			'our-works': ['OurWorks'],
			'contacts': ['Contacts'],
			'reviews': ['Reviews'],
			'turnkey-renovation': ['turnkey_renovation/TurnkeyRenovation'],
			'designer-renovation': ['turnkey_renovation/DesignerRenovation'],
			'exclusive-renovation': ['turnkey_renovation/ExclusiveRenovation'],
			'studio': ['turnkey_renovation/Studio'],
			'two-room-apartment': ['turnkey_renovation/TworoomApartment'],
			'three-room-apartment': ['turnkey_renovation/ThreeroomApartment'],
			'four-room-apartment': ['turnkey_renovation/FourroomApartment'],
			'two-story-apartment': ['turnkey_renovation/TwolevelApartment'],
			'room-renovation': ['room_renovation/RoomRenovation'],
			'living-room': ['room_renovation/LivingRoom'],
			'bedroom': ['room_renovation/Bedroom'],
			'children-room': ['room_renovation/ChildrenRoomRenovation'],
			'corridor': ['room_renovation/Corridor'],
			'kitchen': ['room_renovation/Kitchen'],
			'bathroom': ['room_renovation/Bathroom'],
			'stairs': ['room_renovation/Stairs'],
			'systems': ['systems/Systems'],
			'electrical-system': ['systems/ElectricalSystem'],
			'gas-system': ['systems/GasSystem'],
			'floor-heating': ['systems/FloorHeating'],
			'sewage': ['systems/Sewage'],
			'climate-control': ['systems/ClimateControl'],
			'commercial-premises': ['commercial_premises/CommercialPremises'],
			'business-center': ['commercial_premises/BusinessCenter'],
			'restaurant': ['commercial_premises/Restaurant'],
			'commercial-premises-renovation': ['commercial_premises/CommercialSpaces'],
			'office': ['commercial_premises/Ofice'],
			'warehouse': ['commercial_premises/Warehouse'],
			'fitness-club': ['commercial_premises/FitnessClub'],
			'hotel': ['commercial_premises/Hotel'],
			'services': ['home/Services'], // Временно используем Services.json пока нет servises
			'turnkey-renovation-services': ['turnkey_renovation/TurnkeyRenovation'], // Временно
			'room-renovation-services': ['room_renovation/RoomRenovation'], // Временно
			'commercial-premises-services': ['commercial_premises/CommercialPremises'], // Временно
			'systems-services': ['systems/Systems'] // Временно
		};

		const namespaces = pageNamespaces[pageId];
		if (!namespaces) {
			return res.json({ languages: { ru: {}, en: {}, it: {} } });
		}

		// Читаем SEO данные из основных файлов локализации
		for (const lang of languagesList) {
			languages[lang] = {
				title: '',
				description: '',
				keywords: '',
				ogTitle: '',
				ogDescription: '',
				ogImage: '',
				canonical: ''
			};

			// Ищем данные в namespace файлах
			for (const namespace of namespaces) {
				const filePath = path.join(localesBase, lang, `${namespace}.json`);
				if (fs.existsSync(filePath)) {
					try {
						const content = fs.readFileSync(filePath, 'utf-8');
						const jsonContent = JSON.parse(content);
						
						// Извлекаем title и description из файла локализации
						if (jsonContent.title && !languages[lang].title) {
							languages[lang].title = jsonContent.title;
						}
						if (jsonContent.description && !languages[lang].description) {
							languages[lang].description = jsonContent.description;
						}
						if (jsonContent.keywords && !languages[lang].keywords) {
							languages[lang].keywords = jsonContent.keywords;
						}
						if (jsonContent.ogTitle && !languages[lang].ogTitle) {
							languages[lang].ogTitle = jsonContent.ogTitle;
						}
						if (jsonContent.ogDescription && !languages[lang].ogDescription) {
							languages[lang].ogDescription = jsonContent.ogDescription;
						}
						if (jsonContent.ogImage && !languages[lang].ogImage) {
							languages[lang].ogImage = jsonContent.ogImage;
						}
						if (jsonContent.canonical && !languages[lang].canonical) {
							languages[lang].canonical = jsonContent.canonical;
						}
					} catch (e) {
						console.error(`Ошибка чтения файла ${filePath}:`, e.message);
					}
				}
			}
		}

		return res.json({ languages });
	} catch (err) {
		console.error('Ошибка при получении SEO данных страницы:', err.message);
		res.status(500).json({ error: 'Ошибка получения SEO данных страницы' });
	}
});

// Сохранение SEO данных для конкретной страницы
app.put('/api/pages/:pageId/seo', async (req, res) => {
	if (!req.session.user) {
		return res.status(401).json({ error: 'Не авторизован' });
	}
	try {
		const { pageId } = req.params;
		const { languages } = req.body;
		if (!languages || typeof languages !== 'object') {
			return res.status(400).json({ error: 'Ожидаются SEO данные в формате { languages: { ru, en, it } }' });
		}

		// Маппинг страниц к их namespace (используем существующий)
		const pageNamespaces = {
			'home': ['home/HomeStart', 'home/Calculator', 'home/Guarantees'],
			'about-us': ['AboutUs'],
			'our-works': ['OurWorks'],
			'contacts': ['Contacts'],
			'reviews': ['Reviews'],
			'turnkey-renovation': ['turnkey_renovation/TurnkeyRenovation'],
			'designer-renovation': ['turnkey_renovation/DesignerRenovation'],
			'exclusive-renovation': ['turnkey_renovation/ExclusiveRenovation'],
			'studio': ['turnkey_renovation/Studio'],
			'two-room-apartment': ['turnkey_renovation/TworoomApartment'],
			'three-room-apartment': ['turnkey_renovation/ThreeroomApartment'],
			'four-room-apartment': ['turnkey_renovation/FourroomApartment'],
			'two-story-apartment': ['turnkey_renovation/TwolevelApartment'],
			'room-renovation': ['room_renovation/RoomRenovation'],
			'living-room': ['room_renovation/LivingRoom'],
			'bedroom': ['room_renovation/Bedroom'],
			'children-room': ['room_renovation/ChildrenRoomRenovation'],
			'corridor': ['room_renovation/Corridor'],
			'kitchen': ['room_renovation/Kitchen'],
			'bathroom': ['room_renovation/Bathroom'],
			'stairs': ['room_renovation/Stairs'],
			'systems': ['systems/Systems'],
			'electrical-system': ['systems/ElectricalSystem'],
			'gas-system': ['systems/GasSystem'],
			'floor-heating': ['systems/FloorHeating'],
			'sewage': ['systems/Sewage'],
			'climate-control': ['systems/ClimateControl'],
			'commercial-premises': ['commercial_premises/CommercialPremises'],
			'business-center': ['commercial_premises/BusinessCenter'],
			'restaurant': ['commercial_premises/Restaurant'],
			'commercial-premises-renovation': ['commercial_premises/CommercialSpaces'],
			'office': ['commercial_premises/Ofice'],
			'warehouse': ['commercial_premises/Warehouse'],
			'fitness-club': ['commercial_premises/FitnessClub'],
			'hotel': ['commercial_premises/Hotel'],
			'services': ['home/Services'], // Временно используем Services.json пока нет servises
			'turnkey-renovation-services': ['turnkey_renovation/TurnkeyRenovation'], // Временно
			'room-renovation-services': ['room_renovation/RoomRenovation'], // Временно
			'commercial-premises-services': ['commercial_premises/CommercialPremises'], // Временно
			'systems-services': ['systems/Systems'] // Временно
		};

		const namespaces = pageNamespaces[pageId];
		if (!namespaces) {
			return res.status(400).json({ error: 'Неизвестная страница' });
		}

		// Бэкап
		const backupDir = path.join(__dirname, '../backups/seo');
		if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
		const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
		const backupFileName = `seo_${pageId}_${timestamp}.json`;
		const backupPath = path.join(backupDir, backupFileName);
		fs.writeFileSync(backupPath, JSON.stringify({ pageId, timestamp: new Date().toISOString(), languages }, null, 2), 'utf-8');

		// Запись в основные файлы локализации
		const localesBase = path.join(__dirname, '../frontend/public/locales');
		for (const lang of ['ru', 'en', 'it']) {
			const seoData = languages[lang] || {};
			
			for (const namespace of namespaces) {
				const filePath = path.join(localesBase, lang, `${namespace}.json`);
				if (fs.existsSync(filePath)) {
					try {
						const content = fs.readFileSync(filePath, 'utf-8');
						const jsonContent = JSON.parse(content);
						
						// Обновляем SEO поля в файле локализации
						if (seoData.title) jsonContent.title = seoData.title;
						if (seoData.description) jsonContent.description = seoData.description;
						if (seoData.keywords) jsonContent.keywords = seoData.keywords;
						if (seoData.ogTitle) jsonContent.ogTitle = seoData.ogTitle;
						if (seoData.ogDescription) jsonContent.ogDescription = seoData.ogDescription;
						if (seoData.ogImage) jsonContent.ogImage = seoData.ogImage;
						if (seoData.canonical) jsonContent.canonical = seoData.canonical;
						
						fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 2), 'utf-8');
					} catch (e) {
						console.error(`Ошибка записи в файл ${filePath}:`, e.message);
					}
				}
			}
		}

		return res.json({ success: true, backupPath: `seo/${backupFileName}` });
	} catch (err) {
		console.error('Ошибка при сохранении SEO данных:', err.message);
		res.status(500).json({ error: 'Ошибка сохранения SEO данных' });
	}
});

// Генерация sitemap.xml
app.get('/sitemap.xml', async (req, res) => {
  try {
    const sitemapConfigDir = path.join(__dirname, '../frontend/public/sitemap-config');
    const baseUrl = 'https://evohome.it'; // Замените на ваш домен
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Список всех страниц
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about-us', priority: '0.8', changefreq: 'weekly' },
      { url: '/our-works', priority: '0.8', changefreq: 'weekly' },
      { url: '/contacts', priority: '0.7', changefreq: 'monthly' },
      { url: '/reviews', priority: '0.7', changefreq: 'weekly' },
      { url: '/turnkey-renovation', priority: '0.9', changefreq: 'weekly' },
      { url: '/designer-renovation', priority: '0.9', changefreq: 'weekly' },
      { url: '/exclusive-renovation', priority: '0.9', changefreq: 'weekly' },
      { url: '/studio', priority: '0.8', changefreq: 'weekly' },
      { url: '/two-room-apartment', priority: '0.8', changefreq: 'weekly' },
      { url: '/three-room-apartment', priority: '0.8', changefreq: 'weekly' },
      { url: '/four-room-apartment', priority: '0.8', changefreq: 'weekly' },
      { url: '/two-story-apartment', priority: '0.8', changefreq: 'weekly' },
      { url: '/room-renovation', priority: '0.9', changefreq: 'weekly' },
      { url: '/living-room', priority: '0.8', changefreq: 'weekly' },
      { url: '/bedroom', priority: '0.8', changefreq: 'weekly' },
      { url: '/children-room', priority: '0.8', changefreq: 'weekly' },
      { url: '/corridor', priority: '0.8', changefreq: 'weekly' },
      { url: '/kitchen', priority: '0.8', changefreq: 'weekly' },
      { url: '/bathroom', priority: '0.8', changefreq: 'weekly' },
      { url: '/stairs', priority: '0.8', changefreq: 'weekly' },
      { url: '/systems', priority: '0.8', changefreq: 'weekly' },
      { url: '/electrical-system', priority: '0.8', changefreq: 'weekly' },
      { url: '/gas-system', priority: '0.8', changefreq: 'weekly' },
      { url: '/floor-heating', priority: '0.8', changefreq: 'weekly' },
      { url: '/sewage', priority: '0.8', changefreq: 'weekly' },
      { url: '/climate-control', priority: '0.8', changefreq: 'weekly' },
      { url: '/commercial-premises', priority: '0.8', changefreq: 'weekly' },
      { url: '/business-center', priority: '0.8', changefreq: 'weekly' },
      { url: '/restaurant', priority: '0.8', changefreq: 'weekly' },
      { url: '/commercial-premises-renovation', priority: '0.8', changefreq: 'weekly' },
      { url: '/office', priority: '0.8', changefreq: 'weekly' },
      { url: '/warehouse', priority: '0.8', changefreq: 'weekly' },
      { url: '/fitness-club', priority: '0.8', changefreq: 'weekly' },
      { url: '/hotel', priority: '0.8', changefreq: 'weekly' },
      { url: '/services', priority: '0.8', changefreq: 'weekly' },
      { url: '/turnkey-renovation-services', priority: '0.8', changefreq: 'weekly' },
      { url: '/room-renovation-services', priority: '0.8', changefreq: 'weekly' },
      { url: '/commercial-premises-services', priority: '0.8', changefreq: 'weekly' },
      { url: '/systems-services', priority: '0.8', changefreq: 'weekly' }
    ];
    
    for (const page of pages) {
      // Проверяем, включена ли страница в sitemap
      const configFile = path.join(sitemapConfigDir, `${page.url.replace(/\//g, '').replace(/-/g, '') || 'home'}.json`);
      let includeInSitemap = true;
      
      if (fs.existsSync(configFile)) {
        try {
          const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
          includeInSitemap = config.sitemap !== false;
        } catch (e) {
          console.error('Ошибка чтения конфигурации sitemap:', e.message);
        }
      }
      
      if (includeInSitemap) {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
        sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
        sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
        sitemap += `    <priority>${page.priority}</priority>\n`;
        sitemap += `  </url>\n`;
      }
    }
    
    sitemap += '</urlset>';
    
    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Ошибка генерации sitemap:', error);
    res.status(500).send('Ошибка генерации sitemap');
  }
});

// Список бэкапов SEO
app.get('/api/seo/backups', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const dir = path.join(__dirname, '../backups/seo');
    if (!fs.existsSync(dir)) return res.json([]);
    const files = fs.readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => {
        const full = path.join(dir, f);
        const stat = fs.statSync(full);
        const m = f.match(/^seo_(.+?)_([0-9T-]+)\.json$/);
        return {
          file: f,
          pageId: m ? m[1] : '',
          timestamp: m ? m[2].replace(/-/g, ':') : stat.mtime.toISOString(),
          size: stat.size,
          path: `seo/${f}`
        };
      })
      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
    res.json(files);
  } catch (err) {
    console.error('Ошибка при чтении бэкапов SEO:', err.message);
    res.status(500).json({ error: 'Ошибка чтения бэкапов SEO' });
  }
});

// API для работы с alt текстом изображений
app.post('/api/images/alt', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { imagePath, altText, pageId } = req.body;
    
    if (!imagePath || !pageId) {
      return res.status(400).json({ error: 'Необходимы imagePath и pageId' });
    }

    // Создаем директорию для alt текстов если её нет
    const altDir = path.join(__dirname, '../frontend/public/alt-texts');
    if (!fs.existsSync(altDir)) {
      fs.mkdirSync(altDir, { recursive: true });
    }

    // Сохраняем alt текст в JSON файл
    const altFilePath = path.join(altDir, `${pageId}_alt.json`);
    let altData = {};
    
    if (fs.existsSync(altFilePath)) {
      altData = JSON.parse(fs.readFileSync(altFilePath, 'utf-8'));
    }
    
    altData[imagePath] = altText;
    fs.writeFileSync(altFilePath, JSON.stringify(altData, null, 2), 'utf-8');

    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/alt-texts');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `alt_${pageId}_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify({ pageId, imagePath, altText, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    res.json({ success: true, backupPath: `alt-texts/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении alt текста:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения alt текста' });
  }
});

// API для работы с JSON-LD
app.post('/api/pages/:pageId/jsonld', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    const { jsonLd } = req.body;

    if (!jsonLd) {
      return res.status(400).json({ error: 'Необходим JSON-LD код' });
    }

    // Создаем директорию для JSON-LD если её нет
    const jsonLdDir = path.join(__dirname, '../frontend/public/jsonld');
    if (!fs.existsSync(jsonLdDir)) {
      fs.mkdirSync(jsonLdDir, { recursive: true });
    }

    // Сохраняем JSON-LD в файл
    const jsonLdFilePath = path.join(jsonLdDir, `${pageId}.json`);
    fs.writeFileSync(jsonLdFilePath, JSON.stringify({ jsonLd, pageId, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/jsonld');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `jsonld_${pageId}_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify({ pageId, jsonLd, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    res.json({ success: true, backupPath: `jsonld/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении JSON-LD:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения JSON-LD' });
  }
});

// API для работы с пользовательским HTML
app.post('/api/pages/:pageId/html', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    const { customHtml } = req.body;

    if (!customHtml) {
      return res.status(400).json({ error: 'Необходим HTML код' });
    }

    // Создаем директорию для HTML если её нет
    const htmlDir = path.join(__dirname, '../frontend/public/custom-html');
    if (!fs.existsSync(htmlDir)) {
      fs.mkdirSync(htmlDir, { recursive: true });
    }

    // Сохраняем HTML в файл
    const htmlFilePath = path.join(htmlDir, `${pageId}.html`);
    fs.writeFileSync(htmlFilePath, customHtml, 'utf-8');

    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/html');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `html_${pageId}_${timestamp}.html`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, customHtml, 'utf-8');

    res.json({ success: true, backupPath: `html/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении HTML:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения HTML' });
  }
});

// API для работы с robots.txt
app.post('/api/pages/:pageId/robots', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    const { robots } = req.body;

    if (!robots) {
      return res.status(400).json({ error: 'Необходимы robots директивы' });
    }

    // Создаем директорию для robots если её нет
    const robotsDir = path.join(__dirname, '../frontend/public/robots');
    if (!fs.existsSync(robotsDir)) {
      fs.mkdirSync(robotsDir, { recursive: true });
    }

    // Сохраняем robots в файл
    const robotsFilePath = path.join(robotsDir, `${pageId}.txt`);
    fs.writeFileSync(robotsFilePath, robots, 'utf-8');

    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/robots');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `robots_${pageId}_${timestamp}.txt`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, robots, 'utf-8');

    res.json({ success: true, backupPath: `robots/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении robots:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения robots' });
  }
});

// API для работы с sitemap
app.post('/api/pages/:pageId/sitemap', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    const { sitemap } = req.body;

    if (typeof sitemap !== 'boolean') {
      return res.status(400).json({ error: 'Необходимо булево значение для sitemap' });
    }

    // Создаем директорию для sitemap если её нет
    const sitemapDir = path.join(__dirname, '../frontend/public/sitemap-config');
    if (!fs.existsSync(sitemapDir)) {
      fs.mkdirSync(sitemapDir, { recursive: true });
    }

    // Сохраняем sitemap конфигурацию в файл
    const sitemapFilePath = path.join(sitemapDir, `${pageId}.json`);
    fs.writeFileSync(sitemapFilePath, JSON.stringify({ pageId, sitemap, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/sitemap');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `sitemap_${pageId}_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify({ pageId, sitemap, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    res.json({ success: true, backupPath: `sitemap/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении sitemap:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения sitemap' });
  }
});

// API для получения HTML кода (публичный доступ)
app.get('/api/pages/:pageId/html', async (req, res) => {
  try {
    const { pageId } = req.params;
    
    // Путь к HTML файлу
    const htmlFilePath = path.join(__dirname, '../frontend/public/custom-html', `${pageId}.html`);
    
    if (fs.existsSync(htmlFilePath)) {
      const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(htmlContent);
    } else {
      res.status(404).json({ error: 'HTML код не найден' });
    }
  } catch (err) {
    console.error('Ошибка при получении HTML:', err.message);
    res.status(500).json({ error: 'Ошибка получения HTML' });
  }
});

// API для удаления HTML кода
app.delete('/api/pages/:pageId/html', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    
    // Путь к HTML файлу
    const htmlFilePath = path.join(__dirname, '../frontend/public/custom-html', `${pageId}.html`);
    
    if (fs.existsSync(htmlFilePath)) {
      // Создаем бэкап перед удалением
      const backupDir = path.join(__dirname, '../backups/html');
      if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupFileName = `html_${pageId}_${timestamp}.html`;
      const backupPath = path.join(backupDir, backupFileName);
      fs.copyFileSync(htmlFilePath, backupPath);
      
      // Удаляем файл
      fs.unlinkSync(htmlFilePath);
      
      res.json({ success: true, backupPath: `html/${backupFileName}` });
    } else {
      res.status(404).json({ error: 'HTML файл не найден' });
    }
  } catch (err) {
    console.error('Ошибка при удалении HTML:', err.message);
    res.status(500).json({ error: 'Ошибка удаления HTML' });
  }
});

// API для сохранения расположения HTML блока
app.post('/api/pages/:pageId/html-position', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    const { position } = req.body;

    if (!position || !['top', 'bottom', 'after-header', 'before-footer'].includes(position)) {
      return res.status(400).json({ error: 'Неверная позиция. Допустимые значения: top, bottom, after-header, before-footer' });
    }

    // Создаем директорию для конфигурации если её нет
    const configDir = path.join(__dirname, '../frontend/public/html-config');
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    // Сохраняем конфигурацию расположения
    const configFilePath = path.join(configDir, `${pageId}.json`);
    fs.writeFileSync(configFilePath, JSON.stringify({ pageId, position, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/html-config');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `html-config_${pageId}_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify({ pageId, position, timestamp: new Date().toISOString() }, null, 2), 'utf-8');

    res.json({ success: true, backupPath: `html-config/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при сохранении расположения HTML:', err.message);
    res.status(500).json({ error: 'Ошибка сохранения расположения HTML' });
  }
});

// API для получения расположения HTML блока
app.get('/api/pages/:pageId/html-position', async (req, res) => {
  try {
    const { pageId } = req.params;
    
    // Путь к файлу конфигурации
    const configFilePath = path.join(__dirname, '../frontend/public/html-config', `${pageId}.json`);
    
    if (fs.existsSync(configFilePath)) {
      const configContent = fs.readFileSync(configFilePath, 'utf-8');
      const config = JSON.parse(configContent);
      res.json(config);
    } else {
      res.json({ pageId, position: 'top' }); // По умолчанию вверху
    }
  } catch (err) {
    console.error('Ошибка при получении расположения HTML:', err.message);
    res.status(500).json({ error: 'Ошибка получения расположения HTML' });
  }
});

// API для загрузки всех данных страницы
app.get('/api/pages/:pageId/data', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { pageId } = req.params;
    const data = {};

    // Загружаем alt тексты
    const altFilePath = path.join(__dirname, '../frontend/public/alt-texts', `${pageId}_alt.json`);
    if (fs.existsSync(altFilePath)) {
      data.altTexts = JSON.parse(fs.readFileSync(altFilePath, 'utf-8'));
    }

    // Загружаем JSON-LD
    const jsonLdFilePath = path.join(__dirname, '../frontend/public/jsonld', `${pageId}.json`);
    if (fs.existsSync(jsonLdFilePath)) {
      const jsonLdData = JSON.parse(fs.readFileSync(jsonLdFilePath, 'utf-8'));
      data.jsonLd = jsonLdData.jsonLd;
    }

    // Загружаем HTML
    const htmlFilePath = path.join(__dirname, '../frontend/public/custom-html', `${pageId}.html`);
    if (fs.existsSync(htmlFilePath)) {
      data.customHtml = fs.readFileSync(htmlFilePath, 'utf-8');
    }

    // Загружаем robots
    const robotsFilePath = path.join(__dirname, '../frontend/public/robots', `${pageId}.txt`);
    if (fs.existsSync(robotsFilePath)) {
      data.robots = fs.readFileSync(robotsFilePath, 'utf-8');
    }

    // Загружаем sitemap
    const sitemapFilePath = path.join(__dirname, '../frontend/public/sitemap-config', `${pageId}.json`);
    if (fs.existsSync(sitemapFilePath)) {
      const sitemapData = JSON.parse(fs.readFileSync(sitemapFilePath, 'utf-8'));
      data.sitemap = sitemapData.sitemap;
    }

    res.json(data);
  } catch (err) {
    console.error('Ошибка при загрузке данных страницы:', err.message);
    res.status(500).json({ error: 'Ошибка загрузки данных страницы' });
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