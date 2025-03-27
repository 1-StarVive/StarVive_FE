import { getFeaturedSectionProducts } from "@/lib/api/featured-section/products";
import * as R from "fp-ts/Record";
import * as NEA from "fp-ts/NonEmptyArray";
import { pipe } from "fp-ts/function";
import { getFeaturedSections } from "@/lib/api/featured-sections";
import {
  FeaturedSectionProductsRes,
  FeaturedSectionsRes,
} from "@/types/featured-section";

type GetFeaturedSectionIdWithProductsReturn = (Partial<
  Pick<FeaturedSectionProductsRes[number], "products">
> &
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
    R.map((o) => o.products)
  );
  const res = featuredSections.map((featuredSection) => {
    const products =
      productsByFeaturedSectionId[featuredSection.featuredSectionsId];
    return { ...featuredSection, products };
  });
  return res;
}
