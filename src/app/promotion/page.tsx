import SubCategoriesHeader from "./_ui/sub-categories-header";
import Accordion from "@/components/arccordion";
import Product from "@/components/product";
import Header from "@/components/headers/header";
import CategoriesSubHeader from "@/components/headers/categories-sub-header";
import StaticFooter from "@/components/footers/static-footer";

function Promotion() {
  return (
    <>
      <Header
        subHeader={
          <>
            <CategoriesSubHeader selected="/promotion" />
            <SubCategoriesHeader />
          </>
        }
      />
      <main>
        <PromotionDetailsWrap>
          <div className="flex h-[300px] items-center justify-center border border-gray-500">사진</div>
          <div className="flex h-[300px] items-center justify-center border border-gray-500">사진</div>
          <div className="flex h-[300px] items-center justify-center border border-gray-500">사진</div>
        </PromotionDetailsWrap>

        <Accordion title="기획전 유의사항" contents={<div className="h-[200px]">dasdasads</div>} />

        <ProductsWrap>
          <Product url="/temp-square.png" alt="temp" name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml" price={20000} />
          <Product url="/temp-square.png" alt="temp" name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml" price={20000} />
          <Product url="/temp-square.png" alt="temp" name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml" price={20000} />
          <Product url="/temp-square.png" alt="temp" name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml" price={20000} />
          <Product url="/temp-square.png" alt="temp" name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml" price={20000} />
        </ProductsWrap>
      </main>
      <StaticFooter />
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
      <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[20px]">{children}</ul>
    </section>
  );
}
