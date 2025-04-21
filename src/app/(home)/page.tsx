import MainCarousel from "./_ui/carousel/main-carousel";
import ProductSections from "./_ui/product-sections";
import { Suspense } from "react";
import CategoriesSubHeader from "@/components/headers/categories-sub-header";
import StaticFooter from "@/components/footers/static-footer";
import Header from "@/components/headers/header";

export default function Home() {
  return (
    <>
      <Header subHeader={<CategoriesSubHeader selected="/" />} />
      <MainWrap>
        <MainCarousel />
        <Suspense fallback={<ProductSections.Skeleton />}>
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
