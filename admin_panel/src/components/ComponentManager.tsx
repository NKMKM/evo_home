import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, Eye, Edit, Copy, Download, ExternalLink } from 'lucide-react';

interface ComponentManagerProps {
  component: {
    id: string;
    title: string;
    path: string;
    fileName: string;
    category: string;
    type: 'page' | 'component';
  };
  onClose: () => void;
}

export function ComponentManager({ component, onClose }: ComponentManagerProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'code' | 'usage'>('info');

  const getComponentInfo = () => {
    return {
      name: component.title,
      file: component.fileName,
      path: component.path,
      category: component.category,
      type: component.type === 'component' ? 'React Component' : 'Page Component',
      size: '~2.5 KB', // Примерный размер
      lastModified: '2 дня назад',
      dependencies: ['React', 'Framer Motion', 'Lucide React'],
      props: component.type === 'component' ? [
        { name: 'title', type: 'string', required: true, description: 'Заголовок компонента' },
        { name: 'onClick', type: 'function', required: false, description: 'Обработчик клика' },
        { name: 'className', type: 'string', required: false, description: 'CSS классы' }
      ] : []
    };
  };

  const info = getComponentInfo();

  const handleCopyPath = () => {
    navigator.clipboard.writeText(component.path);
    alert('Путь скопирован в буфер обмена');
  };

  const handleCopyFileName = () => {
    navigator.clipboard.writeText(component.fileName);
    alert('Имя файла скопировано в буфер обмена');
  };

  const handleViewFile = () => {
    // В реальном приложении здесь бы открывался файл в редакторе
    alert(`Открытие файла: ${component.fileName}`);
  };

  const handleDownload = () => {
    // В реальном приложении здесь бы скачивался файл
    alert(`Скачивание файла: ${component.fileName}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {component.type === 'component' ? (
              <Code size={24} className="text-green-500" />
            ) : (
              <FileText size={24} className="text-blue-500" />
            )}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{component.title}</h2>
              <p className="text-sm text-gray-500">{info.type}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {[
            { id: 'info', label: 'Информация', icon: FileText },
            { id: 'code', label: 'Код', icon: Code },
            { id: 'usage', label: 'Использование', icon: Eye }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Основная информация</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Название:</span>
                      <span className="text-sm font-medium">{info.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Файл:</span>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{info.file}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Путь:</span>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{info.path}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Категория:</span>
                      <span className="text-sm font-medium">{info.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Размер:</span>
                      <span className="text-sm font-medium">{info.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Изменен:</span>
                      <span className="text-sm font-medium">{info.lastModified}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Зависимости</h3>
                  <div className="flex flex-wrap gap-2">
                    {info.dependencies.map((dep, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {info.props.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Пропсы компонента</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-medium text-gray-900">Название</th>
                          <th className="text-left py-2 font-medium text-gray-900">Тип</th>
                          <th className="text-left py-2 font-medium text-gray-900">Обязательный</th>
                          <th className="text-left py-2 font-medium text-gray-900">Описание</th>
                        </tr>
                      </thead>
                      <tbody>
                        {info.props.map((prop, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-2 font-mono text-blue-600">{prop.name}</td>
                            <td className="py-2 text-gray-600">{prop.type}</td>
                            <td className="py-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                prop.required 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {prop.required ? 'Да' : 'Нет'}
                              </span>
                            </td>
                            <td className="py-2 text-gray-600">{prop.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Исходный код</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyFileName}
                    className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                  >
                    <Copy size={12} />
                    Копировать имя файла
                  </button>
                  <button
                    onClick={handleViewFile}
                    className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
                  >
                    <ExternalLink size={12} />
                    Открыть файл
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`import React from 'react';
import { motion } from 'framer-motion';

interface ${component.title.replace(/\s+/g, '')}Props {
  title: string;
  onClick?: () => void;
  className?: string;
}

export function ${component.title.replace(/\s+/g, '')}({ 
  title, 
  onClick, 
  className 
}: ${component.title.replace(/\s+/g, '')}Props) {
  return (
    <motion.div
      className={\`p-4 \${className || ''}\`}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {/* Содержимое компонента */}
    </motion.div>
  );
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Примеры использования</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Импорт</h4>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <code className="text-sm font-mono">
                      import {`{ ${component.title.replace(/\s+/g, '')} }`} from './{component.fileName.replace('.jsx', '')}';
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Базовое использование</h4>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <code className="text-sm font-mono">
{`<${component.title.replace(/\s+/g, '')} 
  title="${component.title}"
  onClick={() => console.log('Clicked')}
  className="my-custom-class"
/>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">В JSX</h4>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <code className="text-sm font-mono">
{`function MyPage() {
  return (
    <div>
      <h1>Моя страница</h1>
      <${component.title.replace(/\s+/g, '')} 
        title="Заголовок"
        onClick={handleClick}
      />
    </div>
  );
}`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-2">
            <button
              onClick={handleCopyPath}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Copy size={16} />
              Копировать путь
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download size={16} />
              Скачать
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Закрыть
          </button>
        </div>
      </motion.div>
    </div>
  );
}




