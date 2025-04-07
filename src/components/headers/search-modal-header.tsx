"use client";

import useSearchModalStore from "@/store/search-modal.store";
import CloseButton from "./ui/close-button";
import SearchInput from "./ui/search-input";
import CommonHeader from "./ui/common-header";

type SearchModalHeaderProps = {
  subHeader?: React.ReactNode;
};

function SearchModalHeader({ subHeader }: SearchModalHeaderProps) {
  const close = useSearchModalStore((s) => s.close);

  return (
    <CommonHeader
      left={false}
      center={
        <SearchHeaderWrap>
          <SearchInput onClickSearch={() => {}} />
          <CloseButton onClick={close} />
        </SearchHeaderWrap>
      }
      right={false}
      subHeader={subHeader}
    />
  );
}

export default SearchModalHeader;

function SearchHeaderWrap({ children }: React.PropsWithChildren) {
  return <div className="grid w-full grid-cols-[1fr_auto]">{children}</div>;
}
