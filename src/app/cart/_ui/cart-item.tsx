import { Checkbox } from "@/components/checkbox";
import MinusCircleIcon from "@/components/icons/minus-circle-icon";
import PlusCircleIcon from "@/components/icons/plus-circle-icon";
import XCircleIcon from "@/components/icons/x-circle-icon";
import Image from "next/image";
import ProductTitle from "./product-title";

function CartItem() {
  return (
    <Wrap>
      <Checkbox />

      <ImageWrap>
        <Image src="/temp-square.png" alt="temp" sizes="25vw" fill priority />
      </ImageWrap>

      <CountWrap>
        <ProductTitle>SS 그린 데비 머그 414ml</ProductTitle>
        <CountControllerWrap>
          <MinusCircleIcon className="h-5 w-5 text-[#EDEDED]" />
          <span className="font-bold">1</span>
          <PlusCircleIcon className="h-5 w-5 text-[#727272]" />
        </CountControllerWrap>
      </CountWrap>

      <PriceWrap>
        <XCircleIcon className="size-5 text-[#B8B8B8]" />
        <span className="font-bold">
          9,000<span className="text-xs">원</span>
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
