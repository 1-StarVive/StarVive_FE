// app/test-api/page.tsx

type Product = {
  productId: string;
  imageThumbUrl: string;
  name: string;
  price: number;
};

export default async function TestApiPage() {
  try {
    const res = await fetch("http://52.78.250.41:8082/api/v1/product/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // 서버 컴포넌트에서 실시간 호출 원할 경우 추가
    });

    if (!res.ok) {
      throw new Error(`API 호출 실패: ${res.status}`);
    }

    const data: Product[] = await res.json();

    return (
      <main className="p-4">
        <h1 className="mb-4 text-xl font-bold">📦 상품 목록</h1>
        <ul className="grid grid-cols-2 gap-4">
          {data.map((product) => (
            <li key={product.productId} className="rounded border p-2">
              <img src={product.imageThumbUrl} alt={product.name} className="mb-2 h-32 w-full object-cover" />
              <div className="font-semibold">{product.name}</div>
              <div className="text-sm text-gray-600">{product.price}원</div>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    return <div className="p-4 text-red-500">❌ 에러 발생: {(error as Error).message}</div>;
  }
}
