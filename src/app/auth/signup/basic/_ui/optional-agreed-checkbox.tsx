import DetailCheckbox from "@/components/checkboxes/detail-checkbox";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

function OptionalAgreedCheckbox() {
  const form = useFormContext<SignupSchema>();

  const agrees = useWatch({
    control: form.control,
    name: ["marketingSmsAgreed", "marketingEmailAgreed"],
  });
  const agreeAll = agrees.some((agree) => agree === true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    form.setValue("marketingSmsAgreed", checked);
    form.setValue("marketingEmailAgreed", checked);
  };

  return <DetailCheckbox label={"[선택] 마케팅 활용 수집·이용 동의"} checked={agreeAll} onChange={handleChange} />;
}

export default OptionalAgreedCheckbox;
