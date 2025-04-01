import SubBestHeader from "./_ui/sub-best-header";
import Product from "@/components/product";
import Header from "@/components/headers/header";
import CategoriesSubHeader from "@/components/headers/categories-sub-header";

function Promotion() {
  return (
    <>
      <Header
        subHeader={
          <>
            <CategoriesSubHeader selected="/best" />
            <SubBestHeader />
          </>
        }
      />
      <main>
        <ProductsWrap>
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
            rank={1}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
            rank={2}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
            rank={3}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
            rank={4}
          />
          <Product
            url="/temp-square.png"
            alt="temp"
            name="SS 플라워 마켓 스탠리 켄처 텀블러 591ml"
            price={20000}
            rank={5}
          />
        </ProductsWrap>
      </main>
    </>
  );
}

export default Promotion;

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="p-[24px]">
      <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[20px]">{children}</ul>
    </section>
  );
}
