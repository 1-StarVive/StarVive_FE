export type ProductPriceProps = {
  price: number;
  discountedPrice: number;
  discountRate?: number;
};

function ProductPrice({ price, discountRate, discountedPrice }: ProductPriceProps) {
  return (
    <div className="flex items-end justify-between gap-1">
      <div className="flex flex-col overflow-hidden">
        {discountRate !== 0 && (
          <span className="truncate text-[14px] text-gray-500 line-through">{price.toLocaleString("ko-KR")}원</span>
        )}
        <span className="truncate text-[16px] font-bold">
          {discountRate !== 0 ? discountedPrice.toLocaleString("ko-KR") : price.toLocaleString("ko-KR")}원
        </span>
      </div>
      {discountRate !== 0 && <span className="text-primary text-[18px] font-bold">{discountRate}%</span>}
    </div>
  );
}

export default ProductPrice;
