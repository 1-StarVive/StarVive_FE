import { HashTagsRes } from "@/lib/api/hash-tags";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json<HashTagsRes>([
    {
      hashTagId: "1",
      name: "더스트백",
      url: "/temp-square.png",
      alt: "더스트백",
      type: "TRANDTAG",
    },
    {
      hashTagId: "2",
      name: "각인텀블러",
      url: "/temp-square.png",
      alt: "각인텀블러",
      type: "TRANDTAG",
    },
    {
      hashTagId: "3",
      name: "엘마텀블러",
      url: "/temp-square.png",
      alt: "엘마텀블러",
      type: "TRANDTAG",
    },
    {
      hashTagId: "4",
      name: "스탠리 콜라보",
      url: "/temp-square.png",
      alt: "스탠리 콜라보",
      type: "TRANDTAG",
    },
    {
      hashTagId: "5",
      name: "우산",
      url: "/temp-square.png",
      alt: "우산",
      type: "TRANDTAG",
    },
  ]);
}
