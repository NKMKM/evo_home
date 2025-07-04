import * as model from '../models/pagesModel.js';

export async function getAll(req, res) {
  res.json(await model.getAllPages());
}
export async function getOne(req, res) {
  const page = await model.getPageById(req.params.id);
  if (!page) return res.status(404).json({ error: 'Not found' });
  res.json(page);
}
export async function create(req, res) {
  const { title, slug, content } = req.body;
  res.status(201).json(await model.createPage(title, slug, content));
}
export async function update(req, res) {
  const { title, slug, content } = req.body;
  const page = await model.updatePage(req.params.id, title, slug, content);
  if (!page) return res.status(404).json({ error: 'Not found' });
  res.json(page);
}
export async function remove(req, res) {
  await model.deletePage(req.params.id);
  res.json({ success: true });
} 
 