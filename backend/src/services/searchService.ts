import { Page, MediaItem, User } from './types';
import { dataService } from './dataService';
import { userService } from './userService';

export const searchService = {
  search: async (query: string): Promise<{ pages: Page[]; media: MediaItem[]; users: User[] }> => {
    await new Promise(r => setTimeout(r, 300));
    const pages = (await dataService.getPages()).filter(p => p.title.includes(query) || p.content?.includes(query));
    const media = (await dataService.getMediaItems()).filter(m => m.name.includes(query));
    const users = (await userService.getUsers()).filter(u => u.username.includes(query));
    return { pages, media, users };
  }
}; 