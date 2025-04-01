import XIcon from "@/components/icons/x-icon";
import HeaderIconButton from "./header-icon-button";

type CloseButtonProps = {
  onClick?: () => void;
};
function CloseButton({ onClick }: CloseButtonProps) {
  return <HeaderIconButton icon={<XIcon className="h-[24px] w-[24px]" />} onClick={onClick} />;
}

export default CloseButton;
