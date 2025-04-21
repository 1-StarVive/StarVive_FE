export async function fetchProducts({
  topId,
  middleId,
  bottomId,
  pageSize = 20,
}: {
  topId?: string;
  middleId?: string;
  bottomId?: string;
  pageSize?: number;
}) {
  const query = new URLSearchParams();
  if (topId) query.set("topId", topId);
  if (middleId) query.set("middleId", middleId);
  if (bottomId) query.set("bottomId", bottomId);
  query.set("pageSize", String(pageSize));

  const res = await fetch(`http://52.78.250.41:8082/api/v1/product-category?${query.toString()}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchTopCategories() {
  const res = await fetch("http://52.78.250.41:8082/api/v1/top-categories/all", { cache: "no-store" });
  return res.json();
}

export async function fetchMiddleCategories() {
  const res = await fetch("http://52.78.250.41:8082/api/v1/middle-categories/all", { cache: "no-store" });
  return res.json();
}

export async function fetchBottomCategories() {
  const res = await fetch("http://52.78.250.41:8082/api/v1/bottom-categories/all", { cache: "no-store" });
  return res.json();
}
