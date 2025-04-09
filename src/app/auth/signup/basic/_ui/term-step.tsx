import DetailCheckbox from "@/components/checkboxes/detail-checkbox";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { useFormContext } from "react-hook-form";
import TermAllAgreedCheckbox from "./term-all-agreed-checkbox";
import OptionalAgreedCheckbox from "./optional-agreed-checkbox";
import FixedFooter from "@/components/footers/fixed-footer";
import TermNextButton from "./term-next-button";
import { SignupSchema } from "../_schema/signup";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

type TermStepProps = {
  onClickNext: () => void;
};
function TermStep({ onClickNext }: TermStepProps) {
  const form = useFormContext<SignupSchema>();

  return (
    <form>
      <TermWrap>
        <Image src={logo} alt="logo" width={64} height={64} />
        <h2 className="text-2xl font-bold">
          고객님
          <br />
          환영합니다!
        </h2>
        <TermAllAgreedCheckbox />
        <hr />
        <DetailCheckbox label={"[필수] 이용약관 동의"} {...form.register("termsAgreed")} />
        <DetailCheckbox label={"[필수] 개인정보 수집 및 이용 동의"} {...form.register("privacyAgreed")} />
        <DetailCheckbox label={"[필수] 스타벅스 카드 이용약관"} {...form.register("cardTermsAgreed")} />
        <OptionalAgreedCheckbox />
        <SubTermWrap>
          <SubTermTitle>광고성 정보 수신 팝업</SubTermTitle>
          <SubTermItemWrap>
            <LabeledCheckbox label={"E-mail"} {...form.register("marketingEmailAgreed")} />
            <LabeledCheckbox label={"SMS"} {...form.register("marketingSmsAgreed")} />
          </SubTermItemWrap>
        </SubTermWrap>
      </TermWrap>
      <FixedFooter>
        <TermNextButton onClick={onClickNext} />
      </FixedFooter>
    </form>
  );
}

export default TermStep;

function TermWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-6 p-6">{children}</div>;
}

function SubTermWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-2 pl-7">{children}</div>;
}

function SubTermTitle({ children }: React.PropsWithChildren) {
  return <span className="text-xs text-gray-600">{children}</span>;
}

function SubTermItemWrap({ children }: React.PropsWithChildren) {
  return <div className="flex gap-10">{children}</div>;
}
