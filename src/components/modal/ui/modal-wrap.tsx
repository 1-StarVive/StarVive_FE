import { motion } from "framer-motion";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const modalWrapVariants = cva("bg-white", {
  variants: {
    size: {
      default: "w-fit h-fit",
      full: "h-full w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type ModalWrapProps = React.PropsWithChildren<
  VariantProps<typeof modalWrapVariants> & {
    className?: string;
  }
>;

function ModalWrap({ children, className, size }: ModalWrapProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={cn(modalWrapVariants({ size, className }))}>
        {children}
      </div>
    </motion.div>
  );
}

export default ModalWrap;
