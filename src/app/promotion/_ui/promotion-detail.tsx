"use client";

import AutoImage from "@/components/auto-image";
import { memo } from "react";

type PromotionDetailProps = {
  contents: string;
};
const PromotionDetail = memo(function PromotionDetail({ contents }: PromotionDetailProps) {
  const htmlString = contents;
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const srcs = Array.from(doc.querySelectorAll("img")).map((img) => img.src);

  return (
    <PromotionDetailsWrap>
      {srcs.map((src, i) => (
        <AutoImage key={i} src={src} alt={`${i}`} />
      ))}
    </PromotionDetailsWrap>
  );
});

export default PromotionDetail;

function PromotionDetailsWrap({ children }: React.PropsWithChildren) {
  return <section>{children}</section>;
}
