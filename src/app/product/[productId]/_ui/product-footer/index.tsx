"use client";

import { Button } from "@/components/buttons/button";
import Accordion from "@/app/product/[productId]/_ui/product-footer/ui/accordion";
import useFlodable from "@/hooks/use-foldable";
import Foldable from "./ui/foldable";
import FoldButton from "./ui/fold-button";
import Title from "./ui/title";
import ScrollBlocker from "./ui/scroll-blocker";
import ShoppingCartButton from "./ui/shopping-cart-button";
import SelectedItem from "./ui/selected-item";

function ProductFooter() {
  const { ref, isFolded, close, open } = useFlodable<HTMLDivElement>();

  const handleClickShoppingCart = () => {
    open();
  };

  const handleClickPurchase = () => {
    open();
  };

  return (
    <>
      {!isFolded && <ScrollBlocker />}

      <Wrap>
        <Foldable ref={ref}>
          <FoldButton onClick={close} />
          <Title>추가 상품</Title>
          <ItemWrap>
            <Accordion title="옵션">
              <li className="flex flex-col px-4 py-3">
                <span>더스트백 M</span>
                <span className="text-primary">3,000원</span>
              </li>
            </Accordion>
            <SelectedItem />
          </ItemWrap>
        </Foldable>

        <StaticFooterWrap>
          <ShoppingCartButton onClick={handleClickShoppingCart} />
          {!isFolded && (
            <Button variant="outline" size="lg">
              선물하기
            </Button>
          )}
          <Button className="flex-1" size="lg" onClick={handleClickPurchase}>
            구매하기
          </Button>
        </StaticFooterWrap>
      </Wrap>
    </>
  );
}

export default ProductFooter;

function Wrap({ children }: React.PropsWithChildren) {
  return (
    <div className="fixed bottom-0 left-0 z-10 max-h-4/5 w-full rounded-t-xl bg-white shadow-[0_-1px_5px_0_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}

function ItemWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-4 px-4">{children}</div>;
}

function StaticFooterWrap({ children }: React.PropsWithChildren) {
  return <div className="flex gap-2 px-5 py-4">{children}</div>;
}
