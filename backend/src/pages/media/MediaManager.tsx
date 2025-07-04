import React, { useEffect, useState, useRef, createElement } from 'react';
import { SearchIcon, FilterIcon, UploadIcon, TrashIcon, ImageIcon, FileIcon, FilmIcon, DownloadIcon, EditIcon, InfoIcon, XIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import { dataService, MediaItem } from '../../services/dataService';
const MediaManager = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState('grid');
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<MediaItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  // Fetch media items
  useEffect(() => {
    const fetchMedia = async () => {
      setIsLoading(true);
      try {
        const type = activeTab !== 'all' ? activeTab : undefined;
        const items = await dataService.getMediaItems(type);
        setMediaItems(items);
      } catch (error) {
        console.error('Error fetching media:', error);
        toast.error('Failed to load media items');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, [activeTab]);
  // Filter media items based on search
  const filteredItems = mediaItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const toggleItemSelection = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  const selectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map(item => item.id));
    }
  };
  const handleDelete = async () => {
    if (selectedItems.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} item(s)? This action cannot be undone.`)) {
      try {
        for (const id of selectedItems) {
          await dataService.deleteMedia(id);
        }
        setMediaItems(mediaItems.filter(item => !selectedItems.includes(item.id)));
        setSelectedItems([]);
        toast.success(`${selectedItems.length} item(s) deleted successfully`);
      } catch (error) {
        console.error('Error deleting media:', error);
        toast.error('Failed to delete some items');
      }
    }
  };
  const openUploadModal = () => {
    setUploadingFiles([]);
    setShowUploadModal(true);
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingFiles(Array.from(e.target.files));
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.add('border-blue-500');
      dropZoneRef.current.classList.add('bg-blue-50');
    }
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-blue-500');
      dropZoneRef.current.classList.remove('bg-blue-50');
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-blue-500');
      dropZoneRef.current.classList.remove('bg-blue-50');
    }
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadingFiles(Array.from(e.dataTransfer.files));
    }
  };
  const handleUpload = async () => {
    if (uploadingFiles.length === 0) return;
    setIsUploading(true);
    try {
      const newItems: MediaItem[] = [];
      for (const file of uploadingFiles) {
        const newItem = await dataService.uploadMedia(file);
        newItems.push(newItem);
      }
      setMediaItems([...newItems, ...mediaItems]);
      setShowUploadModal(false);
      toast.success(`${uploadingFiles.length} file(s) uploaded successfully`);
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error('Failed to upload some files');
    } finally {
      setIsUploading(false);
    }
  };
  const openMediaViewer = (item: MediaItem) => {
    setCurrentItem(item);
    setViewerOpen(true);
  };
  const removeFileFromUpload = (index: number) => {
    setUploadingFiles(uploadingFiles.filter((_, i) => i !== index));
  };
  const downloadSelectedItems = () => {
    // In a real app, this would trigger downloads for each selected item
    toast.info(`Downloading ${selectedItems.length} file(s)`);
    // For demo purposes, we'll just simulate a download for the first item
    if (selectedItems.length > 0) {
      const item = mediaItems.find(item => item.id === selectedItems[0]);
      if (item && item.type === 'image') {
        const link = document.createElement('a');
        link.href = item.url;
        link.download = item.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Media Manager</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={openUploadModal}>
          <UploadIcon size={16} className="mr-2" />
          Upload Media
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={16} className="text-gray-400" />
            </div>
            <input type="text" placeholder="Search media..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FilterIcon size={16} className="text-gray-500" />
              <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>All Dates</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`} onClick={() => setViewMode('grid')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`} onClick={() => setViewMode('list')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Type Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button onClick={() => setActiveTab('all')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'all' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              All Media
            </button>
            <button onClick={() => setActiveTab('image')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'image' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Images
            </button>
            <button onClick={() => setActiveTab('document')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'document' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Documents
            </button>
            <button onClick={() => setActiveTab('video')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'video' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Videos
            </button>
          </nav>
        </div>

        {/* Media Actions */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" checked={selectedItems.length > 0 && selectedItems.length === filteredItems.length} onChange={selectAll} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <span className="ml-2 text-sm text-gray-700">
              {selectedItems.length} selected
            </span>
          </div>
          {selectedItems.length > 0 && <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded" onClick={downloadSelectedItems}>
                <DownloadIcon size={14} className="inline mr-1" />
                Download
              </button>
              <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded" onClick={handleDelete}>
                <TrashIcon size={14} className="inline mr-1" />
                Delete
              </button>
            </div>}
        </div>

        {/* Media Grid/List */}
        <div className={`p-4 ${isLoading ? '' : viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4' : 'space-y-2'}`}>
          {isLoading ? <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
              <p className="mt-2 text-gray-500">Loading media...</p>
            </div> : filteredItems.length === 0 ? <div className="p-8 text-center col-span-full">
              <p className="text-gray-500">No media items found</p>
            </div> : <>
              {filteredItems.map(item => viewMode === 'grid' ? <div key={item.id} className={`border rounded-lg overflow-hidden cursor-pointer ${selectedItems.includes(item.id) ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`} onClick={() => toggleItemSelection(item.id)} onDoubleClick={() => openMediaViewer(item)}>
                    {item.type === 'image' ? <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                        <img src={item.url} alt={item.name} className="w-full h-32 object-cover" />
                      </div> : item.type === 'document' ? <div className="h-32 flex items-center justify-center bg-gray-50">
                        <FileIcon size={40} className="text-gray-400" />
                      </div> : <div className="h-32 flex items-center justify-center bg-gray-50">
                        <FilmIcon size={40} className="text-gray-400" />
                      </div>}
                    <div className="p-2">
                      <div className="truncate text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.size}</div>
                    </div>
                  </div> : <div key={item.id} className={`flex items-center p-2 rounded ${selectedItems.includes(item.id) ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                    <input type="checkbox" checked={selectedItems.includes(item.id)} onChange={() => toggleItemSelection(item.id)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3" />
                    <div className="w-10 h-10 flex-shrink-0 mr-3 cursor-pointer" onClick={() => openMediaViewer(item)}>
                      {item.type === 'image' ? <img src={item.url} alt={item.name} className="w-full h-full object-cover rounded" /> : item.type === 'document' ? <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                          <FileIcon size={20} className="text-gray-500" />
                        </div> : <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                          <FilmIcon size={20} className="text-gray-500" />
                        </div>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.size} • {item.date}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-2">
                      <button className="p-1 text-gray-500 hover:text-gray-700" onClick={() => openMediaViewer(item)}>
                        <InfoIcon size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <EditIcon size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <DownloadIcon size={16} />
                      </button>
                      <button className="p-1 text-red-500 hover:text-red-700" onClick={e => {
                e.stopPropagation();
                setSelectedItems([item.id]);
                handleDelete();
              }}>
                        <TrashIcon size={16} />
                      </button>
                    </div>
                  </div>)}
              {/* Upload Area for Grid View */}
              {viewMode === 'grid' && <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 bg-gray-50 cursor-pointer hover:bg-gray-100" onClick={openUploadModal}>
                  <div className="text-center p-4">
                    <UploadIcon size={24} className="mx-auto text-gray-400" />
                    <p className="mt-1 text-sm text-gray-500">Upload Media</p>
                  </div>
                </div>}
            </>}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Upload Media
              </h3>
              <button className="text-gray-400 hover:text-gray-500" onClick={() => setShowUploadModal(false)}>
                <XIcon size={20} />
              </button>
            </div>
            <div className="p-6">
              {/* Drop Zone */}
              <div ref={dropZoneRef} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4 transition-colors" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
                <UploadIcon size={36} className="mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Drag and drop files here, or click to select files
                </p>
                <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileInputChange} />
              </div>
              {/* Selected Files */}
              {uploadingFiles.length > 0 && <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Selected Files ({uploadingFiles.length})
                  </h4>
                  <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-md">
                    {uploadingFiles.map((file, index) => <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center">
                          {file.type.startsWith('image/') ? <ImageIcon size={16} className="text-blue-500 mr-2" /> : file.type.startsWith('video/') ? <FilmIcon size={16} className="text-purple-500 mr-2" /> : <FileIcon size={16} className="text-yellow-500 mr-2" />}
                          <span className="text-sm truncate max-w-xs">
                            {file.name}
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-red-500" onClick={() => removeFileFromUpload(index)}>
                          <XIcon size={16} />
                        </button>
                      </div>)}
                  </div>
                </div>}
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={() => setShowUploadModal(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50" onClick={handleUpload} disabled={uploadingFiles.length === 0 || isUploading}>
                {isUploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </div>
        </div>}

      {/* Media Viewer Modal */}
      {viewerOpen && currentItem && <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                {currentItem.name}
              </h3>
              <button className="text-gray-400 hover:text-gray-500" onClick={() => setViewerOpen(false)}>
                <XIcon size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 mb-4 md:mb-0 md:mr-4">
                  {currentItem.type === 'image' ? <img src={currentItem.url} alt={currentItem.name} className="max-h-96 mx-auto object-contain" /> : currentItem.type === 'document' ? <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                      <FileIcon size={64} className="text-gray-400" />
                    </div> : <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                      <FilmIcon size={64} className="text-gray-400" />
                    </div>}
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    File Details
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Name:</span>
                      <span className="text-sm text-gray-900">
                        {currentItem.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Type:</span>
                      <span className="text-sm text-gray-900 capitalize">
                        {currentItem.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Size:</span>
                      <span className="text-sm text-gray-900">
                        {currentItem.size}
                      </span>
                    </div>
                    {currentItem.dimensions && <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Dimensions:
                        </span>
                        <span className="text-sm text-gray-900">
                          {currentItem.dimensions}
                        </span>
                      </div>}
                    {currentItem.duration && <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Duration:</span>
                        <span className="text-sm text-gray-900">
                          {currentItem.duration}
                        </span>
                      </div>}
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Date Added:</span>
                      <span className="text-sm text-gray-900">
                        {currentItem.date}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <input type="text" value={currentItem.url} readOnly className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm" onClick={e => {
                  e.currentTarget.select();
                  document.execCommand('copy');
                  toast.success('URL copied to clipboard');
                }} />
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={() => {
                  const link = document.createElement('a');
                  link.href = currentItem.url;
                  link.download = currentItem.name;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}>
                      <DownloadIcon size={16} className="inline mr-2" />
                      Download
                    </button>
                    <button className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors" onClick={() => {
                  setViewerOpen(false);
                  setSelectedItems([currentItem.id]);
                  setTimeout(() => handleDelete(), 300);
                }}>
                      <TrashIcon size={16} className="inline mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
export default MediaManager;