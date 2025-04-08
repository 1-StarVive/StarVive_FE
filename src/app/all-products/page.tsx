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
  ] as const;
  type Category = (typeof categories)[number];
  const [selected, setSelected] = useState<Category>("전체");
  const [isExpanded, setIsExpanded] = useState(false);
  // 필터 구현중 하드코딩
  const filterOptions: Partial<Record<Category, { [key: string]: string[] }>> = {
    전체: {
      season: ["4월 신규코어 MD", "봄 기획전"],
      price: ["1만원 이하", "1~2만원", "2만원 이상"],
    },
    "텀블러/보온병": {
      category: [
        "보온",
        "보냉",
        "스테인리스1",
        "스테인리스2",
        "스테인리스3",
        "스테인리스4",
        "스테인리스5",
        "스테인리스6",
        "스테인리스7",
      ],
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
  const [selectedFilters, setSelectedFilters] = useState<{
    category?: string[];
    season?: string[];
    volume?: string[];
    price?: string; // 가격만 단일 선택 유지
  }>({});

  const renderFilterRow = (label: string, key: keyof typeof selectedFilters) => {
    const options = currentFilters[key];
    if (!options) return null;

    return (
      <div className="flex h-[55px] w-full items-center border-b border-gray-200 py-[19px] pr-[14px]">
        {/* 제목 */}
        <div className="mr-4 shrink-0 pl-[24px] text-[14px] font-semibold text-black">{label}</div>

        {/* 버튼 리스트: 가로 스크롤 가능하게! */}
        <div className="scrollbar-hidden flex overflow-x-auto">
          {options.map((item: string) => {
            const isSelected = Array.isArray(selectedFilters[key])
              ? (selectedFilters[key] as string[]).includes(item)
              : selectedFilters[key] === item;

            return (
              <button
                key={item}
                onClick={() => {
                  if (key === "price") {
                    // 단일 선택
                    setSelectedFilters((prev) => ({ ...prev, [key]: item }));
                  } else {
                    // 다중 선택 (배열)
                    const prevList = (selectedFilters[key] as string[]) || [];
                    const newList = prevList.includes(item) ? prevList.filter((v) => v !== item) : [...prevList, item];

                    setSelectedFilters((prev) => ({ ...prev, [key]: newList }));
                  }
                }}
                className={`px-[14px] text-[14px] whitespace-nowrap ${
                  isSelected ? "font-semibold text-green-600" : "text-gray-500"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header showBackButton />
      <main className="min-h-screen bg-white">
        {/* 하위 탭바 */}
        <nav className="scrollbar-hidden flex h-[55px] w-full items-center overflow-x-auto border-b border-gray-300">
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
        {/* 필터 항상 보이는 것들 */}
        <section aria-labelledby="filter-section">
          <h2 id="filter-section" className="sr-only">
            상품 필터
          </h2>
          {renderFilterRow("카테고리", "category")}
          {renderFilterRow("시즌", "season")}

          {/* 더보기 눌렀을 때만 보이는 필터 */}
          {isExpanded && (
            <>
              {renderFilterRow("용량", "volume")}
              {renderFilterRow("가격", "price")}
            </>
          )}
        </section>
        {/* 토글 버튼 */}
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="w-full border-b border-gray-200 px-[14px] py-[19px] text-[14px] font-semibold text-black"
        >
          {isExpanded ? "접기 ▲" : "필터 더보기 ▼"}
        </button>
      </main>
    </>
  );
}

export default AllProducts;
