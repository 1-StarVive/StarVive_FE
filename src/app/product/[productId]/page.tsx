"use client";

import Image from "next/image";
import ProductInfo from "./_ui/product-info";
import AutoImage from "@/components/auto-image";
import ProductFooter from "./_ui/product-footer";
import Header from "@/components/headers/header";
import StaticFooter from "@/components/footers/static-footer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/lib/api/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Product() {
  const [srcs, setSrcs] = useState<string[]>([]);

  const params = useParams();

  const product = useSuspenseQuery({
    queryKey: ["product", params.productId] as const,
    queryFn: async ({ queryKey }) => {
      const [_, productId] = queryKey;
      if (typeof productId !== "string") return undefined;
      return await getProductDetail(productId);
    },
  });

  useEffect(() => {
    if (product.data) {
      const htmlString = product.data.productDetailContent;
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      const srcs = Array.from(doc.querySelectorAll("img"))
        .map((img) => img.src)
        .map((src) => src.replace("http://localhost:3000", ""))
        .map((src) => src.replace(/\/\%22/g, ""));
      setSrcs(srcs);
    }
  }, [product.data]);

  if (product.data === undefined) return <></>;
  return (
    <>
      <Header showBackButton={true} />
      <main className="flex flex-col gap-[20px]">
        <ImageWrap>
          <Image src={`${product.data.imageThumbUrl}`} alt="" sizes="400px" fill priority />
        </ImageWrap>

        <ProductInfo
          name={product.data.name}
          baseDiscountRate={product.data.baseDiscountRate}
          discountedPrice={product.data.discountedPrice}
          price={product.data.price}
        />

        <ProductImagesWrap>
          <div className="px-[24] py-2">
            <span className="text-lg font-bold">상품정보</span>
          </div>

          {srcs.map((src, i) => (
            <InfoImageWrap key={i}>
              <AutoImage src={src} alt="" />
            </InfoImageWrap>
          ))}
        </ProductImagesWrap>

        <ProductFooter />
      </main>
      <StaticFooter />
    </>
  );
}

export default Product;

function ImageWrap({ children }: React.PropsWithChildren) {
  return <div className="relative flex aspect-square w-full">{children}</div>;
}

function InfoImageWrap({ children }: React.PropsWithChildren) {
  return <div className="relative">{children}</div>;
}

function ProductImagesWrap({ children }: React.PropsWithChildren) {
  return <section>{children}</section>;
}
