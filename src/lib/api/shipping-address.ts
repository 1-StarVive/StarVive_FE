import api from "../axios-api";
import * as v from "valibot";

export const getShippingAddressResponse = v.array(
  v.object({
    shippingAddressId: v.string(),
    addressNickName: v.string(),
    receiverName: v.string(),
    postalCode: v.string(),
    baseAddress: v.string(),
    detailAddress: v.string(),
    phoneNumber: v.string(),
    memo: v.string(),
    selectedBase: v.boolean(),
    userUuid: v.string(),
    deleted: v.boolean(),
  }),
);

export type GetShippingAddressResponse = v.InferOutput<typeof getShippingAddressResponse>;

export async function getShippingAddress(): Promise<GetShippingAddressResponse> {
  const res = await api.get<GetShippingAddressResponse>("/v1/shipping-address");
  const data = v.parse(getShippingAddressResponse, res.data);
  return data;
}

export const addShippingAddressRequest = v.object({
  addressNickName: v.string(),
  receiverName: v.string(),
  postalCode: v.string(),
  baseAddress: v.string(),
  detailAddress: v.string(),
  phoneNumber: v.string(),
  memo: v.string(),
  selectedBase: v.boolean(),
});

export type AddShippingAddressRequest = v.InferOutput<typeof addShippingAddressRequest>;

export async function addShippingAddress(input: AddShippingAddressRequest): Promise<void> {
  await api.post("/v1/shipping-address", input);
}

export const updateShippingAddressRequest = v.object({
  shippingAddressId: v.string(),
  addressNickName: v.string(),
  receiverName: v.string(),
  postalCode: v.string(),
  baseAddress: v.string(),
  detailAddress: v.string(),
  phoneNumber: v.string(),
  memo: v.string(),
  selectedBase: v.boolean(),
});

export type UpdateShippingAddressRequest = v.InferOutput<typeof updateShippingAddressRequest>;

export async function updateShippingAddress(input: UpdateShippingAddressRequest): Promise<void> {
  await api.put("/v1/shipping-address", input);
}

export const getShippingAddressDetailResponse = v.object({
  shippingAddressId: v.string(),
  addressNickName: v.string(),
  receiverName: v.string(),
  postalCode: v.string(),
  baseAddress: v.string(),
  detailAddress: v.string(),
  phoneNumber: v.string(),
  memo: v.string(),
  selectedBase: v.boolean(),
  userUuid: v.string(),
  deleted: v.boolean(),
});

export type GetShippingAddressDetailResponse = v.InferOutput<typeof getShippingAddressDetailResponse>;

export async function getShippingAddressDetail(shippingAddressId: string): Promise<GetShippingAddressDetailResponse> {
  const res = await api.get<GetShippingAddressDetailResponse>("/v1/shipping-address/detail", {
    params: { shippingAddressId },
  });
  const data = v.parse(getShippingAddressDetailResponse, res.data);
  return data;
}
