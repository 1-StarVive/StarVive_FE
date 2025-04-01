"use client";

import useSearchModalStore from "@/store/search-modal.store";
import CloseButton from "./ui/close-button";
import SearchInput from "./ui/search-input";
import { HeaderWrap } from "./header";
import { headerHeight } from "./utils/const";

type SearchModalHeaderProps = {
  subHeader?: React.ReactNode;
};

function SearchModalHeader({ subHeader }: SearchModalHeaderProps) {
  const close = useSearchModalStore((s) => s.close);

  return (
    <HeaderWrap>
      <MainWrap>
        <SearchInput onClickSearch={() => {}} />
        <CloseButton onClick={close} />
      </MainWrap>

      {subHeader}
    </HeaderWrap>
  );
}

export default SearchModalHeader;

function MainWrap({ children }: React.PropsWithChildren) {
  return (
    <div
      className="grid grid-cols-[1fr_auto] items-center gap-1 px-[16px] py-[8px] shadow-sm"
      style={{ height: `${headerHeight}px` }}
    >
      {children}
    </div>
  );
}
