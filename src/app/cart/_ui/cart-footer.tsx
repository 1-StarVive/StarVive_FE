import { Button } from "@/components/buttons/button";
import FixedFooter from "@/components/footers/fixed-footer";
import { CartListResponse } from "@/lib/api/cart";

type CartFooterProps = {
  cartList: CartListResponse;
};
function CartFooter({ cartList }: CartFooterProps) {
  const discountedPrice = cartList.reduce((acc, { discountedPrice, quantity }) => acc + discountedPrice * quantity, 0);

  return (
    <FixedFooter>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span>총 </span>
          <span className="text-primary">{cartList.length}</span>
          <span>건</span>
        </div>
        <div>
          <span className="text-2xl">{discountedPrice.toLocaleString("ko-KR")}원</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button type="button" variant="outline" size="xl">
          선물하기
        </Button>
        <Button type="button" size="xl">
          구매하기
        </Button>
      </div>
    </FixedFooter>
  );
}

export default CartFooter;
