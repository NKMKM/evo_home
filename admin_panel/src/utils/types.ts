// Existing interface for submissions
export interface Submission {
  id: string;
  buildingType: string;
  roomType: string;
  repairType: string;
  area: number;
  urgency: string;
  additionalInfo: string;
  name: string;
  phone: string;
  promoCode: string;
  date: string;
}

// CMS Content Types
export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: 'draft' | 'published' | 'archived';
  featuredImage?: string;
  seo: SEOSettings;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  author: string;
  versions: PageVersion[];
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: 'draft' | 'published' | 'archived';
  featuredImage?: string;
  category?: string;
  tags: string[];
  seo: SEOSettings;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  author: string;
  versions: PostVersion[];
}

export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  path: string;
  url: string;
  type: 'image' | 'video' | 'document' | 'audio';
  mimeType: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  alt?: string;
  caption?: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface SEOSettings {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface PageVersion {
  id: string;
  pageId: string;
  version: number;
  title: string;
  content: string;
  createdAt: string;
  createdBy: string;
  changes?: string;
  isAutoSave?: boolean;
}

export interface PostVersion {
  id: string;
  postId: string;
  version: number;
  title: string;
  content: string;
  createdAt: string;
  createdBy: string;
  changes?: string;
  isAutoSave?: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'author';
  displayName?: string;
  avatar?: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  createdAt: string;
}