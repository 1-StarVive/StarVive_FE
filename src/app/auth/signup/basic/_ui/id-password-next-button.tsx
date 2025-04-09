import { Button } from "@/components/buttons/button";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

export type IdPasswordNextButtonProps = {
  onClick: (triggerPassed: boolean) => void;
};
function IdPasswordNextButton({ onClick }: IdPasswordNextButtonProps) {
  const isFormFilled = useIsFormFilled();
  const trigger = useTrigger();

  const handleClick = async () => {
    const triggerPassed = await trigger();
    onClick(triggerPassed);
  };

  return (
    <Button type="button" disabled={!isFormFilled} onClick={handleClick}>
      다음
    </Button>
  );
}

export default IdPasswordNextButton;

function useTrigger() {
  const form = useFormContext<SignupSchema>();

  return async () => {
    return await form.trigger(["loginId", "password", "confirmPassword"]);
  };
}

function useIsFormFilled() {
  const form = useFormContext<SignupSchema>();

  const datas = useWatch({
    control: form.control,
    name: ["loginId", "password", "confirmPassword"],
  });
  const IsFormFilled = datas.every((data) => data?.length > 0);

  return IsFormFilled;
}
