import * as v from "valibot";
import api from "../axios-api";

export const createFeaturedSectionRequest = v.object({
  name: v.pipe(
    v.string("추천섹션명을 입력해 주세요"),
    v.minLength(4, "4자 이상 입력해 주세요"),
    v.maxLength(50, "50자 이하로 입력해 주세요"),
  ),
  activated: v.pipe(
    v.boolean(),
    v.transform((value) => Boolean(value)),
  ),
});
export type CreateFeaturedSectionRequest = v.InferOutput<typeof createFeaturedSectionRequest>;

export async function creatFeaturedSection(input: CreateFeaturedSectionRequest): Promise<void> {
  await api.post<void>("/users/featured-section", input);
}

export type FeaturedSectionProductsReq = {
  featuredSectionsIds: string[];
};

export type FeaturedSectionProductsRes = {
  featuredSectionsId: string;
  products: {
    productId: string;
    url: string;
    alt: string;
    name: string;
    price: number;
    discountRate: number;
    discountedPrice: number;
    code: string;
    isLimitedEdition: boolean;
    isTop: boolean;
  }[];
}[];

export async function getFeaturedSectionProducts({
  featuredSectionsIds,
}: FeaturedSectionProductsReq): Promise<FeaturedSectionProductsRes> {
  const params = new URLSearchParams();
  for (const featuredSectionsId of featuredSectionsIds) params.append("featuredSectionsIds", featuredSectionsId);

  const res = await fetch(`http://localhost:3000/api/featured-section/products?${params.toString()}`);

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err);
  }
  const data: FeaturedSectionProductsRes = await res.json();
  return data;
}
