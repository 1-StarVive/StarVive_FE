import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative text-xs text-nowrap before:absolute before:top-1/2 before:-right-1.5 before:h-[10px] before:w-[1px] before:translate-x-[1px] before:-translate-y-1/2 before:bg-[#9e9e9e] [&:last-child]:before:hidden",
  {
    variants: {
      color: {
        primary: "text-primary",
        none: "",
      },
    },
    defaultVariants: {
      color: "none",
    },
  },
);

type TextButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function TextButton({ color, children, asChild, className, ...props }: TextButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ color, className }))} {...props}>
      {children}
    </Comp>
  );
}

export default TextButton;
