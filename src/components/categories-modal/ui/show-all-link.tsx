import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import Link from "next/link";

function ShowAllLink() {
  return (
    <Link href={"./"} className="flex gap-2 items-center">
      <span className="text-[12px]">전체 상품 보기</span>
      <ChevronLeftIcon className="h-[10px] w-[6px]" />
    </Link>
  );
}

export default ShowAllLink;
