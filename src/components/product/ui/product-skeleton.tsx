import { Skeleton } from "@/components/skeleton";
import Link from "next/link";

function ProductSkeleton() {
  return (
    <Link className="flex w-full flex-col gap-[6px]" href="/.">
      <ImageSkeleton />
      <InfoSkeleton />
      <PriceSkeleton />
    </Link>
  );
}

export default ProductSkeleton;

function ImageSkeleton() {
  return <Skeleton className="flex aspect-square w-full" />;
}

function InfoSkeleton() {
  return (
    <div className="flex flex-col gap-[8px]">
      <Skeleton className="h-[20px] w-full" />
      <Skeleton className="h-[20px] w-2/3" />
    </div>
  );
}

function PriceSkeleton() {
  return (
    <div className="flex flex-col gap-[8px]">
      <Skeleton className="h-[21px] w-full" />
    </div>
  );
}
