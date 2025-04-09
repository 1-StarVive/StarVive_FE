import DetailCheckbox from "@/components/checkboxes/detail-checkbox";
import { useFormContext, useWatch } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";

function TermAllAgreedCheckbox() {
  const form = useFormContext<SignupSchema>();

  const [termsAgreed, privacyAgreed, cardTermsAgreed, marketingSmsAgreed, marketingEmailAgreed] = useWatch({
    control: form.control,
    name: ["termsAgreed", "privacyAgreed", "cardTermsAgreed", "marketingSmsAgreed", "marketingEmailAgreed"],
  });
  const agreeAll = Boolean(
    termsAgreed && privacyAgreed && cardTermsAgreed && (marketingSmsAgreed || marketingEmailAgreed),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    form.setValue("termsAgreed", checked);
    form.setValue("privacyAgreed", checked);
    form.setValue("cardTermsAgreed", checked);
    form.setValue("marketingSmsAgreed", checked);
    form.setValue("marketingEmailAgreed", checked);
  };

  return <DetailCheckbox label={"약관 전체동의"} checked={agreeAll} onChange={handleChange} />;
}

export default TermAllAgreedCheckbox;
