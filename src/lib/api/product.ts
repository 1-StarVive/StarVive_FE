import api from "../axios-api";
import * as v from "valibot";

export const getBestProductResponse = v.array(
  v.object({
    productId: v.string(),
    nameKr: v.string(),
    nameEn: v.string(),
    price: v.number(),
    thumbnailUrl: v.string(),
    rank: v.number(),
  }),
);

export type GetBestProductResponse = v.InferOutput<typeof getBestProductResponse>;

export async function getBestProduct(): Promise<GetBestProductResponse> {
  const res = await api.get<GetBestProductResponse>("/v1/product/best");
  const data = v.parse(getBestProductResponse, res.data);
  return data;
}

export const getProductDetailResponse = v.object({
  productId: v.string(),
  name: v.string(),
  productStatus: v.string(),
  productDetailContent: v.string(),
  imageThumbUrl: v.string(),
  price: v.number(),
  baseDiscountRate: v.number(),
  discountedPrice: v.number(),
  requiredInfos: v.array(
    v.object({
      type: v.string(),
      value: v.string(),
    }),
  ),
});

export type GetProductDetailResponse = v.InferOutput<typeof getProductDetailResponse>;

export async function getProductDetail(productId: string): Promise<GetProductDetailResponse> {
  const res = await api.get<GetProductDetailResponse>("/v1/product/detail", {
    params: { productId },
  });
  const data = v.parse(getProductDetailResponse, res.data);
  return data;
}
