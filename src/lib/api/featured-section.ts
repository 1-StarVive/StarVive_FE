import * as v from "valibot";
import api from "../axios-api";

const featuredSectionsResponse = v.array(
  v.object({
    featuredSectionId: v.string(),
    name: v.string(),
    activated: v.boolean(),
  }),
);

export type FeaturedSectionsResponse = v.InferOutput<typeof featuredSectionsResponse>;

export async function getFeaturedSectionAll() {
  const res = await api.get<FeaturedSectionsResponse>("/api/v1/featured-section/all");
  const data = v.parse(featuredSectionsResponse, res.data);
  return data;
}

export const addFeaturedSectionRequest = v.object({
  name: v.pipe(
    v.string("추천섹션명을 입력해 주세요"),
    v.minLength(4, "4자 이상 입력해 주세요"),
    v.maxLength(50, "50자 이하로 입력해 주세요"),
  ),
  activated: v.boolean(),
});
export type AddFeaturedSectionRequest = v.InferOutput<typeof addFeaturedSectionRequest>;

export async function addFeaturedSection(input: AddFeaturedSectionRequest): Promise<void> {
  await api.post<void>("/v1/featured-section/add", input);
}

export const featuredSectionProductsRequest = v.object({
  featuredSectionIds: v.array(v.string()),
});

export type FeaturedSectionProductsReqest = v.InferOutput<typeof featuredSectionProductsRequest>;

export const featuredSectionProductsResponse = v.array(
  v.object({
    featuredSectionsId: v.string(),
    products: v.array(
      v.object({
        productId: v.string(),
        imageThumbUrl: v.string(),
        imageThumbAlt: v.string(),
        name: v.string(),
        price: v.number(),
        baseDiscountRate: v.number(),
      }),
    ),
  }),
);

export type FeaturedSectionProductsResponse = v.InferOutput<typeof featuredSectionProductsResponse>;

export async function getFeaturedSectionProducts(
  params: FeaturedSectionProductsReqest,
): Promise<FeaturedSectionProductsResponse> {
  const res = await api.get<FeaturedSectionProductsResponse>("/api/v1/featured-section/products", {
    params,
    paramsSerializer: { indexes: null },
  });
  const data = v.parse(featuredSectionProductsResponse, res.data);
  return data;
}
