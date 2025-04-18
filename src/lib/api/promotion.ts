import api from "../axios-api";
import * as v from "valibot";

export const listPromotionsResponse = v.array(
  v.object({
    promotionId: v.string(),
    title: v.string(),
    promotionStartAt: v.string(),
    promotionEndAt: v.string(),
    promotionDetailContent: v.string(),
  }),
);

export type ListPromotionsResponse = v.InferOutput<typeof listPromotionsResponse>;

export async function getListPromotions(): Promise<ListPromotionsResponse> {
  const res = await api.get<ListPromotionsResponse>("/api/v1/promotions/list");
  const data = v.parse(listPromotionsResponse, res.data);
  return data;
}

export const promotionProductsResponse = v.array(
  v.object({
    productId: v.string(),
    name: v.string(),
    imageThumbUrl: v.string(),
    imageThumbAlt: v.string(),
    price: v.number(),
    baseDiscountRate: v.number(),
  }),
);

export type PromotionProductsResponse = v.InferOutput<typeof promotionProductsResponse>;

export async function getPromotionProducts(promotionId: string): Promise<PromotionProductsResponse> {
  const res = await api.get<PromotionProductsResponse>("/api/v1/promotion-products", {
    params: { promotionId },
  });
  const data = v.parse(promotionProductsResponse, res.data);
  return data;
}
