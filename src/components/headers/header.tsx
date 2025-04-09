import BackButton from "./ui/back-button";
import CommonHeader from "./ui/common-header";
import HamburgerButton from "./ui/hamburger-button";
import LogoWrap from "./ui/logo-wrap";
import SearchButton from "./ui/search-button";
import ShoppingCartLink from "./ui/shopping-cart-link";

type HeaderProps = {
  subHeader?: React.ReactNode;
  /**
   * 햄버거 버튼이 있는 자리에 뒤로가기 버튼을 사용할지 여부
   *
   * @default false
   */
  showBackButton?: boolean;
};

function Header({ subHeader, showBackButton }: HeaderProps) {
  return (
    <CommonHeader
      left={showBackButton ? <BackButton /> : <HamburgerButton />}
      center={<LogoWrap>온라인 스토어</LogoWrap>}
      right={
        <>
          <SearchButton />
          <ShoppingCartLink />
        </>
      }
      subHeader={subHeader}
      shadow={true}
    />
  );
}

export default Header;
