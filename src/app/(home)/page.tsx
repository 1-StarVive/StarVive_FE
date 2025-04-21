import CategoriesSubHeader from "@/components/headers/categories-sub-header";
import ProductSections from "./_ui/product-sections";
import Header from "@/components/headers/header";
import MainCarousel from "./_ui/carousel/main-carousel";
import { Suspense } from "react";
import StaticFooter from "@/components/footers/static-footer";
import ProductSectionsSkeleton from "./_ui/product-sections.skeleton";
import TagSection from "./_ui/tag-section";
import TagSectionSkeleton from "./_ui/tag-section.skeleton";

export default function Home() {
  return (
    <>
      <Header subHeader={<CategoriesSubHeader selected="/" />} />
      <MainWrap>
        <MainCarousel />

        <Suspense fallback={<TagSectionSkeleton />}>
          <TagSection />
        </Suspense>

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
