import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  ssl: { rejectUnauthorized: false }
});

pool.connect()
  .then(client => {
    console.log('✅ Подключение к базе успешно');
    client.release();
  })
  .catch(err => {
    console.error('❌ Ошибка подключения к базе:', err.message);
  });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'evo_home_app_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000,
  }
}));

// 🔐 Логин
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Проверка предустановленного логина
    if (
      username === process.env.ADMIN_USERNAME &&
      await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || '')
    ) {
      req.session.user = { username, role: 'admin' };
      return res.json({ success: true });
    }

    // 2. Проверка в базе (если юзер не админ)
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (result.rows.length > 0) {
      const valid = await bcrypt.compare(password, result.rows[0].password);
      if (valid) {
        req.session.user = { username: result.rows[0].username };
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
app.get('/api/check-auth', (req, res) => {
  if (req.session.user) {
    res.json({ authenticated: true, user: req.session.user });
  } else {
    res.json({ authenticated: false });
  }
});

// Логаут
app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// Получить заявки (только авторизованные)
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
app.post('/api/submissions', async (req, res) => {
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

// Удаление заявки (только авторизованные)
app.delete('/api/submissions/:id', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM submissions WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error('Ошибка при удалении заявки:', err.message);
    res.status(500).json({ error: 'Ошибка базы данных' });
  }
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Глобальная ошибка:', err);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});



