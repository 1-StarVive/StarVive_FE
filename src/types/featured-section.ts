export type FeaturedSectionsRes = {
  featuredSectionsId: string;
  name: string;
}[];

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
