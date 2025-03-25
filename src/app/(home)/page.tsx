import Banner from "./ui/banner";
import Title from "./ui/title";
import Tag from "./ui/tag";
import Product from "../../components/product";
import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";

export default function Home() {
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

        <SectionWrap>
          <Title>MD FESTA</Title>
          <ProductsWrap>
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000000}
              discountPercent={20}
              salePrice={16000}
              isBest={true}
              isNew={true}
            />
          </ProductsWrap>
        </SectionWrap>

        <SectionWrap>
          <Title>Ways of Working</Title>
          <ProductsWrap>
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000}
            />
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000}
            />
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000}
            />
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000}
            />
          </ProductsWrap>
        </SectionWrap>

        <SectionWrap>
          <Title>Flower Market</Title>
          <ProductsWrap>
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000}
            />
          </ProductsWrap>
        </SectionWrap>
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

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="grid grid-flow-col auto-cols-[40%] overflow-auto gap-[18px] p-[24px]">
      {children}
    </ul>
  );
}
