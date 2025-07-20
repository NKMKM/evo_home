import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { Pool } from 'pg';

const app = express();
const PORT = 3001;

// 🔓 Подключение к Aiven PostgreSQL с SSL
const pool = new Pool({
  user: 'avnadmin',
  host: 'evohome-ateuhen.c.aivencloud.com',
  database: 'defaultdb',
  password: 'AVNS_vQW4aZoDSamdjlpy4E-',
  port: 24616,
  ssl: {
    rejectUnauthorized: false
  }
});

// Проверка подключения к базе
pool.connect()
  .then(client => {
    console.log('✅ Подключение к базе данных установлено');
    client.release();
  })
  .catch(err => {
    console.error('❌ Ошибка подключения к базе:', err.message);
  });

// ❗ Разрешаем ВСЕ origin'ы для разработки
app.use(cors({
  origin: true, // принимает любой origin
  credentials: true
}));

// Поддержка JSON
app.use(express.json());

// Настройка сессий
app.use(session({
  secret: 'evo_home_dev_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // обязательно false для HTTP
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// 🔐 Логин
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length > 0) {
      req.session.user = { username: result.rows[0].username };
      console.log('✅ Вход:', result.rows[0].username);
      res.json({ success: true });
    } else {
      console.log('❌ Неверный логин');
      res.status(401).json({ success: false, message: 'Неверный логин или пароль' });
    }
  } catch (err) {
    console.error('❌ Ошибка логина:', err.message);
    res.status(500).json({ success: false, message: 'Ошибка базы данных' });
  }
});

// Проверка авторизации
app.get('/api/check-auth', (req, res) => {
  res.json({
    authenticated: !!req.session.user,
    user: req.session.user || null
  });
});

// Выход
app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
