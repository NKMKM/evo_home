// Общие типы для сервисов
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

export interface User {
  id: number;
  username: string;
  role: 'admin' | 'editor' | 'viewer';
  email?: string;
}

export interface HistoryItem {
  id: number;
  entity: 'page' | 'media' | 'user';
  entityId: number;
  action: string;
  date: string;
  user: string;
  changes: any;
}

export interface Template {
  id: number;
  name: string;
  content: string;
  type: 'page' | 'email';
  created: string;
}

export interface Backup {
  id: number;
  date: string;
  fileUrl: string;
}

export interface Script {
  id: number;
  name: string;
  code: string;
  enabled: boolean;
}

export interface SpellcheckResult {
  id: number;
  text: string;
  errors: { word: string; suggestions: string[] }[];
} 