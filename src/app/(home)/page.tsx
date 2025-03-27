import Banner from "./_ui/banner";
import Header from "@/components/header";
import CategoriesHeader from "@/components/categories-header";
import ProductSections from "./_ui/product-sections";
import { Suspense } from "react";
import TagSection from "./_ui/tag-section";

export default async function Home() {
  return (
    <>
      <Header subHeader={<CategoriesHeader selected="/" />} />
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
