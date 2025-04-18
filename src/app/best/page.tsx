"use client";

import Product from "@/components/product";
import Header from "@/components/headers/header";
import CategoriesSubHeader from "@/components/headers/categories-sub-header";
import StaticFooter from "@/components/footers/static-footer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getBestProduct } from "@/lib/api/product";

function Best() {
  const featuredSections = useSuspenseQuery({
    queryKey: ["getBestProduct"],
    queryFn: getBestProduct,
  });

  return (
    <>
      <Header subHeader={<CategoriesSubHeader selected="/best" />} />
      <main>
        <ProductsWrap>
          {featuredSections.data.map((o) => (
            <Product
              key={o.productId}
              url={o.thumbnailUrl}
              alt={o.nameEn}
              name={o.nameKr}
              price={o.price}
              rank={o.rank}
            />
          ))}
        </ProductsWrap>
      </main>
      <StaticFooter />
    </>
  );
}

export default Best;

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="p-[24px]">
      <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[20px]">{children}</ul>
    </section>
  );
}
