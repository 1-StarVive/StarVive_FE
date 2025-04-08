"use client";

import { useState } from "react"; // ✅ 반드시 필요
import Header from "@/components/headers/header";

function AllProducts() {
  const categories = [
    "전체",
    "텀블러/보온병",
    "머그/컵",
    "라이프스타일",
    "티/커피용품",
    "케이크",
    "초콜릿/스낵",
    "세트",
  ];
  const [selected, setSelected] = useState("전체");

  // 필터 구현중 하드코딩
  const filterOptions = {
    전체: {
      season: ["4월 신규코어 MD", "봄 기획전"],
      price: ["1만원 이하", "1~2만원", "2만원 이상"],
    },
    "텀블러/보온병": {
      category: ["보온", "보냉", "스테인리스"],
      season: ["여름 한정", "겨울 한정"],
      volume: ["350ml", "500ml 이상"],
      price: ["2만원 이하", "2만원 이상"],
    },
    "머그/컵": {
      category: ["머그", "컵"],
      season: ["굿즈 기획전"],
      price: ["1만원 이하", "1~2만원"],
    },
  };

  const currentFilters = filterOptions[selected] || {};
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* 하위 탭바 */}
        <nav className="flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-200">
          {categories.map((categoryName) => (
            <button
              key={categoryName}
              onClick={() => setSelected(categoryName)}
              className={`shrink-0 px-[14px] py-[19px] text-[14px] font-medium whitespace-nowrap ${selected === categoryName ? "font-semibold text-green-600" : "text-gray-500"}`}
            >
              {categoryName}
            </button>
          ))}
        </nav>

        {/* 필터 */}
        {currentFilters.category && (
          <div className="flex gap-4 px-4 py-2">
            <div className="w-[60px] text-sm font-semibold text-black">카테고리</div>
            <div className="flex flex-wrap gap-2">
              {currentFilters.category.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedCategoryFilter(item)}
                  className={`rounded-full px-2 py-1 text-sm ${selectedCategoryFilter === item ? "font-semibold text-green-600" : "text-gray-500"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default AllProducts;
