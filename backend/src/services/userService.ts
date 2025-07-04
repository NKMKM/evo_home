import { User } from './types';

const users: User[] = [
  { id: 1, username: 'admin', role: 'admin', email: 'admin@example.com' },
  { id: 2, username: 'editor', role: 'editor', email: 'editor@example.com' }
];

export const userService = {
  getUsers: async (): Promise<User[]> => {
    await new Promise(r => setTimeout(r, 300));
    return [...users];
  },
  getUser: async (id: number): Promise<User | undefined> => {
    await new Promise(r => setTimeout(r, 200));
    return users.find(u => u.id === id);
  },
  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    await new Promise(r => setTimeout(r, 400));
    const newUser = { ...user, id: Math.max(...users.map(u => u.id)) + 1 };
    users.push(newUser);
    return newUser;
  },
  updateUser: async (id: number, user: Partial<User>): Promise<User | undefined> => {
    await new Promise(r => setTimeout(r, 400));
    const idx = users.findIndex(u => u.id === id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...user };
      return users[idx];
    }
    return undefined;
  },
  deleteUser: async (id: number): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 300));
    const idx = users.findIndex(u => u.id === id);
    if (idx !== -1) {
      users.splice(idx, 1);
      return true;
    }
    return false;
  }
}; 