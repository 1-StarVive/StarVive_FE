import Header from "@/components/headers/header";
import Link from "next/link";
import { products } from "./mock-products/mock-products";

// 대분류 카테고리
const categories = [
  "전체",
  "텀블러/보온병",
  "머그/컵",
  "라이프스타일",
  "티/커피용품",
  "케이크",
  "초콜릿/스낵",
  "세트",
] as const;

type Category = (typeof categories)[number];

// 중분류 및 소분류 옵션
const category1Options: Record<Category, string[]> = {
  전체: [],
  "텀블러/보온병": ["보온", "보냉", "스테인리스"],
  "머그/컵": ["머그", "컵"],
  라이프스타일: ["피크닉", "문구"],
  "티/커피용품": ["필터", "티스푼"],
  케이크: ["조각", "홀케이크"],
  "초콜릿/스낵": ["초콜릿", "쿠키"],
  세트: ["선물세트", "디저트세트"],
};

const category2Options: Record<string, string[]> = {
  보온: ["350ml", "500ml", "1L 이상"],
  보냉: ["스테인리스", "플라스틱"],
  스테인리스: ["무광", "유광"],
  머그: ["세라믹", "스틸"],
  컵: ["투명", "컬러"],
};

// 필터링 함수
function filterProducts(all: typeof products, category: string, category1: string, category2: string) {
  return all.filter((p) => {
    if (category && category !== "전체" && p.category !== category) return false;
    if (category1 && p.category1 !== category1) return false;
    if (category2 && p.category2 !== category2) return false;
    return true;
  });
}

// Props 타입 정의
type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>; // Next.js 15에서 searchParams는 Promise로 제공됨
};

// 비동기 컴포넌트로 수정
export default async function AllProductsPage({ searchParams }: Props) {
  // searchParams를 await로 해소
  const resolvedSearchParams = await searchParams;

  // searchParams 값 추출
  const category = resolvedSearchParams.category ?? "전체";
  const category1 = resolvedSearchParams.category1 ?? "";
  const category2 = resolvedSearchParams.category2 ?? "";

  const selectedCategory = category as Category;
  const selectedCategory1 = category1;
  const selectedCategory2 = category2;

  const filtered = filterProducts(products, category, category1, category2);

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* 대분류 */}
        <nav className="scrollbar-hidden flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-300">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/all-products?category=${cat}&page=1`}
              className={`shrink-0 px-[14px] py-[19px] text-[14px] font-medium whitespace-nowrap ${
                selectedCategory === cat ? "font-semibold text-green-600" : "text-gray-500"
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>

        {/* 중분류 */}
        {category1Options[selectedCategory].length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-200 bg-gray-50">
            {category1Options[selectedCategory].map((item) => (
              <Link
                key={item}
                href={`/all-products?category=${selectedCategory}&category1=${item}&page=1`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  selectedCategory1 === item ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        )}

        {/* 소분류 */}
        {category2Options[selectedCategory1]?.length > 0 && (
          <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-100 bg-gray-50">
            {category2Options[selectedCategory1].map((item) => (
              <Link
                key={item}
                href={`/all-products?category=${selectedCategory}&category1=${selectedCategory1}&category2=${item}&page=1`}
                className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
                  selectedCategory2 === item ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        )}

        {/* 상품 리스트 */}
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
