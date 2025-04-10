"use client";

import Checkbox, { CheckboxProps } from "./checkbox";

type LabeledCheckboxProps = {
  label?: React.ReactNode;
} & CheckboxProps;

function LabeledCheckbox({ label, ...props }: LabeledCheckboxProps) {
  return (
    <Checkbox {...props}>
      <span className="text-sm">{label}</span>
    </Checkbox>
  );
}

export default LabeledCheckbox;
