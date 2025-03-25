"use client";

import useCategoriesStore from "@/store/categories.store";
import HeaderIconButton from "./header-icon-button";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import CategoriesModal from "@/components/categories-modal";
import { AnimatePresence } from "framer-motion";

function HamburgerButton() {
  const isOpen = useCategoriesStore((state) => state.isOpen);
  const open = useCategoriesStore((state) => state.open);

  return (
    <>
      <HeaderIconButton
        icon={<HamburgerIcon className="h-[24px] w-[24px]" />}
        onClick={open}
      />

      <AnimatePresence>{isOpen && <CategoriesModal />}</AnimatePresence>
    </>
  );
}

export default HamburgerButton;
