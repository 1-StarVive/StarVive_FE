import api from "../axios-api";
import * as v from "valibot";

export const getWishListResponse = v.array(
  v.object({
    productId: v.string(),
    name: v.string(),
    imageThumbUrl: v.string(),
    imageThumbAlt: v.string(),
  }),
);

export type GetWishListResponse = v.InferOutput<typeof getWishListResponse>;

export async function getWishList(): Promise<GetWishListResponse> {
  const res = await api.get<GetWishListResponse>("/v1/wish");
  const data = v.parse(getWishListResponse, res.data);
  return data;
}

export const addWishRequest = v.object({
  productId: v.string(),
});

export type AddWishRequest = v.InferOutput<typeof addWishRequest>;

export async function addWish(input: AddWishRequest): Promise<void> {
  await api.post<void>("/v1/wish", input);
}

export const deleteWishRequest = v.object({
  productId: v.string(),
});

export type DeleteWishRequest = v.InferOutput<typeof deleteWishRequest>;

export async function deleteWish(input: DeleteWishRequest): Promise<void> {
  await api.delete<void>("/v1/wish", { data: input });
}

export const getWishStateResponse = v.object({
  productId: v.string(),
  isWish: v.boolean(),
});

export type GetWishStateResponse = v.InferOutput<typeof getWishStateResponse>;

export async function getWishByProductId(productId: string): Promise<GetWishStateResponse> {
  const res = await api.get<GetWishStateResponse>("/v1/wish/status", {
    params: { productId },
  });
  const data = v.parse(getWishStateResponse, res.data);
  return data;
}
