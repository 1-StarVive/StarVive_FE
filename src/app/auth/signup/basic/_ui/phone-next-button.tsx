import { Button } from "@/components/buttons/button";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

export type PhoneNextButtonProps = {
  onClick: (triggerPassed: boolean) => void;
};
function PhoneNextButton({ onClick }: PhoneNextButtonProps) {
  const isFormFilled = useIsFormFilled();
  const trigger = useTrigger();

  const handleClick = async () => {
    const tiriggerPassed = await trigger();
    onClick(tiriggerPassed);
  };

  return (
    <Button type="button" disabled={!isFormFilled} onClick={handleClick}>
      다음
    </Button>
  );
}

export default PhoneNextButton;

function useTrigger() {
  const form = useFormContext<SignupSchema>();
  return () => form.trigger(["phoneTerm", "name", "birth", "gender", "carrier", "phoneNumber"]);
}

function useIsFormFilled() {
  const form = useFormContext<SignupSchema>();

  const [phoneTerm, gender, ...datas] = useWatch({
    control: form.control,
    name: ["phoneTerm", "gender", "name", "birth", "carrier", "phoneNumber"],
  });
  const IsFormFilled = phoneTerm && Boolean(gender) && datas.every((data) => data?.length > 0);

  return IsFormFilled;
}
