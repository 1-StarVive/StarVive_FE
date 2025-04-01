import Product from "@/components/product";
import Title from "./title";

function ProductSectionsSkeleton() {
  return (
    <>
      <SectionWrap>
        <Title.Skeleton />
        <ProductsWrap>
          <Product.Skeleton />
          <Product.Skeleton />
          <Product.Skeleton />
        </ProductsWrap>
      </SectionWrap>

      <SectionWrap>
        <Title.Skeleton />
        <ProductsWrap>
          <Product.Skeleton />
          <Product.Skeleton />
          <Product.Skeleton />
        </ProductsWrap>
      </SectionWrap>

      <SectionWrap>
        <Title.Skeleton />
        <ProductsWrap>
          <Product.Skeleton />
          <Product.Skeleton />
          <Product.Skeleton />
        </ProductsWrap>
      </SectionWrap>
    </>
  );
}

export default ProductSectionsSkeleton;

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function ProductsWrap({ children }: React.PropsWithChildren) {
  return (
    <div className="grid grid-flow-col auto-cols-[40%] overflow-hidden gap-[18px] p-[24px]">
      {children}
    </div>
  );
}
