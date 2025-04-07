import { CheckboxProps } from "@/components/checkboxes/checkbox";
import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { cn } from "@/lib/utils";

type DetailCheckboxProps = {
  className?: string;
  id?: string;
  onClickDetail?: () => void;
  children?: React.ReactNode;
} & CheckboxProps;
function DetailCheckbox({ id, children, onClickDetail, ...props }: DetailCheckboxProps) {
  return (
    <div className={cn("flex items-center justify-between")}>
      <LabeledCheckbox id={id} {...props}>
        {children}
      </LabeledCheckbox>
      {onClickDetail && (
        <button onClick={onClickDetail}>
          <ChevronLeftIcon className="h-[12px] w-[7px]" />
        </button>
      )}
    </div>
  );
}

export default DetailCheckbox;
