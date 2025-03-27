import { getFeaturedSections } from "@/lib/api/featured-sections";
import { getProductsByFeaturedSectionId } from "../_lib/api";
import Title from "./title";
import Product from "@/components/product";

async function ProductSections() {
  const featuredSections = await getFeaturedSections();
  const featuredSectionsIds = featuredSections.map((o) => o.featuredSectionsId);
  const productsByFeaturedSectionId = await getProductsByFeaturedSectionId(
    featuredSectionsIds
  );

  return featuredSections.map((featuredSection) => {
    const products =
      productsByFeaturedSectionId[featuredSection.featuredSectionsId];
    return (
      <SectionWrap key={featuredSection.featuredSectionsId}>
        <Title>{featuredSection.name}</Title>
        <ProductsWrap>
          {products?.map((product) => (
            <Product
              key={product.productId}
              name={product.name}
              price={product.price}
              discountRate={product.discountRate}
              discountedPrice={product.discountedPrice}
              url={product.url}
              alt={product.alt}
              isTop={product.isTop}
              isLimitedEdition={product.isLimitedEdition}
            />
          ))}
        </ProductsWrap>
      </SectionWrap>
    );
  });
}

export default ProductSections;

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
