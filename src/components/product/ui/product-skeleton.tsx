import { Skeleton } from "@/components/skeleton";
import Link from "next/link";

function ProductSkeleton() {
  return (
    <Link className="w-full flex flex-col gap-[16px]" href="/.">
      <ImageSkeleton />
      <InfoSkeleton />
      <PriceSkeleton />
    </Link>
  );
}

export default ProductSkeleton;

function ImageSkeleton() {
  return <Skeleton className="aspect-square flex w-full" />;
}

function InfoSkeleton() {
  return (
    <div className="flex flex-col gap-[8px]">
      <Skeleton className="w-full h-[20px]" />
      <Skeleton className="w-2/3 h-[20px]" />
    </div>
  );
}

function PriceSkeleton() {
  return (
    <div className="flex flex-col gap-[8px]">
      <Skeleton className="w-full h-[21px]" />
    </div>
  );
}
