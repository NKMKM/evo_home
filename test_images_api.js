const fetch = require('node-fetch');

async function testImagesAPI() {
  try {
    console.log('Тестируем API изображений...');
    
    // Тестируем получение изображений для главной страницы
    const response = await fetch('http://localhost:3001/api/pages/home/images', {
      credentials: 'include',
      headers: {
        'Cookie': 'connect.sid=your-session-id' // Замените на реальный session ID
      }
    });
    
    if (response.ok) {
      const images = await response.json();
      console.log(`Найдено изображений: ${images.length}`);
      images.slice(0, 5).forEach(img => {
        console.log(`- ${img.path} (${img.size})`);
      });
    } else {
      console.log(`Ошибка API: ${response.status} ${response.statusText}`);
    }
    
    // Тестируем доступ к статическим файлам
    const staticResponse = await fetch('http://localhost:3001/frontend-assets/images/design.jpg');
    console.log(`Статический файл design.jpg: ${staticResponse.status}`);
    
  } catch (error) {
    console.error('Ошибка теста:', error.message);
  }
}

testImagesAPI();

