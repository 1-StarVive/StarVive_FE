function DiscountRate({ children }: React.PropsWithChildren) {
  return (
    <span className="text-primary text-[20px] font-bold">{children}%</span>
  );
}

export default DiscountRate;
