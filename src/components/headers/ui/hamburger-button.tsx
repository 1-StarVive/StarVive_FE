"use client";

import useCategoriesModalStore from "@/store/categories-modal.store";
import HeaderIconButton from "./header-icon-button";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import CategoriesModal from "@/components/modals/categories-modal";
import { AnimatePresence } from "framer-motion";

function HamburgerButton() {
  const isOpen = useCategoriesModalStore((state) => state.isOpen);
  const open = useCategoriesModalStore((state) => state.open);

  return (
    <>
      <HeaderIconButton icon={<HamburgerIcon className="h-[24px] w-[24px]" />} onClick={open} />

      <AnimatePresence>{isOpen && <CategoriesModal />}</AnimatePresence>
    </>
  );
}

export default HamburgerButton;
