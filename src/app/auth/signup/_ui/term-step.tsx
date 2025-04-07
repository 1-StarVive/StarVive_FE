import DetailCheckbox from "@/components/checkboxes/detail-checkbox";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { SignUpRequest } from "@/schemas/api/user";
import { useFormContext } from "react-hook-form";
import AllAgreedCheckbox from "./all-agreed-checkbox";
import OptionalAgreedCheckbox from "./optional-agreed-checkbox";
import FixedFooter from "@/components/footers/fixed-footer";
import TermNextButton from "./term-next-button";

type TermStepProps = {
  onClickNext: () => void;
};
function TermStep({ onClickNext }: TermStepProps) {
  const form = useFormContext<SignUpRequest>();

  return (
    <>
      <TermWrap>
        <AllAgreedCheckbox />
        <hr />
        <DetailCheckbox {...form.register("이용약관_동의")}>[필수] 이용약관 동의</DetailCheckbox>
        <DetailCheckbox {...form.register("개인정보_수집_및_이용_동의")}>
          [필수] 개인정보 수집 및 이용 동의
        </DetailCheckbox>
        <DetailCheckbox {...form.register("스타벅스_카드_이용약관")}>[필수] 스타벅스 카드 이용약관</DetailCheckbox>

        <OptionalAgreedCheckbox />
        <SubTermWrap>
          <SubTermTitle>광고성 정보 수신 팝업</SubTermTitle>
          <SubTermItemWrap>
            <LabeledCheckbox {...form.register("마케팅_정보_수신_동의_이메일")}>E-mail</LabeledCheckbox>
            <LabeledCheckbox {...form.register("마케팅_정보_수신_동의_SMS")}>SMS</LabeledCheckbox>
          </SubTermItemWrap>
        </SubTermWrap>
      </TermWrap>
      <FixedFooter>
        <TermNextButton onClick={onClickNext} />
      </FixedFooter>
    </>
  );
}

export default TermStep;

function TermWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-4">{children}</div>;
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
