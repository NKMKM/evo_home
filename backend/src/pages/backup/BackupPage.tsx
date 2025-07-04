import React from 'react';
import { DownloadIcon, UploadIcon, SaveIcon, DatabaseIcon, ClockIcon, FileIcon, RefreshCwIcon } from 'lucide-react';
const BackupPage = () => {
  const backups = [{
    id: 1,
    name: 'Full Backup',
    date: '2023-05-15 10:30 AM',
    size: '24.5 MB',
    type: 'Manual'
  }, {
    id: 2,
    name: 'Automated Backup',
    date: '2023-05-14 10:00 AM',
    size: '24.2 MB',
    type: 'Automated'
  }, {
    id: 3,
    name: 'Automated Backup',
    date: '2023-05-13 10:00 AM',
    size: '23.8 MB',
    type: 'Automated'
  }, {
    id: 4,
    name: 'Pre-Update Backup',
    date: '2023-05-12 02:15 PM',
    size: '23.5 MB',
    type: 'Manual'
  }, {
    id: 5,
    name: 'Automated Backup',
    date: '2023-05-12 10:00 AM',
    size: '23.5 MB',
    type: 'Automated'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Backup & Restore</h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <UploadIcon size={16} className="mr-2" />
            Import
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <SaveIcon size={16} className="mr-2" />
            Create Backup
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Backup List */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-3 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Backup History
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <RefreshCwIcon size={14} className="mr-1" />
              Refresh
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {backups.map(backup => <tr key={backup.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {backup.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {backup.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {backup.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${backup.type === 'Manual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {backup.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Restore
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Download
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        {/* Backup Settings */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Backup Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Automatic Backups
                </label>
                <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Disabled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Backup Time
                </label>
                <input type="time" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value="10:00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Retention Period
                </label>
                <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Keep 5 most recent</option>
                  <option>Keep 10 most recent</option>
                  <option>Keep 30 most recent</option>
                  <option>Keep all backups</option>
                </select>
              </div>
              <div className="flex items-center">
                <input id="backup-before-update" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <label htmlFor="backup-before-update" className="ml-2 block text-sm text-gray-900">
                  Create backup before updates
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Import / Export
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Backup File
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <UploadIcon size={24} className="mx-auto text-gray-400" />
                  <p className="mt-1 text-sm text-gray-500">
                    Drag and drop a backup file here, or click to select
                  </p>
                  <button className="mt-2 px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                    Select File
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Export Data
                </label>
                <div className="space-y-2">
                  <button className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <FileIcon size={16} className="mr-2 text-gray-500" />
                    Export as CSV
                  </button>
                  <button className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <FileIcon size={16} className="mr-2 text-gray-500" />
                    Export as Excel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Storage Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Storage Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">
                Total Storage
              </h3>
              <span className="text-sm text-gray-500">100 GB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: '35%'
            }}></div>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>35 GB used</span>
              <span>65 GB free</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
              <DatabaseIcon size={24} className="text-blue-500 mr-3" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">Database</h3>
                <p className="text-xs text-gray-500">12.5 GB</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
              <FileIcon size={24} className="text-green-500 mr-3" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Media Files
                </h3>
                <p className="text-xs text-gray-500">22.5 GB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BackupPage;