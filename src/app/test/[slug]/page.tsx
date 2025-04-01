"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = use(params);
  const { query } = use(searchParams); // 바뀌어도 리렌더링 안됨
  const clientSearchParams = useSearchParams(); // 바뀌면 화면 리렌더링
  clientSearchParams.get("a"); // 한개만 있는경우 이걸로 (?a=1&b=2)
  clientSearchParams.getAll("a"); // 여러개 있는경우 이걸로 (?a=1&a=2&a=3)
}
