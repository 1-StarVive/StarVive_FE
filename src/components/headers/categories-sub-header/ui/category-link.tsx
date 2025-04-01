import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva("flex items-center relative justify-center w-full h-full whitespace-nowrap", {
  variants: {
    selected: {
      none: "",
      active:
        "font-bold before:content-[''] before:absolute before:w-full before:h-[3px] before:bottom-0 before:bg-primary",
    },
  },
  defaultVariants: {
    selected: "none",
  },
});

type CatalogLinkProps = React.PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    href: string;
    className?: string;
  };

function CategoryLink({ children, className, selected, href }: CatalogLinkProps) {
  return (
    <li>
      <Link className={cn(buttonVariants({ selected, className }))} href={href}>
        {children}
      </Link>
    </li>
  );
}

export default CategoryLink;
