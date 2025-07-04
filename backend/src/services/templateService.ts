import { Template } from './types';

const templates: Template[] = [];

export const templateService = {
  getTemplates: async (): Promise<Template[]> => {
    await new Promise(r => setTimeout(r, 200));
    return [...templates];
  },
  createTemplate: async (template: Omit<Template, 'id' | 'created'>): Promise<Template> => {
    await new Promise(r => setTimeout(r, 300));
    const newTemplate = { ...template, id: templates.length + 1, created: new Date().toISOString() };
    templates.push(newTemplate);
    return newTemplate;
  },
  updateTemplate: async (id: number, template: Partial<Template>): Promise<Template | undefined> => {
    await new Promise(r => setTimeout(r, 300));
    const idx = templates.findIndex(t => t.id === id);
    if (idx !== -1) {
      templates[idx] = { ...templates[idx], ...template };
      return templates[idx];
    }
    return undefined;
  },
  deleteTemplate: async (id: number): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 200));
    const idx = templates.findIndex(t => t.id === id);
    if (idx !== -1) {
      templates.splice(idx, 1);
      return true;
    }
    return false;
  }
}; 