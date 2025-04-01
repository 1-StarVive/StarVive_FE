import Banner from "./_ui/banner";
import ProductSections from "./_ui/product-sections";
import { Suspense } from "react";
import TagSection from "./_ui/tag-section";
import Header from "@/components/headers/header";
import CategoriesSubHeader from "@/components/headers/categories-sub-header";

export default async function Home() {
  return (
    <>
      <Header subHeader={<CategoriesSubHeader selected="/" />} />
      <MainWrap>
        <Banner />

        <Suspense fallback={<TagSection.Skeleton />}>
          <TagSection />
        </Suspense>

        <Suspense fallback={<ProductSections.Skeleton />}>
          <ProductSections />
        </Suspense>
      </MainWrap>
    </>
  );
}

function MainWrap({ children }: React.PropsWithChildren) {
  return <main className="space-y-[50px]">{children}</main>;
}
