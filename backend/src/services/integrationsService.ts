import { Integration } from './types';

const integrations: Integration[] = [
  { id: 1, name: 'Google Analytics', icon: 'google', status: 'connected', details: 'UA-XXXXX' },
  { id: 2, name: 'Yandex Metrica', icon: 'yandex', status: 'disconnected', details: '' }
];

export const integrationsService = {
  getIntegrations: async (): Promise<Integration[]> => {
    await new Promise(r => setTimeout(r, 200));
    return [...integrations];
  },
  connect: async (id: number, details: string) => {
    await new Promise(r => setTimeout(r, 300));
    const idx = integrations.findIndex(i => i.id === id);
    if (idx !== -1) {
      integrations[idx].status = 'connected';
      integrations[idx].details = details;
    }
    return integrations[idx];
  },
  disconnect: async (id: number) => {
    await new Promise(r => setTimeout(r, 200));
    const idx = integrations.findIndex(i => i.id === id);
    if (idx !== -1) {
      integrations[idx].status = 'disconnected';
      integrations[idx].details = '';
    }
    return integrations[idx];
  }
}; 