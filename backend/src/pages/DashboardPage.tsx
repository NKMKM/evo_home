import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, ImageIcon, UsersIcon, EyeIcon, TrendingUpIcon, AlertCircleIcon } from 'lucide-react';
import { toast } from 'react-toastify';
const DashboardPage = () => {
  const navigate = useNavigate();
  // Mock data for dashboard
  const stats = [{
    title: 'Total Pages',
    value: '126',
    icon: <FileTextIcon size={24} />,
    color: 'bg-blue-500'
  }, {
    title: 'Media Files',
    value: '342',
    icon: <ImageIcon size={24} />,
    color: 'bg-green-500'
  }, {
    title: 'Visitors Today',
    value: '1,204',
    icon: <UsersIcon size={24} />,
    color: 'bg-purple-500'
  }, {
    title: 'Page Views',
    value: '5,721',
    icon: <EyeIcon size={24} />,
    color: 'bg-yellow-500'
  }];
  const recentPages = [{
    id: 1,
    title: 'Home Page',
    status: 'Published',
    date: '2023-05-15',
    author: 'Admin'
  }, {
    id: 2,
    title: 'About Us',
    status: 'Published',
    date: '2023-05-14',
    author: 'Admin'
  }, {
    id: 3,
    title: 'Services',
    status: 'Draft',
    date: '2023-05-13',
    author: 'Editor'
  }, {
    id: 4,
    title: 'Contact Page',
    status: 'Published',
    date: '2023-05-12',
    author: 'Admin'
  }, {
    id: 5,
    title: 'Blog Post: New Features',
    status: 'Draft',
    date: '2023-05-11',
    author: 'Writer'
  }];
  const seoIssues = [{
    id: 1,
    page: 'Products',
    issue: 'Missing meta description',
    severity: 'Medium'
  }, {
    id: 2,
    page: 'Blog',
    issue: 'Duplicate title tags',
    severity: 'High'
  }, {
    id: 3,
    page: 'Contact',
    issue: 'No alt tags on images',
    severity: 'Low'
  }, {
    id: 4,
    page: 'About',
    issue: 'Slow page load time',
    severity: 'Medium'
  }];
  const handleCreatePage = () => {
    navigate('/pages/new');
  };
  const handleViewReports = () => {
    toast.info('Reports feature would open here');
  };
  const handleViewAllPages = () => {
    navigate('/pages');
  };
  const handleFixAllSEOIssues = () => {
    toast.info('SEO issues would be fixed automatically');
  };
  const handleFixSingleIssue = (id: number) => {
    toast.success(`Fixed issue #${id}`);
  };
  const handleViewPage = (id: number) => {
    navigate(`/pages/edit/${id}`);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={handleCreatePage}>
            Create New Page
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors" onClick={handleViewReports}>
            View Reports
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow" onClick={() => {
        if (index === 0) navigate('/pages');else if (index === 1) navigate('/media');else toast.info(`Viewing ${stat.title} statistics`);
      }}>
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Pages */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Pages
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-800" onClick={handleViewAllPages}>
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPages.map(page => <tr key={page.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleViewPage(page.id)}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {page.title}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${page.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {page.date}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {page.author}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Issues */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">SEO Issues</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800" onClick={handleFixAllSEOIssues}>
              Fix All
            </button>
          </div>
          <div className="space-y-4">
            {seoIssues.map(issue => <div key={issue.id} className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div className={`p-2 rounded-full mr-3 ${issue.severity === 'High' ? 'bg-red-100 text-red-600' : issue.severity === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                  <AlertCircleIcon size={16} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{issue.page}</p>
                  <p className="text-sm text-gray-500">{issue.issue}</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm text-blue-600 hover:text-blue-800" onClick={() => handleFixSingleIssue(issue.id)}>
                    Fix
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Traffic Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Traffic Overview
          </h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md">
              Day
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              Week
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              Month
            </button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center">
          <div className="flex items-center text-gray-400">
            <TrendingUpIcon size={24} className="mr-2" />
            <span>Traffic chart visualization would appear here</span>
          </div>
        </div>
      </div>
    </div>;
};
export default DashboardPage;