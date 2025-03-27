import {
  FeaturedSectionProductsReq,
  FeaturedSectionProductsRes,
} from "@/types/featured-section";

export async function getFeaturedSectionProducts({
  featuredSectionsIds,
}: FeaturedSectionProductsReq): Promise<FeaturedSectionProductsRes> {
  const params = new URLSearchParams();
  for (const featuredSectionsId of featuredSectionsIds)
    params.append("featuredSectionsIds", featuredSectionsId);

  const res = await fetch(
    `http://localhost:3000/api/featured-section/products?${params.toString()}`
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err);
  }
  const data: FeaturedSectionProductsRes = await res.json();
  return data;
}
