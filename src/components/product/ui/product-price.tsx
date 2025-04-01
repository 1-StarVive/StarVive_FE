export type ProductPriceProps = {
  price: number;
  discountedPrice?: number;
  discountRate?: number;
};

function ProductPrice({ price, discountRate: discountPercent, discountedPrice: salePrice }: ProductPriceProps) {
  return (
    <div className="flex items-end justify-between gap-1">
      <div className="flex flex-col overflow-hidden">
        {salePrice && (
          <span className="truncate text-[14px] text-gray-500 line-through">{salePrice.toLocaleString("ko-KR")}원</span>
        )}
        <span className="truncate text-[16px] font-bold">{price.toLocaleString("ko-KR")}원</span>
      </div>
      {discountPercent && <span className="text-primary text-[18px] font-bold">{discountPercent}%</span>}
    </div>
  );
}

export default ProductPrice;
