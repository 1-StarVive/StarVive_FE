import CommonHeader from "./ui/common-header";
import HeaderIconButton from "./ui/header-icon-button";
import LogoWrap from "./ui/logo-wrap";

type ShippingAddressFormHeaderProps = {
  title: string;
  onClickClose?: () => void;
};
function ShippingAddressFormHeader({ title, onClickClose }: ShippingAddressFormHeaderProps) {
  return (
    <CommonHeader
      shadow={true}
      center={<LogoWrap>{title}</LogoWrap>}
      right={<HeaderIconButton icon="close" onClick={onClickClose} />}
    />
  );
}

export default ShippingAddressFormHeader;
