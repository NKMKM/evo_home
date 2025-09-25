import { useState, useEffect } from 'react';

interface ImageTestProps {
  backendUrl: string;
}

export function ImageTest({ backendUrl }: ImageTestProps) {
  const [testResults, setTestResults] = useState<Array<{
    path: string;
    status: 'loading' | 'success' | 'error';
    error?: string;
  }>>([]);
  const [pageImages, setPageImages] = useState<string[]>([]);

  // Сначала получаем список изображений с сервера
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Получаем изображения для главной страницы
        const response = await fetch(`${backendUrl}/api/pages/home/images`, {
          credentials: 'include'
        });
        
        if (response.ok) {
          const images = await response.json();
          const imagePaths = images.map((img: any) => img.src || img.path).slice(0, 10); // Берем первые 10
          setPageImages(imagePaths);
          console.log('Получены пути изображений:', imagePaths);
        }
      } catch (error) {
        console.error('Ошибка получения изображений:', error);
      }
    };

    fetchImages();
  }, [backendUrl]);

  // Тестируем загрузку изображений
  useEffect(() => {
    if (pageImages.length === 0) return;

    const testImage = async (imagePath: string) => {
      setTestResults(prev => [...prev, { path: imagePath, status: 'loading' }]);
      
      try {
        const response = await fetch(`${backendUrl}/frontend-assets/images/${imagePath}`, {
          credentials: 'include'
        });
        
        if (response.ok) {
          setTestResults(prev => 
            prev.map(result => 
              result.path === imagePath 
                ? { ...result, status: 'success' }
                : result
            )
          );
        } else {
          setTestResults(prev => 
            prev.map(result => 
              result.path === imagePath 
                ? { ...result, status: 'error', error: `HTTP ${response.status}` }
                : result
            )
          );
        }
      } catch (error) {
        setTestResults(prev => 
          prev.map(result => 
            result.path === imagePath 
              ? { ...result, status: 'error', error: error instanceof Error ? error.message : 'Unknown error' }
              : result
          )
        );
      }
    };

    // Очищаем предыдущие результаты
    setTestResults([]);
    
    // Тестируем изображения из API
    pageImages.forEach(testImage);
  }, [pageImages, backendUrl]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Тест загрузки изображений</h3>
      <div className="mb-4 text-sm text-gray-600">
        Тестируем изображения, полученные из API для главной страницы
      </div>
      <div className="space-y-2">
        {testResults.map((result, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${
              result.status === 'loading' ? 'bg-yellow-400' :
              result.status === 'success' ? 'bg-green-400' :
              'bg-red-400'
            }`}></span>
            <span className="text-sm font-mono">{result.path}</span>
            {result.status === 'loading' && <span className="text-xs text-gray-500">Загрузка...</span>}
            {result.status === 'success' && <span className="text-xs text-green-600">✓ Успешно</span>}
            {result.status === 'error' && <span className="text-xs text-red-600">✗ {result.error}</span>}
          </div>
        ))}
        {pageImages.length === 0 && (
          <div className="text-sm text-gray-500">Загрузка списка изображений...</div>
        )}
      </div>
    </div>
  );
}
