import CartHeader from "@/components/headers/cart-header";
import ShippingAddress from "./_ui/shipping-address";
import StickyMenu from "./_ui/sticky-menu";
import CartItem from "./_ui/cart-item";
import Summaries from "./_ui/summaries";
import Notice from "./_ui/notice";
import CartFooter from "./_ui/cart-footer";

function Cart() {
  return (
    <>
      <CartHeader />
      <CartWrap>
        <ShippingAddress />
        <StickyMenu />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <Summaries />
        <Notice />

        <CartFooter />
      </CartWrap>
    </>
  );
}

export default Cart;

function CartWrap({ children }: React.PropsWithChildren) {
  return <main>{children}</main>;
}
