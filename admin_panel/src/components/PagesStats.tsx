import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, Image, Globe, Layers, TrendingUp } from 'lucide-react';
import { PageCategory, ScannedPage } from '../utils/pageScanner';

interface PagesStatsProps {
  categories: PageCategory[];
  totalPages: number;
  totalComponents: number;
}

export function PagesStats({ categories, totalPages, totalComponents }: PagesStatsProps) {
  const getStats = () => {
    let totalImages = 0;
    let totalTranslations = 0;
    let publishedPages = 0;
    let draftPages = 0;
    let archivedPages = 0;

    categories.forEach(category => {
      category.pages.forEach(page => {
        if (page.hasImages) totalImages++;
        if (page.hasTranslations) totalTranslations++;
        
        if (page.type === 'page') {
          switch (page.status) {
            case 'published':
              publishedPages++;
              break;
            case 'draft':
              draftPages++;
              break;
            case 'archived':
              archivedPages++;
              break;
          }
        }
      });
    });

    return {
      totalImages,
      totalTranslations,
      publishedPages,
      draftPages,
      archivedPages,
      totalItems: totalPages + totalComponents
    };
  };

  const stats = getStats();

  const statCards = [
    {
      title: 'Всего элементов',
      value: stats.totalItems,
      icon: Layers,
      color: 'blue',
      description: `${totalPages} страниц, ${totalComponents} компонентов`
    },
    {
      title: 'Опубликовано',
      value: publishedPages,
      icon: Globe,
      color: 'green',
      description: 'Активные страницы'
    },
    {
      title: 'Черновики',
      value: draftPages,
      icon: FileText,
      color: 'yellow',
      description: 'Неопубликованные страницы'
    },
    {
      title: 'С изображениями',
      value: stats.totalImages,
      icon: Image,
      color: 'purple',
      description: 'Элементы с медиа'
    },
    {
      title: 'С переводами',
      value: stats.totalTranslations,
      icon: TrendingUp,
      color: 'indigo',
      description: 'Многоязычные элементы'
    },
    {
      title: 'Компоненты',
      value: totalComponents,
      icon: Code,
      color: 'emerald',
      description: 'React компоненты'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {statCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-4 rounded-lg border ${getColorClasses(card.color)}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <card.icon size={20} />
              <h3 className="text-sm font-medium">{card.title}</h3>
            </div>
            <span className="text-2xl font-bold">{card.value}</span>
          </div>
          <p className="text-xs opacity-75">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}




