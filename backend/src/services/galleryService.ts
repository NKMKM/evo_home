export interface Gallery {
  id: number;
  name: string;
  images: string[];
}

const galleries: Gallery[] = [];

export const galleryService = {
  getGalleries: async (): Promise<Gallery[]> => {
    await new Promise(r => setTimeout(r, 200));
    return [...galleries];
  },
  createGallery: async (gallery: Omit<Gallery, 'id'>): Promise<Gallery> => {
    await new Promise(r => setTimeout(r, 300));
    const newGallery = { ...gallery, id: galleries.length + 1 };
    galleries.push(newGallery);
    return newGallery;
  },
  addImage: async (galleryId: number, imageUrl: string): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 200));
    const g = galleries.find(g => g.id === galleryId);
    if (g) {
      g.images.push(imageUrl);
      return true;
    }
    return false;
  }
}; 