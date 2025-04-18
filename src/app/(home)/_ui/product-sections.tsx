"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import ProductSectionsSkeleton from "./product-sections.skeleton";
import Title from "./title";
import Product from "@/components/product";
import { getFeaturedSectionAll, getFeaturedSectionProducts } from "@/lib/api/featured-section";
import { useMemo } from "react";
import * as F from "fp-ts/function";
import * as NEA from "fp-ts/NonEmptyArray";
import * as R from "fp-ts/Record";

function ProductSections() {
  const featuredSections = useSuspenseQuery({
    queryKey: ["featuredSectionAll"],
    queryFn: getFeaturedSectionAll,
  });
  const featuredSectionIds = useMemo(
    () => featuredSections.data.map((o) => o.featuredSectionId),
    [featuredSections.data],
  );
  const featuredSectionProducts = useSuspenseQuery({
    queryKey: ["featuredSectionProducts", featuredSectionIds] as const,
    queryFn: async ({ queryKey }) => {
      const [_, featuredSectionIds] = queryKey;
      if (featuredSectionIds.length === 0) return [];
      return await getFeaturedSectionProducts({ featuredSectionIds });
    },
  });
  const datas = useMemo(() => {
    const productsByFeaturedSectionsId = F.pipe(
      featuredSectionProducts.data,
      NEA.groupBy((o) => o.featuredSectionsId),
      R.map(NEA.head),
      R.map((o) => o.products),
    );
    return featuredSections.data.map((o) => ({ ...o, products: productsByFeaturedSectionsId[o.featuredSectionId] }));
  }, [featuredSections.data, featuredSectionProducts.data]);

  return (
    <>
      {datas.map((o) => (
        <SectionWrap key={o.featuredSectionId}>
          <Title>{o.name}</Title>
          <ProductsWrap>
            {o.products?.map((p, i) => (
              <Product
                key={i}
                name={p.name}
                price={p.price}
                discountRate={p.baseDiscountRate}
                url={p.imageThumbUrl}
                alt={p.imageThumbAlt}
              />
            ))}
          </ProductsWrap>
        </SectionWrap>
      ))}
    </>
  );
}

export default ProductSections;

ProductSections.Skeleton = ProductSectionsSkeleton;

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function ProductsWrap({ children }: React.PropsWithChildren) {
  return <ul className="grid auto-cols-[40%] grid-flow-col gap-[18px] overflow-auto p-[24px]">{children}</ul>;
}
