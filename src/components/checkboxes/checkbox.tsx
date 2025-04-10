"use client";

import * as React from "react";
import CheckIcon from "../icons/check-icon";
import { cn } from "@/lib/utils";

export type CheckboxProps = React.ComponentProps<"input"> & {
  children?: React.ReactNode;
};
function Checkbox({ className, children, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <input className="peer/input hidden" type="checkbox" {...props} />
      <div
        className={cn(
          "peer-checked/input:bg-primary border-primary text-primary flex size-5 items-center justify-center rounded border",
          className,
        )}
      >
        <CheckIcon className="size-4.5 text-white" />
      </div>
      {children}
    </label>
  );
}

export default Checkbox;
