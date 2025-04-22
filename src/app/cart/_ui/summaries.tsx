import { CartListResponse } from "@/lib/api/cart";
import Summary from "./summary";
import { useMemo } from "react";

type SummariesProps = {
  cartList: CartListResponse;
};
function Summaries({ cartList }: SummariesProps) {
  const price = useMemo(() => cartList.reduce((acc, { price, quantity }) => quantity * price + acc, 0), [cartList]);
  const discountedPrice = useMemo(
    () => cartList.reduce((acc, { discountedPrice, quantity }) => quantity * discountedPrice + acc, 0),
    [cartList],
  );

  return (
    <Wrap>
      <Summary title="상품금액" price={price} />
      <Summary title="할인금액" price={discountedPrice - price} />
      <Summary title="배송비" price={price > 30_000 ? 0 : 3_000} />
      <Summary title="총 결제예정금액" price={discountedPrice} size="lg" />
    </Wrap>
  );
}

export default Summaries;

function Wrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-1.5 p-[24px]">{children}</section>;
}
