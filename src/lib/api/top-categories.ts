import api from "../axios-api";
import * as v from "valibot";

export const getTopCategoriesAllResponse = v.array(
  v.object({
    topCategoryId: v.string(),
    name: v.string(),
    imageUrl: v.string(),
    imageAlt: v.string(),
  }),
);

export type GetTopCategoriesAllResponse = v.InferOutput<typeof getTopCategoriesAllResponse>;

export async function getTopCategoriesAll(): Promise<GetTopCategoriesAllResponse> {
  const res = await api.get<GetTopCategoriesAllResponse>("/v1/top-categories/all");
  const data = v.parse(getTopCategoriesAllResponse, res.data);
  return data;
}
