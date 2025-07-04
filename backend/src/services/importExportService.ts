export const importExportService = {
  exportData: async (format: 'csv' | 'excel') => {
    await new Promise(r => setTimeout(r, 500));
    return `data.${format}`;
  },
  importData: async (file: File) => {
    await new Promise(r => setTimeout(r, 1000));
    return true;
  }
}; 