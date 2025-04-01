import Summary from "./summary";

function Summaries() {
  return (
    <Wrap>
      <Summary title="상품금액" price={9000} />
      <Summary title="할인금액" price={9000} />
      <Summary title="배송비" price={9000} />
      <Summary title="총 결제예정금액" price={9000000} size="lg" />
    </Wrap>
  );
}

export default Summaries;

function Wrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-1.5 p-[24px]">{children}</section>;
}
