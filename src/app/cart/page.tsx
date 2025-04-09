import CartHeader from "@/components/headers/cart-header";
import ShippingAddress from "./_ui/shipping-address";
import StickyMenu from "./_ui/sticky-menu";
import CartItem from "./_ui/cart-item";
import Summaries from "./_ui/summaries";
import Notice from "./_ui/notice";
import CartFooter from "./_ui/cart-footer";
import AuthGuard from "@/components/guards/auth-guard";

function Cart() {
  return (
    <AuthGuard>
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
    </AuthGuard>
  );
}

export default Cart;

function CartWrap({ children }: React.PropsWithChildren) {
  return <main>{children}</main>;
}
