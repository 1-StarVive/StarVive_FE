import { FeaturedSectionsRes } from "@/types/featured-section";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json<FeaturedSectionsRes>([
    {
      featuredSectionsId: "1",
      name: "TREND TAG",
    },
    {
      featuredSectionsId: "2",
      name: "MD FESTA",
    },
    {
      featuredSectionsId: "3",
      name: "Ways of Working",
    },
  ]);
}
