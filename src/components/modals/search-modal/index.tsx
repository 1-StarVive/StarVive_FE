import SuggestedTag from "./ui/suggested-tag";
import Modal from "../modal";
import SearchModalHeader from "@/components/headers/search-modal-header";

function SearchModal() {
  return (
    <Modal size="full">
      <ModalWrap>
        <SearchModalHeader />

        <RecentSearchWrap></RecentSearchWrap>

        <SuggestedTagsWrap>
          <h1 className="text-[16px] font-bold">추천태그</h1>
          <ul className="flex flex-wrap gap-x-[10px] gap-y-[8px]">
            <SuggestedTag href={"./"}>초콜릿</SuggestedTag>
            <SuggestedTag href={"./"}>초콜릿</SuggestedTag>
            <SuggestedTag href={"./"}>초콜릿릿</SuggestedTag>
            <SuggestedTag href={"./"}>초콜릿</SuggestedTag>
            <SuggestedTag href={"./"}>초초초초콜릿</SuggestedTag>
            <SuggestedTag href={"./"}>초콜릿</SuggestedTag>
            <SuggestedTag href={"./"}>초콜릿</SuggestedTag>
            <SuggestedTag href={"./"}>초콜릿</SuggestedTag>
          </ul>
        </SuggestedTagsWrap>
      </ModalWrap>
    </Modal>
  );
}

export default SearchModal;

function ModalWrap({ children }: React.PropsWithChildren) {
  return <div className="flex h-full flex-col gap-[30px] bg-white">{children}</div>;
}

function RecentSearchWrap({ children }: React.PropsWithChildren) {
  return <section className="h-[300px]">{children}</section>;
}

function SuggestedTagsWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[22px] px-[24px]">{children}</section>;
}
