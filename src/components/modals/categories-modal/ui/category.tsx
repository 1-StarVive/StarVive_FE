import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  src: string;
  alt: string;
  href: string;
  children: React.ReactNode;
};
function Category({ alt, src, children, href }: CategoryProps) {
  return (
    <li>
      <Link className="flex w-full flex-col items-center gap-[10px]" href={href}>
        <div className="relative aspect-square w-full">
          <Image className="rounded-full" src={src} alt={alt} fill sizes="200px" />
        </div>

        <span className="text-[14px]">{children}</span>
      </Link>
    </li>
  );
}

export default Category;
