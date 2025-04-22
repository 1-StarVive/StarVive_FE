"use client";

import { Button } from "@/components/buttons/button";
import useFlodable from "@/hooks/use-foldable";
import Foldable from "./ui/foldable";
import FoldButton from "./ui/fold-button";
import ScrollBlocker from "./ui/scroll-blocker";
import ShoppingCartButton from "./ui/shopping-cart-button";
import SelectedItem from "./ui/selected-item";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/lib/api/product";
import ImperativeUI from "@/components/imperative-ui";
import Alert from "@/components/alert";
import { addCart } from "@/lib/api/cart";

function ProductFooter() {
  const params = useParams();
  const productId = params.productId as string;
  const [quantity, setQuantity] = useState(1);
  const { ref, isFolded, close, open } = useFlodable<HTMLDivElement>();
  const product = useSuspenseQuery({
    queryKey: ["product", productId] as const,
    queryFn: async ({ queryKey }) => {
      const [_, productId] = queryKey;
      return await getProductDetail(productId);
    },
  });
  const addCartMutation = useMutation({
    mutationFn: addCart,
  });

  const handleClickGift = () => {
    ImperativeUI.show((close) => <Alert content="지원하지 않는 기능입니다." onClickButton={close} />);
  };
  const handleClickShoppingCart = async () => {
    if (isFolded) {
      open();
      return;
    }
    try {
      ImperativeUI.loading(true);
      await addCartMutation.mutateAsync({
        checked: true,
        productId: product.data.productId,
        quantity,
        productOptionId: product.data.productOptionId,
      });
      setQuantity(1);
      ImperativeUI.show((close) => <Alert content="장바구니에 담겼습니다." onClickButton={close} />);
      close();
    } catch {
      ImperativeUI.show((close) => <Alert content="장바구니에 담는 중 오류가 발생했습니다." onClickButton={close} />);
    } finally {
      ImperativeUI.loading(false);
    }
  };
  const handleClickPurchase = () => {
    open();
  };
  const handleClickIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleClickDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <>
      {!isFolded && <ScrollBlocker />}

      <Wrap>
        <Foldable ref={ref}>
          <FoldButton onClick={close} />
          {/* <Title>추가 상품</Title> */}
          <ItemWrap>
            {/* 
              <Accordion title="옵션">
                <li className="flex flex-col px-4 py-3">
                  <span>더스트백 M</span>
                  <span className="text-primary">3,000원</span>
                </li>
              </Accordion> 
            */}
            <SelectedItem
              product={product.data}
              quantity={quantity}
              handleClickIncrease={handleClickIncrease}
              handleClickDecrease={handleClickDecrease}
            />
          </ItemWrap>
        </Foldable>

        <StaticFooterWrap>
          <ShoppingCartButton onClick={handleClickShoppingCart} />
          {!isFolded && (
            <Button variant="outline" size="lg" onClick={handleClickGift}>
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
