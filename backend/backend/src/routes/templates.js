import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить все шаблоны
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM templates');
  res.json(result.rows);
});

// Получить шаблон по id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM templates WHERE id = $1', [id]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Создать шаблон
router.post('/', async (req, res) => {
  const { name, content } = req.body;
  const result = await pool.query(
    'INSERT INTO templates (name, content) VALUES ($1, $2) RETURNING *',
    [name, content]
  );
  res.status(201).json(result.rows[0]);
});

// Обновить шаблон
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;
  const result = await pool.query(
    'UPDATE templates SET name = $1, content = $2 WHERE id = $3 RETURNING *',
    [name, content, id]
  );
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Удалить шаблон
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM templates WHERE id = $1', [id]);
  res.json({ success: true });
});

export default router; 