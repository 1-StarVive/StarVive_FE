import PlusCircleIcon from "@/components/icons/plus-circle-icon";
import MinusCircleIcon from "@/components/icons/minus-circle-icon";
import { GetProductDetailResponse } from "@/lib/api/product";

export type SelectedItemProps = {
  product: GetProductDetailResponse;
  quantity: number;
  handleClickIncrease: () => void;
  handleClickDecrease: () => void;
};
function SelectedItem({ product, quantity, handleClickDecrease, handleClickIncrease }: SelectedItemProps) {
  return (
    <Wrap>
      <Title>{product.name}</Title>
      <CountAndPriceWrap>
        <button onClick={handleClickDecrease}>
          <MinusCircleIcon className="h-5 w-5 text-[#727272]" />
        </button>
        <Count>{quantity}</Count>
        <button onClick={handleClickIncrease}>
          <PlusCircleIcon className="h-5 w-5 text-[#727272]" />
        </button>
        <Price>{product.discountedPrice * quantity}</Price>
      </CountAndPriceWrap>
    </Wrap>
  );
}

export default SelectedItem;

function Wrap({ children }: React.PropsWithChildren) {
  return <div className="grid gap-3 rounded-xs bg-[#f7f7f7] px-5 py-4">{children}</div>;
}

function Title({ children }: React.PropsWithChildren) {
  return <span className="text-xs text-[#707070]">{children}</span>;
}

function CountAndPriceWrap({ children }: React.PropsWithChildren) {
  return <div className="grid grid-cols-[auto_auto_auto_1fr] items-center justify-items-end gap-4">{children}</div>;
}

function Count({ children }: React.PropsWithChildren) {
  return <span>{children}</span>;
}

function Price({ children }: { children: number }) {
  return <span>{children.toLocaleString("ko-KR")}원</span>;
}
