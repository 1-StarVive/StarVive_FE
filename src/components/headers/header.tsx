import BackButton from "./ui/back-button";
import HamburgerButton from "./ui/hamburger-button";
import SearchButton from "./ui/search-button";
import ShoppingCartLink from "./ui/shopping-cart-link";
import { headerHeight } from "./utils/const";

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
    <HeaderWrap>
      <MainWrap>
        {showBackButton ? <BackButton /> : <HamburgerButton />}

        <LogoWrap>온라인 스토어</LogoWrap>

        <RightWrap>
          <SearchButton />
          <ShoppingCartLink />
        </RightWrap>
      </MainWrap>

      {subHeader}
    </HeaderWrap>
  );
}

export default Header;

export function HeaderWrap({ children }: React.PropsWithChildren) {
  return <header className="sticky top-0 z-30 bg-white">{children}</header>;
}

export function MainWrap({ children }: React.PropsWithChildren) {
  return (
    <div
      className="grid auto-cols-[minmax(min-content,1fr)] grid-flow-col items-center gap-1 px-[16px] py-[8px] shadow-sm"
      style={{ height: `${headerHeight}px` }}
    >
      {children}
    </div>
  );
}

export function LogoWrap({ children }: React.PropsWithChildren) {
  return <span className="text-center text-[1rem] font-bold whitespace-nowrap">{children}</span>;
}

export function RightWrap({ children }: React.PropsWithChildren) {
  return <div className="flex justify-end gap-2">{children}</div>;
}
