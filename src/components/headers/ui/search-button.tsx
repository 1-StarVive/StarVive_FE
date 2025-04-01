"use client";

import SearchIcon from "@/components/icons/search-icon";
import HeaderIconButton from "./header-icon-button";
import { AnimatePresence } from "framer-motion";
import useSearchModalStore from "@/store/search-modal.store";
import SearchModal from "@/components/modals/search-modal";

function SearchButton() {
  const isOpen = useSearchModalStore((state) => state.isOpen);
  const open = useSearchModalStore((state) => state.open);

  return (
    <>
      <HeaderIconButton icon={<SearchIcon className="h-[24px] w-[24px]" />} onClick={open} />

      <AnimatePresence>{isOpen && <SearchModal />}</AnimatePresence>
    </>
  );
}

export default SearchButton;
