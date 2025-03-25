export type ProductPriceProps = {
  originalPrice: number;
  salePrice?: number;
  discountPercent?: number;
};

function ProductPrice({
  originalPrice,
  discountPercent,
  salePrice,
}: ProductPriceProps) {
  return (
    <div className="flex justify-between gap-1 items-end">
      <div className="flex flex-col overflow-hidden">
        {salePrice && (
          <span className="text-[14px] line-through text-gray-500 truncate">
            {salePrice.toLocaleString("ko-KR")}원
          </span>
        )}
        <span className="text-[16px] font-bold truncate">
          {originalPrice.toLocaleString("ko-KR")}원
        </span>
      </div>
      {discountPercent && (
        <span className="text-primary font-bold text-[18px]">
          {discountPercent}%
        </span>
      )}
    </div>
  );
}

export default ProductPrice;
