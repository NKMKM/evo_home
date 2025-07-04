import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить все медиа
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM media ORDER BY uploaded_at DESC');
  res.json(result.rows);
});

// Получить одно медиа
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM media WHERE id = $1', [id]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Добавить медиа (метаданные)
router.post('/', async (req, res) => {
  const { filename, url } = req.body;
  const result = await pool.query(
    'INSERT INTO media (filename, url) VALUES ($1, $2) RETURNING *',
    [filename, url]
  );
  res.status(201).json(result.rows[0]);
});

// Удалить медиа
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM media WHERE id = $1', [id]);
  res.json({ success: true });
});

export default router; 