"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ---------- 타입 ---------- */
export type Product = {
  productId: string;
  imageThumbUrl: string;
  name: string;
  price: number;
  imageThumbAlt?: string;
  baseDiscountRate?: number;
  discountedPrice?: number;
  main?: boolean;
};

type Props = {
  initialProducts: Product[];
  initialCursor: string | null;
  initialHasNext: boolean;
  selectedTopId: string;
  selectedMiddleId: string;
  selectedBottomId: string;
};

/* ---------- 컴포넌트 ---------- */
export default function ProductListInfinite({
  initialProducts,
  initialCursor,
  initialHasNext,
  selectedTopId,
  selectedMiddleId,
  selectedBottomId,
}: Props) {
  /* ---------- 상태 ---------- */
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cursor, setCursor] = useState<string | null>(initialCursor);
  const [hasMore, setHasMore] = useState(initialHasNext);
  const [loading, setLoading] = useState(false);

  /* ---------- refs ---------- */
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<string | null>(initialCursor); // ✅ 최신 cursor 저장용

  /* ---------- 필터 변경 시 초기화 ---------- */
  useEffect(() => {
    setProducts(initialProducts);

    const last = initialProducts[initialProducts.length - 1];
    const nextCursor = last?.productId ?? null;

    setCursor(nextCursor);
    cursorRef.current = nextCursor; // ✅ ref도 동기화
    setHasMore(initialProducts.length === 20);
    setLoading(false);
  }, [initialProducts]);

  /* ---------- 상품 추가 호출 ---------- */
  const fetchMoreProducts = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    const currentCursor = cursorRef.current; // ✅ 항상 최신 값 사용

    const params = new URLSearchParams();
    params.set("pageSize", "20");
    if (selectedTopId) params.set("topId", selectedTopId);
    if (selectedMiddleId) params.set("middleId", selectedMiddleId);
    if (selectedBottomId) params.set("bottomId", selectedBottomId);
    if (currentCursor) params.set("lastProductId", currentCursor);

    const url = `http://52.78.250.41:8082/api/v1/product-category?${params.toString()}`;
    const res = await fetch(url);
    const { content: newProducts = [], hasNext = false } = await res.json();

    /* --- 상태 업데이트 --- */
    setProducts((prev) => {
      const merged = [...prev, ...newProducts];
      return Array.from(new Map(merged.map((p) => [p.productId, p])).values());
    });

    const lastProduct = newProducts[newProducts.length - 1];
    const newCursor = lastProduct?.productId ?? null;
    setCursor(newCursor);
    cursorRef.current = newCursor; // ✅ ref 갱신
    setHasMore(hasNext);
    setLoading(false);

    /* eslint-enable no-console */
  }, [loading, selectedTopId, selectedMiddleId, selectedBottomId]);

  /* ---------- IntersectionObserver ---------- */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore) return () => {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchMoreProducts();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [fetchMoreProducts, hasMore]);

  /* ---------- UI ---------- */
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <div key={product.productId} className="rounded border p-2">
              <img src={product.imageThumbUrl} alt={product.imageThumbAlt ?? product.name} className="mb-2 w-full" />
              <div className="text-sm font-semibold">{product.name}</div>
              <div className="text-xs text-gray-500">{product.price.toLocaleString()}원</div>
            </div>
          ))}
          {/* 무한 스크롤 센티널 */}
          <div ref={sentinelRef} className="col-span-2 h-10" />
        </>
      ) : (
        <div className="col-span-2 text-center text-gray-500">조건에 맞는 상품이 없습니다.</div>
      )}
    </section>
  );
}
