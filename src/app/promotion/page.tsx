import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";
import SubCategoriesHeader from "./ui/sub-categories-header";
import Accordion from "@/components/arccordion";
import Product from "@/components/product";

function Promotion() {
  return (
    <>
      <Header
        subHeader={
          <>
            <CategoriesHeader selected="/promotion" />
            <SubCategoriesHeader />
          </>
        }
      />
      <main>
        <PromotionDetailsWrap>
          <div className="h-[300px] border border-gray-500 flex items-center justify-center">
            사진
          </div>
          <div className="h-[300px] border border-gray-500 flex items-center justify-center">
            사진
          </div>
          <div className="h-[300px] border border-gray-500 flex items-center justify-center">
            사진
          </div>
        </PromotionDetailsWrap>

        <Accordion
          title="기획전 유의사항"
          contents={<div className="h-[200px]">dasdasads</div>}
        />

        <ProductsWrap>
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
          />
        </ProductsWrap>
      </main>
    </>
  );
}

export default Promotion;

function PromotionDetailsWrap({ children }: React.PropsWithChildren) {
  return <section>{children}</section>;
}

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="p-[24px]">
      <ul className="grid-cols-2 grid gap-x-[12px] gap-y-[20px]">{children}</ul>
    </section>
  );
}
