import Image from "next/image";
import Link from "next/link";
import ProductPrice, { ProductPriceProps } from "./ui/product-price";
import ProductInfo, { ProductInfoProps } from "./ui/product-info";
import ProductRank, { ProductRankProps } from "./ui/product-rank";
import ProductSkeleton from "./ui/product-skeleton";

export type ProductProps = {
  url: string;
  alt: string;
} & ProductPriceProps &
  ProductInfoProps &
  Partial<ProductRankProps>;

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
        <ProductImageWrap>
          <Image
            className="rounded-sm"
            src={url}
            alt={alt}
            fill
            sizes="200px"
          />
          {rank !== undefined && <ProductRank rank={rank} />}
        </ProductImageWrap>

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

function ProductImageWrap({ children }: React.PropsWithChildren) {
  return <div className="aspect-square relative w-full">{children}</div>;
}

Product.Skeleton = ProductSkeleton;
