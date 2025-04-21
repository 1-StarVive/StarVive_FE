"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import TagSectionSkeleton from "./tag-section.skeleton";
import Title from "./title";
import Tag from "./tag";
import { getTagAll } from "@/lib/api/tag";

function TagSection() {
  const tagAll = useSuspenseQuery({
    queryKey: ["getTagAll"],
    queryFn: getTagAll,
  });

  return (
    <SectionWrap>
      <Title>TREND TAG</Title>
      <TagsWrap>
        {tagAll.data.map((o) => (
          <Tag key={o.tagId} tagId={o.tagId} src={o.imageThumbUrl} alt={o.imageThumbAlt}>
            {o.name}
          </Tag>
        ))}
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
