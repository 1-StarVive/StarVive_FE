import Banner from "./ui/banner";
import Title from "./ui/title";
import Tag from "./ui/tag";
import Product from "../../components/product";
import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";
import MainCarousel from './ui/main-carousel';

export default function Home() {
  return (
    <>
      <Header subHeader={<CategoriesHeader />} />
      <main className="space-y-[50px]">
        <MainCarousel />

        <SectionWrap>
          <Title>TREND TAG</Title>
          <TagWrapUl>
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
          </TagWrapUl>
        </SectionWrap>

        <SectionWrap>
          <Title>MD FESTA</Title>
          <ProductUl>
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
          </ProductUl>
        </SectionWrap>

        <SectionWrap>
          <Title>Ways of Working</Title>
          <ProductUl>
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
          </ProductUl>
        </SectionWrap>

        <SectionWrap>
          <Title>Flower Market</Title>
          <ProductUl>
            <Product
              src="/temp-square.png"
              alt="temp"
              name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
              originalPrice={20000}
            />
          </ProductUl>
        </SectionWrap>
      </main>
    </>
  );
}

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function TagWrapUl({ children }: React.PropsWithChildren) {
  return (
    <ul className="flex overflow-auto flex-nowrap gap-[20px] p-[24px]">
      {children}
    </ul>
  );
}

function ProductUl({ children }: React.PropsWithChildren) {
  return (
    <ul className="flex overflow-auto flex-nowrap gap-[18px] p-[24px]">
      {children}
    </ul>
  );
}
