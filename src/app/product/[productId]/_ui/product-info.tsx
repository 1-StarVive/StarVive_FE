import Badge from "@/components/badge";
import ShareButton from "./share-button";
import Title from "./title";
import OriginPrice from "./origin-price";
import DiscountRate from "./discount-rate";
import DiscountedPrice from "./discounted-price";

type ProductInfoProps = {
  name: string;
  price: number;
  baseDiscountRate?: number;
  discountedPrice: number;
};
function ProductInfo({ name, baseDiscountRate, discountedPrice, price }: ProductInfoProps) {
  return (
    <Wrap>
      <TitleWrap>
        <TitleAndBadgeWrap>
          <Title>{name}</Title>
          {false && <Badge color="red">Best</Badge>}
          {false && <Badge color="green">New</Badge>}
          {false && <Badge color="brown">Limited</Badge>}
        </TitleAndBadgeWrap>
        <ShareButton />
      </TitleWrap>

      {/* <Description>3종의 다른 디자인이 돋보이는 473ml 용량의 리유저블 컵 3ea 세트 상품입니다.</Description> */}

      <PriceWrap>
        {baseDiscountRate !== 0 && <OriginPrice>{price.toLocaleString("ko-KR")}</OriginPrice>}
        <DiscountWrap>
          {baseDiscountRate !== 0 && <DiscountRate>{baseDiscountRate}</DiscountRate>}
          <DiscountedPrice>{discountedPrice.toLocaleString("ko-KR")}</DiscountedPrice>
        </DiscountWrap>
      </PriceWrap>
    </Wrap>
  );
}

export default ProductInfo;

function Wrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[12px] px-[24]">{children}</section>;
}

function TitleWrap({ children }: React.PropsWithChildren) {
  return <div className="grid grid-flow-col grid-cols-[1fr_fit] gap-5">{children}</div>;
}

function TitleAndBadgeWrap({ children }: React.PropsWithChildren) {
  return <p className="space-x-2">{children}</p>;
}

function PriceWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col">{children}</div>;
}

function DiscountWrap({ children }: React.PropsWithChildren) {
  return <div className="flex gap-2">{children}</div>;
}
