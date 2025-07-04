import { Script } from './types';

const scripts: Script[] = [];

export const scriptsService = {
  getScripts: async (): Promise<Script[]> => {
    await new Promise(r => setTimeout(r, 200));
    return [...scripts];
  },
  addScript: async (script: Omit<Script, 'id'>): Promise<Script> => {
    await new Promise(r => setTimeout(r, 200));
    const newScript = { ...script, id: scripts.length + 1 };
    scripts.push(newScript);
    return newScript;
  },
  updateScript: async (id: number, script: Partial<Script>): Promise<Script | undefined> => {
    await new Promise(r => setTimeout(r, 200));
    const idx = scripts.findIndex(s => s.id === id);
    if (idx !== -1) {
      scripts[idx] = { ...scripts[idx], ...script };
      return scripts[idx];
    }
    return undefined;
  },
  deleteScript: async (id: number): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 200));
    const idx = scripts.findIndex(s => s.id === id);
    if (idx !== -1) {
      scripts.splice(idx, 1);
      return true;
    }
    return false;
  }
}; 