import HeaderIconButton from "./header-icon-button";

type CloseButtonProps = {
  onClick?: () => void;
};
function CloseButton({ onClick }: CloseButtonProps) {
  return <HeaderIconButton icon="close" onClick={onClick} />;
}

export default CloseButton;
