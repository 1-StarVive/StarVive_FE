import Link from "next/link";

type BottomCategory = {
  bottomCategoryId: string;
  name: string;
  middleCategoryId: string;
};

type Props = {
  bottomCategories: BottomCategory[];
  selectedTopId: string;
  selectedMiddleId: string;
  selectedBottomId: string;
};

export default function BottomCategoryTabs({
  bottomCategories,
  selectedTopId,
  selectedMiddleId,
  selectedBottomId,
}: Props) {
  return (
    <nav className="scrollbar-hidden flex h-[50px] w-full items-center overflow-x-auto border-b border-gray-100 bg-gray-50">
      {bottomCategories.map((bottomCategory) => (
        <Link
          key={bottomCategory.bottomCategoryId}
          href={`/all-products?top=${selectedTopId}&middle=${selectedMiddleId}&bottom=${bottomCategory.bottomCategoryId}`}
          className={`shrink-0 px-[14px] py-[14px] text-[14px] whitespace-nowrap ${
            selectedBottomId === bottomCategory.bottomCategoryId ? "font-semibold text-green-600" : "text-gray-500"
          }`}
        >
          {bottomCategory.name}
        </Link>
      ))}
    </nav>
  );
}
