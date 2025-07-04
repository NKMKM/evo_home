import { HistoryItem } from './types';

const history: HistoryItem[] = [];

export const historyService = {
  getHistory: async (entity: string, entityId: number): Promise<HistoryItem[]> => {
    await new Promise(r => setTimeout(r, 200));
    return history.filter(h => h.entity === entity && h.entityId === entityId);
  },
  addHistory: async (item: HistoryItem): Promise<void> => {
    await new Promise(r => setTimeout(r, 100));
    history.push(item);
  },
  revert: async (historyId: number): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 200));
    // mock revert
    return true;
  }
}; 