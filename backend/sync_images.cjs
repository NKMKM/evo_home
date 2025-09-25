// Скрипт для автоматического обновления images в pages.json на основе реального использования изображений в коде страниц
// Запускать из папки backend: node sync_images.cjs

const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, 'pages.json');
const imagesDir = path.join(__dirname, '../frontend/src/assets/images');
const pagesDir = path.join(__dirname, '../frontend/src/pages');

// Рекурсивно получить все файлы страниц
function getAllPageFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllPageFiles(filePath));
    } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      results.push(filePath);
    }
  });
  return results;
}

// Извлечь все пути к изображениям из файла страницы
function extractImagePathsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Ищем import ... from '.../assets/images/...'
  const importRegex = /import\s+\w+\s+from ['"](?:.*?assets\/images\/)([^'";]+)['"]/g;
  // Ищем require('.../assets/images/...')
  const requireRegex = /require\(['"](?:.*?assets\/images\/)([^'"]+)['"]\)/g;
  // Ищем прямые ссылки на изображения в src=".../assets/images/..."
  const srcRegex = /src=["'](?:.*?assets\/images\/)([^"']+)["']/g;
  // Ищем любые упоминания .jpg/.png/.jpeg/.webp/.svg/.gif
  const extRegex = /['"](?:.*?assets\/images\/)([^'"]+\.(?:jpg|jpeg|png|webp|svg|gif))['"]/gi;

  let matches = [];
  let m;
  [importRegex, requireRegex, srcRegex, extRegex].forEach(regex => {
    while ((m = regex.exec(content)) !== null) {
      matches.push(m[1]);
    }
  });
  // Удаляем дубликаты
  return Array.from(new Set(matches));
}

// Получить id страницы по имени файла
function getPageIdFromFile(filePath) {
  // Пример: .../pages/turnkey_renovation/Studio.jsx => turnkey-renovation-studio
  const rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  const parts = rel.split('/');
  let id = parts.join('-').replace(/\.(jsx?|tsx?)$/, '').toLowerCase();
  // Специальные случаи для главных страниц
  if (id === 'main') return 'home';
  if (id === 'aboutus') return 'about-us';
  if (id === 'ourworks') return 'our-works';
  if (id === 'contacts') return 'contacts';
  if (id === 'reviews') return 'reviews';
  return id;
}

function main() {
  if (!fs.existsSync(pagesPath)) {
    console.error('pages.json не найден');
    process.exit(1);
  }
  const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
  const pageFiles = getAllPageFiles(pagesDir);
  // Собираем карту: pageId -> [image paths]
  const pageImagesMap = {};
  for (const file of pageFiles) {
    const pageId = getPageIdFromFile(file);
    const images = extractImagePathsFromFile(file);
    if (!pageImagesMap[pageId]) pageImagesMap[pageId] = [];
    pageImagesMap[pageId].push(...images);
  }
  // Удаляем дубликаты
  for (const id in pageImagesMap) {
    pageImagesMap[id] = Array.from(new Set(pageImagesMap[id]));
  }
  // Обновляем pagesData
  for (const page of pagesData) {
    if (pageImagesMap[page.id]) {
      page.images = pageImagesMap[page.id].map((src, idx) => ({
        id: idx + 1,
        src: 'images/' + src.replace(/\\/g, '/'),
        alt: '',
        title: '',
        description: ''
      }));
      console.log(`Страница ${page.id}: найдено ${page.images.length} изображений.`);
    }
  }
  // Добавляем новые "страницы" для динамических блоков, если их нет в pagesData
  for (const id in pageImagesMap) {
    if (!pagesData.find(p => p.id === id)) {
      pagesData.push({
        id,
        title: id,
        images: pageImagesMap[id].map((src, idx) => ({
          id: idx + 1,
          src: 'images/' + src.replace(/\\/g, '/'),
          alt: '',
          title: '',
          description: ''
        }))
      });
      console.log(`Добавлен динамический блок/страница: ${id}`);
    }
  }
  fs.writeFileSync(pagesPath, JSON.stringify(pagesData, null, 2), 'utf-8');
  console.log('pages.json успешно обновлен!');
}

main();