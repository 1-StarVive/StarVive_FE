"use client";

import Product from "@/components/product";
import { getPromotionProducts } from "@/lib/api/promotion";
import { useQuery } from "@tanstack/react-query";

type PromotionProductsProps = {
  productId: string;
};
function PromotionProducts({ productId }: PromotionProductsProps) {
  const products = useQuery({
    queryKey: ["promotionProducts", productId] as const,
    queryFn: async ({ queryKey }) => {
      const [_, productId] = queryKey;
      return await getPromotionProducts(productId);
    },
  });

  return (
    <ProductsWrap>
      {products.isPending ? (
        Array.from({ length: 10 }).map((_, i) => <Product.Skeleton key={i} />)
      ) : products.isError ? (
        <div>Error</div>
      ) : (
        products.data.map((p, i) => (
          <Product
            key={i}
            name={p.name}
            price={p.price}
            discountRate={p.baseDiscountRate}
            url={p.imageThumbUrl}
            alt={p.imageThumbAlt}
          />
        ))
      )}
    </ProductsWrap>
  );
}

export default PromotionProducts;

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <section className="p-[24px]">
      <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[20px]">{children}</ul>
    </section>
  );
}
