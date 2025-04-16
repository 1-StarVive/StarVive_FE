import Header from "@/components/headers/header";
import Link from "next/link";
import { products } from "./mock-products/mock-products";

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

// ✅ 상품 필터링 함수
function filterProducts(all: typeof products, category: string, category1: string, category2: string) {
  return all.filter((p) => {
    if (category && category !== "전체" && p.category !== category) return false;
    if (category1 && p.category1 !== category1) return false;
    if (category2 && p.category2 !== category2) return false;
    return true;
  });
}

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

  // ✅ 대분류 API 호출
  const topRes = await fetch("http://52.78.250.41:8082/api/v1/top-categories/all", {
    cache: "no-store",
  });
  const topCategories = [{ topCategoryId: "", name: "전체" }, ...((await topRes.json()) as TopCategory[])];

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

  // 상품 필터링에 관한 mock api 삭제예정
  const category = resolvedSearchParams.category ?? "전체";
  const category1 = resolvedSearchParams.category1 ?? "";
  const category2 = resolvedSearchParams.category2 ?? "";

  // ✅ 상품 필터링 삭제예정
  const filtered = filterProducts(products, category, category1, category2);
  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* ✅ 대분류 UI */}
        <nav className="scrollbar-hidden flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-300">
          {topCategories.map((cat) => (
            <Link
              key={cat.topCategoryId}
              href={`/all-products?top=${cat.topCategoryId}`}
              className={`shrink-0 px-[14px] py-[19px] text-[14px] font-medium whitespace-nowrap ${
                selectedTopId === cat.topCategoryId ? "font-semibold text-green-600" : "text-gray-500"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* ✅ 중분류 UI */}
        {filteredMiddleCategories.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-200 bg-gray-50">
            {filteredMiddleCategories.map((item) => (
              <Link
                key={item.middleCategoryId}
                href={`/all-products?top=${selectedTopId}&middle=${item.middleCategoryId}`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  selectedMiddleId === item.middleCategoryId ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* ✅ 소분류 UI - API 기반 */}
        {filteredBottomCategories.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-100 bg-gray-50">
            {filteredBottomCategories.map((item) => (
              <Link
                key={item.bottomCategoryId}
                href={`/all-products?top=${selectedTopId}&middle=${selectedMiddleId}&bottom=${item.bottomCategoryId}`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  selectedBottomId === item.bottomCategoryId ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* ✅ 상품 리스트 */}
        <section className="grid grid-cols-2 gap-4 p-4">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id} className="rounded border p-2">
                <img src={product.imageUrl} alt={product.name} className="mb-2 w-full" />
                <div className="text-sm font-semibold">{product.name}</div>
                <div className="text-xs text-gray-500">{product.price}</div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500">조건에 맞는 상품이 없습니다.</div>
          )}
        </section>
      </main>
    </>
  );
}
