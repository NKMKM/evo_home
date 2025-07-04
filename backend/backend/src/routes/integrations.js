import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить все интеграции
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM integrations');
  res.json(result.rows);
});

// Получить интеграцию по id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM integrations WHERE id = $1', [id]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Создать интеграцию
router.post('/', async (req, res) => {
  const { name, config } = req.body;
  const result = await pool.query(
    'INSERT INTO integrations (name, config) VALUES ($1, $2) RETURNING *',
    [name, config]
  );
  res.status(201).json(result.rows[0]);
});

// Обновить интеграцию
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, config } = req.body;
  const result = await pool.query(
    'UPDATE integrations SET name = $1, config = $2 WHERE id = $3 RETURNING *',
    [name, config, id]
  );
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Удалить интеграцию
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM integrations WHERE id = $1', [id]);
  res.json({ success: true });
});

export default router; 