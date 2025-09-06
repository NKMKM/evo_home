import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ImageIcon, 
  PlayIcon, 
  TypeIcon, 
  ClipboardListIcon, 
  Clock,
  Activity
} from 'lucide-react';
import { Submission } from '../utils/types';
import { useTranslation } from 'react-i18next';

interface ActivityItem {
  id: number;
  action: string;
  time: string;
  type: string;
}

export function DashboardPage() {
  const { t } = useTranslation('common');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState({
    totalImages: 0,
    totalVideos: 0,
    totalTexts: 0,
    totalSubmissions: 0,
    recentActivity: [] as ActivityItem[]
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Загружаем заявки
      const submissionsResponse = await fetch(`${backendUrl}/api/submissions`, {
        credentials: 'include',
      });
      
      let submissionsTotal = 0;
      if (submissionsResponse.ok) {
        const submissionsData = await submissionsResponse.json();
        submissionsTotal = submissionsData.length;
        setSubmissions(submissionsData.slice(0, 5)); // Показываем только последние 5
      }

      // Загружаем реальную статистику изображений
      let imageCount = 295; // Базовое количество по умолчанию
      
      try {
        const imagesResponse = await fetch(`${backendUrl}/api/images/scan`, {
          credentials: 'include',
        });
        if (imagesResponse.ok) {
          const images = await imagesResponse.json();
          imageCount = images.length;
        }
      } catch (error) {
        console.log('Не удалось загрузить статистику изображений, используем значение по умолчанию');
      }

      const mockStats = {
        totalImages: imageCount, // Реальное количество отсканированных изображений
        totalVideos: 6,
        totalTexts: 45,
        totalSubmissions: submissionsTotal,
        recentActivity: [
          { id: 1, action: t('imagesFound') + `: ${imageCount}`, time: '1m', type: 'image' },
          { id: 2, action: t('action.editVideos.title'), time: '4h', type: 'video' },
          { id: 3, action: t('action.editTexts.title'), time: '1d', type: 'text' },
          { id: 4, action: t('recentSubmissions'), time: '2d', type: 'submission' },
        ]
      };
      
      setStats(mockStats);
    } catch (error) {
      console.error('Ошибка при загрузке данных дашборда:', error);
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    {
      title: 'Управление изображениями',
      description: 'Просмотр и замена изображений сайта',
        icon: ImageIcon,
        color: 'bg-blue-500',
        action: () => navigate('/dashboard/media'),
    },
    {
      title: 'Редактировать видео',
      description: 'Изменить YouTube видео на сайте',
        icon: PlayIcon,
        color: 'bg-red-500',
        action: () => navigate('/dashboard/videos'),
    },
    {
      title: 'Изменить тексты',
      description: 'Редактировать тексты на трех языках',
        icon: TypeIcon,
        color: 'bg-green-500',
        action: () => navigate('/dashboard/texts'),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">{t('loading')}</div>
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-light text-gray-800 mb-1">{t('welcomeTitle')}</h1>
          <p className="text-sm text-gray-500">{t('welcomeSubtitle')}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ImageIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{t('stats.images')}</p>
                <p className="text-2xl font-light text-gray-900">{stats.totalImages}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <PlayIcon className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{t('stats.videos')}</p>
                <p className="text-2xl font-light text-gray-900">{stats.totalVideos}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <TypeIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{t('stats.texts')}</p>
                <p className="text-2xl font-light text-gray-900">{stats.totalTexts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <ClipboardListIcon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{t('stats.submissions')}</p>
                <p className="text-2xl font-light text-gray-900">{stats.totalSubmissions}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-medium text-gray-900 mb-4">{t('quickActions')}</h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-full text-left bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 ${action.color} rounded-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{t(action.title)}</p>
                        <p className="text-sm text-gray-500">{t(action.description)}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-medium text-gray-900 mb-4">{t('recentActivity')}</h2>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="divide-y divide-gray-100">
                {stats.recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Activity className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        {submissions.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">{t('recentSubmissions')}</h2>
              <button 
                onClick={() => navigate('/dashboard/submissions')}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                {t('viewAll')}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-100">
                {submissions.slice(0, 3).map((submission) => (
                  <div key={submission.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{submission.name}</p>
                        <p className="text-sm text-gray-500">{submission.phone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          {new Date(submission.date).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-400">{submission.area} m²</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              </div>
            )}
        </motion.div>
      </div>
  );
}