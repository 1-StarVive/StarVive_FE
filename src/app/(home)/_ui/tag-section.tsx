import { getHashTags } from "@/lib/api/hash-tags";
import Tag from "./tag";
import TagSectionSkeleton from "./tag-section.skeleton";
import Title from "./title";

async function TagSection() {
  try {
    const hashTags = await getHashTags();

    return (
      <SectionWrap>
        <Title>TREND TAG</Title>
        <TagsWrap>
          {hashTags.map((h) => (
            <Tag key={h.hashTagId} src={h.url} alt={h.alt}>
              {h.name}
            </Tag>
          ))}
        </TagsWrap>
      </SectionWrap>
    );
  } catch (error) {
    return <div>오류나뮤ㅠ</div>;
  }
}

export default TagSection;

TagSection.Skeleton = TagSectionSkeleton;

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function TagsWrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="flex overflow-auto flex-nowrap gap-[20px] p-[24px]">
      {children}
    </ul>
  );
}
