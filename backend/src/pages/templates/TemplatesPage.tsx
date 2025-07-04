import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusIcon, TrashIcon, CopyIcon, EyeIcon, LayoutIcon, SidebarIcon, ColumnsIcon, LayoutGridIcon, FileTextIcon, EditIcon, CheckIcon } from 'lucide-react';
import { toast } from 'react-toastify';
const TemplatesPage = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([{
    id: 1,
    name: 'Default Template',
    type: 'Page',
    usage: 12,
    lastModified: '2023-05-15'
  }, {
    id: 2,
    name: 'Blog Post',
    type: 'Post',
    usage: 24,
    lastModified: '2023-05-14'
  }, {
    id: 3,
    name: 'Landing Page',
    type: 'Page',
    usage: 3,
    lastModified: '2023-05-13'
  }, {
    id: 4,
    name: 'Product Page',
    type: 'Product',
    usage: 18,
    lastModified: '2023-05-12'
  }, {
    id: 5,
    name: 'Contact Form',
    type: 'Page',
    usage: 1,
    lastModified: '2023-05-11'
  }]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null);
  const handleCreateTemplate = () => {
    navigate('/templates/new');
  };
  const handleEditTemplate = (id: number) => {
    navigate(`/templates/edit/${id}`);
  };
  const handlePreviewTemplate = (id: number) => {
    toast.info(`Previewing template #${id}`);
    // In a real app, this would open a preview in a new tab
  };
  const handleDuplicateTemplate = (id: number) => {
    const templateToDuplicate = templates.find(t => t.id === id);
    if (templateToDuplicate) {
      const newTemplate = {
        ...templateToDuplicate,
        id: Math.max(...templates.map(t => t.id)) + 1,
        name: `${templateToDuplicate.name} (Copy)`,
        lastModified: new Date().toLocaleDateString()
      };
      setTemplates([...templates, newTemplate]);
      toast.success(`Template "${templateToDuplicate.name}" duplicated`);
    }
  };
  const handleDeleteTemplate = (id: number) => {
    setTemplates(templates.filter(t => t.id !== id));
    setShowDeleteConfirm(null);
    toast.success('Template deleted successfully');
  };
  const confirmDelete = (id: number) => {
    setShowDeleteConfirm(id);
  };
  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Templates</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={handleCreateTemplate}>
          <PlusIcon size={16} className="mr-2" />
          Create Template
        </button>
      </div>
      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(template => <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center cursor-pointer" onClick={() => handleEditTemplate(template.id)}>
              {template.type === 'Page' && <LayoutIcon size={40} className="text-gray-400" />}
              {template.type === 'Post' && <FileTextIcon size={40} className="text-gray-400" />}
              {template.type === 'Product' && <LayoutGridIcon size={40} className="text-gray-400" />}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                {template.name}
              </h3>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                  {template.type}
                </span>
                <span>Used in {template.usage} pages</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Modified: {template.lastModified}
                </div>
                <div className="flex space-x-1">
                  <button className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100" onClick={() => handlePreviewTemplate(template.id)} title="Preview">
                    <EyeIcon size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100" onClick={() => handleEditTemplate(template.id)} title="Edit">
                    <EditIcon size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100" onClick={() => handleDuplicateTemplate(template.id)} title="Duplicate">
                    <CopyIcon size={16} />
                  </button>
                  <button className="p-1 text-red-500 hover:text-red-700 rounded-full hover:bg-red-100" onClick={() => confirmDelete(template.id)} title="Delete">
                    <TrashIcon size={16} />
                  </button>
                </div>
              </div>
              {/* Delete confirmation */}
              {showDeleteConfirm === template.id && <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-700 mb-2">
                    Delete this template?
                  </p>
                  <div className="flex justify-end space-x-2">
                    <button className="px-2 py-1 text-xs text-gray-600 hover:text-gray-800" onClick={cancelDelete}>
                      Cancel
                    </button>
                    <button className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700" onClick={() => handleDeleteTemplate(template.id)}>
                      Delete
                    </button>
                  </div>
                </div>}
            </div>
          </div>)}
        {/* Create Template Card */}
        <div className="bg-white rounded-lg shadow-sm border border-dashed border-gray-300 overflow-hidden flex items-center justify-center h-64 cursor-pointer hover:bg-gray-50" onClick={handleCreateTemplate}>
          <div className="text-center p-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <PlusIcon size={24} className="text-blue-600" />
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">
              Create New Template
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Start from scratch or duplicate an existing template
            </p>
          </div>
        </div>
      </div>
      {/* Template Layouts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Template Layouts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-sm cursor-pointer" onClick={() => {
          navigate('/templates/new');
          toast.info('Default layout selected');
        }}>
            <div className="h-32 flex items-center justify-center bg-gray-50">
              <LayoutIcon size={32} className="text-gray-400" />
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-medium text-gray-900">Default</h3>
              <p className="text-xs text-gray-500">Standard layout</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-sm cursor-pointer" onClick={() => {
          navigate('/templates/new');
          toast.info('Full Width layout selected');
        }}>
            <div className="h-32 flex items-center justify-center bg-gray-50">
              <ColumnsIcon size={32} className="text-gray-400" />
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-medium text-gray-900">Full Width</h3>
              <p className="text-xs text-gray-500">No sidebar</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-sm cursor-pointer" onClick={() => {
          navigate('/templates/new');
          toast.info('Left Sidebar layout selected');
        }}>
            <div className="h-32 flex items-center justify-center bg-gray-50">
              <SidebarIcon size={32} className="text-gray-400" />
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-medium text-gray-900">Left Sidebar</h3>
              <p className="text-xs text-gray-500">Sidebar on left</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-sm cursor-pointer" onClick={() => {
          navigate('/templates/new');
          toast.info('Right Sidebar layout selected');
        }}>
            <div className="h-32 flex items-center justify-center bg-gray-50 transform rotate-180">
              <SidebarIcon size={32} className="text-gray-400" />
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-medium text-gray-900">Right Sidebar</h3>
              <p className="text-xs text-gray-500">Sidebar on right</p>
            </div>
          </div>
        </div>
      </div>
      {/* CSS Customization */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          CSS Customization
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom CSS
            </label>
            <textarea className="w-full h-64 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm" placeholder="/* Add your custom CSS here */"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Scheme
            </label>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Primary Color
                </label>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-l border border-gray-300 bg-blue-600"></div>
                  <input type="text" value="#3B82F6" className="flex-1 py-1 px-3 border border-l-0 border-gray-300 rounded-r" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Secondary Color
                </label>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-l border border-gray-300 bg-gray-800"></div>
                  <input type="text" value="#1F2937" className="flex-1 py-1 px-3 border border-l-0 border-gray-300 rounded-r" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Accent Color
                </label>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-l border border-gray-300 bg-green-500"></div>
                  <input type="text" value="#10B981" className="flex-1 py-1 px-3 border border-l-0 border-gray-300 rounded-r" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Background Color
                </label>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-l border border-gray-300 bg-gray-50"></div>
                  <input type="text" value="#F9FAFB" className="flex-1 py-1 px-3 border border-l-0 border-gray-300 rounded-r" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Text Color
                </label>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-l border border-gray-300 bg-gray-900"></div>
                  <input type="text" value="#111827" className="flex-1 py-1 px-3 border border-l-0 border-gray-300 rounded-r" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={() => toast.success('Color scheme saved successfully')}>
            <CheckIcon size={16} className="inline mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>;
};
export default TemplatesPage;