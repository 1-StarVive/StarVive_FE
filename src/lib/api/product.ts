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

export const getProductResponse = v.array(
  v.object({
    productId: v.string(),
    nameKr: v.string(),
    nameEn: v.string(),
    price: v.number(),
    thumbnailUrl: v.string(),
    rank: v.number(),
  }),
);

export type GetProductResponse = v.InferOutput<typeof getProductResponse>;

export async function getProduct(): Promise<GetProductResponse> {
  const res = await api.get<GetProductResponse>("/v1/product");
  const data = v.parse(getProductResponse, res.data);
  return data;
}
