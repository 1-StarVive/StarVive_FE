"use client";

import useBlockBodyScroll from "@/hooks/use-block-interaction";
import useHasMounted from "@/hooks/use-has-mounted";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import CloseButton from "./ui/close-button";
import GreetingTitle from "./ui/greeting-title";
import Greeting from "./ui/greeting";
import ShowAllLink from "./ui/show-all-link";
import Category from "./ui/category";
import CategoriesFooterItem from "./ui/categories-footer-item";

function CategoriesModal() {
  const hasMounted = useHasMounted();

  useBlockBodyScroll();

  if (!hasMounted) return null;
  return createPortal(
    <ModalWrap>
      <HeadWrap>
        <CloseButton />
      </HeadWrap>

      <GreetingWrap>
        <GreetingTitle />
        <Greeting />
      </GreetingWrap>

      <CategoriesWrap>
        <LinkWrap>
          <ShowAllLink />
        </LinkWrap>
        <CategoryWrap>
          <Category src="/temp-square.png" alt="음식">
            텀블러/보온병
          </Category>
          <Category src="/temp-square.png" alt="음식">
            텀블러/보온병
          </Category>
          <Category src="/temp-square.png" alt="음식">
            텀블러/보온병
          </Category>
          <Category src="/temp-square.png" alt="음식">
            텀블러/보온병
          </Category>
          <Category src="/temp-square.png" alt="음식">
            보온병병병병병병병병병병
          </Category>
        </CategoryWrap>
      </CategoriesWrap>

      <CategoriesFooter>
        <CategoriesFooterItem
          href="./"
          title="기획전"
          content="진행중인 기획전을 만나보세요."
        />
        <CategoriesFooterItem
          href="./"
          title="베스트"
          content="스타벅스 베스트 MD 상품만 모아보세요."
        />
      </CategoriesFooter>
    </ModalWrap>,
    document.body
  );
}

export default CategoriesModal;

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
    <section className="flex justify-end min-h-[56px] max-h-[56px] px-[16px] py-[8px] items-center">
      {children}
    </section>
  );
}

function GreetingWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="mx-[24px] space-y-[10px] pb-[15px] border-gray-300 border-b">
      {children}
    </section>
  );
}

function CategoriesWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="px-[24px] flex flex-col gap-[17px]">{children}</section>
  );
}

function LinkWrap({ children }: React.PropsWithChildren) {
  return <div className="flex justify-end">{children}</div>;
}

function CategoryWrap({ children }: React.PropsWithChildren) {
  return <ul className="grid grid-cols-3 gap-[21px]">{children}</ul>;
}

function CategoriesFooter({ children }: React.PropsWithChildren) {
  return (
    <footer>
      <ul className="bg-[#F7F7F7]">{children}</ul>
    </footer>
  );
}
