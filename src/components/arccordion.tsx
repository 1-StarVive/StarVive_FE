"use client";

import { useMemo, useState } from "react";
import ChevronDownIcon from "./icons/chevron-down-icon";
import { cn } from "@/lib/utils";
import useFlodable from "@/hooks/use-foldable";

type AccordionProps = {
  title: React.ReactNode;
  contents: string;
};

function Accordion({ title, contents }: AccordionProps) {
  const { ref, isFolded, toggle } = useFlodable<HTMLDivElement>(false);

  const contentsList = useMemo(() => contents.split("\n"), [contents]);
  const handleToggle = () => {
    toggle();
  };

  return (
    <div>
      <button className="flex w-full items-center justify-between gap-2 px-[24px]" type="button" onClick={handleToggle}>
        <span className="py-4 text-[16px] font-bold">{title}</span>
        <ChevronDownIcon className={cn("h-[9px] w-[15px]", { "rotate-180": isFolded })} />
      </button>

      <div ref={ref} className="h-20">
        <div className="flex flex-col gap-1 bg-[#f5f5f5] p-5 text-sm text-[#777777]">
          {contentsList.map((contents, i) => (
            <div key={i}>{contents}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
