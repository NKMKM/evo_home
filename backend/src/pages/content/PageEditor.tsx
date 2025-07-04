import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SaveIcon, EyeIcon, ClockIcon, CheckIcon, ChevronDownIcon, ImageIcon, LinkIcon, TableIcon, CodeIcon, BoldIcon, ItalicIcon, ListIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import { dataService, Page } from '../../services/dataService';
const PageEditor = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== undefined;
  const pageId = id ? parseInt(id) : undefined;
  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [type, setType] = useState('page');
  const [publishDate, setPublishDate] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');
  const [activeTab, setActiveTab] = useState('content');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  // Fetch page data if editing
  useEffect(() => {
    if (isEditing && pageId) {
      const fetchPage = async () => {
        try {
          const pageData = await dataService.getPage(pageId);
          if (pageData) {
            setTitle(pageData.title);
            setSlug(pageData.slug);
            setContent(pageData.content || '');
            setStatus(pageData.status);
            setType(pageData.type);
            setPublishDate(pageData.date);
            setMetaTitle(pageData.meta?.title || '');
            setMetaDescription(pageData.meta?.description || '');
            setMetaKeywords(pageData.meta?.keywords || '');
            setLastSaved(new Date());
          } else {
            toast.error('Page not found');
            navigate('/pages');
          }
        } catch (error) {
          console.error('Error fetching page:', error);
          toast.error('Failed to load page data');
        }
      };
      fetchPage();
    } else {
      // Set current date as default publish date for new pages
      const today = new Date().toISOString().split('T')[0];
      setPublishDate(today);
    }
  }, [isEditing, pageId, navigate]);
  const handleSave = async () => {
    if (!title) {
      toast.error('Page title is required');
      return;
    }
    setIsSaving(true);
    try {
      const pageData: Partial<Page> = {
        title,
        slug,
        content,
        status: status as 'published' | 'draft',
        type: type as 'page' | 'blog' | 'product' | 'news',
        date: publishDate,
        meta: {
          title: metaTitle,
          description: metaDescription,
          keywords: metaKeywords
        }
      };
      if (isEditing && pageId) {
        await dataService.updatePage(pageId, pageData);
        toast.success('Page updated successfully');
      } else {
        await dataService.createPage({
          ...(pageData as any),
          author: 'Admin' // In a real app, this would come from the logged-in user
        });
        toast.success('Page created successfully');
      }
      setLastSaved(new Date());
      navigate('/pages');
    } catch (error) {
      console.error('Error saving page:', error);
      toast.error(`Failed to ${isEditing ? 'update' : 'create'} page`);
    } finally {
      setIsSaving(false);
    }
  };
  const handleTitleChange = e => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    // Auto-generate slug from title if not editing
    if (!isEditing) {
      setSlug(newTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/--+/g, '-').trim());
    }
  };
  const handlePreview = () => {
    // In a real app, this would open a preview in a new tab
    toast.info('Preview functionality would open in a new tab');
  };
  const handleSaveDraft = () => {
    setStatus('draft');
    handleSave();
  };
  const formatLastSaved = () => {
    if (!lastSaved) return 'Not saved yet';
    const now = new Date();
    const diff = Math.floor((now.getTime() - lastSaved.getTime()) / 1000); // diff in seconds
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {isEditing ? 'Edit Page' : 'Create New Page'}
        </h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={() => navigate('/pages')}>
            Cancel
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50" onClick={handleSave} disabled={isSaving}>
            <SaveIcon size={16} className="mr-2" />
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors" onClick={handlePreview}>
            <EyeIcon size={16} className="mr-2" />
            Preview
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Slug */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Page Title
                </label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter page title" />
              </div>
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                  Slug (URL)
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    /
                  </span>
                  <input type="text" id="slug" value={slug} onChange={e => setSlug(e.target.value)} className="flex-1 block w-full py-2 px-3 border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="enter-slug-here" />
                </div>
              </div>
            </div>
          </div>
          {/* Editor Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button onClick={() => setActiveTab('content')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'content' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  Content
                </button>
                <button onClick={() => setActiveTab('html')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'html' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  HTML
                </button>
                <button onClick={() => setActiveTab('preview')} className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'preview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  Preview
                </button>
              </nav>
            </div>
            {/* Editor Toolbar */}
            {activeTab !== 'preview' && <div className="border-b border-gray-200 bg-gray-50 p-2 flex flex-wrap">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <BoldIcon size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <ItalicIcon size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <ListIcon size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <div size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <div size={16} />
                </button>
                <div className="border-r border-gray-300 mx-2 h-6 my-auto"></div>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <LinkIcon size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <ImageIcon size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <TableIcon size={16} />
                </button>
                <div className="border-r border-gray-300 mx-2 h-6 my-auto"></div>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded">
                  <CodeIcon size={16} />
                </button>
              </div>}
            {/* Editor Content */}
            <div className="p-4">
              {activeTab === 'content' && <div className="border border-gray-300 rounded-md min-h-[400px] p-4">
                  {/* In a real app, this would be a rich text editor */}
                  <p className="text-gray-500">
                    WYSIWYG editor would be integrated here
                  </p>
                  <textarea value={content} onChange={e => setContent(e.target.value)} className="mt-4 block w-full h-80 py-2 px-3 border-0 focus:outline-none focus:ring-0" placeholder="Start writing your content here..." />
                </div>}
              {activeTab === 'html' && <div className="border border-gray-300 rounded-md">
                  <textarea value={content} onChange={e => setContent(e.target.value)} className="block w-full h-96 py-2 px-3 font-mono text-sm border-0 focus:outline-none focus:ring-0" placeholder="<p>Your HTML content here</p>" />
                </div>}
              {activeTab === 'preview' && <div className="border border-gray-300 rounded-md min-h-[400px] p-4">
                  <div dangerouslySetInnerHTML={{
                __html: content || '<p>No content to preview</p>'
              }} />
                </div>}
            </div>
            {/* Autosave Indicator */}
            <div className="p-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-500 flex items-center">
              <ClockIcon size={14} className="mr-1" />
              <span>Last saved {formatLastSaved()}</span>
              <button className="ml-auto text-blue-600 hover:text-blue-800" onClick={handleSaveDraft}>
                Save Draft
              </button>
            </div>
          </div>
          {/* SEO Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              SEO Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">
                  Meta Title
                </label>
                <input type="text" id="meta-title" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Meta title for SEO" />
              </div>
              <div>
                <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">
                  Meta Description
                </label>
                <textarea id="meta-description" value={metaDescription} onChange={e => setMetaDescription(e.target.value)} rows={3} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Meta description for SEO" />
              </div>
              <div>
                <label htmlFor="meta-keywords" className="block text-sm font-medium text-gray-700">
                  Meta Keywords
                </label>
                <input type="text" id="meta-keywords" value={metaKeywords} onChange={e => setMetaKeywords(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="keyword1, keyword2, keyword3" />
              </div>
              <div className="pt-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Advanced SEO Settings
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Publish</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select id="status" value={status} onChange={e => setStatus(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Content Type
                </label>
                <select id="type" value={type} onChange={e => setType(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="page">Page</option>
                  <option value="blog">Blog Post</option>
                  <option value="news">News</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <div>
                <label htmlFor="publish-date" className="block text-sm font-medium text-gray-700">
                  Publish Date
                </label>
                <input type="date" id="publish-date" value={publishDate} onChange={e => setPublishDate(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="pt-2 flex justify-between">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={handleSaveDraft}>
                  Save Draft
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={() => {
                setStatus('published');
                handleSave();
              }}>
                  Publish
                </button>
              </div>
            </div>
          </div>
          {/* Page Template */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Template</h3>
            <div>
              <label htmlFor="template" className="block text-sm font-medium text-gray-700">
                Page Template
              </label>
              <select id="template" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Default Template</option>
                <option>Full Width</option>
                <option>Sidebar Left</option>
                <option>Sidebar Right</option>
                <option>Landing Page</option>
              </select>
            </div>
          </div>
          {/* Featured Image */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Featured Image
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <ImageIcon size={36} className="mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                Drag and drop an image here, or click to select a file
              </p>
              <button className="mt-2 px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                Select Image
              </button>
            </div>
          </div>
          {/* Revision History */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Revision History
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon size={14} className="mr-1" />
                  <span>Today, 10:30 AM</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Restore
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon size={14} className="mr-1" />
                  <span>Yesterday, 2:15 PM</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Restore
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon size={14} className="mr-1" />
                  <span>May 12, 2023, 9:45 AM</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Restore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PageEditor;