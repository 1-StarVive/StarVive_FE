import { LogoWrap, RightWrap } from "./header";
import BackButton from "./ui/back-button";
import { headerHeight } from "./utils/const";

function CartHeader() {
  return (
    <CartHeaderWrap>
      <BackButton />

      <LogoWrap>장바구니</LogoWrap>

      {/* 중앙정렬을 위해 남김 */}
      <RightWrap />
    </CartHeaderWrap>
  );
}

export default CartHeader;

export function CartHeaderWrap({ children }: React.PropsWithChildren) {
  return (
    <header
      className="sticky top-0 z-10 grid auto-cols-[minmax(min-content,1fr)] grid-flow-col items-center gap-1 bg-white px-[16px] py-[8px] shadow-sm"
      style={{ height: `${headerHeight}px` }}
    >
      {children}
    </header>
  );
}
