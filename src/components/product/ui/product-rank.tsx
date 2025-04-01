import RankIcon from "@/components/icons/rank-icon";

export type ProductRankProps = {
  rank: number;
};

function ProductRank({ rank }: ProductRankProps) {
  return (
    <div className="absolute right-[8px]">
      <RankIcon className="w-[22px] h-[30px]" />
      <span className="text-white top-0 left-1/2 absolute -translate-x-1/2">
        {rank}
      </span>
    </div>
  );
}

export default ProductRank;
