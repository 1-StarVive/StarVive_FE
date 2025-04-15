import Link, { LinkProps } from "next/link";

function ShippingAddress() {
  return (
    <section className="bg-[#F7F7F7] p-4">
      <div className="grid grid-cols-[1fr_auto] items-start">
        {true ? <EmptyMessage /> : <span></span>}
        <ShippingAddressLink href={"/shipping-address"}>배송지 변경</ShippingAddressLink>
      </div>
      <div></div>
    </section>
  );
}

export default ShippingAddress;

function ShippingAddressLink({ children, ...props }: React.PropsWithChildren<LinkProps>) {
  return (
    <Link className="text-xs text-[#9F7147]" {...props}>
      {children}
    </Link>
  );
}

function EmptyMessage() {
  return (
    <span className="text-sm">
      등록된 배송지가 없습니다.
      <br />
      배송지를 등록해주세요.
    </span>
  );
}
