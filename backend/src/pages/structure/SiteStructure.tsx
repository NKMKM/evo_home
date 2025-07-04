import React, { useState } from 'react';
import { FolderIcon, FileTextIcon, PlusIcon, SaveIcon, ChevronDownIcon, ChevronRightIcon, EditIcon, TrashIcon, MoveIcon } from 'lucide-react';
const SiteStructure = () => {
  const [expandedSections, setExpandedSections] = useState({
    main: true,
    products: false,
    blog: true
  });
  const toggleSection = sectionId => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId]
    });
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Site Structure</h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <PlusIcon size={16} className="mr-2" />
            Add Section
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <SaveIcon size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation Structure */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Navigation Structure
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Drag and drop items to reorder. Click on items to edit their
            properties.
          </p>
          <div className="border border-gray-200 rounded-lg">
            {/* Main Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex items-center p-3 bg-gray-50 cursor-pointer" onClick={() => toggleSection('main')}>
                <span className="mr-2">
                  {expandedSections.main ? <ChevronDownIcon size={16} className="text-gray-500" /> : <ChevronRightIcon size={16} className="text-gray-500" />}
                </span>
                <FolderIcon size={16} className="text-blue-500 mr-2" />
                <span className="font-medium">Main Navigation</span>
              </div>
              {expandedSections.main && <div className="p-2 pl-8 space-y-1">
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Home</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>About Us</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Services</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Contact</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
            {/* Products Section */}
            <div className="border-b border-gray-200">
              <div className="flex items-center p-3 bg-gray-50 cursor-pointer" onClick={() => toggleSection('products')}>
                <span className="mr-2">
                  {expandedSections.products ? <ChevronDownIcon size={16} className="text-gray-500" /> : <ChevronRightIcon size={16} className="text-gray-500" />}
                </span>
                <FolderIcon size={16} className="text-green-500 mr-2" />
                <span className="font-medium">Products</span>
              </div>
              {expandedSections.products && <div className="p-2 pl-8 space-y-1">
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>All Products</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Product Category 1</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Product Category 2</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
            {/* Blog Section */}
            <div>
              <div className="flex items-center p-3 bg-gray-50 cursor-pointer" onClick={() => toggleSection('blog')}>
                <span className="mr-2">
                  {expandedSections.blog ? <ChevronDownIcon size={16} className="text-gray-500" /> : <ChevronRightIcon size={16} className="text-gray-500" />}
                </span>
                <FolderIcon size={16} className="text-purple-500 mr-2" />
                <span className="font-medium">Blog</span>
              </div>
              {expandedSections.blog && <div className="p-2 pl-8 space-y-1">
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>All Posts</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Category: Technology</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Category: News</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div className="flex items-center">
                      <FileTextIcon size={14} className="text-gray-500 mr-2" />
                      <span>Category: Tutorials</span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoveIcon size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <EditIcon size={14} />
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        {/* Menu Properties */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Menu Properties
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Edit properties for the selected menu item.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Menu Label
              </label>
              <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Menu label" value="About Us" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL / Slug
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  /
                </span>
                <input type="text" className="flex-1 block w-full py-2 px-3 border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="page-slug" value="about" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Menu Type
              </label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Page</option>
                <option>Category</option>
                <option>External Link</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Parent Menu
              </label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>None (Top Level)</option>
                <option>Main Navigation</option>
                <option>Products</option>
                <option>Blog</option>
              </select>
            </div>
            <div className="flex items-center">
              <input id="open-new-tab" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="open-new-tab" className="ml-2 block text-sm text-gray-900">
                Open in new tab
              </label>
            </div>
            <div className="pt-4 flex justify-between">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Cancel
              </button>
              <div className="space-x-2">
                <button className="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50">
                  <TrashIcon size={16} className="inline mr-1" />
                  Delete
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Content Types */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Custom Content Types
          </h2>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <PlusIcon size={16} className="mr-2" />
            Add Content Type
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Create and manage custom content types for your website.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fields
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entries
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Products
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  products
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  12
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  24
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Team Members
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  team
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  8
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Testimonials
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  testimonials
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  12
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default SiteStructure;