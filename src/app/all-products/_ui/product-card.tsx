import Link from "next/link"; // ✅ 링크 이동을 위해 추가
import type { Product } from "@/app/all-products/page"; // 타입 import

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  console.log("📦 productId:", product.productId); // ✅ 여기에 위치해야 정상 작동

  return (
    <Link href={`/product/${product.productId}`} className="relative z-50 block">
      <div className="cursor-pointer">
        <img src={product.imageThumbUrl} alt={product.name} className="w-full pb-3" />
        <div className="pb-3 text-[15px] font-semibold">{product.name}</div>
        <div className="font-bold">{product.price.toLocaleString()}원</div>
      </div>
    </Link>
  );
}
