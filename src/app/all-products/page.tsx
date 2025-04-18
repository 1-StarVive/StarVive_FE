import Header from "@/components/headers/header";
import Link from "next/link";
import ProductListInfinite from "./_ui/product-list-infinite";

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

  // ✅ 상품 API 호출
  const productQuery = new URLSearchParams();
  if (selectedTopId) productQuery.set("topId", selectedTopId);
  if (selectedMiddleId) productQuery.set("middleId", selectedMiddleId);
  if (selectedBottomId) productQuery.set("bottomId", selectedBottomId);
  productQuery.set("pageSize", "20");

  const productRes = await fetch(`http://52.78.250.41:8082/api/v1/product-category?${productQuery.toString()}`, {
    cache: "no-store",
  });
  const productJson = await productRes.json();
  const products: Product[] = productJson.content ?? [];

  // ✅ 중복 제거
  const uniqueProducts = Array.from(new Map(products.map((p) => [p.productId, p])).values());

  // ✅ 커서 직접 추출 (서버가 준 nextCursor 사용 ❌)
  const lastProduct = products[products.length - 1];
  const initialCursor = lastProduct?.productId ?? null;
  const initialHasNext = products.length === 20;

  // ✅ 카테고리 API
  const topRes = await fetch("http://52.78.250.41:8082/api/v1/top-categories/all", { cache: "no-store" });
  let topCategories: TopCategory[] = await topRes.json();
  topCategories = [{ topCategoryId: "", name: "전체" }, ...topCategories];

  const middleRes = await fetch("http://52.78.250.41:8082/api/v1/middle-categories/all", { cache: "no-store" });
  const middleCategories: MiddleCategory[] = await middleRes.json();

  const bottomRes = await fetch("http://52.78.250.41:8082/api/v1/bottom-categories/all", { cache: "no-store" });
  const bottomCategories: BottomCategory[] = await bottomRes.json();

  const filteredMiddleCategories = middleCategories.filter((m) => m.topCategoryId === selectedTopId);
  const filteredBottomCategories = bottomCategories.filter((b) => b.middleCategoryId === selectedMiddleId);

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* 대분류 */}
        <nav className="scrollbar-hidden flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-300">
          {topCategories.map((topCategory) => (
            <Link
              key={topCategory.topCategoryId || "all"}
              href={`/all-products?top=${topCategory.topCategoryId}`}
              className={`shrink-0 px-[14px] py-[19px] text-[14px] font-medium whitespace-nowrap ${
                selectedTopId === topCategory.topCategoryId ? "font-semibold text-green-600" : "text-gray-500"
              }`}
            >
              {topCategory.name}
            </Link>
          ))}
        </nav>

        {/* 중분류 */}
        {filteredMiddleCategories.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-200 bg-gray-50">
            {filteredMiddleCategories.map((middleCategory) => (
              <Link
                key={middleCategory.middleCategoryId}
                href={`/all-products?top=${selectedTopId}&middle=${middleCategory.middleCategoryId}`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  selectedMiddleId === middleCategory.middleCategoryId
                    ? "font-semibold text-green-600"
                    : "text-gray-500"
                }`}
              >
                {middleCategory.name}
              </Link>
            ))}
          </nav>
        )}

        {/* 소분류 */}
        {filteredBottomCategories.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-100 bg-gray-50">
            {filteredBottomCategories.map((bottomCategory) => (
              <Link
                key={bottomCategory.bottomCategoryId}
                href={`/all-products?top=${selectedTopId}&middle=${selectedMiddleId}&bottom=${bottomCategory.bottomCategoryId}`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  selectedBottomId === bottomCategory.bottomCategoryId
                    ? "font-semibold text-green-600"
                    : "text-gray-500"
                }`}
              >
                {bottomCategory.name}
              </Link>
            ))}
          </nav>
        )}

        {/* 상품 리스트 (무한스크롤) */}
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
