import Link from "next/link";

type TopCategory = {
  topCategoryId: string;
  name: string;
};

type Props = {
  topCategories: TopCategory[];
  selectedTopId: string;
};

export default function TopCategoryTabs({ topCategories, selectedTopId }: Props) {
  return (
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
  );
}
