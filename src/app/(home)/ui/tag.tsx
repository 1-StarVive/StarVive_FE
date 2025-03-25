import Image from "next/image";
import Link from "next/link";

type TagProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
};
function Tag({ alt, src, children }: TagProps) {
  return (
    <li>
      <Link
        className="min-w-[110px] flex items-center flex-col gap-[16px] w-fit"
        href="/."
      >
        <div className="aspect-square relative w-full">
          <Image
            className="rounded-full"
            src={src}
            alt={alt}
            fill
            sizes="110px"
          />
        </div>
        <span className="text-[16px]">{children}</span>
      </Link>
    </li>
  );
}

export default Tag;
