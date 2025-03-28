import HamburgerButton from "./ui/hamburger-button";
import SearchButton from "./ui/search-button";
import ShoppingCartButton from "./ui/shopping-cart-button";
import CloseButton from "./ui/close-button";
import BackButton from "./ui/back-button";

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
          <ShoppingCartButton />
          <CloseButton />
        </RightWrap>
      </MainWrap>

      {subHeader}
    </HeaderWrap>
  );
}

export default Header;

function HeaderWrap({ children }: React.PropsWithChildren) {
  return <header className="top-0 z-10 bg-white sticky">{children}</header>;
}

function MainWrap({ children }: React.PropsWithChildren) {
  return (
    <div className="grid shadow-sm grid-flow-col auto-cols-[minmax(min-content,1fr)] gap-1 items-center h-[56px] px-[16px] py-[8px]">
      {children}
    </div>
  );
}

function LogoWrap({ children }: React.PropsWithChildren) {
  return (
    <span className="text-center whitespace-nowrap text-[1rem] font-bold">
      {children}
    </span>
  );
}

function RightWrap({ children }: React.PropsWithChildren) {
  return <div className="flex justify-end gap-2">{children}</div>;
}
