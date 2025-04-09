import { Button } from "@/components/buttons/button";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

function NicknameNextButton() {
  const isFormFilled = useIsFormFilled();

  return (
    <Button type="submit" disabled={!isFormFilled}>
      다음
    </Button>
  );
}

export default NicknameNextButton;

function useIsFormFilled() {
  const form = useFormContext<SignupSchema>();

  const [nicknameTermAgreed, nickname] = useWatch({
    control: form.control,
    name: ["nicknameTermAgreed", "nickname"],
  });
  const IsFormFilled = nicknameTermAgreed && nickname?.length > 0;

  return IsFormFilled;
}
