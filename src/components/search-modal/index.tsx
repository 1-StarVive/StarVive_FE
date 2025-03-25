import useBlockBodyScroll from "@/hooks/use-block-interaction";
import useHasMounted from "@/hooks/use-has-mounted";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import CloseButton from "./ui/close-button";
import SearchInput from "../inputs/search-input";
import SuggestedTag from "./ui/suggested-tag";

function SearchModal() {
  const hasMounted = useHasMounted();

  useBlockBodyScroll();

  if (!hasMounted) return null;
  return createPortal(
    <ModalWrap>
      <HeadWrap>
        <SearchInput onClickSearch={() => {}} />
        <CloseButton />
      </HeadWrap>

      <RecentSearchWrap></RecentSearchWrap>

      <SuggestedTagsWrap>
        <h1 className="text-[16px] font-bold">추천태그</h1>
        <ul className="flex flex-wrap gap-y-[8px] gap-x-[10px]">
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
    </ModalWrap>,
    document.body
  );
}

export default SearchModal;

function ModalWrap({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      className="inset-0 fixed z-50 bg-white flex flex-col gap-[30px] overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function HeadWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="shadow-sm grid grid-cols-[1fr_auto] min-h-[56px] max-h-[56px] px-[16px] py-[8px] items-center">
      {children}
    </section>
  );
}

function RecentSearchWrap({ children }: React.PropsWithChildren) {
  return <section className="h-[300px]">{children}</section>;
}

function SuggestedTagsWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="px-[24px] flex flex-col gap-[22px]">{children}</section>
  );
}
