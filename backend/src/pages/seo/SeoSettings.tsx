import React from 'react';
import { SearchIcon, RefreshCwIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon, FileTextIcon, LinkIcon, CodeIcon } from 'lucide-react';
const SeoSettings = () => {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">SEO Settings</h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <SearchIcon size={16} className="mr-2" />
            Check SEO
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <RefreshCwIcon size={16} className="mr-2" />
            Generate Sitemap
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SEO Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* SEO Score Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              SEO Health Score
            </h2>
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{
                width: '75%'
              }}></div>
              </div>
              <span className="ml-4 text-xl font-bold text-green-500">75%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                <div className="flex items-center">
                  <CheckCircleIcon size={20} className="text-green-500 mr-2" />
                  <span className="font-medium">15 Passed</span>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <div className="flex items-center">
                  <AlertTriangleIcon size={20} className="text-yellow-500 mr-2" />
                  <span className="font-medium">5 Warnings</span>
                </div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                <div className="flex items-center">
                  <XCircleIcon size={20} className="text-red-500 mr-2" />
                  <span className="font-medium">3 Errors</span>
                </div>
              </div>
            </div>
          </div>
          {/* SEO Issues Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
              <h2 className="text-lg font-medium text-gray-900">SEO Issues</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issue
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Severity
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Home Page
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Meta description too short
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Warning
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Fix
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Products Page
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Missing alt text on images
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Error
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Fix
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Blog
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Duplicate title tags
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Error
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Fix
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      About Us
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Slow page loading time
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Warning
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Fix
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Contact
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Missing schema markup
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Warning
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Fix
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* XML Sitemap */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">XML Sitemap</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                  View Sitemap
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                  Submit to Google
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <FileTextIcon size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">sitemap.xml</span>
                </div>
                <div className="text-sm text-gray-500">
                  Last generated: May 15, 2023, 10:30 AM
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <FileTextIcon size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">
                    sitemap-posts.xml
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Last generated: May 15, 2023, 10:30 AM
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <FileTextIcon size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">
                    sitemap-pages.xml
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Last generated: May 15, 2023, 10:30 AM
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <FileTextIcon size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">
                    sitemap-products.xml
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Last generated: May 15, 2023, 10:30 AM
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SEO Settings Sidebar */}
        <div className="space-y-6">
          {/* Global SEO Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Global SEO Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Site Title
                </label>
                <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your Site Title" value="My Awesome Website" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meta Description
                </label>
                <textarea className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows={3} placeholder="Default meta description" value="A comprehensive website offering products and services for all your needs." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meta Keywords
                </label>
                <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="keyword1, keyword2, keyword3" value="products, services, solutions, business" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Separator
                </label>
                <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>|</option>
                  <option>-</option>
                  <option>›</option>
                  <option>•</option>
                  <option>:</option>
                </select>
              </div>
              <div className="flex items-center">
                <input id="noindex" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="noindex" className="ml-2 block text-sm text-gray-900">
                  Discourage search engines from indexing this site
                </label>
              </div>
            </div>
          </div>
          {/* Robots.txt */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Robots.txt
            </h2>
            <textarea className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm" rows={8} value={`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/
Sitemap: https://example.com/sitemap.xml`} />
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Save
              </button>
            </div>
          </div>
          {/* Social Media Preview */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Social Media Preview
            </h2>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="bg-white rounded border border-gray-300 overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-3">
                    <div className="text-blue-600 font-medium text-sm truncate">
                      My Awesome Website
                    </div>
                    <div className="text-gray-900 font-bold truncate">
                      Welcome to My Awesome Website
                    </div>
                    <div className="text-gray-500 text-sm line-clamp-2">
                      A comprehensive website offering products and services for
                      all your needs.
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      example.com
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">
                  Facebook / LinkedIn Preview
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div className="ml-3 flex-1">
                    <div className="text-gray-500 text-xs">example.com</div>
                    <div className="text-gray-900 font-bold">
                      Welcome to My Awesome Website
                    </div>
                    <div className="text-gray-500 text-sm line-clamp-2">
                      A comprehensive website offering products and services for
                      all your needs.
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">
                  Twitter Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Schema Markup */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Schema Markup</h2>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <CodeIcon size={16} className="mr-2" />
            Add Schema
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Add structured data to help search engines understand your content
          better.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CodeIcon size={16} className="text-blue-500 mr-2" />
                <span className="font-medium">Organization</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">Applied to: Global</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CodeIcon size={16} className="text-blue-500 mr-2" />
                <span className="font-medium">LocalBusiness</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Applied to: Contact Page
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CodeIcon size={16} className="text-blue-500 mr-2" />
                <span className="font-medium">Product</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Applied to: Product Pages
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CodeIcon size={16} className="text-blue-500 mr-2" />
                <span className="font-medium">Article</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">Applied to: Blog Posts</div>
          </div>
        </div>
      </div>
    </div>;
};
export default SeoSettings;