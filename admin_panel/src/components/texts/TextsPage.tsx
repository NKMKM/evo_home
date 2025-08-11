import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeIcon, EditIcon, SaveIcon, XIcon, FolderIcon, GlobeIcon } from 'lucide-react';

interface TextData {
  language: string;
  namespace: string;
  path: string;
  content: Record<string, any>;
}

interface LanguageInfo {
  code: string;
  name: string;
  flag: string;
}

export function TextsPage() {
  const [texts, setTexts] = useState<TextData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ru');
  const [selectedNamespace, setSelectedNamespace] = useState<string>('');
  const [editingText, setEditingText] = useState<any>(null);
  const [editingPath, setEditingPath] = useState<string>('');

  const languages: LanguageInfo[] = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  // Примерные пространства имен из структуры проекта
  const namespaces = [
    'home/HomeStart',
    'home/AboutCompany',
    'home/Calculator',
    'home/Advantages',
    'AboutUs',
    'Contacts',
    'components/Nav',
    'components/Footer',
    'turnkey_renovation/DesignerRenovation',
    'room_renovation/Bathroom',
    'commercial_premises/BusinessCenter',
    'systems/ClimateControl',
  ];

  useEffect(() => {
    // Симуляция загрузки данных
    loadTexts();
  }, [selectedLanguage, selectedNamespace]);

  const loadTexts = async () => {
    setLoading(true);
    
    // Симуляция загрузки JSON файлов
    setTimeout(() => {
      const mockData: TextData[] = [];
      
      if (selectedNamespace) {
        // Загружаем конкретный файл
        const sampleContent = {
          "title": "EVO HOME – строительная компания, строительство и реконструкция в Риме",
          "description": "Вам нужен ремонт дома в Риме? Обратитесь к профессионалам.",
          "list": {
            "first_stroke": "Мы хотим превратить",
            "second_stroke": {
              "text_1": "ваши ",
              "span": "идеи",
              "text_2": " в"
            },
            "third_stroke": {
              "text": "необыкновенные пространства для ",
              "span": "жизни"
            }
          },
          "button": "ЗАПРОСИТЬ РАСЦЕНКИ"
        };

        mockData.push({
          language: selectedLanguage,
          namespace: selectedNamespace,
          path: `frontend/public/locales/${selectedLanguage}/${selectedNamespace}.json`,
          content: sampleContent
        });
      }
      
      setTexts(mockData);
      setLoading(false);
    }, 500);
  };

  const handleEditText = (content: any, path: string) => {
    setEditingText(JSON.parse(JSON.stringify(content)));
    setEditingPath(path);
  };

  const handleSaveText = () => {
    if (editingText && editingPath) {
      // Обновляем локальное состояние
      setTexts(texts.map(text => 
        text.path === editingPath 
          ? { ...text, content: editingText }
          : text
      ));
      
      // Здесь бы был API вызов для сохранения
      console.log('Saving text for path:', editingPath, editingText);
      
      setEditingText(null);
      setEditingPath('');
    }
  };

  const handleCancelEdit = () => {
    setEditingText(null);
    setEditingPath('');
  };

  const updateNestedValue = (obj: any, path: string, value: string) => {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current)) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    return { ...obj };
  };

  const renderEditableFields = (obj: any, prefix = '', level = 0) => {
    return Object.keys(obj).map(key => {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];
      
      if (typeof value === 'string') {
        return (
          <div key={fullPath} className="mb-6">
            <div className="flex items-center mb-2">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  level === 0 ? 'bg-blue-500' : 
                  level === 1 ? 'bg-green-500' : 'bg-purple-500'
                }`}></div>
                <label className="text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              </div>
              <div className="ml-auto text-xs text-gray-400 font-mono">
                {fullPath}
              </div>
            </div>
            <div className="relative">
              {value.length > 100 ? (
                <textarea
                  value={value}
                  onChange={(e) => {
                    const newObj = updateNestedValue(editingText, fullPath, e.target.value);
                    setEditingText(newObj);
                  }}
                  rows={Math.min(Math.max(Math.ceil(value.length / 80), 2), 6)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-sm text-sm leading-relaxed"
                  placeholder="Введите текст..."
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const newObj = updateNestedValue(editingText, fullPath, e.target.value);
                    setEditingText(newObj);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm"
                  placeholder="Введите текст..."
                />
              )}
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                {value.length} символов
              </div>
            </div>
          </div>
        );
      } else if (typeof value === 'object' && value !== null) {
        return (
          <div key={fullPath} className={`mb-6 border rounded-lg p-4 ${
            level === 0 ? 'border-blue-200 bg-blue-50' :
            level === 1 ? 'border-green-200 bg-green-50' : 'border-purple-200 bg-purple-50'
          }`}>
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 rounded ${
                level === 0 ? 'bg-blue-500' : 
                level === 1 ? 'bg-green-500' : 'bg-purple-500'
              }`}></div>
              <h4 className="ml-2 text-sm font-semibold text-gray-800">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </h4>
              <div className="ml-auto text-xs text-gray-500 font-mono">
                {fullPath}
              </div>
            </div>
            <div className="space-y-3">
              {renderEditableFields(value, fullPath, level + 1)}
            </div>
          </div>
        );
      }
      
      return null;
    });
  };

  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка текстов...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-light text-gray-800 mb-1">
          Управление текстами
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Редактирование текстового контента для трех языков
        </p>

        {/* Фильтры */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <GlobeIcon className="inline w-4 h-4 mr-1" />
                Язык
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FolderIcon className="inline w-4 h-4 mr-1" />
                Раздел
              </label>
              <select
                value={selectedNamespace}
                onChange={(e) => setSelectedNamespace(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Выберите раздел</option>
                {namespaces.map(ns => (
                  <option key={ns} value={ns}>{ns}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Контент */}
        {texts.length > 0 ? (
          <div className="space-y-6">
            {texts.map(text => (
              <motion.div
                key={text.path}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-50 text-blue-600 p-2 rounded-md">
                        <TypeIcon size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          {text.namespace}
                        </h3>
                        <p className="text-sm text-gray-500">{text.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleEditText(text.content, text.path)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <EditIcon size={18} />
                    </button>
                  </div>

                  {editingPath === text.path ? (
                    <div className="space-y-4">
                      <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-md p-4">
                        {renderEditableFields(editingText)}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveText}
                          className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                          <SaveIcon size={14} className="mr-1" />
                          Сохранить
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex items-center px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          <XIcon size={14} className="mr-1" />
                          Отмена
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-3 flex items-center justify-between">
                        <span>Предварительный просмотр</span>
                        <span className="bg-gray-200 px-2 py-1 rounded">JSON</span>
                      </div>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {Object.entries(text.content).map(([key, value]) => (
                          <div key={key} className="border-l-4 border-blue-400 pl-3 py-2 bg-white rounded-r">
                            <div className="text-xs font-medium text-blue-600 mb-1">
                              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                            </div>
                            <div className="text-sm text-gray-700">
                              {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : selectedNamespace ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <TypeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Не удалось загрузить тексты для выбранного раздела
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <TypeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Выберите раздел для редактирования текстов
            </p>
          </div>
        )}

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-yellow-800 mb-2">Инструкция по использованию</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Выберите язык и раздел для редактирования</li>
            <li>• Нажмите на кнопку редактирования</li>
            <li>• Измените нужные тексты в полях</li>
            <li>• Сохраните изменения</li>
            <li>• Тексты автоматически обновятся на сайте</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}