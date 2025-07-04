import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Получить SEO для страницы
router.get('/:page_id', async (req, res) => {
  const { page_id } = req.params;
  const result = await pool.query('SELECT * FROM seo_settings WHERE page_id = $1', [page_id]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Установить/обновить SEO для страницы
router.post('/:page_id', async (req, res) => {
  const { page_id } = req.params;
  const { meta_title, meta_description, meta_keywords } = req.body;
  const result = await pool.query(
    `INSERT INTO seo_settings (page_id, meta_title, meta_description, meta_keywords)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (page_id) DO UPDATE SET meta_title = $2, meta_description = $3, meta_keywords = $4
     RETURNING *`,
    [page_id, meta_title, meta_description, meta_keywords]
  );
  res.status(201).json(result.rows[0]);
});

export default router; 