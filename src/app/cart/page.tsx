"use client";

import CartHeader from "@/components/headers/cart-header";
import ShippingAddress from "./_ui/shipping-address";
import StickyMenu from "./_ui/sticky-menu";
import CartItem from "./_ui/cart-item";
import Summaries from "./_ui/summaries";
import Notice from "./_ui/notice";
import CartFooter from "./_ui/cart-footer";
import AuthGuard from "@/components/guards/auth-guard";
import StaticFooter from "@/components/footers/static-footer";
import { useQuery } from "@tanstack/react-query";
import { getCartList } from "@/lib/api/cart";
import Loading from "@/components/loading";

function Cart() {
  const cartList = useQuery({
    queryKey: ["getCartList"],
    queryFn: getCartList,
  });

  return cartList.isPending ? (
    <Loading />
  ) : cartList.isError ? (
    <div>error</div>
  ) : (
    <AuthGuard>
      <CartHeader />
      <CartWrap>
        <ShippingAddress />
        <StickyMenu />
        {cartList.data.length === 0 ? (
          <div className="flex h-50 items-center justify-center text-xs text-gray-500">장바구니가 비었습니다.</div>
        ) : (
          cartList.data.map((cartItem) => <CartItem key={cartItem.cartId} cartItem={cartItem} />)
        )}
        {cartList.data.length !== 0 && <Summaries cartList={cartList.data.filter(({ checked }) => checked)} />}
        <Notice />

        <CartFooter cartList={cartList.data.filter(({ checked }) => checked)} />
      </CartWrap>
      <StaticFooter />
    </AuthGuard>
  );
}

export default Cart;

function CartWrap({ children }: React.PropsWithChildren) {
  return <main>{children}</main>;
}
