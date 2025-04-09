import { FeaturedSectionProductsRes, getFeaturedSectionProducts } from "@/lib/api/featured-section_products";
import * as R from "fp-ts/Record";
import * as NEA from "fp-ts/NonEmptyArray";
import { pipe } from "fp-ts/function";
import { FeaturedSectionsRes, getFeaturedSections } from "@/lib/api/featured-sections";

type GetFeaturedSectionIdWithProductsReturn = (Partial<Pick<FeaturedSectionProductsRes[number], "products">> &
  FeaturedSectionsRes[number])[];

export async function getFeaturedSectionIdWithProducts(): Promise<GetFeaturedSectionIdWithProductsReturn> {
  const featuredSections = await getFeaturedSections();
  const featuredSectionsIds = featuredSections.map((o) => o.featuredSectionsId);
  const featuredSectionProducts = await getFeaturedSectionProducts({
    featuredSectionsIds,
  });
  const productsByFeaturedSectionId = pipe(
    featuredSectionProducts,
    NEA.groupBy((o) => o.featuredSectionsId),
    R.map(NEA.head),
    R.map((o) => o.products),
  );
  const res = featuredSections.map(({ featuredSectionsId, name }) => ({
    featuredSectionsId,
    name,
    products: productsByFeaturedSectionId[featuredSectionsId],
  }));
  return res;
}
