import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";
import SubBestHeader from "./_ui/sub-best-header";
import Product from "@/components/product";

function Promotion() {
  return (
    <>
      <Header
        subHeader={
          <>
            <CategoriesHeader selected="/best" />
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
      <ul className="grid-cols-2 grid gap-x-[12px] gap-y-[20px]">{children}</ul>
    </section>
  );
}
