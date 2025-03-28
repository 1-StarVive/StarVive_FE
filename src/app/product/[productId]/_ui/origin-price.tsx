function OriginPrice({ children }: React.PropsWithChildren) {
  return (
    <span className="text-[17px] font-thin text-[#9e9e9e] line-through">
      {children}원
    </span>
  );
}

export default OriginPrice;
