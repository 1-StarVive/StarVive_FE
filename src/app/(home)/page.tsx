import Banner from "./_ui/banner";
import Title from "./_ui/title";
import Tag from "./_ui/tag";
import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";
import ProductSections from "./_ui/product-sections";
import { Suspense } from "react";
import ProductSectionsSkeleton from "./_ui/product-sections-skeleton";

export default async function Home() {
  return (
    <>
      <Header subHeader={<CategoriesHeader selected="/" />} />
      <main className="space-y-[50px]">
        <Banner />
        <SectionWrap>
          <Title>TREND TAG</Title>
          <TagsWrap>
            <Tag src="/temp-square.png" alt="temp">
              #더스트 백
            </Tag>
            <Tag src="/temp-square.png" alt="temp">
              #더스트 백
            </Tag>
            <Tag src="/temp-square.png" alt="temp">
              #더스트 백
            </Tag>
            <Tag src="/temp-square.png" alt="temp">
              #더스트 백
            </Tag>
            <Tag src="/temp-square.png" alt="temp">
              #더스트 백
            </Tag>
          </TagsWrap>
        </SectionWrap>

        <Suspense fallback={<ProductSectionsSkeleton />}>
          <ProductSections />
        </Suspense>
      </main>
    </>
  );
}

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function TagsWrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="flex overflow-auto flex-nowrap gap-[20px] p-[24px]">
      {children}
    </ul>
  );
}
