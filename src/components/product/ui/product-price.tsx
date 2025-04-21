export type ProductPriceProps = {
  price: number;
  discountRate?: number;
};

function ProductPrice({ price, discountRate }: ProductPriceProps) {
  const discountedPrice = discountRate ? price - (price * discountRate) / 100 : undefined;
  return (
    <div className="flex items-end justify-between gap-1">
      <div className="flex flex-col overflow-hidden">
        {discountedPrice !== undefined && (
          <span className="truncate text-[14px] text-gray-500 line-through">
            {Math.floor(price).toLocaleString("ko-KR")}원
          </span>
        )}
        <span className="truncate text-[16px] font-bold">
          {discountedPrice !== undefined
            ? Math.floor(discountedPrice).toLocaleString("ko-KR")
            : Math.floor(price).toLocaleString("ko-KR")}
          원
        </span>
      </div>
      {discountedPrice !== undefined && <span className="text-primary text-[18px] font-bold">{discountRate}%</span>}
    </div>
  );
}

export default ProductPrice;
