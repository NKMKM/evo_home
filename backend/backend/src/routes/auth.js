import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Логин без bcrypt, сравнение пароля в лоб
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = (await pool.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  if (user.password_hash !== password) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ success: true, user: { id: user.id, email: user.email, role: user.role } });
});

// Профиль (заглушка: всегда возвращает пользователя с id=1)
router.get('/profile', async (req, res) => {
  const user = (await pool.query('SELECT id, email, role FROM users WHERE id = 1')).rows[0];
  if (!user) return res.status(401).json({ error: 'Not authenticated' });
  res.json(user);
});

export default router; 