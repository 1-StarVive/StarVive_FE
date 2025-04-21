"use client";

import StaticFooter from "@/components/footers/static-footer";
import Header from "@/components/headers/header";
import Product from "@/components/product";
import { getProductTagList } from "@/lib/api/tag";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

function Tag() {
  const params = useParams();

  const productTagList = useSuspenseQuery({
    queryKey: ["getProductTagList", params.tagId] as const,
    queryFn: async ({ queryKey }) => {
      const [_, tagId] = queryKey;
      if (typeof tagId !== "string") return [];
      return await getProductTagList(tagId);
    },
  });

  return (
    <>
      <Header />
      <MainWrap>
        <section className="p-[24px]">
          <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[20px]">
            {productTagList.data.map((p) => (
              <Product
                productId={p.productId}
                key={p.productId}
                alt={p.imageThumbAlt}
                url={p.imageThumbUrl}
                name={p.name}
                price={p.price}
                discountRate={p.baseDiscountRate}
              />
            ))}
          </ul>
        </section>
      </MainWrap>
      <StaticFooter />
    </>
  );
}

export default Tag;

function MainWrap({ children }: React.PropsWithChildren) {
  return <main className="">{children}</main>;
}
