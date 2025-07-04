import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить все настройки
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM settings');
  res.json(result.rows);
});

// Получить настройку по ключу
router.get('/:key', async (req, res) => {
  const { key } = req.params;
  const result = await pool.query('SELECT * FROM settings WHERE key = $1', [key]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Установить/обновить настройку
router.post('/', async (req, res) => {
  const { key, value } = req.body;
  const result = await pool.query(
    'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2 RETURNING *',
    [key, value]
  );
  res.status(201).json(result.rows[0]);
});

export default router; 