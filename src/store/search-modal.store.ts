import { create } from "zustand";

type UseSearchModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useSearchModalStore = create<UseSearchModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useSearchModalStore;
