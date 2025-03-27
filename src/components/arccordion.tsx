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
        className="w-full h-[60px] flex gap-2 items-center justify-between px-[24px]"
        type="button"
        onClick={handleToggle}
      >
        <span className="text-[16px] font-bold">{title}</span>
        <ChevronDownIcon
          className={cn("w-[15px] h-[9px]", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="bg-[#f5f5f5] text-[#777777] transition-all overflow-hidden">
          {contents}
        </div>
      )}
    </div>
  );
}

export default Accordion;
