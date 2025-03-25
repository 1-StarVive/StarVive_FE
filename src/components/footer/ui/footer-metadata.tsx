"use client";

import ChevronDownIcon from "@/components/icons/chevron-down-icon";
import StartbucksIcon from "@/components/icons/starbucks-icon";
import { cn } from "@/lib/utils";
import { useState } from "react";

function FooterMetadata() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-[24px] py-2">
      <button className="flex gap-3 items-center" onClick={handleClickToggle}>
        <StartbucksIcon className="w-[120px] h-[13px]" />
        <ChevronDownIcon
          className={cn("w-[15px] h-[9px]", { "rotate-180": isOpen })}
        />
      </button>
      {isOpen && (
        <div className="pt-5 pb-2">
          <p className="text-[11px] text-[#808080]">
            주식회사 에스씨케이컴퍼니
          </p>
          <ul className="text-[11px] text-[#808080] flex flex-wrap gap-x-4">
            <li>대표이사 : 손정현</li>
            <li>사업자등록번호 : 201-81-21515</li>
            <li>TEL : 1522-3232</li>
            <li>개인정보 보호책임자 : 이찬우</li>
            <li>통신판매업신고번호 : 2011-서울중구-1066</li>
          </ul>
          <p className="text-[11px] text-[#808080]">
            주소 : 서울특별시 중구 퇴계로 100 (스테이트타워 남산) 8~10층 (우 :
            04631)
          </p>
        </div>
      )}
    </div>
  );
}

export default FooterMetadata;
