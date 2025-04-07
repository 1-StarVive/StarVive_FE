import DetailCheckbox from "@/components/checkboxes/detail-checkbox";
import { SignUpRequest } from "@/schemas/api/user";
import { useFormContext, useWatch } from "react-hook-form";

function OptionalAgreedCheckbox() {
  const form = useFormContext<SignUpRequest>();

  const agrees = useWatch({
    control: form.control,
    name: ["마케팅_정보_수신_동의_SMS", "마케팅_정보_수신_동의_이메일"],
  });
  const agreeAll = agrees.some((agree) => agree === true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    form.setValue("마케팅_정보_수신_동의_SMS", checked);
    form.setValue("마케팅_정보_수신_동의_이메일", checked);
  };

  return (
    <DetailCheckbox checked={agreeAll} onChange={handleChange}>
      [선택] 마케팅 활용 수집·이용 동의
    </DetailCheckbox>
  );
}

export default OptionalAgreedCheckbox;
