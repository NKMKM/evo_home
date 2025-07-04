import { Backup } from './types';

const backups: Backup[] = [];

export const backupService = {
  getBackups: async (): Promise<Backup[]> => {
    await new Promise(r => setTimeout(r, 200));
    return [...backups];
  },
  createBackup: async (): Promise<Backup> => {
    await new Promise(r => setTimeout(r, 500));
    const newBackup = { id: backups.length + 1, date: new Date().toISOString(), fileUrl: '/backup.zip' };
    backups.push(newBackup);
    return newBackup;
  },
  restoreBackup: async (id: number): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 1000));
    // mock restore
    return true;
  }
}; 