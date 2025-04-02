import { cn } from "@/lib/utils";
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

type TextButtonProps = VariantProps<typeof buttonVariants> & {
  children?: React.ReactNode;
  onClick?: () => void;
};

function TextButton({ color, children, onClick }: TextButtonProps) {
  return (
    <button type="button" className={cn(buttonVariants({ color }))} onClick={onClick}>
      {children}
    </button>
  );
}

export default TextButton;
