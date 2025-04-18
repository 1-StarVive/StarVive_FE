import Image from "next/image";
import Link from "next/link";
import ProductPrice, { ProductPriceProps } from "./ui/product-price";
import ProductInfo, { ProductInfoProps } from "./ui/product-info";
import ProductRank, { ProductRankProps } from "./ui/product-rank";
import ProductSkeleton from "./ui/product-skeleton";

export type ProductProps = {
  productId: string;
  url: string;
  alt: string;
} & ProductPriceProps &
  ProductInfoProps &
  Partial<ProductRankProps>;

function Product({ productId, alt, url, price, discountRate, name, isTop, isNew, rank }: ProductProps) {
  return (
    <li>
      <Link className="flex w-full flex-col gap-[6px]" href={`/product/${productId}`}>
        <ProductImageWrap>
          <Image className="rounded-sm" src={url} alt={alt} fill sizes="200px" />
          {rank !== undefined && <ProductRank rank={rank} />}
        </ProductImageWrap>

        <ProductInfo name={name} isTop={isTop} isNew={isNew} />

        <ProductPrice price={price} discountRate={discountRate} />
      </Link>
    </li>
  );
}

export default Product;

function ProductImageWrap({ children }: React.PropsWithChildren) {
  return <div className="relative aspect-square w-full">{children}</div>;
}

Product.Skeleton = ProductSkeleton;
