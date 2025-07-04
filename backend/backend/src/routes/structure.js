import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить всю структуру сайта
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM site_structure ORDER BY "order" ASC');
  res.json(result.rows);
});

// Добавить элемент структуры
router.post('/', async (req, res) => {
  const { parent_id, page_id, order } = req.body;
  const result = await pool.query(
    'INSERT INTO site_structure (parent_id, page_id, "order") VALUES ($1, $2, $3) RETURNING *',
    [parent_id, page_id, order]
  );
  res.status(201).json(result.rows[0]);
});

// Обновить элемент структуры
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { parent_id, page_id, order } = req.body;
  const result = await pool.query(
    'UPDATE site_structure SET parent_id = $1, page_id = $2, "order" = $3 WHERE id = $4 RETURNING *',
    [parent_id, page_id, order, id]
  );
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Удалить элемент структуры
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM site_structure WHERE id = $1', [id]);
  res.json({ success: true });
});

export default router; 