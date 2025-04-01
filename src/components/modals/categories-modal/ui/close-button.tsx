import XIcon from "@/components/icons/x-icon";
import useCategoriesModalStore from "@/store/categories-modal.store";

function CloseButton() {
  const close = useCategoriesModalStore((state) => state.close);

  return (
    <button className="flex h-[32px] w-[32px] items-center justify-center" onClick={close}>
      <XIcon className="h-[24px] w-[24px]" />
    </button>
  );
}

export default CloseButton;
