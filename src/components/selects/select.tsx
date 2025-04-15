import InputUnderline from "../inputs/input-underline";
import {
  Select as ShadcnSelect,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/shadcn-select";

export type SelectProps<T> = {
  options: T[];
  getLabel: (option: T) => string;
  getValue: (option: T) => string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

function Select<T>({ options, getLabel, getValue, placeholder, value, onChange }: SelectProps<T>) {
  return (
    <ShadcnSelect value={value} onValueChange={onChange}>
      <InputUnderline>
        <SelectTrigger className="w-full border-none p-0 shadow-none">
          {placeholder && <SelectValue placeholder={placeholder} />}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={getValue(option)} value={getValue(option)}>
                {getLabel(option)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </InputUnderline>
    </ShadcnSelect>
  );
}

export default Select;
