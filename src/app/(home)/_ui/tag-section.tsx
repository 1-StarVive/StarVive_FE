"use client";

import { getHashTags } from "@/lib/api/hash-tags";
import Tag from "./tag";
import TagSectionSkeleton from "./tag-section.skeleton";
import Title from "./title";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getFeaturedSectionAll } from "@/lib/api/featured-section";

function TagSection() {
  const section = useSuspenseQuery({
    queryKey: ["featuredSectionAll"],
    queryFn: getFeaturedSectionAll,
  });

  return (
    <SectionWrap>
      <Title>TREND TAG</Title>
      <TagsWrap>
        {/* {hashTags.map((h) => (
          <Tag key={h.hashTagId} src={h.url} alt={h.alt}>
            {h.name}
          </Tag>
        ))} */}
      </TagsWrap>
    </SectionWrap>
  );
}

export default TagSection;

TagSection.Skeleton = TagSectionSkeleton;

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function TagsWrap({ children }: React.PropsWithChildren) {
  return <ul className="flex flex-nowrap gap-[20px] overflow-auto p-[24px]">{children}</ul>;
}
