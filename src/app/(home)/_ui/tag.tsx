import Image from "next/image";
import Link from "next/link";
import TagSkeleton from "./tag.skeleton";

type TagProps = {
  tagId: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
function Tag({ tagId, alt, src, children }: TagProps) {
  return (
    <li>
      <Link className="flex w-fit min-w-[110px] flex-col items-center gap-[16px]" href={`/product/tag/${tagId}`}>
        <div className="relative aspect-square w-full">
          <Image className="rounded-full" src={src} alt={alt} fill sizes="110px" priority />
        </div>
        <span className="text-[16px]">{children}</span>
      </Link>
    </li>
  );
}

Tag.Skeleton = TagSkeleton;
export default Tag;
