import DetailCheckbox from "@/components/checkboxes/detail-checkbox";
import { SignUpRequest } from "@/schemas/api/user";
import { useFormContext, useWatch } from "react-hook-form";

function AllAgreedCheckbox() {
  const form = useFormContext<SignUpRequest>();

  const [
    이용약관_동의,
    개인정보_수집_및_이용_동의,
    스타벅스_카드_이용약관,
    마케팅_정보_수신_동의_SMS,
    마케팅_정보_수신_동의_이메일,
  ] = useWatch({
    control: form.control,
    name: [
      "이용약관_동의",
      "개인정보_수집_및_이용_동의",
      "스타벅스_카드_이용약관",
      "마케팅_정보_수신_동의_SMS",
      "마케팅_정보_수신_동의_이메일",
    ],
  });
  const agreeAll = Boolean(
    이용약관_동의 &&
      개인정보_수집_및_이용_동의 &&
      스타벅스_카드_이용약관 &&
      (마케팅_정보_수신_동의_SMS || 마케팅_정보_수신_동의_이메일),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    form.setValue("이용약관_동의", checked);
    form.setValue("개인정보_수집_및_이용_동의", checked);
    form.setValue("스타벅스_카드_이용약관", checked);
    form.setValue("마케팅_정보_수신_동의_SMS", checked);
    form.setValue("마케팅_정보_수신_동의_이메일", checked);
  };

  return (
    <DetailCheckbox checked={agreeAll} onChange={handleChange}>
      약관 전체동의
    </DetailCheckbox>
  );
}

export default AllAgreedCheckbox;
