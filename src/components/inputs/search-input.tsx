import { cn } from "@/lib/utils";
import SearchIcon from "../icons/search-icon";

type SearchInputProps = {
  onClickSearch: (value: string) => void;
} & React.ComponentProps<"input">;

function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="flex h-[34px] items-center rounded-sm bg-[#F7F7F7] px-[8px]">
      <input
        className={cn(
          "h-full flex-1 outline-none placeholder:font-bold placeholder:text-[#D9D9D9]",
          className,
        )}
        placeholder="검색어를 입력해주세요"
        {...props}
      />
      <button>
        <SearchIcon className="h-[24px] w-[24px]" />
      </button>
    </div>
  );
}

export default SearchInput;
