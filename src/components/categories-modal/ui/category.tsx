import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
};
function Category({ alt, src, children }: CategoryProps) {
  return (
    <li>
      <Link className="w-full flex flex-col gap-[10px] items-center" href="/.">
        <div className="aspect-square relative w-full">
          <Image
            className="rounded-full"
            src={src}
            alt={alt}
            fill
            sizes="200px"
          />
        </div>

        <span className="text-[14px]">{children}</span>
      </Link>
    </li>
  );
}

export default Category;
