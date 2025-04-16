import Header from "@/components/headers/header";
import Link from "next/link";
import ProductListInfinite from "./_ui/product-list-infinite";
// ✅ 상품 타입 정의
type Product = {
  productId: string;
  imageThumbUrl: string;
  name: string;
  price: number;
  // 👇 향후 카테고리별 필터링용으로 사용할 예정
  topCategoryId: string;
  middleCategoryId: string;
  bottomCategoryId: string;
};

// ✅ 대분류 타입 정의
type TopCategory = {
  topCategoryId: string;
  name: string;
};

// ✅ 중분류 타입 정의
type MiddleCategory = {
  middleCategoryId: string;
  name: string;
  topCategoryId: string;
};

// ✅ 소분류 타입 정의
type BottomCategory = {
  bottomCategoryId: string;
  name: string;
  middleCategoryId: string;
};

// ✅ Props 타입 정의 (Next.js 15)
type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

// ✅ 서버 컴포넌트
export default async function AllProductsPage({ searchParams }: Props) {
  // ✅ 쿼리 파라미터 해석
  const resolvedSearchParams = await searchParams;
  const selectedTopId = resolvedSearchParams.top ?? "";
  const selectedMiddleId = resolvedSearchParams.middle ?? "";
  const selectedBottomId = resolvedSearchParams.bottom ?? "";

  // ✅ 상품 API 호출
  const lastProductId = resolvedSearchParams.lastProductId ?? "";
  const size = resolvedSearchParams.size ?? "20";

  const productRes = await fetch(
    `http://52.78.250.41:8082/api/v1/product/all?lastProductId=${lastProductId}&size=${size}`,
    {
      cache: "no-store",
    },
  );
  const products: Product[] = await productRes.json();

  // ✅ 대분류 API 호출
  const topRes = await fetch("http://52.78.250.41:8082/api/v1/top-categories/all", {
    cache: "no-store",
  });
  let topCategories: TopCategory[] = await topRes.json();
  topCategories = [{ topCategoryId: "", name: "전체" }, ...topCategories];

  // ✅ 중분류 API 호출
  const middleRes = await fetch("http://52.78.250.41:8082/api/v1/middle-categories/all", {
    cache: "no-store",
  });
  const middleCategories: MiddleCategory[] = await middleRes.json();

  // ✅ 소분류 API 호출
  const bottomRes = await fetch("http://52.78.250.41:8082/api/v1/bottom-categories/all", {
    cache: "no-store",
  });
  const bottomCategories: BottomCategory[] = await bottomRes.json();

  // ✅ 현재 선택된 top/middle에 해당하는 middle/bottom 필터링
  const filteredMiddleCategories = middleCategories.filter((m) => m.topCategoryId === selectedTopId);
  const filteredBottomCategories = bottomCategories.filter((b) => b.middleCategoryId === selectedMiddleId);

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* ✅ 대분류 UI */}
        <nav className="scrollbar-hidden flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-300">
          {topCategories.map((topCategory) => (
            <Link
              key={topCategory.topCategoryId}
              href={`/all-products?top=${topCategory.topCategoryId}`}
              className={`shrink-0 px-[14px] py-[19px] text-[14px] font-medium whitespace-nowrap ${
                selectedTopId === topCategory.topCategoryId ? "font-semibold text-green-600" : "text-gray-500"
              }`}
            >
              {topCategory.name}
            </Link>
          ))}
        </nav>

        {/* ✅ 중분류 UI */}
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

        {/* ✅ 소분류 UI - API 기반 */}
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

        {/* ✅ 상품 리스트 */}
        <ProductListInfinite
          initialProducts={products}
          selectedTopId={selectedTopId}
          selectedMiddleId={selectedMiddleId}
          selectedBottomId={selectedBottomId}
        />
      </main>
    </>
  );
}
