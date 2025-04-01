import { getFeaturedSectionIdWithProducts } from "../_lib/api";
import ProductSectionsSkeleton from "./product-sections.skeleton";
import Title from "./title";
import Product from "@/components/product";

async function ProductSections() {
  try {
    const featuredSectionIdWithProducts =
      await getFeaturedSectionIdWithProducts();

    return (
      <>
        {featuredSectionIdWithProducts.map((f) => (
          <SectionWrap key={f.featuredSectionsId}>
            <Title>{f.name}</Title>
            <ProductsWrap>
              {f.products?.map((p) => (
                <Product
                  key={p.productId}
                  name={p.name}
                  price={p.price}
                  discountRate={p.discountRate}
                  discountedPrice={p.discountedPrice}
                  url={p.url}
                  alt={p.alt}
                  isTop={p.isTop}
                  isLimitedEdition={p.isLimitedEdition}
                />
              ))}
            </ProductsWrap>
          </SectionWrap>
        ))}
      </>
    );
  } catch {
    return <div>에러남ㅠ</div>;
  }
}

export default ProductSections;

ProductSections.Skeleton = ProductSectionsSkeleton;

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="grid grid-flow-col auto-cols-[40%] overflow-auto gap-[18px] p-[24px]">
      {children}
    </ul>
  );
}
