"use client";

import useCategoriesStore from "@/store/categories.store";
import HeaderIconButton from "./header-icon-button";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import CategoriesModal from "@/components/categories-modal";

function HamburgerButton() {
  const open = useCategoriesStore((state) => state.open);

  return (
    <>
      <HeaderIconButton onClick={open}>
        <HamburgerIcon className="h-[24px] w-[24px]" />
      </HeaderIconButton>
      <CategoriesModal />
    </>
  );
}

export default HamburgerButton;
