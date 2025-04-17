"use client";

import useAddShippingAddressModalStore from "@/store/add-shipping-address-modal";

function AddButton() {
  const open = useAddShippingAddressModalStore((state) => state.open);

  const handleClick = () => {
    open();
  };

  return (
    <button className="text-primary text-xs" onClick={handleClick}>
      + 새 배송지 추가
    </button>
  );
}

export default AddButton;
