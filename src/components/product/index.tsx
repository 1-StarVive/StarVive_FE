import Image from "next/image";
import Link from "next/link";
import ProductPrice, { ProductPriceProps } from "./ui/product-price";
import ProductInfo, { ProductInfoProps } from "./ui/product-info";
import RankIcon from "../icons/rank-icon";

export type ProductLiProps = {
  src: string;
  alt: string;
  rank?: number;
} & ProductPriceProps &
  ProductInfoProps;

function Product({
  alt,
  src,
  originalPrice,
  discountPercent,
  salePrice,
  name,
  isBest,
  isNew,
  rank,
}: ProductLiProps) {
  return (
    <li>
      <Link className="w-full flex flex-col gap-[16px]" href="/.">
        <div className="aspect-square relative w-full">
          <Image
            className="rounded-sm"
            src={src}
            alt={alt}
            fill
            sizes="200px"
          />
          {rank !== undefined && (
            <div className="absolute right-[8px]">
              <RankIcon className="w-[22px] h-[30px]" />
              <span className="text-white top-0 left-1/2 absolute -translate-x-1/2">
                {rank}
              </span>
            </div>
          )}
        </div>

        <ProductInfo name={name} isBest={isBest} isNew={isNew} />

        <ProductPrice
          originalPrice={originalPrice}
          discountPercent={discountPercent}
          salePrice={salePrice}
        />
      </Link>
    </li>
  );
}

export default Product;
