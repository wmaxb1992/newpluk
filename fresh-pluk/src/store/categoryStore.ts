import { create } from 'zustand';
import { StateCreator } from 'zustand/vanilla';

interface CategoryState {
  selectedCategory: string | null;
  searchQuery: string;
  setSelectedCategory: (categoryId: string | null) => void;
  setSearchQuery: (query: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: null,
  searchQuery: '',
  setSelectedCategory: (categoryId: string | null) => 
    set((state: CategoryState) => ({
      selectedCategory: state.selectedCategory === categoryId ? null : categoryId,
    })),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
