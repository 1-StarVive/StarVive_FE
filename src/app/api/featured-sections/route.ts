import { FeaturedSectionsRes } from "@/lib/api/featured-sections";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json<FeaturedSectionsRes>([
    {
      featuredSectionsId: "1",
      name: "api/featured-section/routs.ts",
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
