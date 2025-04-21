import CategoriesSubHeader from "@/components/headers/categories-sub-header";
import ProductSections from "./_ui/product-sections";
import Header from "@/components/headers/header";
import MainCarousel from "./_ui/carousel/main-carousel";
import { Suspense } from "react";
import StaticFooter from "@/components/footers/static-footer";
import ProductSectionsSkeleton from "./_ui/product-sections.skeleton";

export default function Home() {
  return (
    <>
      <Header subHeader={<CategoriesSubHeader selected="/" />} />
      <MainWrap>
        <MainCarousel />
        <Suspense fallback={<ProductSectionsSkeleton />}>
          <ProductSections />
        </Suspense>
      </MainWrap>
      <StaticFooter />
    </>
  );
}

function MainWrap({ children }: React.PropsWithChildren) {
  return <main className="space-y-[50px]">{children}</main>;
}
