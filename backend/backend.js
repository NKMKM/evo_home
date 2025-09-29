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
import { format } from 'date-fns';
import BackupManager from './backupManager.js';

// Функция для форматирования размера файла
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Функция для проверки использования изображения на странице
function checkImageUsageOnPage(imagePath, pageId) {
  const frontendDir = path.join(__dirname, '../frontend/dist');
  
  console.log(`Проверяем изображение: ${imagePath} для страницы: ${pageId}`);
  
  // Белый список директорий/файлов для каждой страницы относительно assets/images
  const allowMap = {
    'home': {
      dirs: [],
      files: [
        'images/design.jpg', 'images/discount.jpg', 'images/architector.jpg', 'images/founder_main.png',
        'images/home_start_bg.jpg', 'images/calculator_bg_img.jpg', 'images/reviews_bg.jpg', 'images/review_form_bg.jpg',
        'images/footer_bg.jpg', 'images/leftside_black_decoration.png', 'images/leftside_yellow_decoration.png',
        'images/rightside_black_decoration.png', 'images/rightside_yellow_decoration.png'
      ]
    },
    'about-us': { dirs: ['images/team_images/','images/about_us_achievments/'], files: ['images/founder_main.png'] },
    'our-works': { dirs: ['images/our_works_gallery/'] },
    'contacts': { files: ['images/contact_form_bg.jpg'] },
    'reviews': { dirs: ['images/reviews_images/','images/reviews_page_images/'], files: ['images/reviews_bg.jpg'] },
    'systems': { dirs: ['images/systems/'] },
    'room-renovation': { dirs: ['images/room_renovation/'] },
    'turnkey-renovation': { dirs: ['images/turnkey_renovation/'] },
    'commercial-premises': { dirs: ['images/commercial_premises/'] },
    // services pages map to respective roots
    'services': { dirs: ['images/services_images/'] },
    'turnkey-renovation-services': { dirs: ['images/turnkey_renovation/'] },
    'room-renovation-services': { dirs: ['images/room_renovation/'] },
    'commercial-premises-services': { dirs: ['images/commercial_premises/'] },
    'systems-services': { dirs: ['images/systems/'] },
    // specific subpages (prefix dir match is enough)
    'living-room': { dirs: ['images/room_renovation/living_room/'] },
    'bedroom': { dirs: ['images/room_renovation/bedroom/'] },
    'children-room': { dirs: ['images/room_renovation/children_room/'] },
    'corridor': { dirs: ['images/room_renovation/corridor/'] },
    'kitchen': { dirs: ['images/room_renovation/kitchen/'] },
    'bathroom': { dirs: ['images/room_renovation/bathroom/'] },
    'stairs': { dirs: ['images/room_renovation/stairs/'] },
    'electrical-system': { dirs: ['images/systems/electrical_systems/'] },
    'gas-system': { dirs: ['images/systems/gas_systems/'] },
    'floor-heating': { dirs: ['images/systems/floor_heating/'] },
    'sewage': { dirs: ['images/systems/sewage/'] },
    'climate-control': { dirs: ['images/systems/climate_control/'] },
    'business-center': { dirs: ['images/commercial_premises/business_center/'] },
    'restaurant': { dirs: ['images/commercial_premises/restaurant/'] },
    'commercial-premises-renovation': { dirs: ['images/commercial_premises/commercial_premises_renovation/'] },
    'office': { dirs: ['images/commercial_premises/office/'] },
    'warehouse': { dirs: ['images/commercial_premises/warehouse/'] },
    'fitness-club': { dirs: ['images/commercial_premises/fitness_club/'] },
    'hotel': { dirs: ['images/commercial_premises/hotel/'] },
    'studio': { dirs: ['images/turnkey_renovation/studio/'] },
    'two-room-apartment': { dirs: ['images/turnkey_renovation/tworoom_apartment/'] },
    'three-room-apartment': { dirs: ['images/turnkey_renovation/threeroom_apartment/'] },
    'four-room-apartment': { dirs: ['images/turnkey_renovation/fourroom_apartment/'] },
    'two-story-apartment': { dirs: ['images/turnkey_renovation/twostory_apartment/','images/turnkey_renovation/twolevel_apartment/'] },
    'exclusive-renovation': { dirs: ['images/turnkey_renovation/exclusive_renovation/'] },
    'designer-renovation': { dirs: ['images/turnkey_renovation/designer_renovation/'] },
  };
  
  // Маппинг страниц к их файлам (только основные файлы страниц)
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
  if (!pageFileList) {
    console.log(`Страница ${pageId} не найдена в списке`);
    return false;
  }
  
  const imageName = path.basename(imagePath);
  const imageNameWithoutExt = path.basename(imagePath, path.extname(imagePath));
  const imageRelativePath = path.relative(path.join(frontendDir, 'assets'), imagePath).replace(/\\/g, '/');
  
  console.log(`Ищем изображение: ${imageName} (${imageNameWithoutExt}) в путях: ${imageRelativePath}`);
  
  // Применяем строгий whitelist по директориям/файлам
  const allow = allowMap[pageId];
  if (allow) {
    const rel = imageRelativePath.toLowerCase();
    if (allow.files && allow.files.some(f => rel === f.toLowerCase())) {
      return true;
    }
    if (allow.dirs && allow.dirs.some(d => rel.startsWith(d.toLowerCase()))) {
      return true;
    }
  }
  
  // Функция для проверки содержимого файла
  function checkFileContent(filePath) {
    if (!fs.existsSync(filePath)) {
      console.log(`Файл не существует: ${filePath}`);
      return false;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Проверяем импорты (import statements) - более точный поиск
      const importPatterns = [
        new RegExp(`import\\s+\\w+\\s+from\\s+['"][^'"]*${imageNameWithoutExt}[^'"]*['"]`, 'i'),
        new RegExp(`import\\s+\\w+\\s+from\\s+['"][^'"]*${imageName}[^'"]*['"]`, 'i'),
        new RegExp(`import\\s+\\w+\\s+from\\s+['"][^'"]*${imageRelativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*['"]`, 'i')
      ];
      
      for (const pattern of importPatterns) {
        if (pattern.test(content)) {
          console.log(`Найдено в импорте: ${filePath}`);
          return true;
        }
      }
      
      // Проверяем прямые упоминания в src атрибутах
      const srcPatterns = [
        new RegExp(`src\\s*=\\s*['"][^'"]*${imageNameWithoutExt}[^'"]*['"]`, 'i'),
        new RegExp(`src\\s*=\\s*['"][^'"]*${imageName}[^'"]*['"]`, 'i'),
        new RegExp(`${imageRelativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i')
      ];
      
      for (const pattern of srcPatterns) {
        if (pattern.test(content)) {
          console.log(`Найдено в src атрибуте: ${filePath}`);
          return true;
        }
      }
      
      return false;
    } catch (e) {
      console.error('Ошибка чтения файла при проверке изображения:', e.message);
      return false;
    }
  }
  
  // Проверяем только файлы страниц (избегаем переизбытка совпадений в общих компонентах)
  for (const relFile of pageFileList) {
    const filePath = path.join(frontendDir, 'pages', relFile);
    if (checkFileContent(filePath)) {
      return true;
    }
  }
  
  return false;
}

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
  ssl: { rejectUnauthorized: false }, // Для продакшена
  //  лучше использовать сертификат
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
    const frontendAssetsPath = path.join(__dirname, '../frontend/dist/assets');
    
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
              fullPath: `frontend/dist/assets/${relativeItemPath}`,
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
app.use('/frontend-assets', express.static(path.join(__dirname, '../frontend/dist/assets')));

// Статические файлы - доступ к изображениям через /images/
app.use('/images', express.static(path.join(__dirname, '../frontend/dist/assets/images')));

// Serve built frontend dist (production static files). This is for serving the built site,
// while backend still reads/writes source files under frontend/dist or frontend/public for editing.
const frontendDist = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  // SPA fallback for frontend
  app.get(['/', '/index.html'], (req, res, next) => {
    try {
      res.sendFile(path.join(frontendDist, 'index.html'));
    } catch (e) {
      next();
    }
  });
}

// Serve admin panel build under /admin if available
const adminDist = path.join(__dirname, '../admin_panel/dist');
if (fs.existsSync(adminDist)) {
  app.use('/admin', express.static(adminDist));
  // SPA fallback for admin
  app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(adminDist, 'index.html'));
  });
}

// Создание бэкапа изображения перед заменой
app.post('/api/images/backup', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }

  try {
    const { imagePath } = req.body;
    const originalPath = path.join(__dirname, '../frontend/dist/assets', imagePath);
    
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

    const originalPath = path.join(__dirname, '../frontend/dist/assets', imagePath);

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
    const srcDir = path.join(__dirname, '../frontend/dist');
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

// Получение конкретного изображения
app.get(/^\/api\/images\/(.*)$/, async (req, res) => {
  try {
    const imagePath = req.params[0]; // Получаем весь путь после /api/images/
    const fullPath = path.join(__dirname, '../frontend/dist/assets', imagePath);
    
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ error: 'Изображение не найдено' });
    }
    
    // Определяем MIME тип
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Кэшируем на год
    
    const imageBuffer = fs.readFileSync(fullPath);
    res.send(imageBuffer);
  } catch (error) {
    console.error('Ошибка при получении изображения:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Получение изображений для конкретной страницы
app.get('/api/pages/:pageId/images', async (req, res) => {
  // Простая проверка авторизации - можно расширить
  if (!req.session || !req.session.user) {
    console.log('⚠️ Попытка доступа без авторизации к изображениям страницы:', req.params.pageId);
    // Для тестирования разрешаем доступ, но логируем
    // return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const { pageId } = req.params;
    const pagesPath = path.join(__dirname, 'pages.json');
    
    if (!fs.existsSync(pagesPath)) {
      return res.json([]);
    }
    
    const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
    const page = pagesData.find(p => p.id === pageId);
    
    if (!page) {
      return res.json([]);
    }
 
    // Добавляем информацию о размере файла для каждого изображения из pages.json
    const imagesWithSize = page.images.map(image => {
      // Убираем префикс "images/" из src, так как статика раздается с /images/
      const cleanSrc = image.src.startsWith('images/') ? image.src.substring(7) : image.src;
      const fullPath = path.join(__dirname, '../frontend/dist/assets/images', cleanSrc);
      let size = 'Unknown';
      
      if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        size = formatFileSize(stat.size);
      }
      
      return {
        ...image,
        src: cleanSrc, // Возвращаем очищенный src
        size,
        fullPath: fullPath,
        exists: fs.existsSync(fullPath)
      };
    });

    // Если у страницы в pages.json нет изображений или они не существуют на диске,
    // пытаемся просканировать исходники фронтенда (pages + их импортируемые компоненты)
    // и собрать реальные используемые изображения.
    //
    // Изменение: заменил статический pageFiles-мэппинг на динамический обход папки
    // frontend/dist/pages. Для каждой страницы скрипт парсит импорты и встраиваемые
    // строки вида "/assets/images/..." рекурсивно, собирая все ссылки на изображения.
    // Это снимает зависимость от ручного allowlist'a и покрывает случаи, когда
    // изображения подключены через общие компоненты.
    async function scanFrontendForPageImages(targetPageId) {
      try {
        const frontendSrc = path.join(__dirname, '../frontend/dist');
        const pagesDir = path.join(frontendSrc, 'pages');
        const assetsImagesDir = path.join(frontendSrc, 'assets', 'images');
        const exts = new Set(['.js', '.jsx', '.ts', '.tsx']);

        // Найдём все файлы страниц
        function walkPages(dir) {
          const out = [];
          if (!fs.existsSync(dir)) return out;
          for (const entry of fs.readdirSync(dir)) {
            const full = path.join(dir, entry);
            const stat = fs.statSync(full);
            if (stat.isDirectory()) out.push(...walkPages(full));
            else if (stat.isFile() && exts.has(path.extname(entry))) {
              out.push(full);
            }
          }
          return out;
        }

        // Попытка разрешить относительный импорт в файловой системе
        function resolveImport(fromFile, spec) {
          try {
            if (spec.startsWith('.')) {
              const baseDir = path.dirname(fromFile);
              const full = path.resolve(baseDir, spec);
              const candidates = [
                full,
                `${full}.jsx`,
                `${full}.tsx`,
                `${full}.js`,
                `${full}.ts`,
                path.join(full, 'index.jsx'),
                path.join(full, 'index.js'),
                path.join(full, 'index.tsx')
              ];
              for (const c of candidates) if (fs.existsSync(c)) return c;
            }
            // Если импорт прямо ссылается на assets (например: '../../assets/images/...')
            if (spec.includes('/assets/')) return spec;
          } catch (e) {
            // ignore
          }
          return null;
        }

        // Нормализует путь импортируемого ресурса и извлекает относительный путь от assets/
        function extractRelFromAssets(candidate) {
          if (!candidate) return null;
          const normalized = candidate.replace(/\\/g, '/');
          const idx = normalized.indexOf('/assets/');
          if (idx !== -1) {
            const relFromAssets = normalized.slice(idx + '/assets/'.length);
            // Только картинки в assets/images
            if (/^images\//i.test(relFromAssets)) return relFromAssets.replace(/^images\//i, 'images/');
          }
          // Если передали абсолютный путь внутри frontend/dist/assets/images
          if (candidate.startsWith(frontendSrc)) {
            const parts = path.relative(path.join(frontendSrc, 'assets'), candidate).replace(/\\/g, '/');
            if (parts && parts.startsWith('images/')) return parts;
          }
          return null;
        }

        // Парсер одного entry (страницы) — рекурсивно обходит её импорты
        function parseEntry(entryPath) {
          const images = new Set();
          const visited = new Set();

          function parseFile(fp) {
            if (!fp || visited.has(fp)) return;
            visited.add(fp);
            if (!fs.existsSync(fp)) return;
            const content = fs.readFileSync(fp, 'utf-8');

            // Соберём карту импортов вида: identifier -> spec (только default imports)
            const importDefaultRegex = /import\s+([A-Za-z0-9_\$]+)\s+from\s+['"]([^'\"]+)['"]/g;
            const importMap = {};
            let im;
            while ((im = importDefaultRegex.exec(content)) !== null) {
              importMap[im[1]] = im[2];
            }

            // 0) require('...') повсюду
            const requireRegex = /require\(['"]([^'\"]+)['"]\)/g;
            let mr;
            while ((mr = requireRegex.exec(content)) !== null) {
              try {
                const resolved = resolveImport(fp, mr[1]) || mr[1];
                const rel = extractRelFromAssets(resolved);
                if (rel) images.add(rel);
              } catch (e) { }
            }

            // 1) Явные вхождения '/assets/images/...'
            const inlineRegex = /\/assets\/images\/[A-Za-z0-9_\-./]+/g;
            let m;
            while ((m = inlineRegex.exec(content)) !== null) {
              const rel = m[0].replace(/^\/assets\//, '');
              if (/^images\//i.test(rel)) images.add(rel);
            }

            // 2) <img src="..."> и <img src='...'>
            const imgSrcAttrRegex = /<img[^>]+src=["']([^"']+)["']/g;
            while ((m = imgSrcAttrRegex.exec(content)) !== null) {
              const spec = m[1];
              try {
                const resolved = resolveImport(fp, spec) || spec;
                const rel = extractRelFromAssets(resolved);
                if (rel) images.add(rel);
              } catch (e) { }
            }

            // 3) <img src={someIdentifier} — попробуем сопоставить идентификатор с импортами
            const imgSrcExprRegex = /<img[^>]+src=\{\s*([A-Za-z0-9_\$]+)\s*\}/g;
            while ((m = imgSrcExprRegex.exec(content)) !== null) {
              const ident = m[1];
              const spec = importMap[ident];
              if (spec) {
                const resolved = resolveImport(fp, spec) || spec;
                const rel = extractRelFromAssets(resolved);
                if (rel) images.add(rel);
              }
            }

            // 4) import ... from '...' — если импорт указывает на изображение или assets — добавляем
            const importRegex = /import\s+[^'"\n]*from\s+['"]([^'\"]+)['"]/g;
            while ((m = importRegex.exec(content)) !== null) {
              const spec = m[1];
              if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(spec) || /\/assets\//i.test(spec)) {
                const resolved = resolveImport(fp, spec) || spec;
                const rel = extractRelFromAssets(resolved);
                if (rel) images.add(rel);
                continue;
              }
              const resolvedModule = resolveImport(fp, spec);
              if (resolvedModule && resolvedModule.startsWith(frontendSrc)) {
                parseFile(resolvedModule);
              }
            }
          }

          parseFile(entryPath);
          return Array.from(images);
        }

        // Соберём все файлы страниц
        const pageFiles = walkPages(pagesDir);

        // Создадим карту from relative page path -> images
        const pageMap = {};
        for (const abs of pageFiles) {
          const rel = path.relative(pagesDir, abs).replace(/\\/g, '/');
          pageMap[rel] = parseEntry(abs);
        }

        // Найдём соответствие targetPageId -> один или несколько файлов страниц
        function normalizeKey(s) {
          return s.toLowerCase().replace(/[^a-z0-9]/g, '');
        }

        const normalizedTarget = normalizeKey(targetPageId || '');
        const matchedFiles = Object.keys(pageMap).filter(rel => {
          const name = path.basename(rel, path.extname(rel));
          if (normalizeKey(name) === normalizedTarget) return true;
          // допустим совпадение по включению (двухчастные имена и т.д.)
          if (normalizeKey(rel).includes(normalizedTarget)) return true;
          return false;
        });

        const finalImages = new Set();
        if (matchedFiles.length > 0) {
          for (const f of matchedFiles) for (const img of pageMap[f]) finalImages.add(img);
        } else {
          // Попытка найти страницы по частичному совпадению имени
          for (const f of Object.keys(pageMap)) {
            if (normalizeKey(f).includes(normalizedTarget)) for (const img of pageMap[f]) finalImages.add(img);
          }
        }

        // Преобразуем в формат, совместимый с остальным кодом
        const result = [];
        for (const rel of finalImages) {
          const full = path.join(frontendSrc, 'assets', rel);
          if (fs.existsSync(full)) {
            const stat = fs.statSync(full);
            result.push({
              id: Buffer.from(rel).toString('base64'),
              name: path.basename(rel),
              path: rel,
              fullPath: full,
              size: formatFileSize(stat.size)
            });
          }
        }

        return result;
      } catch (e) {
        console.error('Ошибка при сканировании фронтенда для страницы:', e && e.message ? e.message : e);
        return [];
      }
    }

    // Выполняем сканирование в случае отсутствия данных или несоответствия
  const scanned = await scanFrontendForPageImages(pageId);

    // Если pages.json не содержит изображений — вернём найденные сканером
    if ((!imagesWithSize || imagesWithSize.length === 0) && scanned.length > 0) {
      // Преобразуем scanned в формат, совместимый с imagesWithSize
      const scannedMapped = scanned.map(s => ({ id: s.id, src: s.path, name: s.name, size: s.size, fullPath: s.fullPath, exists: true }));
      return res.json(scannedMapped);
    }

    // Иначе — дополним существующие записи найденными изображениями, чтобы счётчики совпадали
    if (scanned.length > 0) {
      const existingSrcs = new Set(imagesWithSize.map(i => i.src.replace(/^images\//, '')));
      for (const s of scanned) {
        if (!existingSrcs.has(s.path)) {
          imagesWithSize.push({ id: s.id, src: s.path, name: s.name, size: s.size, fullPath: s.fullPath, exists: true });
        }
      }
    }

    res.json(imagesWithSize);
  } catch (error) {
    console.error('Ошибка при получении изображений страницы:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Обновление изображения (alt, src)
app.put('/api/pages/:pageId/images/:imageId', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const { pageId, imageId } = req.params;
    const { alt, src, title, description } = req.body;
    
    const pagesPath = path.join(__dirname, 'pages.json');
    const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
    const pageIndex = pagesData.findIndex(p => p.id === pageId);
    
    if (pageIndex === -1) {
      return res.status(404).json({ error: 'Страница не найдена' });
    }
    
    const imageIndex = pagesData[pageIndex].images.findIndex(img => img.id === parseInt(imageId));
    if (imageIndex === -1) {
      return res.status(404).json({ error: 'Изображение не найдено' });
    }
    
    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/images');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `images_${pageId}_${imageId}_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify(pagesData, null, 2), 'utf-8');
    
    // Обновляем изображение
    if (alt !== undefined) pagesData[pageIndex].images[imageIndex].alt = alt;
    if (src !== undefined) pagesData[pageIndex].images[imageIndex].src = src;
    if (title !== undefined) pagesData[pageIndex].images[imageIndex].title = title;
    if (description !== undefined) pagesData[pageIndex].images[imageIndex].description = description;
    
    fs.writeFileSync(pagesPath, JSON.stringify(pagesData, null, 2), 'utf-8');
    
    res.json({ 
      success: true, 
      image: pagesData[pageIndex].images[imageIndex],
      backupPath: `images/${backupFileName}`
    });
  } catch (error) {
    console.error('Ошибка при обновлении изображения:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Добавление нового изображения
app.post('/api/pages/:pageId/images', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const { pageId } = req.params;
    const { src, alt, title, description } = req.body;
    
    if (!src || !alt) {
      return res.status(400).json({ error: 'src и alt обязательны' });
    }
    
    const pagesPath = path.join(__dirname, 'pages.json');
    const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
    const pageIndex = pagesData.findIndex(p => p.id === pageId);
    
    if (pageIndex === -1) {
      return res.status(404).json({ error: 'Страница не найдена' });
    }
    
    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/images');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `images_${pageId}_add_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify(pagesData, null, 2), 'utf-8');
    
    // Находим максимальный ID
    const maxId = Math.max(...pagesData[pageIndex].images.map(img => img.id), 0);
    const newImage = {
      id: maxId + 1,
      src,
      alt,
      title: title || '',
      description: description || ''
    };
    
    pagesData[pageIndex].images.push(newImage);
    fs.writeFileSync(pagesPath, JSON.stringify(pagesData, null, 2), 'utf-8');
    
    res.json({ 
      success: true, 
      image: newImage,
      backupPath: `images/${backupFileName}`
    });
  } catch (error) {
    console.error('Ошибка при добавлении изображения:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Удаление изображения
app.delete('/api/pages/:pageId/images/:imageId', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const { pageId, imageId } = req.params;
    
    const pagesPath = path.join(__dirname, 'pages.json');
    const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
    const pageIndex = pagesData.findIndex(p => p.id === pageId);
    
    if (pageIndex === -1) {
      return res.status(404).json({ error: 'Страница не найдена' });
    }
    
    const imageIndex = pagesData[pageIndex].images.findIndex(img => img.id === parseInt(imageId));
    if (imageIndex === -1) {
      return res.status(404).json({ error: 'Изображение не найдено' });
    }
    
    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/images');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `images_${pageId}_${imageId}_delete_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify(pagesData, null, 2), 'utf-8');
    
    const deletedImage = pagesData[pageIndex].images[imageIndex];
    pagesData[pageIndex].images.splice(imageIndex, 1);
    fs.writeFileSync(pagesPath, JSON.stringify(pagesData, null, 2), 'utf-8');
    
    res.json({ 
      success: true, 
      deletedImage,
      backupPath: `images/${backupFileName}`
    });
  } catch (error) {
    console.error('Ошибка при удалении изображения:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Список компонентов фронтенда как отдельных элементов (для админ-панели)
app.get('/api/components/list', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const frontendSrc = path.join(__dirname, '../frontend/dist');
    const componentsDir = path.join(frontendSrc, 'components');

    if (!fs.existsSync(componentsDir)) {
      return res.json([]);
    }

    function listComponentEntries(baseDir) {
      const results = [];
      const stack = ['']; // относительные пути от components/
      while (stack.length) {
        const rel = stack.pop();
        const current = path.join(baseDir, rel);
        const entries = fs.readdirSync(current, { withFileTypes: true });
        let addedFile = false;
        // Ищем index.* или любой jsx/tsx как точку входа
        for (const ext of ['.tsx', '.jsx', '.ts', '.js']) {
          const candidate = path.join(current, `index${ext}`);
          if (fs.existsSync(candidate)) {
            const relPath = path.join(rel, `index${ext}`).replace(/\\/g, '/');
            results.push({
              id: Buffer.from(relPath).toString('base64'),
              name: rel || path.basename(current),
              relPath
            });
            addedFile = true;
            break;
          }
        }
        if (addedFile) continue;
        // Ищем любой файл компонента
        const file = entries.find(e => e.isFile() && /(\.tsx|\.jsx)$/i.test(e.name));
        if (file) {
          const relPath = path.join(rel, file.name).replace(/\\/g, '/');
          results.push({
            id: Buffer.from(relPath).toString('base64'),
            name: rel ? `${rel}/${path.parse(file.name).name}` : path.parse(file.name).name,
            relPath
          });
          continue;
        }
        // Спускаемся в поддиректории (кроме ассетов)
        for (const entry of entries) {
          if (entry.isDirectory()) {
            const dirName = entry.name;
            if (dirName === 'icons' || dirName === 'images' || dirName === 'videos' || dirName === '__tests__') continue;
            stack.push(path.join(rel, dirName));
          }
        }
      }
      return results;
    }

    const components = listComponentEntries(componentsDir).map(c => ({
      id: `component-${c.id}`,
      name: c.name,
      url: `-`,
      relPath: c.relPath
    }));

    res.json(components);
  } catch (e) {
    console.error('Ошибка списка компонентов:', e.message);
    res.status(500).json({ error: 'Ошибка получения списка компонентов' });
  }
});

// Получение изображений для компонента (по id = base64(relPath) с префиксом component-)
app.get('/api/components/:componentId/images', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { componentId } = req.params;
    if (!componentId || !componentId.startsWith('component-')) {
      return res.status(400).json({ error: 'Некорректный componentId' });
    }
    const b64 = componentId.replace(/^component-/, '');
    let relPath;
    try {
      relPath = Buffer.from(b64, 'base64').toString('utf-8');
    } catch (e) {
      return res.status(400).json({ error: 'Некорректный идентификатор компонента' });
    }

    const frontendSrc = path.join(__dirname, '../frontend/dist');
    const componentsDir = path.join(frontendSrc, 'components');
    const assetsDir = path.join(frontendSrc, 'assets');

    const entryFile = path.join(componentsDir, relPath);
    if (!fs.existsSync(entryFile)) {
      return res.json([]);
    }

    const visitedFiles = new Set();
    const imageSet = new Set();

    function resolveImport(fromFile, importPath) {
      if (importPath.startsWith('.')) {
        const baseDir = path.dirname(fromFile);
        let full = path.resolve(baseDir, importPath);
        const candidates = [full, `${full}.jsx`, `${full}.tsx`, `${full}.js`, `${full}.ts`, path.join(full, 'index.jsx'), path.join(full, 'index.js')];
        for (const c of candidates) {
          if (fs.existsSync(c)) return c;
        }
        return null;
      }
      return null;
    }

    function addImageIfAssets(importPath) {
      const idx = importPath.replace(/\\/g, '/').indexOf('/assets/');
      if (idx !== -1) {
        const relFromAssets = importPath.replace(/\\/g, '/').slice(idx + '/assets/'.length);
        if (/^images\//.test(relFromAssets)) {
          imageSet.add(relFromAssets);
        }
      }
    }

    function parseFile(filePath) {
      if (!filePath || visitedFiles.has(filePath)) return;
      visitedFiles.add(filePath);
      if (!fs.existsSync(filePath)) return;
      const content = fs.readFileSync(filePath, 'utf-8');
      const importRegex = /import\s+[^'"\n]*from\s+['\"]([^'\"]+)['\"]/g;
      let m;
      while ((m = importRegex.exec(content)) !== null) {
        const spec = m[1];
        if (/(\.(png|jpg|jpeg|gif|webp|svg)$)|\/(assets)\//i.test(spec)) {
          const candidate = resolveImport(filePath, spec) || spec;
          if (typeof candidate === 'string') {
            addImageIfAssets(candidate);
          }
          continue;
        }
        const resolved = resolveImport(filePath, spec);
        if (resolved && resolved.startsWith(frontendSrc)) {
          if (resolved.includes('/components/') || resolved.includes('/pages/')) {
            parseFile(resolved);
          }
        }
      }
    }

    parseFile(entryFile);

    const images = [];
    for (const rel of imageSet) {
      const full = path.join(assetsDir, rel);
      if (fs.existsSync(full)) {
        const stat = fs.statSync(full);
        images.push({
          id: Buffer.from(rel).toString('base64'),
          name: path.basename(rel),
          path: rel,
          fullPath: full,
          size: formatFileSize(stat.size)
        });
      }
    }

    res.json(images);
  } catch (e) {
    console.error('Ошибка при получении изображений компонента:', e.message);
    res.status(500).json({ error: 'Ошибка сервера' });
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
						
						// Извлекаем все SEO поля из файла локализации
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

// API для управления страницами sitemap
// GET /pages - получить список страниц
app.get('/api/pages', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const pagesPath = path.join(__dirname, 'pages.json');
    let pages = [];
    
    if (fs.existsSync(pagesPath)) {
      const data = fs.readFileSync(pagesPath, 'utf-8');
      pages = JSON.parse(data);
    }
    
    res.json(pages);
  } catch (err) {
    console.error('Ошибка при получении страниц:', err.message);
    res.status(500).json({ error: 'Ошибка получения страниц' });
  }
});

// POST /pages - добавить страницу
app.post('/api/pages', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const { url, changefreq, priority } = req.body;
    
    if (!url || !changefreq || !priority) {
      return res.status(400).json({ error: 'url, changefreq и priority обязательны' });
    }
    
    const pagesPath = path.join(__dirname, 'pages.json');
    let pages = [];
    
    if (fs.existsSync(pagesPath)) {
      const data = fs.readFileSync(pagesPath, 'utf-8');
      pages = JSON.parse(data);
    }
    
    // Проверяем, не существует ли уже такая страница
    const existingPage = pages.find(page => page.url === url);
    if (existingPage) {
      return res.status(400).json({ error: 'Страница с таким URL уже существует' });
    }
    
    const newPage = {
      url,
      changefreq,
      priority,
      lastmod: format(new Date(), 'yyyy-MM-dd')
    };
    
    pages.push(newPage);
    
    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/sitemap');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `pages_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify(pages, null, 2), 'utf-8');
    
    fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), 'utf-8');
    
    res.json({ success: true, page: newPage, backupPath: `sitemap/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при добавлении страницы:', err.message);
    res.status(500).json({ error: 'Ошибка добавления страницы' });
  }
});

// DELETE /pages/:url - удалить страницу по URL
app.delete('/api/pages/:url', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  try {
    const { url } = req.params;
    const decodedUrl = decodeURIComponent(url);
    
    const pagesPath = path.join(__dirname, 'pages.json');
    let pages = [];
    
    if (fs.existsSync(pagesPath)) {
      const data = fs.readFileSync(pagesPath, 'utf-8');
      pages = JSON.parse(data);
    }
    
    const pageIndex = pages.findIndex(page => page.url === decodedUrl);
    if (pageIndex === -1) {
      return res.status(404).json({ error: 'Страница не найдена' });
    }
    
    const deletedPage = pages[pageIndex];
    pages.splice(pageIndex, 1);
    
    // Создаем бэкап
    const backupDir = path.join(__dirname, '../backups/sitemap');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `pages_${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    fs.writeFileSync(backupPath, JSON.stringify(pages, null, 2), 'utf-8');
    
    fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), 'utf-8');
    
    res.json({ success: true, deletedPage, backupPath: `sitemap/${backupFileName}` });
  } catch (err) {
    console.error('Ошибка при удалении страницы:', err.message);
    res.status(500).json({ error: 'Ошибка удаления страницы' });
	}
});

// Генерация sitemap.xml
app.get('/sitemap.xml', async (req, res) => {
  try {
    const sitemapConfigDir = path.join(__dirname, '../frontend/public/sitemap-config');
    const pagesPath = path.join(__dirname, 'pages.json');
    const baseUrl = 'https://evohome.it'; // Замените на ваш домен
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Загружаем страницы из pages.json
    let customPages = [];
    if (fs.existsSync(pagesPath)) {
      const data = fs.readFileSync(pagesPath, 'utf-8');
      customPages = JSON.parse(data);
    }
    
    // Добавляем кастомные страницы из pages.json
    for (const page of customPages) {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `  </url>\n`;
    }
    
    // Список всех статических страниц сайта
    const staticPages = [
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
    
    const urlToPageId = {
      '/': 'home',
      '/about-us': 'about-us',
      '/our-works': 'our-works',
      '/contacts': 'contacts',
      '/reviews': 'reviews',
      '/turnkey-renovation': 'turnkey-renovation',
      '/designer-renovation': 'designer-renovation',
      '/exclusive-renovation': 'exclusive-renovation',
      '/studio': 'studio',
      '/two-room-apartment': 'two-room-apartment',
      '/three-room-apartment': 'three-room-apartment',
      '/four-room-apartment': 'four-room-apartment',
      '/two-story-apartment': 'two-story-apartment',
      '/room-renovation': 'room-renovation',
      '/living-room': 'living-room',
      '/bedroom': 'bedroom',
      '/children-room': 'children-room',
      '/corridor': 'corridor',
      '/kitchen': 'kitchen',
      '/bathroom': 'bathroom',
      '/stairs': 'stairs',
      '/systems': 'systems',
      '/electrical-system': 'electrical-system',
      '/gas-system': 'gas-system',
      '/floor-heating': 'floor-heating',
      '/sewage': 'sewage',
      '/climate-control': 'climate-control',
      '/commercial-premises': 'commercial-premises',
      '/business-center': 'business-center',
      '/restaurant': 'restaurant',
      '/commercial-premises-renovation': 'commercial-premises-renovation',
      '/office': 'office',
      '/warehouse': 'warehouse',
      '/fitness-club': 'fitness-club',
      '/hotel': 'hotel',
      '/services': 'services',
      '/turnkey-renovation-services': 'turnkey-renovation-services',
      '/room-renovation-services': 'room-renovation-services',
      '/commercial-premises-services': 'commercial-premises-services',
      '/systems-services': 'systems-services'
    };

    // Добавляем статические страницы, если они включены в sitemap
    for (const page of staticPages) {
      const pageId = urlToPageId[page.url] || 'home';
      
      // Проверяем, включена ли страница в sitemap
      const configFile = path.join(sitemapConfigDir, `${pageId}.json`);
      let includeInSitemap = true;
      
      if (fs.existsSync(configFile)) {
        try {
          const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
          includeInSitemap = config.sitemap !== false;
        } catch (e) {
          console.error('Ошибка чтения конфигурации sitemap:', e.message);
          includeInSitemap = true; // По умолчанию включаем
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

// Снапшоты бэкапов
app.post('/api/backups/snapshot', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { items } = req.body || {};
    const result = backupManager.createSnapshot(items);
    res.json(result);
  } catch (e) {
    console.error('Ошибка создания снапшота:', e.message);
    res.status(500).json({ error: 'Ошибка создания снапшота' });
  }
});

app.get('/api/backups/snapshots', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const list = backupManager.listSnapshots();
    res.json(list);
  } catch (e) {
    console.error('Ошибка списка снапшотов:', e.message);
    res.status(500).json({ error: 'Ошибка чтения снапшотов' });
  }
});

app.post('/api/backups/snapshot/restore', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const { timestamp, items } = req.body || {};
    if (!timestamp) return res.status(400).json({ error: 'Требуется timestamp' });
    const result = backupManager.restoreSnapshot(timestamp, items);
    res.json(result);
  } catch (e) {
    console.error('Ошибка восстановления снапшота:', e.message);
    res.status(500).json({ error: 'Ошибка восстановления снапшота' });
  }
});

// Список страниц для админки
app.get('/api/pages/list', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  try {
    const pagesPath = path.join(__dirname, 'pages.json');
    
    if (!fs.existsSync(pagesPath)) {
      // Если файл pages.json не существует, возвращаем пустой массив
      return res.json([]);
    }
    
    const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
    
    // Преобразуем данные из pages.json в формат, ожидаемый админ-панелью
    const pages = pagesData.map(page => ({
      id: page.id,
      name: page.title,
      url: page.url,
      imageCount: page.images ? page.images.length : 0
    }));
    
    res.json(pages);
  } catch (e) {
    console.error('Ошибка списка страниц:', e.message);
    res.status(500).json({ error: 'Ошибка получения списка страниц' });
  }
});