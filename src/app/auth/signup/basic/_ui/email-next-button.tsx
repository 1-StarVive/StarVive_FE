import { Button } from "@/components/buttons/button";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

export type EmailNextButtonProps = {
  onClick: (triggerPassed: boolean) => void;
};
function EmailNextButton({ onClick }: EmailNextButtonProps) {
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

export default EmailNextButton;

function useTrigger() {
  const form = useFormContext<SignupSchema>();

  return async () => {
    return await form.trigger(["localPart", "domain"]);
  };
}

function useIsFormFilled() {
  const form = useFormContext<SignupSchema>();

  const datas = useWatch({
    control: form.control,
    name: ["localPart", "domain"],
  });
  const IsFormFilled = datas.every((data) => data?.length > 0);

  return IsFormFilled;
}
