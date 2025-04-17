import { create } from "zustand";

type UseAddShippingAddressModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useAddShippingAddressModalStore = create<UseAddShippingAddressModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useAddShippingAddressModalStore;
