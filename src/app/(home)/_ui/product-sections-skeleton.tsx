import Product from "@/components/product";
import { Skeleton } from "@/components/skeleton";

function ProductSectionsSkeleton() {
  return (
    <>
      <SectionWrap>
        <Title />
        <ProductsWrap>
          <Product.Skeleton />
          <Product.Skeleton />
          <Product.Skeleton />
        </ProductsWrap>
      </SectionWrap>

      <SectionWrap>
        <Title />
        <ProductsWrap>
          <Product.Skeleton />
          <Product.Skeleton />
          <Product.Skeleton />
        </ProductsWrap>
      </SectionWrap>

      <SectionWrap>
        <Title />
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

function Title() {
  return (
    <div className="text-[22px] px-[24px]">
      <Skeleton className="w-[200px] h-[30px]" />
    </div>
  );
}
