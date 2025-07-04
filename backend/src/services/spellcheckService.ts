import { SpellcheckResult } from './types';

export const spellcheckService = {
  check: async (text: string): Promise<SpellcheckResult> => {
    await new Promise(r => setTimeout(r, 300));
    // mock: каждое слово длиннее 8 букв считается ошибкой
    const words = text.split(/\s+/);
    const errors = words.filter(w => w.length > 8).map(word => ({ word, suggestions: [word.slice(0, 8)] }));
    return { id: Math.floor(Math.random() * 10000), text, errors };
  }
}; 