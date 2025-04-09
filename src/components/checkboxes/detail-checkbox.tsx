import { CheckboxProps } from "@/components/checkboxes/checkbox";
import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { cn } from "@/lib/utils";

type DetailCheckboxProps = {
  className?: string;
  label?: React.ReactNode;
  onClickDetail?: () => void;
} & CheckboxProps;
function DetailCheckbox({ label, onClickDetail, ...props }: DetailCheckboxProps) {
  return (
    <div className={cn("flex items-center justify-between")}>
      <LabeledCheckbox label={label} {...props} />
      {onClickDetail && (
        <button onClick={onClickDetail}>
          <ChevronLeftIcon className="h-[12px] w-[7px]" />
        </button>
      )}
    </div>
  );
}

export default DetailCheckbox;
