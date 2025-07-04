import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, SearchIcon, FilterIcon, EditIcon, TrashIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import { dataService, Page } from '../../services/dataService';
const PagesListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [pages, setPages] = useState<Page[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(2); // In a real app, this would come from the API
  const itemsPerPage = 10;
  // Fetch pages on component mount
  useEffect(() => {
    const fetchPages = async () => {
      setIsLoading(true);
      try {
        const data = await dataService.getPages();
        setPages(data);
      } catch (error) {
        console.error('Error fetching pages:', error);
        toast.error('Failed to load pages');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPages();
  }, []);
  // Handle page deletion
  const handleDeletePage = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this page? This action cannot be undone.')) {
      try {
        await dataService.deletePage(id);
        setPages(pages.filter(page => page.id !== id));
        toast.success('Page deleted successfully');
      } catch (error) {
        console.error('Error deleting page:', error);
        toast.error('Failed to delete page');
      }
    }
  };
  // Filter pages based on search term and filters
  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) || page.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || page.status === selectedStatus;
    const matchesType = selectedType === 'all' || page.type === selectedType;
    return matchesSearch && matchesStatus && matchesType;
  });
  // Pagination
  const paginatedPages = filteredPages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePreviewPage = (slug: string) => {
    // In a real app, this would open the page in a new tab
    toast.info(`Preview page: ${slug}`);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Pages & Content</h1>
        <Link to="/pages/new" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <PlusIcon size={16} className="mr-2" />
          Create New
        </Link>
      </div>
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={16} className="text-gray-400" />
            </div>
            <input type="text" placeholder="Search pages..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FilterIcon size={16} className="text-gray-500" />
              <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)} className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <FilterIcon size={16} className="text-gray-500" />
              <select value={selectedType} onChange={e => setSelectedType(e.target.value)} className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="all">All Types</option>
                <option value="page">Page</option>
                <option value="blog">Blog</option>
                <option value="product">Product</option>
                <option value="news">News</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Pages Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          {isLoading ? <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
              <p className="mt-2 text-gray-500">Loading pages...</p>
            </div> : filteredPages.length === 0 ? <div className="p-8 text-center">
              <p className="text-gray-500">
                No pages found matching your filters
              </p>
            </div> : <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedPages.map(page => <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {page.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {page.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">
                        {page.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${page.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {page.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {page.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-900" onClick={() => handlePreviewPage(page.slug)}>
                          <EyeIcon size={16} />
                        </button>
                        <Link to={`/pages/edit/${page.id}`} className="p-1 text-indigo-600 hover:text-indigo-900">
                          <EditIcon size={16} />
                        </Link>
                        <button className="p-1 text-red-600 hover:text-red-900" onClick={() => handleDeletePage(page.id)}>
                          <TrashIcon size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>}
        </div>
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{' '}
                <span className="font-medium">
                  {(currentPage - 1) * itemsPerPage + 1}
                </span>{' '}
                to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, filteredPages.length)}
                </span>{' '}
                of <span className="font-medium">{filteredPages.length}</span>{' '}
                results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon size={16} />
                </button>
                {Array.from({
                length: totalPages
              }, (_, i) => i + 1).map(page => <button key={page} onClick={() => setCurrentPage(page)} className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${currentPage === page ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                    {page}
                  </button>)}
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon size={16} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PagesListPage;