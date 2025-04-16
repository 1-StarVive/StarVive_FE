"use client";

import { useEffect, useRef, useState } from "react";

export type Product = {
  productId: string;
  imageThumbUrl: string;
  name: string;
  price: number;
  topCategoryId: string;
  middleCategoryId: string;
  bottomCategoryId: string;
};

type Props = {
  initialProducts: Product[];
  selectedTopId: string;
  selectedMiddleId: string;
  selectedBottomId: string;
};

export default function ProductListInfinite({
  initialProducts,
  selectedTopId,
  selectedMiddleId,
  selectedBottomId,
}: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setLoading(true);

          const lastProductId = products[products.length - 1]?.productId;
          const size = 20;

          const queryParams = new URLSearchParams({
            lastProductId,
            size: String(size),
            top: selectedTopId,
            middle: selectedMiddleId,
            bottom: selectedBottomId,
          });

          const res = await fetch(`http://52.78.250.41:8082/api/v1/product/all?${queryParams}`);
          const newProducts: Product[] = await res.json();

          setProducts((prev) => [...prev, ...newProducts]);
          setHasMore(newProducts.length === size);
          setLoading(false);
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [products, hasMore, loading, selectedTopId, selectedMiddleId, selectedBottomId]);

  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.productId} className="rounded border p-2">
          <img src={product.imageThumbUrl} alt={product.name} className="mb-2 w-full" />
          <div className="text-sm font-semibold">{product.name}</div>
          <div className="text-xs text-gray-500">{product.price}원</div>
        </div>
      ))}
      <div ref={observerRef} className="col-span-2 h-8">
        {loading && <p className="text-center text-gray-400">불러오는 중...</p>}
        {!hasMore && <p className="text-center text-gray-400">모든 상품을 불러왔습니다.</p>}
      </div>
    </section>
  );
}
