import Banner from "./ui/banner";
import Title from "./ui/title";
import Tag from "./ui/tag";
import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";
import ProductSections from "./ui/product-sections";

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

        <ProductSections />
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
