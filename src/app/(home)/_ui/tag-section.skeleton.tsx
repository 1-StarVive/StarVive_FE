import Tag from "./tag";
import Title from "./title";

function TagSectionSkeleton() {
  return (
    <SectionWrap>
      <Title.Skeleton />
      <TagsWrap>
        <Tag.Skeleton />
        <Tag.Skeleton />
        <Tag.Skeleton />
        <Tag.Skeleton />
      </TagsWrap>
    </SectionWrap>
  );
}

export default TagSectionSkeleton;

function SectionWrap({ children }: React.PropsWithChildren) {
  return <section className="flex flex-col gap-[30px]">{children}</section>;
}

function TagsWrap({ children }: React.PropsWithChildren) {
  return (
    <div className="flex overflow-hidden flex-nowrap gap-[20px] p-[24px]">
      {children}
    </div>
  );
}
