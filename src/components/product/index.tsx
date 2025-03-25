import Image from "next/image";
import Link from "next/link";
import ProductPrice, { ProductPriceProps } from "./ui/product-price";
import ProductInfo, { ProductInfoProps } from "./ui/product-info";

export type ProductLiProps = {
  src: string;
  alt: string;
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
