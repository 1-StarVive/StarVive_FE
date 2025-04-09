import { Button } from "@/components/buttons/button";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

type TermNextButtonProps = {
  onClick: () => void;
};
function TermNextButton({ onClick }: TermNextButtonProps) {
  const allRequiredAgreed = useAllRequiredAgreed();

  return (
    <Button type="button" disabled={!allRequiredAgreed} onClick={onClick}>
      다음
    </Button>
  );
}

export default TermNextButton;

function useAllRequiredAgreed() {
  const form = useFormContext<SignupSchema>();

  const requiredAgreeds = useWatch({
    control: form.control,
    name: ["termsAgreed", "privacyAgreed", "cardTermsAgreed"],
  });
  const AllRequiredAgreed = requiredAgreeds.every((agree) => agree === true);

  return AllRequiredAgreed;
}
