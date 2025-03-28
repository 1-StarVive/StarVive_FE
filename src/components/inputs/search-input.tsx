import { cn } from "@/lib/utils";
import SearchIcon from "../icons/search-icon";

type SearchInputProps = {
  onClickSearch: (value: string) => void;
} & React.ComponentProps<"input">;

function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="flex rounded-sm bg-[#F7F7F7] h-[34px] items-center px-[8px]">
      <input
        className={cn(
          "flex-1 h-full outline-none placeholder:text-[#D9D9D9] placeholder:font-bold",
          className
        )}
        placeholder="검색어를 입력해주세요"
        {...props}
      />
      <SearchIcon className="h-[24px] w-[24px]" />
    </div>
  );
}

export default SearchInput;
