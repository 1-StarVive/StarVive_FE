import { Skeleton } from "@/components/skeleton";

function TagSkeleton() {
  return (
    <div className="min-w-[110px] flex items-center flex-col gap-[16px] w-fit">
      <div className="aspect-square relative w-full">
        <Skeleton className="rounded-full w-full aspect-square" />
      </div>
      <Skeleton className="w-[90px] h-[25px]" />
    </div>
  );
}

export default TagSkeleton;
