function DiscountedPrice({ children }: React.PropsWithChildren) {
  return <span className="text-[20px] font-bold">{children}원</span>;
}

export default DiscountedPrice;
