"use client";

import HeartIcon from "@/components/icons/heart-icon";
import { addWish, deleteWish, getWishByProductId } from "@/lib/api/wish";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export type WishProps = {
  productId: string;
};
function Wish({ productId }: WishProps) {
  const queryClient = useQueryClient();
  const wish = useSuspenseQuery({
    queryKey: ["getWishByProductId", productId] as const,
    queryFn: async ({ queryKey }) => {
      const [_, productId] = queryKey;
      return await getWishByProductId(productId);
    },
  });

  const addWishMutation = useMutation({
    mutationFn: addWish,
  });

  const deleteWishMutation = useMutation({
    mutationFn: deleteWish,
  });

  const handleClick = useCallback(async () => {
    if (wish.data.isWish) await deleteWishMutation.mutateAsync({ productId });
    else await addWishMutation.mutateAsync({ productId });
    queryClient.invalidateQueries({ queryKey: ["getWishByProductId", productId] });
  }, [wish.data.isWish, productId]);

  return (
    <button onClick={handleClick}>
      <HeartIcon
        className={cn("h-7 w-7 fill-transparent", {
          "fill-rose-400": wish.data.isWish,
        })}
      />
    </button>
  );
}

export default Wish;
