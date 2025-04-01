"use client";

import { useState } from "react";
import ChevronDownIcon from "./icons/chevron-down-icon";
import { cn } from "@/lib/utils";

type AccordionProps = {
  title: string;
  contents: React.ReactNode;
};

function Accordion({ title, contents }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="flex h-[60px] w-full items-center justify-between gap-2 px-[24px]"
        type="button"
        onClick={handleToggle}
      >
        <span className="text-[16px] font-bold">{title}</span>
        <ChevronDownIcon className={cn("h-[9px] w-[15px]", { "rotate-180": isOpen })} />
      </button>

      {isOpen && <div className="overflow-hidden bg-[#f5f5f5] text-[#777777] transition-all">{contents}</div>}
    </div>
  );
}

export default Accordion;
