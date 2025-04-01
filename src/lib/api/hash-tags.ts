export type HashTagsRes = {
  hashTagId: string;
  name: string;
  url: string;
  alt: string;
  type: "TRANDTAG" | "RECOMMENDTAG";
}[];

export async function getHashTags() {
  const res = await fetch("http://localhost:3000/api/hash-tags");
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err);
  }
  const data: HashTagsRes = await res.json();
  return data;
}
