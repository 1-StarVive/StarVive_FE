import Header from "@/components/headers/header";
import TopCategoryTabs from "./_ui/top-category-tabs";
import MiddleCategoryTabs from "./_ui/middle-category-tabs";
import BottomCategoryTabs from "./_ui/bottom-category-tabs";
import ProductListInfinite from "./_ui/product-list-infinite";
import { fetchProducts, fetchTopCategories, fetchMiddleCategories, fetchBottomCategories } from "@/lib/api/products";

// ✅ 상품 타입 정의
type Product = {
  productId: string;
  imageThumbUrl: string;
  name: string;
  price: number;
  imageThumbAlt?: string;
  baseDiscountRate?: number;
  discountedPrice?: number;
  main?: boolean;
};

type TopCategory = {
  topCategoryId: string;
  name: string;
};

type MiddleCategory = {
  middleCategoryId: string;
  name: string;
  topCategoryId: string;
};

type BottomCategory = {
  bottomCategoryId: string;
  name: string;
  middleCategoryId: string;
};

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function AllProductsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const selectedTopId = resolvedSearchParams.top ?? "";
  const selectedMiddleId = resolvedSearchParams.middle ?? "";
  const selectedBottomId = resolvedSearchParams.bottom ?? "";

  const productJson = await fetchProducts({
    topId: selectedTopId,
    middleId: selectedMiddleId,
    bottomId: selectedBottomId,
    pageSize: 20,
  });
  const products: Product[] = productJson.content ?? [];
  const uniqueProducts = Array.from(new Map(products.map((p) => [p.productId, p])).values());
  const lastProduct = products[products.length - 1];
  const initialCursor = lastProduct?.productId ?? null;
  const initialHasNext = products.length === 20;

  let topCategories = await fetchTopCategories();
  topCategories = [{ topCategoryId: "", name: "전체" }, ...topCategories];

  const middleCategories = (await fetchMiddleCategories()) as MiddleCategory[];
  const bottomCategories = (await fetchBottomCategories()) as BottomCategory[];
  const filteredMiddleCategories = middleCategories.filter((m) => m.topCategoryId === selectedTopId);
  const filteredBottomCategories = bottomCategories.filter((b) => b.middleCategoryId === selectedMiddleId);

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        <TopCategoryTabs topCategories={topCategories} selectedTopId={selectedTopId} />
        {filteredMiddleCategories.length > 0 && (
          <MiddleCategoryTabs
            middleCategories={filteredMiddleCategories}
            selectedTopId={selectedTopId}
            selectedMiddleId={selectedMiddleId}
          />
        )}
        {filteredBottomCategories.length > 0 && (
          <BottomCategoryTabs
            bottomCategories={filteredBottomCategories}
            selectedTopId={selectedTopId}
            selectedMiddleId={selectedMiddleId}
            selectedBottomId={selectedBottomId}
          />
        )}
        <ProductListInfinite
          initialProducts={uniqueProducts}
          initialCursor={initialCursor}
          initialHasNext={initialHasNext}
          selectedTopId={selectedTopId}
          selectedMiddleId={selectedMiddleId}
          selectedBottomId={selectedBottomId}
        />
      </main>
    </>
  );
}
export type { Product };
