import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const BadgeVariants = cva("text-xs", {
  variants: {
    color: {
      brown: "text-[#997e64]",
      red: "text-[#E53535]",
      green: "text-[#30BB7A]",
    },
  },
  defaultVariants: {
    color: "red",
  },
});

function Badge({
  className,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof BadgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp className={cn(BadgeVariants({ color, className }))} {...props} />
  );
}

export default Badge;
