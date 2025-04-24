import MinusCircleIcon from "@/components/icons/minus-circle-icon";
import PlusCircleIcon from "@/components/icons/plus-circle-icon";
import XCircleIcon from "@/components/icons/x-circle-icon";
import Image from "next/image";
import ProductTitle from "./product-title";
import Checkbox from "@/components/checkboxes/checkbox";
import { CartListResponse, deleteCart, updateCart } from "@/lib/api/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ImperativeUI from "@/components/imperative-ui";
import Alert from "@/components/alert";
import { cn } from "@/lib/utils";

type CartItemProps = {
  cartItem: CartListResponse[number];
};
function CartItem({ cartItem }: CartItemProps) {
  const queryClient = useQueryClient();
  const deleteCartMutation = useMutation({
    mutationFn: deleteCart,
  });
  const updateCartMutation = useMutation({
    mutationFn: updateCart,
  });

  const handleClickDelete = async () => {
    try {
      ImperativeUI.loading(true);
      await deleteCartMutation.mutateAsync({
        cartItemIds: [cartItem.cartId],
      });
      await queryClient.invalidateQueries({ queryKey: ["getCartList"] });
    } catch {
      ImperativeUI.show((close) => (
        <Alert content="알수없는 오류가 발생했습니다. 다시 시도해 주세요." onClickButton={close} />
      ));
    } finally {
      ImperativeUI.loading(false);
    }
  };

  const handleClickCheck = async () => {
    try {
      ImperativeUI.loading(true);
      await updateCartMutation.mutateAsync({
        cartId: cartItem.cartId,
        productOptionId: cartItem.productOptionId,
        quantity: cartItem.quantity,
        checked: !cartItem.checked,
      });
      await queryClient.invalidateQueries({ queryKey: ["getCartList"] });
    } finally {
      ImperativeUI.loading(false);
    }
  };

  const handleClickIncrement = async (quantity: number) => {
    try {
      ImperativeUI.loading(true);
      await updateCartMutation.mutateAsync({
        cartId: cartItem.cartId,
        productOptionId: cartItem.productOptionId,
        quantity: quantity,
        checked: cartItem.checked,
      });
      await queryClient.invalidateQueries({ queryKey: ["getCartList"] });
    } catch {
    } finally {
      ImperativeUI.loading(false);
    }
  };

  return (
    <Wrap>
      <Checkbox checked={cartItem.checked} onChange={() => {}} onClick={handleClickCheck} />

      <ImageWrap>
        <Image src={cartItem.imageThumbUrl} alt={cartItem.imageThumbAlt} sizes="25vw" fill priority />
      </ImageWrap>

      <CountWrap>
        <ProductTitle>{cartItem.name}</ProductTitle>
        <CountControllerWrap>
          <button disabled={cartItem.quantity === 1} onClick={() => handleClickIncrement(cartItem.quantity - 1)}>
            <MinusCircleIcon
              className={cn("h-5 w-5 text-[#727272]", {
                "text-[#EDEDED]": cartItem.quantity === 1,
              })}
            />
          </button>
          <span className="font-bold">{cartItem.quantity}</span>
          <button onClick={() => handleClickIncrement(cartItem.quantity + 1)}>
            <PlusCircleIcon className="h-5 w-5 text-[#727272]" />
          </button>
        </CountControllerWrap>
      </CountWrap>

      <PriceWrap>
        <button onClick={handleClickDelete}>
          <XCircleIcon className="size-5 text-[#B8B8B8]" />
        </button>
        {cartItem.baseDiscountRate !== 0 && (
          <span className="text-xs text-gray-500 line-through">{cartItem.price.toLocaleString("ko-KR")}원</span>
        )}
        <span className="font-bold">
          {cartItem.discountedPrice.toLocaleString("ko-KR")}
          <span className="text-xs">원</span>
        </span>
      </PriceWrap>
    </Wrap>
  );
}

export default CartItem;

function Wrap({ children }: React.PropsWithChildren) {
  return <div className="grid grid-cols-[auto_auto_1fr_auto] gap-2 border-b p-[24px]">{children}</div>;
}

function ImageWrap({ children }: React.PropsWithChildren) {
  return <div className="relative -z-10 aspect-square w-[25vw]">{children}</div>;
}

function CountWrap({ children }: React.PropsWithChildren) {
  return <div>{children}</div>;
}

function PriceWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col items-end">{children}</div>;
}

function CountControllerWrap({ children }: React.PropsWithChildren) {
  return <div className="grid w-fit grid-flow-col place-items-center gap-3">{children}</div>;
}
