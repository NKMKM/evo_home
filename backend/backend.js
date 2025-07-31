import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

// Загрузка переменных окружения
dotenv.config();

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
  'https://admin.evohome.it'
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
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true, // true в продакшене
    sameSite: 'None',
    domain: '.evohome.it',
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Маршрут логина
app.post('/login', async (req, res) => {
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
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Ошибка при логауте:', err.message);
      return res.status(500).json({ success: false, message: 'Ошибка при выходе' });
    }
    res.json({ success: true });
  });
});

// Получение заявок (только для авторизованных)
app.get('/submissions', async (req, res) => {
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
app.delete('/submissions/:id', async (req, res) => {
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

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Глобальная ошибка:', err.stack);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});