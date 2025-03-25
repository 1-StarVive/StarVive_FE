import XIcon from "@/components/icons/x-icon";
import useCategoriesStore from "@/store/categories.store";

function CloseButton() {
  const close = useCategoriesStore((state) => state.close);

  return (
    <button
      className="flex items-center justify-center h-[32px] w-[32px]"
      onClick={close}
    >
      <XIcon className="h-[24px] w-[24px]" />
    </button>
  );
}

export default CloseButton;
