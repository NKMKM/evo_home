import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Копируем всю папку public в dist/public без изменений структуры
    viteStaticCopy({
      targets: [
        { src: 'public/**/*', dest: 'public' }
      ]
    })
  ],
  server: {
    allowedHosts: ['.ngrok-free.app'], // ← добавлено для ngrok
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 0, // не инлайнить ассеты, всё класть в assets
    // Отключаем стандартное копирование public в корень dist,
    // так как выше мы явно копируем в dist/public
    copyPublicDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const normalized = name.replace(/\\/g, '/');
          const parts = normalized.split('/assets/');
          if (parts.length > 1 && parts[1]) {
            // Сохраняем под-пути после src/assets/... → dist/assets/...
            return `assets/${parts[1]}`;
          }
          // Папка public копируется как есть, но на всякий случай сохраняем имена без хеша
          return 'assets/[name][extname]';
        },
      },
    },
  },
})
