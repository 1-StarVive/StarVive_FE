"use client";

import AuthGuard from "@/components/guards/auth-guard";
import Header from "@/components/headers/header";
import AddButton from "./_ui/add-button";
import AddShippingAddressModal from "@/components/modals/add-shipping-address-modal";
import useAddShippingAddressModalStore from "@/store/add-shipping-address-modal";
import { AnimatePresence } from "framer-motion";
import ShippingAddressList from "./_ui/shipping-address-list";
import useUpdateShippingAddressModalStore from "@/store/update-shipping-address-modal";
import UpdateShippingAddressModal from "@/components/modals/update-shipping-address-modal";

function ShippingAddress() {
  const isOpenAdd = useAddShippingAddressModalStore((state) => state.isOpen);
  const isOpenUpdate = useUpdateShippingAddressModalStore((state) => state.isOpen);

  return (
    <AuthGuard>
      <div className="grid h-dvh grid-flow-row grid-rows-[auto_1fr] overflow-hidden">
        <Header />
        <MainWrap>
          <TitleWrap>
            <Title />
            <AddButton />
          </TitleWrap>

          <ShippingAddressList />
        </MainWrap>
      </div>
      <AnimatePresence>{isOpenAdd && <AddShippingAddressModal />}</AnimatePresence>
      <AnimatePresence>{isOpenUpdate && <UpdateShippingAddressModal />}</AnimatePresence>
    </AuthGuard>
  );
}

export default ShippingAddress;

function MainWrap({ children }: React.PropsWithChildren) {
  return <main className="grid grid-flow-row grid-rows-[auto_1fr] overflow-hidden">{children}</main>;
}

function TitleWrap({ children }: React.PropsWithChildren) {
  return <div className="grid grid-cols-[1fr_auto] items-center justify-between p-4">{children}</div>;
}

function Title() {
  return <h1 className="text-2xl font-bold">배송지 선택</h1>;
}
