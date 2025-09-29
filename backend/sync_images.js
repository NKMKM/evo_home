// Скрипт для автоматического обновления images в pages.json на основе содержимого assets/images
// Запускать из папки backend: node sync_images.js

const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, 'pages.json');
const imagesDir = path.join(__dirname, '../frontend/dist/assets/images');

// Маппинг страниц к папкам/файлам (по аналогии с backend.js)
const allowMap = {
  'home': {
    dirs: [],
    files: [
      'design.jpg', 'discount.jpg', 'architector.jpg', 'founder_main.png',
      'home_start_bg.jpg', 'calculator_bg_img.jpg', 'reviews_bg.jpg', 'review_form_bg.jpg',
      'footer_bg.jpg', 'leftside_black_decoration.png', 'leftside_yellow_decoration.png',
      'rightside_black_decoration.png', 'rightside_yellow_decoration.png'
    ]
  },
  'about-us': { dirs: ['team_images/','about_us_achievments/'], files: ['founder_main.png'] },
  'our-works': { dirs: ['our_works_gallery/'] },
  'contacts': { files: ['contact_form_bg.jpg'] },
  'reviews': { dirs: ['reviews_images/','reviews_page_images/'], files: ['reviews_bg.jpg'] },
  'systems': { dirs: ['systems/'] },
  'room-renovation': { dirs: ['room_renovation/'] },
  'turnkey-renovation': { dirs: ['turnkey_renovation/'] },
  'commercial-premises': { dirs: ['commercial_premises/'] },
  // ...добавьте остальные страницы по аналогии
};

function walk(dir, prefix = '') {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const relPath = prefix + file;
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, relPath + '/'));
    } else {
      results.push(relPath);
    }
  });
  return results;
}

function buildImagesForPage(pageId) {
  const allow = allowMap[pageId];
  if (!allow) return [];
  let files = [];
  if (allow.dirs) {
    for (const dir of allow.dirs) {
      const absDir = path.join(imagesDir, dir);
      if (fs.existsSync(absDir)) {
        files = files.concat(walk(absDir, dir));
      }
    }
  }
  if (allow.files) {
    for (const file of allow.files) {
      const absFile = path.join(imagesDir, file);
      if (fs.existsSync(absFile)) {
        files.push(file);
      }
    }
  }
  // Удаляем дубликаты
  files = Array.from(new Set(files));
  // Формируем объекты изображений
  return files.map((src, idx) => ({
    id: idx + 1,
    src: 'images/' + src.replace(/\\/g, '/'),
    alt: '',
    title: '',
    description: ''
  }));
}

function main() {
  if (!fs.existsSync(pagesPath)) {
    console.error('pages.json не найден');
    process.exit(1);
  }
  const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'));
  for (const page of pagesData) {
    if (allowMap[page.id]) {
      page.images = buildImagesForPage(page.id);
      console.log(`Страница ${page.id}: найдено ${page.images.length} изображений.`);
    }
  }
  fs.writeFileSync(pagesPath, JSON.stringify(pagesData, null, 2), 'utf-8');
  console.log('pages.json успешно обновлен!');
}

main();
