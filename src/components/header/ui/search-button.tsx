import SearchIcon from "@/components/icons/search-icon";
import HeaderIconButton from "./header-icon-button";

function SearchButton() {
  return (
    <HeaderIconButton icon={<SearchIcon className="h-[24px] w-[24px]" />} />
  );
}

export default SearchButton;
