"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";

type InputProps = React.ComponentProps<"input"> & { label?: string; required?: boolean; errorMessage?: string };

function Input({ id, label, placeholder, errorMessage, ...props }: InputProps) {
  const uniqueId = useId();
  const htmlId = `${id}-${uniqueId}`;

  return (
    <div className="mt-4 flex flex-col gap-1">
      <div className="group/input-wrap relative">
        <input
          id={htmlId}
          className={cn(
            "peer/input selection:bg-primary h-8 w-full border-b border-gray-400 outline-none selection:text-white",
            {
              "border-red-500": !!errorMessage,
            },
          )}
          placeholder={placeholder || " "}
          {...props}
        />
        <label
          htmlFor={htmlId}
          className={cn(
            "pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-sm text-[#363936] transition-all group-focus-within/input-wrap:-top-1 group-focus-within/input-wrap:text-xs peer-[&:not(:placeholder-shown)]/input:-top-1 peer-[&:not(:placeholder-shown)]/input:text-xs",
          )}
        >
          {label}
        </label>
      </div>
      {errorMessage && <span className="text-xs leading-none text-red-500">{errorMessage}</span>}
    </div>
  );
}

export default Input;
