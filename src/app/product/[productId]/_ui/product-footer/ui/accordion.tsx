import ChevronDownIcon from "@/components/icons/chevron-down-icon";
import useFlodable from "@/hooks/use-foldable";
import { cn } from "@/lib/utils";

export type AccordionProps = {
  /** @default false  */
  initialFolded?: boolean;
  title: string;
  children?: React.ReactNode;
};

function Accordion({ initialFolded, title, children }: AccordionProps) {
  const { ref, isFolded, close, open } =
    useFlodable<HTMLUListElement>(initialFolded);

  return (
    <div className="rounded border">
      <div
        className={cn("grid grid-cols-[1fr_auto] items-center px-4 py-2", {
          "bg-[#f7f7f7]": !isFolded,
        })}
        onClick={isFolded ? open : close}
      >
        <span className="font-bold">{title}</span>
        <ChevronDownIcon
          className={cn("h-[9px] w-[15px] transition-transform", {
            "rotate-180": !isFolded,
          })}
        />
      </div>

      <ul ref={ref}>{children}</ul>
    </div>
  );
}

export default Accordion;
