import Header from "@/components/headers/header";
import Link from "next/link";

const API_BASE = "http://52.78.250.41:8082/api/v1";

// Props 타입 정의
type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

// 타입 정의
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

export default async function AllProductsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const topCategoryId = resolvedSearchParams.top ?? "";
  const middleCategoryId = resolvedSearchParams.middle ?? "";
  const bottomCategoryId = resolvedSearchParams.bottom ?? "";

  // Fetch all categories
  const [topRes, middleRes, bottomRes] = await Promise.all([
    fetch(`${API_BASE}/top-categories/all`, { cache: "no-store" }),
    fetch(`${API_BASE}/middle-categories/all`, { cache: "no-store" }),
    fetch(`${API_BASE}/bottom-categories/all`, { cache: "no-store" }),
  ]);

  const [topCategories, middleCategories, bottomCategories]: [TopCategory[], MiddleCategory[], BottomCategory[]] =
    await Promise.all([topRes.json(), middleRes.json(), bottomRes.json()]);

  const filteredMiddle = middleCategories.filter((m) => m.topCategoryId === topCategoryId);
  const filteredBottom = bottomCategories.filter((b) => b.middleCategoryId === middleCategoryId);

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* Top Category */}
        <nav className="scrollbar-hidden flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-300">
          {topCategories.map((cat) => (
            <Link
              key={cat.topCategoryId}
              href={`/all-products?top=${cat.topCategoryId}`}
              className={`shrink-0 px-[14px] py-[19px] text-[14px] font-medium whitespace-nowrap ${
                topCategoryId === cat.topCategoryId ? "font-semibold text-green-600" : "text-gray-500"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* Middle Category */}
        {filteredMiddle.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-200 bg-gray-50">
            {filteredMiddle.map((item) => (
              <Link
                key={item.middleCategoryId}
                href={`/all-products?top=${topCategoryId}&middle=${item.middleCategoryId}`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  middleCategoryId === item.middleCategoryId ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Bottom Category */}
        {filteredBottom.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-100 bg-gray-50">
            {filteredBottom.map((item) => (
              <Link
                key={item.bottomCategoryId}
                href={`/all-products?top=${topCategoryId}&middle=${middleCategoryId}&bottom=${item.bottomCategoryId}`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  bottomCategoryId === item.bottomCategoryId ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* 상품 리스트 (실제 필터링 연동 예정) */}
        <section className="p-4">
          <div className="text-center text-gray-400">📦 필터링된 상품 리스트가 여기에 표시됩니다. (추후 연결)</div>
        </section>
      </main>
    </>
  );
}
