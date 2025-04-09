import { FeaturedSectionProductsRes } from "@/lib/api/featured-section_products";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json<FeaturedSectionProductsRes>([
    {
      featuredSectionsId: "1",
      products: [
        {
          productId: "1",
          url: "/temp-square.png",
          alt: "temp",
          name: "SS 플라워 마켓 스탠리 켄처 텀블러 591ml",
          price: 20000000,
          discountRate: 20,
          discountedPrice: 16000,
          code: "1001550",
          isLimitedEdition: false,
          isTop: true,
        },
        {
          productId: "2",
          url: "/temp-square.png",
          alt: "temp",
          name: "SS 플라워 마켓 스탠리 켄처 텀블러 591ml",
          price: 20000000,
          discountRate: 20,
          discountedPrice: 16000,
          code: "1001550",
          isLimitedEdition: true,
          isTop: false,
        },
      ],
    },
    {
      featuredSectionsId: "2",
      products: [
        {
          productId: "1",
          url: "/temp-square.png",
          alt: "temp",
          name: "SS 플라워 마켓 스탠리 켄처 텀블러 591ml",
          price: 20000000,
          discountRate: 20,
          discountedPrice: 16000,
          code: "1001550",
          isLimitedEdition: false,
          isTop: true,
        },
        {
          productId: "2",
          url: "/temp-square.png",
          alt: "temp",
          name: "SS 플라워 마켓 스탠리 켄처 텀블러 591ml",
          price: 20000000,
          discountRate: 20,
          discountedPrice: 16000,
          code: "1001550",
          isLimitedEdition: true,
          isTop: false,
        },
        {
          productId: "3",
          url: "/temp-square.png",
          alt: "temp",
          name: "SS 플라워 마켓 스탠리 켄처 텀블러 591ml",
          price: 20000000,
          discountRate: 20,
          discountedPrice: 16000,
          code: "1001550",
          isLimitedEdition: true,
          isTop: false,
        },
        {
          productId: "4",
          url: "/temp-square.png",
          alt: "temp",
          name: "SS 플라워 마켓 스탠리 켄처 텀블러 591ml",
          price: 20000000,
          discountRate: 20,
          discountedPrice: 16000,
          code: "1001550",
          isLimitedEdition: true,
          isTop: false,
        },
      ],
    },
  ]);
}
