import BackButton from "./ui/back-button";
import CommonHeader from "./ui/common-header";
import LogoWrap from "./ui/logo-wrap";

function CartHeader() {
  return <CommonHeader left={<BackButton />} center={<LogoWrap>장바구니</LogoWrap>} />;
}

export default CartHeader;
