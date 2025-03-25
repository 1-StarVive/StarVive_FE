import HamburgerButton from "./ui/hamburger-button";
import SearchButton from "./ui/search-button";
import ShoppingCartButton from "./ui/shopping-cart-button";
import CloseButton from "./ui/close-button";

type HeaderProps = {
  subHeader?: React.ReactNode;
};
function Header({ subHeader }: HeaderProps) {
  return (
    <HeaderWrap>
      <MainWrap>
        <HamburgerButton />

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
    <div className="grid grid-flow-col auto-cols-[minmax(min-content,1fr)] gap-1 items-center h-[56px] px-[16px] py-[8px]">
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
