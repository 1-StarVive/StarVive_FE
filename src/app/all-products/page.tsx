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
    category?: string;
    season?: string;
    volume?: string;
    price?: string;
  }>({});

  const renderFilterRow = (label: string, key: keyof typeof selectedFilters) => {
    const options = currentFilters[key];
    if (!options) return null;

    return (
      <div className="flex h-[55px] w-full items-center border-b border-gray-200 py-[19px] pr-[14px]">
        {/* 제목 */}
        <div className="mr-4 shrink-0 pl-[24px] text-[14px] font-semibold text-black">{label}</div>

        {/* 버튼 리스트: 가로 스크롤 가능하게! */}
        <div className="flex overflow-x-auto">
          {options.map((item: string) => (
            <button
              key={item}
              onClick={() => setSelectedFilters((prev) => ({ ...prev, [key]: item }))}
              className={`px-[14px] text-[14px] whitespace-nowrap ${
                selectedFilters[key] === item ? "font-semibold text-green-600" : "text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  };

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
        {renderFilterRow("카테고리", "category")}
        {renderFilterRow("시즌", "season")}
        {renderFilterRow("용량", "volume")}
        {renderFilterRow("가격", "price")}
      </main>
    </>
  );
}

export default AllProducts;
