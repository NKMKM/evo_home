import pool from '../db.js';

export async function getAllPages() {
  return (await pool.query('SELECT * FROM pages ORDER BY created_at DESC')).rows;
}
export async function getPageById(id) {
  return (await pool.query('SELECT * FROM pages WHERE id = $1', [id])).rows[0];
}
export async function createPage(title, slug, content) {
  return (await pool.query('INSERT INTO pages (title, slug, content) VALUES ($1, $2, $3) RETURNING *', [title, slug, content])).rows[0];
}
export async function updatePage(id, title, slug, content) {
  return (await pool.query('UPDATE pages SET title = $1, slug = $2, content = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *', [title, slug, content, id])).rows[0];
}
export async function deletePage(id) {
  await pool.query('DELETE FROM pages WHERE id = $1', [id]);
} 