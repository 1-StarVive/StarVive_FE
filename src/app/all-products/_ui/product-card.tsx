import Link from "next/link"; // ✅ 링크 이동을 위해 추가
import type { Product } from "@/app/all-products/page"; // 타입 import

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    // ✅ 상품 전체 영역을 <Link>로 감싸서 클릭하면 상세페이지로 이동하도록 설정
    <Link href={`/product/${product.productId}`}>
      <div className="cursor-pointer rounded border hover:shadow">
        <img src={product.imageThumbUrl} alt={product.name} className="w-full pb-3" />
        <div className="pb-3 text-[15px] font-semibold">{product.name}</div>
        <div className="font-bold">{product.price.toLocaleString()}원</div>
      </div>
    </Link>
  );
}
