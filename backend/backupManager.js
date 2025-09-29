import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BackupManager {
  constructor() {
    this.backupDir = path.join(__dirname, '../backups');
    this.ensureBackupDirectories();
  }

  // Создаем все необходимые директории для бэкапов
  ensureBackupDirectories() {
    const directories = [
      'html',
      'html-config',
      'seo',
      'jsonld',
      'robots',
      'sitemap-config',
      'alt-texts',
      'images',
      'texts',
      'snapshots'
    ];

    directories.forEach(dir => {
      const fullPath = path.join(this.backupDir, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
  }

  // Рекурсивное копирование директории
  copyDirectoryRecursiveSync(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) return { copied: 0, bytes: 0 };
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    let filesCopied = 0;
    let bytesCopied = 0;
    for (const entry of fs.readdirSync(srcDir)) {
      const srcPath = path.join(srcDir, entry);
      const destPath = path.join(destDir, entry);
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) {
        const res = this.copyDirectoryRecursiveSync(srcPath, destPath);
        filesCopied += res.copied;
        bytesCopied += res.bytes;
      } else {
        fs.copyFileSync(srcPath, destPath);
        filesCopied += 1;
        bytesCopied += stat.size;
      }
    }
    return { copied: filesCopied, bytes: bytesCopied };
  }

  // Подсчет размера директории
  getDirectorySize(dir) {
    if (!fs.existsSync(dir)) return 0;
    let total = 0;
    for (const entry of fs.readdirSync(dir)) {
      const p = path.join(dir, entry);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        total += this.getDirectorySize(p);
      } else {
        total += stat.size;
      }
    }
    return total;
  }

  // Создание бэкапа с автоматическим именованием
  createBackup(type, pageId, data, customFileName = null) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileName = customFileName || `${type}_${pageId}_${timestamp}.json`;
      const backupPath = path.join(this.backupDir, type, fileName);
      
      const backupData = {
        type,
        pageId,
        timestamp: new Date().toISOString(),
        data
      };

      fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2), 'utf-8');
      
      return {
        success: true,
        backupPath: `${type}/${fileName}`,
        fullPath: backupPath
      };
    } catch (error) {
      console.error(`Ошибка создания бэкапа ${type}:`, error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Создание бэкапа HTML файла
  createHtmlBackup(pageId, htmlContent) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `html_${pageId}_${timestamp}.html`;
    const backupPath = path.join(this.backupDir, 'html', fileName);
    
    try {
      fs.writeFileSync(backupPath, htmlContent, 'utf-8');
      return {
        success: true,
        backupPath: `html/${fileName}`,
        fullPath: backupPath
      };
    } catch (error) {
      console.error('Ошибка создания HTML бэкапа:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Получение списка бэкапов по типу
  getBackups(type) {
    try {
      const typeDir = path.join(this.backupDir, type);
      if (!fs.existsSync(typeDir)) {
        return [];
      }

      const files = fs.readdirSync(typeDir);
      const backups = [];

      files.forEach(file => {
        const filePath = path.join(typeDir, file);
        const stats = fs.statSync(filePath);
        
        backups.push({
          fileName: file,
          filePath: `${type}/${file}`,
          fullPath: filePath,
          size: stats.size,
          created: stats.birthtime,
          modified: stats.mtime
        });
      });

      // Сортируем по дате создания (новые сначала)
      return backups.sort((a, b) => b.created - a.created);
    } catch (error) {
      console.error(`Ошибка получения бэкапов ${type}:`, error);
      return [];
    }
  }

  // Восстановление из бэкапа
  restoreFromBackup(type, fileName) {
    try {
      const backupPath = path.join(this.backupDir, type, fileName);
      
      if (!fs.existsSync(backupPath)) {
        return {
          success: false,
          error: 'Файл бэкапа не найден'
        };
      }

      const content = fs.readFileSync(backupPath, 'utf-8');
      
      if (type === 'html') {
        return {
          success: true,
          data: content,
          type: 'html'
        };
      } else {
        const backupData = JSON.parse(content);
        return {
          success: true,
          data: backupData.data,
          metadata: {
            pageId: backupData.pageId,
            timestamp: backupData.timestamp,
            type: backupData.type
          }
        };
      }
    } catch (error) {
      console.error(`Ошибка восстановления из бэкапа ${type}:`, error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Очистка старых бэкапов (оставляем только последние N)
  cleanupOldBackups(type, keepCount = 10) {
    try {
      const backups = this.getBackups(type);
      
      if (backups.length <= keepCount) {
        return {
          success: true,
          message: `Бэкапов ${type}: ${backups.length}, очистка не требуется`
        };
      }

      const toDelete = backups.slice(keepCount);
      let deletedCount = 0;

      toDelete.forEach(backup => {
        try {
          fs.unlinkSync(backup.fullPath);
          deletedCount++;
        } catch (error) {
          console.error(`Ошибка удаления бэкапа ${backup.fileName}:`, error);
        }
      });

      return {
        success: true,
        message: `Удалено ${deletedCount} старых бэкапов ${type}`,
        deletedCount,
        remainingCount: backups.length - deletedCount
      };
    } catch (error) {
      console.error(`Ошибка очистки бэкапов ${type}:`, error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Получение статистики бэкапов
  getBackupStats() {
    const stats = {};
    const types = ['html', 'html-config', 'seo', 'jsonld', 'robots', 'sitemap-config', 'alt-texts', 'images', 'texts'];

    types.forEach(type => {
      const backups = this.getBackups(type);
      stats[type] = {
        count: backups.length,
        totalSize: backups.reduce((sum, backup) => sum + backup.size, 0),
        oldest: backups.length > 0 ? backups[backups.length - 1].created : null,
        newest: backups.length > 0 ? backups[0].created : null
      };
    });

    return stats;
  }

  // Снапшот всех важных данных (копия директорий в backups/snapshots/<timestamp>)
  createSnapshot(selected = null) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const snapshotRoot = path.join(this.backupDir, 'snapshots', timestamp);
    fs.mkdirSync(snapshotRoot, { recursive: true });

    const items = [
      { name: 'locales', src: path.join(__dirname, '../frontend/dist/locales') },
      { name: 'jsonld', src: path.join(__dirname, '../frontend/dist/jsonld') },
      { name: 'custom-html', src: path.join(__dirname, '../frontend/dist/custom-html') },
      { name: 'html-config', src: path.join(__dirname, '../frontend/dist/html-config') },
      { name: 'robots', src: path.join(__dirname, '../frontend/dist/robots') },
      { name: 'sitemap-config', src: path.join(__dirname, '../frontend/dist/sitemap-config') },
      { name: 'alt-texts', src: path.join(__dirname, '../frontend/dist/alt-texts') },
      { name: 'images', src: path.join(__dirname, '../frontend/dist/assets/images') },
    ];

    const toProcess = selected && Array.isArray(selected) ? items.filter(i => selected.includes(i.name)) : items;

    const results = [];
    let totalBytes = 0;
    for (const it of toProcess) {
      const dest = path.join(snapshotRoot, it.name);
      const res = this.copyDirectoryRecursiveSync(it.src, dest);
      const srcSize = this.getDirectorySize(it.src);
      totalBytes += srcSize;
      results.push({ name: it.name, files: res.copied, bytes: srcSize });
    }

    return { success: true, timestamp, path: snapshotRoot, totalBytes, items: results };
  }

  listSnapshots() {
    const dir = path.join(this.backupDir, 'snapshots');
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter(d => fs.statSync(path.join(dir, d)).isDirectory())
      .map(d => {
        const full = path.join(dir, d);
        return {
          timestamp: d,
          path: full,
          size: this.getDirectorySize(full)
        };
      })
      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
  }

  restoreSnapshot(timestamp, selected = null) {
    const dir = path.join(this.backupDir, 'snapshots', timestamp);
    if (!fs.existsSync(dir)) return { success: false, error: 'Снапшот не найден' };

    const mappings = [
  { name: 'locales', dest: path.join(__dirname, '../frontend/dist/locales') },
  { name: 'jsonld', dest: path.join(__dirname, '../frontend/dist/jsonld') },
  { name: 'custom-html', dest: path.join(__dirname, '../frontend/dist/custom-html') },
  { name: 'html-config', dest: path.join(__dirname, '../frontend/dist/html-config') },
  { name: 'robots', dest: path.join(__dirname, '../frontend/dist/robots') },
  { name: 'sitemap-config', dest: path.join(__dirname, '../frontend/dist/sitemap-config') },
  { name: 'alt-texts', dest: path.join(__dirname, '../frontend/dist/alt-texts') },
  { name: 'images', dest: path.join(__dirname, '../frontend/dist/assets/images') },
    ];

    const items = selected && Array.isArray(selected) ? mappings.filter(i => selected.includes(i.name)) : mappings;
    const results = [];
    for (const it of items) {
      const src = path.join(dir, it.name);
      if (!fs.existsSync(src)) continue;
      // копируем поверх
      this.copyDirectoryRecursiveSync(src, it.dest);
      results.push({ name: it.name, restored: true });
    }
    return { success: true, restored: results };
  }
}

export default BackupManager;
