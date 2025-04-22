import * as v from "valibot";
import api from "../axios-api";

const cartListResponse = v.array(
  v.object({
    cartId: v.string(),
    productId: v.string(),
    productOptionId: v.string(),
    name: v.string(),
    optionName: v.string(),
    imageThumbUrl: v.string(),
    imageThumbAlt: v.string(),
    price: v.number(),
    baseDiscountRate: v.number(),
    discountedPrice: v.number(),
    quantity: v.number(),
    checked: v.boolean(),
  }),
);

export type CartListResponse = v.InferOutput<typeof cartListResponse>;

export async function getCartList() {
  const res = await api.get<CartListResponse>("/v1/cart/all");
  const data = v.parse(cartListResponse, res.data);
  return data;
}

export const addCartRequest = v.object({
  productId: v.string(),
  productOptionId: v.string(),
  quantity: v.number(),
  checked: v.boolean(),
});

export type AddCartRequest = v.InferOutput<typeof addCartRequest>;

export async function addCart(input: AddCartRequest): Promise<void> {
  await api.post<void>("/v1/cart/add", input);
}

export const updateCartRequest = v.object({
  cartId: v.string(),
  productOptionId: v.string(),
  quantity: v.number(),
  checked: v.boolean(),
});

export type UpdateCartRequest = v.InferOutput<typeof updateCartRequest>;

export async function updateCart(input: UpdateCartRequest): Promise<void> {
  await api.put<void>("/v1/cart/items", input);
}

export const updateCartsRequest = v.array(
  v.object({
    cartId: v.string(),
    checked: v.boolean(),
  }),
);

export type UpdateCartsRequest = v.InferOutput<typeof updateCartsRequest>;

export async function updateCarts(input: UpdateCartsRequest): Promise<void> {
  await api.put<void>("/v1/cart/update-items", input);
}

export const deleteCartRequest = v.object({
  cartItemIds: v.string(),
});

export type DeleteCartRequest = v.InferOutput<typeof deleteCartRequest>;

export async function deleteCart(input: DeleteCartRequest): Promise<void> {
  await api.delete<void>("/v1/cart/items", {
    data: { cartItemIds: [input.cartItemIds] },
    paramsSerializer: { indexes: null },
  });
}
