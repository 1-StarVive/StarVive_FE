"use client";

import GreetingTitle from "./ui/greeting-title";
import Greeting from "./ui/greeting";
import ShowAllLink from "./ui/show-all-link";
import CategoriesFooterItem from "./ui/categories-footer-item";
import Modal from "../modal";
import CategoriesHeader from "@/components/headers/categories-header";
import { useQuery } from "@tanstack/react-query";
import { getTopCategoriesAll } from "@/lib/api/top-categories";
import useCategoriesModalStore from "@/store/categories-modal.store";
import Category from "./ui/category";

function CategoriesModal() {
  const close = useCategoriesModalStore((s) => s.close);

  const topCategories = useQuery({
    queryKey: ["getTopCategoriesAll"],
    queryFn: getTopCategoriesAll,
  });

  return (
    <Modal className="bg-white" size="full">
      <ModalWrap>
        <CategoriesHeader />
        <GreetingWrap>
          <GreetingTitle />
          <Greeting />
        </GreetingWrap>

        <CategoriesWrap>
          <LinkWrap>
            <div onClick={() => close()}>
              <ShowAllLink />
            </div>
          </LinkWrap>

          <CategoryWrap>
            {topCategories.data?.map(({ name, topCategoryId, imageAlt, imageUrl }, i) => (
              <div key={i} onClick={() => close()}>
                <Category src={imageUrl} alt={imageAlt} href={`./all-products?top=${topCategoryId}`}>
                  {name}
                </Category>
              </div>
            ))}
          </CategoryWrap>
        </CategoriesWrap>

        <CategoriesFooter>
          <div onClick={() => close()}>
            <CategoriesFooterItem href="./promotion" title="기획전" content="진행중인 기획전을 만나보세요." />
          </div>
          <div onClick={() => close()}>
            <CategoriesFooterItem href="./best" title="베스트" content="스타벅스 베스트 MD 상품만 모아보세요." />
          </div>
        </CategoriesFooter>
      </ModalWrap>
    </Modal>
  );
}

export default CategoriesModal;

function ModalWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-[30px] overflow-auto bg-white">{children}</div>;
}

function GreetingWrap({ children }: React.PropsWithChildren) {
  return <section className="mx-[24px] space-y-[10px] border-b border-gray-300 pb-[15px]">{children}</section>;
}

function CategoriesWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[17px] px-[24px]">{children}</section>;
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
