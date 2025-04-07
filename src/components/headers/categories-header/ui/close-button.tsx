import XIcon from "@/components/icons/x-icon";
import useCategoriesModalStore from "@/store/categories-modal.store";
import HeaderIconButton from "../../ui/header-icon-button";

function CloseButton() {
  const close = useCategoriesModalStore((state) => state.close);

  return <HeaderIconButton icon={<XIcon className="h-[24px] w-[24px]" />} onClick={close} />;
}

export default CloseButton;
