import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить все бэкапы
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM backups ORDER BY created_at DESC');
  res.json(result.rows);
});

// Добавить бэкап (метаданные)
router.post('/', async (req, res) => {
  const { file_url } = req.body;
  const result = await pool.query(
    'INSERT INTO backups (file_url) VALUES ($1) RETURNING *',
    [file_url]
  );
  res.status(201).json(result.rows[0]);
});

// Удалить бэкап
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM backups WHERE id = $1', [id]);
  res.json({ success: true });
});

export default router; 