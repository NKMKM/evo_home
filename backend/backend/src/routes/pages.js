import express from 'express';
import * as controller from '../controllers/pagesController.js';

const router = express.Router();

// Получить все страницы
router.get('/', controller.getAll);

// Получить одну страницу
router.get('/:id', controller.getOne);

// Создать страницу
router.post('/', controller.create);

// Обновить страницу
router.put('/:id', controller.update);

// Удалить страницу
router.delete('/:id', controller.remove);

export default router; 