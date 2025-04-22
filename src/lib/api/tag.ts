import api from "../axios-api";
import * as v from "valibot";

export const getTagAllResponse = v.array(
  v.object({
    tagId: v.string(),
    name: v.string(),
    imageThumbUrl: v.string(),
    imageThumbAlt: v.string(),
  }),
);

export type GetTagAllResponse = v.InferOutput<typeof getTagAllResponse>;

export async function getTagAll(): Promise<GetTagAllResponse> {
  const res = await api.get<GetTagAllResponse>("/v1/tag/all");
  const data = v.parse(getTagAllResponse, res.data);
  return data;
}

export const getProductTagListResponse = v.array(
  v.object({
    productId: v.string(),
    imageThumbUrl: v.string(),
    imageThumbAlt: v.string(),
    main: v.boolean(),
    name: v.string(),
    baseDiscountRate: v.number(),
    discountedPrice: v.number(),
    price: v.number(),
  }),
);

export type GetProductTagListResponse = v.InferOutput<typeof getProductTagListResponse>;

export async function getProductTagList(tagId: string): Promise<GetProductTagListResponse> {
  const res = await api.get<GetProductTagListResponse>("/v1/product-tag", {
    params: { tagId },
  });
  const data = v.parse(getProductTagListResponse, res.data);
  return data;
}
