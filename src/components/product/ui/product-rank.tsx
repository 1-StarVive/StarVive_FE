import RankIcon from "@/components/icons/rank-icon";

export type ProductRankProps = {
  rank: number;
};

function ProductRank({ rank }: ProductRankProps) {
  return (
    <div className="absolute right-[8px]">
      <RankIcon className="h-[30px] w-[22px]" />
      <span className="absolute top-0 left-1/2 -translate-x-1/2 text-white">{rank}</span>
    </div>
  );
}

export default ProductRank;
