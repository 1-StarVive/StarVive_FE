import Badge from "@/components/badge";
import ShareButton from "./share-button";
import Title from "./title";
import OriginPrice from "./origin-price";
import Description from "./description";
import DiscountRate from "./discount-rate";
import DiscountedPrice from "./discounted-price";

function ProductInfo() {
  return (
    <Wrap>
      <TitleWrap>
        <TitleAndBadgeWrap>
          <Title>버라이어티로고 리유저블컵 세트 473ml(3p)</Title>
          {true && <Badge color="red">Best</Badge>}
          {true && <Badge color="green">New</Badge>}
          {true && <Badge color="brown">Limited</Badge>}
        </TitleAndBadgeWrap>
        <ShareButton />
      </TitleWrap>

      <Description>3종의 다른 디자인이 돋보이는 473ml 용량의 리유저블 컵 3ea 세트 상품입니다.</Description>

      <PriceWrap>
        <OriginPrice>9,000</OriginPrice>
        <DiscountWrap>
          <DiscountRate>50</DiscountRate>
          <DiscountedPrice>4,500</DiscountedPrice>
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
