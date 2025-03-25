import { create } from "zustand";

type UseCategoriesModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useCategoriesModalStore = create<UseCategoriesModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCategoriesModalStore;
