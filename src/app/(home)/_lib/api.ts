import { getFeaturedSectionProducts } from "@/lib/api/featured-section/products";
import { FeaturedSectionProductsRes } from "@/types/featured-section";
import * as R from "fp-ts/Record";
import * as NEA from "fp-ts/NonEmptyArray";
import { pipe } from "fp-ts/function";

export async function getProductsByFeaturedSectionId(
  featuredSectionsIds: string[]
): Promise<
  Record<string, FeaturedSectionProductsRes[0]["products"] | undefined>
> {
  const featuredSectionProducts = await getFeaturedSectionProducts({
    featuredSectionsIds,
  });
  const productsByFeaturedSectionId = pipe(
    featuredSectionProducts,
    NEA.groupBy((o) => o.featuredSectionsId),
    R.map(NEA.head),
    R.map((o) => o.products)
  );
  return productsByFeaturedSectionId;
}
