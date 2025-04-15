import FixedFooter from "@/components/footers/fixed-footer";
import EmailNextButton, { EmailNextButtonProps } from "./email-next-button";
import { useFormContext } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";
import { useState } from "react";
import InputUnderline from "@/components/inputs/input-underline";
import ErrorMessage from "@/components/error-message";

type EmailStepProps = {
  onClickNext: () => void;
};
function EmailStep({ onClickNext }: EmailStepProps) {
  const [hasClickedNext, setHasClickedNext] = useState(false);
  const form = useFormContext<SignupSchema>();

  const handleClickNext: EmailNextButtonProps["onClick"] = async (triggerPassed) => {
    setHasClickedNext(true);
    if (triggerPassed) onClickNext();
  };

  return (
    <div className="p-6">
      <Greeting />

      <InputUnderline>
        <div className="flex gap-2">
          <input className="h-12 min-w-0 flex-1 outline-none" {...form.register("localPart")} />
          <div className="flex items-center text-gray-500">@</div>
          <select className="h-12 min-w-0 flex-1 outline-none" {...form.register("domain")}>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="daum.net">daum.net</option>
            <option value="nate.com">nate.com</option>
            <option value="kakao.com">kakao.com</option>
          </select>
        </div>
      </InputUnderline>
      <ErrorMessage>
        {hasClickedNext && (form.formState.errors.localPart?.message || form.formState.errors.domain?.message)}
      </ErrorMessage>

      <div className="flex flex-col gap-2 pt-5">
        <span className="text-xs text-gray-500">
          스타벅스 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로 보내드려요.
        </span>
        <span className="text-xs text-gray-500">
          주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에 관계없이 발송됩니다.
        </span>
      </div>
      <FixedFooter>
        <EmailNextButton onClick={handleClickNext} />
      </FixedFooter>
    </div>
  );
}

export default EmailStep;

function Greeting() {
  return (
    <h1 className="pb-6 text-2xl font-bold">
      이메일을
      <br />
      입력해 주세요.
    </h1>
  );
}
