import { Skeleton } from "@/components/skeleton";

function TitleSkeleton() {
  return (
    <div className="text-[22px] px-[24px] rounded-full">
      <Skeleton className="w-[200px] h-[30px]" />
    </div>
  );
}

export default TitleSkeleton;
