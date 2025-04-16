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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // ✅ 초기 진입 시 sessionStorage에서 복원
  useEffect(() => {
    const cached = sessionStorage.getItem("products-state");
    if (cached) {
      const { savedProducts, savedScrollY } = JSON.parse(cached);
      setProducts(savedProducts);
      setTimeout(() => {
        window.scrollTo(0, savedScrollY);
      }, 0);
    } else {
      setProducts(initialProducts);
    }
  }, [initialProducts]);

  // ✅ 스크롤/데이터 변경 시 sessionStorage에 저장
  useEffect(() => {
    const handleSave = () => {
      sessionStorage.setItem(
        "products-state",
        JSON.stringify({
          savedProducts: products,
          savedScrollY: window.scrollY,
        }),
      );
    };

    window.addEventListener("scroll", handleSave);
    return () => {
      handleSave();
      window.removeEventListener("scroll", handleSave);
    };
  }, [products]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setLoading(true);

          const lastProductId = products[products.length - 1]?.productId;
          const size = 20;

          const params = new URLSearchParams();
          params.set("size", String(size));

          if (lastProductId) params.set("lastProductId", lastProductId);
          if (selectedTopId) params.set("top", selectedTopId);
          if (selectedMiddleId) params.set("middle", selectedMiddleId);
          if (selectedBottomId) params.set("bottom", selectedBottomId);

          const res = await fetch(`http://52.78.250.41:8082/api/v1/product/all?${params}`);
          const json = await res.json();

          if (!Array.isArray(json)) {
            console.error("❌ 예상과 다른 응답 구조:", json);
            setLoading(false);
            return;
          }

          const newProducts: Product[] = json;

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
