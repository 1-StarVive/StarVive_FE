import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabButtonVariants = cva("relative border-b bg-white", {
  variants: {
    size: {
      default: "h-16 px-4",
      sm: "h-11 px-2",
    },
    isActive: {
      true: "before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:content-['']",
      false: "",
    },
  },
  defaultVariants: {
    size: "default",
    isActive: false,
  },
});

function TabButton({
  className,
  isActive,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof tabButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(tabButtonVariants({ isActive, size, className }))} {...props} />;
}

export default TabButton;
