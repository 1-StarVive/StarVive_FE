import NoticeText from "./notice-text";

function Notice() {
  return (
    <Wrap>
      <NoticeText>장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간 보관됩니다.</NoticeText>
      <NoticeText>총 결제예정금액은 결제 단계에서 추가 할인 수단 적용으로 달라질 수 있습니다.</NoticeText>
      <NoticeText>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</NoticeText>
    </Wrap>
  );
}

export default Notice;

function Wrap({ children }: React.PropsWithChildren) {
  return (
    <section className="p-[24px]">
      <ul className="flex flex-col gap-1 bg-[#F7F7F7] p-[20px] text-xs text-[#6D6D6D]">{children}</ul>
    </section>
  );
}
