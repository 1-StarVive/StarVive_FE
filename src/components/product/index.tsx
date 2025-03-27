import Image from "next/image";
import Link from "next/link";
import ProductPrice, { ProductPriceProps } from "./ui/product-price";
import ProductInfo, { ProductInfoProps } from "./ui/product-info";
import RankIcon from "../icons/rank-icon";

export type ProductProps = {
  url: string;
  alt: string;
  rank?: number;
} & ProductPriceProps &
  ProductInfoProps;

function Product({
  alt,
  url,
  price,
  discountRate,
  discountedPrice,
  name,
  isTop,
  isNew,
  rank,
}: ProductProps) {
  return (
    <li>
      <Link className="w-full flex flex-col gap-[16px]" href="/.">
        <div className="aspect-square relative w-full">
          <Image
            className="rounded-sm"
            src={url}
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

        <ProductInfo name={name} isTop={isTop} isNew={isNew} />

        <ProductPrice
          price={price}
          discountRate={discountRate}
          discountedPrice={discountedPrice}
        />
      </Link>
    </li>
  );
}

export default Product;
