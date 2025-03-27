import { FeaturedSectionsRes } from "@/types/featured-section";

export async function getFeaturedSections() {
  const res = await fetch("http://localhost:3000/api/featured-sections");
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err);
  }
  const data: FeaturedSectionsRes = await res.json();
  return data;
}
