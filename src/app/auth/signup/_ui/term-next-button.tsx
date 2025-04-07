import { Button } from "@/components/buttons/button";
import { SignUpRequest } from "@/schemas/api/user";
import { useFormContext, useWatch } from "react-hook-form";

type TermNextButtonProps = {
  onClick: () => void;
};
function TermNextButton({ onClick }: TermNextButtonProps) {
  const allRequiredAgreed = useAllRequiredAgreed();

  return (
    <Button disabled={!allRequiredAgreed} onClick={onClick}>
      다음
    </Button>
  );
}

export default TermNextButton;

function useAllRequiredAgreed() {
  const form = useFormContext<SignUpRequest>();

  const requiredAgreeds = useWatch({
    control: form.control,
    name: ["이용약관_동의", "개인정보_수집_및_이용_동의", "스타벅스_카드_이용약관"],
  });
  const AllRequiredAgreed = requiredAgreeds.every((agree) => agree === true);

  return AllRequiredAgreed;
}
