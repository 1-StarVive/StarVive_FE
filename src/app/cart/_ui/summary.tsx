import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const titleVariants = cva("font-semibold", {
  variants: {
    size: {
      sm: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const priceVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-xl",
      lg: "text-2xl",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const wonVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type SummaryProps = {
  title: string;
  price: number;
} & VariantProps<typeof titleVariants>;

function Summary({ title, price, size }: SummaryProps) {
  return (
    <div className={cn("grid grid-cols-[auto_1fr] items-center justify-items-end gap-2")}>
      <span className={cn(titleVariants({ size }))}>{title}</span>
      <span className={cn(priceVariants({ size }))}>
        {price.toLocaleString("ko-KR")}
        <span className={cn(wonVariants({ size }))}>원</span>
      </span>
    </div>
  );
}

export default Summary;
