"use client";

import Accordion from "@/components/arccordion";
import Header from "@/components/headers/header";
import CategoriesSubHeader from "@/components/headers/categories-sub-header";
import StaticFooter from "@/components/footers/static-footer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getListPromotions } from "@/lib/api/promotion";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import TabMenu from "@/components/tab-menu";
import PromotionProducts from "./_ui/promotion-products";
import dynamic from "next/dynamic";

const PromotionDetail = dynamic(() => import("./_ui/promotion-detail"), { ssr: false });

function Promotion() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nowId = searchParams.get("promotionId");

  const promotions = useSuspenseQuery({
    queryKey: ["getListPromotions"],
    queryFn: getListPromotions,
    select: (data) =>
      data.map((o) => ({
        id: o.promotionId,
        name: o.title,
        href: `/promotion?promotionId=${o.promotionId}`,
        contents: o.promotionDetailContent,
        notice: o.notice,
      })),
  });

  useEffect(
    function initialize() {
      if (nowId === null && promotions.data.length > 0) {
        router.replace(`/promotion?promotionId=${promotions.data[0].id}`);
      }
    },
    [router, nowId, promotions.data],
  );

  const currentItem = promotions.data.find((item) => item.id === nowId);

  if (!currentItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header
        subHeader={
          <>
            <CategoriesSubHeader selected="/promotion" />
            <TabMenu items={promotions.data} selectedId={currentItem.id} />
          </>
        }
      />
      <main>
        <PromotionDetail contents={currentItem.contents} />
        <Accordion title="기획전 유의사항" contents={currentItem.notice} />

        <PromotionProducts productId={currentItem.id} />
      </main>
      <StaticFooter />
    </>
  );
}

export default Promotion;
