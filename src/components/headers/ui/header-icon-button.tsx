import ChevronRightIcon from "@/components/icons/chevron-right-icon";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import SearchIcon from "@/components/icons/search-icon";
import XIcon from "@/components/icons/x-icon";

type HeaderIconButtonProps = {
  icon: "close" | "back" | "search" | "hamburger";
  onClick?: () => void;
};

function HeaderIconButton({ icon, onClick }: HeaderIconButtonProps) {
  return (
    <button className="flex h-[32px] w-[32px] items-center justify-center" onClick={onClick}>
      {icon === "close" && <XIcon className="h-[24px] w-[24px]" />}
      {icon === "back" && <ChevronRightIcon className="h-[18px] w-[10px]" />}
      {icon === "search" && <SearchIcon className="h-[24px] w-[24px]" />}
      {icon === "hamburger" && <HamburgerIcon className="h-[24px] w-[24px]" />}
    </button>
  );
}

export default HeaderIconButton;
