"use client";

import { useRouter } from "next/navigation";
import ChevronRightIcon from "@/components/icons/chevron-right-icon";
import HeaderIconButton from "./header-icon-button";

function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return <HeaderIconButton icon={<ChevronRightIcon className="h-[18px] w-[10px]" />} onClick={handleClick} />;
}

export default BackButton;
