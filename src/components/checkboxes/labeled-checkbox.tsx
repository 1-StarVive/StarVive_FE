"use client";

import { useId } from "react";
import Checkbox, { CheckboxProps } from "./checkbox";

type LabeledCheckboxProps = {
  children?: React.ReactNode;
} & CheckboxProps;

function LabeledCheckbox({ children, id, ...props }: LabeledCheckboxProps) {
  const uniqueId = useId();
  const htmlId = `${id}-${uniqueId}`;

  return (
    <div className="flex items-center gap-2">
      <Checkbox id={htmlId} {...props} />
      <label htmlFor={htmlId} className={"text-sm text-nowrap"}>
        {children}
      </label>
    </div>
  );
}

export default LabeledCheckbox;
