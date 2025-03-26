import { cn } from "@/lib/utils";

type MenuProps = {
  isSelected?: boolean;
  children: React.ReactNode;
};

function Menu({ children, isSelected }: MenuProps) {
  return (
    <li className="flex items-center justify-center px-[18px]">
      <span
        className={cn("text-nowrap text-[#838383]", {
          "text-primary font-bold": isSelected,
        })}
      >
        {children}
      </span>
    </li>
  );
}

export default Menu;
