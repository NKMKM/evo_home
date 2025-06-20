const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'admin_panel',
  password: 'your_password',
  port: 5432,
});

// Get all pages
app.get('/api/pages', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM pages ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a page
app.post('/api/pages', async (req, res) => {
  const { title, content, seo } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO pages (title, content, seo) VALUES ($1, $2, $3) RETURNING *',
      [title, content, seo]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a page
app.put('/api/pages/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, seo } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE pages SET title = $1, content = $2, seo = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      [title, content, seo, id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a page
app.delete('/api/pages/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM pages WHERE id = $1', [id]);
    res.json({ message: 'Page deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));