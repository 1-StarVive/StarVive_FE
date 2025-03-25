import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import Link from "next/link";

type CategoriesFooterItemProps = {
  title: string;
  content: string;
  href: string;
};

function CategoriesFooterItem({
  content,
  href,
  title,
}: CategoriesFooterItemProps) {
  return (
    <li className="mx-[24px] py-[20px] not-last:border-b not-last:border-gray-300">
      <Link
        className="flex gap-2 justify-between items-center px-1"
        href={href}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-bold">{title}</span>
          <span className="text-[12px]">{content}</span>
        </div>
        <ChevronLeftIcon className="h-[15px] w-[9px]" />
      </Link>
    </li>
  );
}

export default CategoriesFooterItem;
