import { cn } from "@/lib/utils";
import Link from "next/link";

type MenuProps = {
  isSelected?: boolean;
  children: React.ReactNode;
  href: string;
};

function Menu({ children, isSelected, href }: MenuProps) {
  return (
    <li className="flex items-center justify-center px-[18px]">
      <Link
        href={href}
        className={cn("text-nowrap text-[#838383]", {
          "text-primary font-bold": isSelected,
        })}
      >
        {children}
      </Link>
    </li>
  );
}

export default Menu;
