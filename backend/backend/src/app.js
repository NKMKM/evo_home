import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import pool from './db.js';
import authRoutes from './routes/auth.js';
import pagesRoutes from './routes/pages.js';
import mediaRoutes from './routes/media.js';
import settingsRoutes from './routes/settings.js';
import seoRoutes from './routes/seo.js';
import templatesRoutes from './routes/templates.js';
import integrationsRoutes from './routes/integrations.js';
import backupRoutes from './routes/backup.js';
import structureRoutes from './routes/structure.js';

const app = express();
app.use(cors());
app.use(express.json());

// Заглушки для роутов
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// TODO: Подключить остальные роуты
app.use('/api/auth', authRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/seo', seoRoutes);
app.use('/api/templates', templatesRoutes);
app.use('/api/integrations', integrationsRoutes);
app.use('/api/backup', backupRoutes);
app.use('/api/structure', structureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
}); 