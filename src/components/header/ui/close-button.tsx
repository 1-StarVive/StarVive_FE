import XIcon from "@/components/icons/x-icon";
import HeaderIconButton from "./header-icon-button";

function CloseButton() {
  return <HeaderIconButton icon={<XIcon className="h-[24px] w-[24px]" />} />;
}

export default CloseButton;
