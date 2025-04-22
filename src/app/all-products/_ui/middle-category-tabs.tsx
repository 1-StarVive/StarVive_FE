import Link from "next/link";

type MiddleCategory = {
  middleCategoryId: string;
  name: string;
  topCategoryId: string;
};

type Props = {
  middleCategories: MiddleCategory[];
  selectedTopId: string;
  selectedMiddleId: string;
};

export default function MiddleCategoryTabs({ middleCategories, selectedTopId, selectedMiddleId }: Props) {
  return (
    <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-200 bg-gray-50">
      {middleCategories.map((middleCategory) => (
        <Link
          key={middleCategory.middleCategoryId}
          href={`/all-products?top=${selectedTopId}&middle=${middleCategory.middleCategoryId}`}
          className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
            selectedMiddleId === middleCategory.middleCategoryId ? "font-semibold text-green-600" : "text-gray-500"
          }`}
        >
          {middleCategory.name}
        </Link>
      ))}
    </nav>
  );
}
