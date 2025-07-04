// Mock data service to simulate backend API calls
// Page content types
export interface Page {
  id: number;
  title: string;
  slug: string;
  type: 'page' | 'blog' | 'product' | 'news';
  status: 'published' | 'draft';
  author: string;
  date: string;
  content?: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}
export interface MediaItem {
  id: number;
  name: string;
  type: 'image' | 'document' | 'video';
  url: string;
  size: string;
  dimensions?: string;
  duration?: string;
  date: string;
}
export interface Integration {
  id: number;
  name: string;
  icon: string;
  status: 'connected' | 'disconnected' | 'error';
  details: string;
}
// Mock pages data
const pages: Page[] = [{
  id: 1,
  title: 'Home Page',
  slug: 'home',
  type: 'page',
  status: 'published',
  author: 'Admin',
  date: '2023-05-15',
  content: '<h1>Welcome to our website</h1><p>This is the home page content.</p>',
  meta: {
    title: 'Home | My Website',
    description: 'Welcome to my website home page',
    keywords: 'home, welcome, website'
  }
}, {
  id: 2,
  title: 'About Us',
  slug: 'about',
  type: 'page',
  status: 'published',
  author: 'Admin',
  date: '2023-05-14',
  content: '<h1>About Our Company</h1><p>Learn more about our company and mission.</p>',
  meta: {
    title: 'About Us | My Website',
    description: 'Learn about our company history and mission',
    keywords: 'about, company, mission'
  }
}, {
  id: 3,
  title: 'Services',
  slug: 'services',
  type: 'page',
  status: 'draft',
  author: 'Editor',
  date: '2023-05-13',
  content: '<h1>Our Services</h1><p>Explore the services we offer.</p>',
  meta: {
    title: 'Services | My Website',
    description: 'Explore our professional services',
    keywords: 'services, professional, solutions'
  }
}, {
  id: 4,
  title: 'Contact Page',
  slug: 'contact',
  type: 'page',
  status: 'published',
  author: 'Admin',
  date: '2023-05-12',
  content: '<h1>Contact Us</h1><p>Get in touch with our team.</p>',
  meta: {
    title: 'Contact | My Website',
    description: 'Contact our team for inquiries',
    keywords: 'contact, email, phone, address'
  }
}, {
  id: 5,
  title: 'Blog Post: New Features',
  slug: 'blog/new-features',
  type: 'blog',
  status: 'draft',
  author: 'Writer',
  date: '2023-05-11',
  content: '<h1>New Features Released</h1><p>Check out our latest features.</p>',
  meta: {
    title: 'New Features | Blog',
    description: 'Learn about our latest feature releases',
    keywords: 'features, new, update'
  }
}, {
  id: 6,
  title: 'Product: Premium Package',
  slug: 'products/premium',
  type: 'product',
  status: 'published',
  author: 'Admin',
  date: '2023-05-10',
  content: '<h1>Premium Package</h1><p>Our premium offering with all features.</p>',
  meta: {
    title: 'Premium Package | Products',
    description: 'Our comprehensive premium package',
    keywords: 'premium, package, features'
  }
}, {
  id: 7,
  title: 'News: Company Update',
  slug: 'news/company-update',
  type: 'news',
  status: 'published',
  author: 'Editor',
  date: '2023-05-09',
  content: '<h1>Company Update</h1><p>Latest news about our company.</p>',
  meta: {
    title: 'Company Update | News',
    description: 'Latest news and updates about our company',
    keywords: 'news, update, company'
  }
}, {
  id: 8,
  title: 'FAQ Page',
  slug: 'faq',
  type: 'page',
  status: 'published',
  author: 'Admin',
  date: '2023-05-08',
  content: '<h1>Frequently Asked Questions</h1><p>Find answers to common questions.</p>',
  meta: {
    title: 'FAQ | My Website',
    description: 'Frequently asked questions and answers',
    keywords: 'faq, questions, answers'
  }
}, {
  id: 9,
  title: 'Terms and Conditions',
  slug: 'terms',
  type: 'page',
  status: 'published',
  author: 'Legal',
  date: '2023-05-07',
  content: '<h1>Terms and Conditions</h1><p>Please read our terms and conditions.</p>',
  meta: {
    title: 'Terms and Conditions | My Website',
    description: 'Our terms and conditions of service',
    keywords: 'terms, conditions, legal'
  }
}, {
  id: 10,
  title: 'Privacy Policy',
  slug: 'privacy',
  type: 'page',
  status: 'published',
  author: 'Legal',
  date: '2023-05-06',
  content: '<h1>Privacy Policy</h1><p>Our privacy policy and data practices.</p>',
  meta: {
    title: 'Privacy Policy | My Website',
    description: 'Our privacy policy and data practices',
    keywords: 'privacy, policy, data'
  }
}];
// Mock media items
const mediaItems: MediaItem[] = [{
  id: 1,
  name: 'hero-image.jpg',
  type: 'image',
  url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  size: '2.3 MB',
  dimensions: '1920x1080',
  date: '2023-05-15'
}, {
  id: 2,
  name: 'product-brochure.pdf',
  type: 'document',
  url: '#',
  size: '1.5 MB',
  date: '2023-05-14'
}, {
  id: 3,
  name: 'company-video.mp4',
  type: 'video',
  url: '#',
  size: '15.8 MB',
  duration: '2:34',
  date: '2023-05-13'
}, {
  id: 4,
  name: 'team-photo.jpg',
  type: 'image',
  url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  size: '3.1 MB',
  dimensions: '2000x1333',
  date: '2023-05-12'
}, {
  id: 5,
  name: 'logo.png',
  type: 'image',
  url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9',
  size: '0.5 MB',
  dimensions: '500x500',
  date: '2023-05-11'
}, {
  id: 6,
  name: 'annual-report.docx',
  type: 'document',
  url: '#',
  size: '2.8 MB',
  date: '2023-05-10'
}, {
  id: 7,
  name: 'background.jpg',
  type: 'image',
  url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
  size: '1.7 MB',
  dimensions: '1600x900',
  date: '2023-05-09'
}, {
  id: 8,
  name: 'product-demo.mp4',
  type: 'video',
  url: '#',
  size: '25.2 MB',
  duration: '4:12',
  date: '2023-05-08'
}, {
  id: 9,
  name: 'presentation.pptx',
  type: 'document',
  url: '#',
  size: '5.3 MB',
  date: '2023-05-07'
}, {
  id: 10,
  name: 'banner.jpg',
  type: 'image',
  url: 'https://images.unsplash.com/photo-1560762484-813fc97650a0',
  size: '2.1 MB',
  dimensions: '1200x600',
  date: '2023-05-06'
}];
// Data service functions
export const dataService = {
  // Pages
  getPages: async (filters = {}): Promise<Page[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    // In a real app, you would apply filters here
    return [...pages];
  },
  getPage: async (id: number): Promise<Page | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return pages.find(page => page.id === id);
  },
  createPage: async (pageData: Omit<Page, 'id'>): Promise<Page> => {
    await new Promise(resolve => setTimeout(resolve, 700));
    const newPage = {
      id: Math.max(...pages.map(p => p.id)) + 1,
      ...pageData
    };
    pages.push(newPage);
    return newPage;
  },
  updatePage: async (id: number, pageData: Partial<Page>): Promise<Page | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 700));
    const index = pages.findIndex(page => page.id === id);
    if (index !== -1) {
      pages[index] = {
        ...pages[index],
        ...pageData
      };
      return pages[index];
    }
    return undefined;
  },
  deletePage: async (id: number): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = pages.findIndex(page => page.id === id);
    if (index !== -1) {
      pages.splice(index, 1);
      return true;
    }
    return false;
  },
  // Media
  getMediaItems: async (type?: string): Promise<MediaItem[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (type && type !== 'all') {
      return mediaItems.filter(item => item.type === type);
    }
    return [...mediaItems];
  },
  uploadMedia: async (file: File): Promise<MediaItem> => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    // In a real app, you would upload the file to a server
    const newItem: MediaItem = {
      id: Math.max(...mediaItems.map(item => item.id)) + 1,
      name: file.name,
      type: file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'document',
      url: URL.createObjectURL(file),
      // This would be a real URL in production
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      date: new Date().toISOString().split('T')[0]
    };
    mediaItems.push(newItem);
    return newItem;
  },
  deleteMedia: async (id: number): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mediaItems.findIndex(item => item.id === id);
    if (index !== -1) {
      mediaItems.splice(index, 1);
      return true;
    }
    return false;
  }
};