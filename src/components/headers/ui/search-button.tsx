"use client";

import HeaderIconButton from "./header-icon-button";
import { AnimatePresence } from "framer-motion";
import useSearchModalStore from "@/store/search-modal.store";
import SearchModal from "@/components/modals/search-modal";

function SearchButton() {
  const isOpen = useSearchModalStore((state) => state.isOpen);
  const open = useSearchModalStore((state) => state.open);

  return (
    <>
      <HeaderIconButton icon={"search"} onClick={open} />

      <AnimatePresence>{isOpen && <SearchModal />}</AnimatePresence>
    </>
  );
}

export default SearchButton;
