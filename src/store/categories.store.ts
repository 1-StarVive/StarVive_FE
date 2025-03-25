import { create } from "zustand";

type UseCategoriesStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useCategoriesStore = create<UseCategoriesStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCategoriesStore;
