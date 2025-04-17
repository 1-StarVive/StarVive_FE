import { create } from "zustand";

type UseUpdateShippingAddressModalStore = {
  isOpen: boolean;
  shippingAddressId?: string;
  open: (shippingAddressId: string) => void;
  close: () => void;
};

const useUpdateShippingAddressModalStore = create<UseUpdateShippingAddressModalStore>((set) => ({
  isOpen: false,
  open: (shippingAddressId) => set({ isOpen: true, shippingAddressId }),
  close: () => set({ isOpen: false }),
}));

export default useUpdateShippingAddressModalStore;
