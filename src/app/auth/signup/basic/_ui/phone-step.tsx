"use client";

import FixedFooter from "@/components/footers/fixed-footer";
import PhoneNextButton, { PhoneNextButtonProps } from "./phone-next-button";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { useFormContext } from "react-hook-form";
import { SignupSchema } from "../_schema/signup";
import { useEffect, useState } from "react";
import useFlodable from "@/hooks/use-foldable";
import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import InputUnderline from "@/components/inputs/input-underline";
import ErrorMessage from "@/components/error-message";

type PhoneStepProps = {
  onClickNext: () => void;
};
function PhoneStep({ onClickNext }: PhoneStepProps) {
  const [hasClickedNext, setHasClickedNext] = useState(false);
  const form = useFormContext<SignupSchema>();
  const phoneTerm = form.watch("phoneTerm");
  const { ref, close, open } = useFlodable<HTMLDivElement>(phoneTerm);

  const handleClickNext: PhoneNextButtonProps["onClick"] = (triggerPassed) => {
    setHasClickedNext(true);
    if (triggerPassed) onClickNext();
  };

  useEffect(
    function handleAccordionToggle() {
      if (phoneTerm) close();
      else open();
    },
    [phoneTerm, close, open],
  );

  return (
    <>
      <form>
        <TermWrap>
          <Greeting />
          <LabeledCheckbox label={"[필수] 본인 인증 서비스 약관 전체 동의"} {...form.register("phoneTerm")} />
          <div ref={ref}>
            <div className="pb-2">
              <TermDetailButton>휴대폰 본인 인증 서비스 이용약관 동의</TermDetailButton>
              <TermDetailButton>휴대폰 통신사 이용약관 동의</TermDetailButton>
              <TermDetailButton>대인정보 제공 및 이용 동의</TermDetailButton>
              <TermDetailButton>고유식별정보 처리</TermDetailButton>
            </div>
          </div>
        </TermWrap>
        <Hr />
        <InputsWrap>
          <InputUnderline>
            <input className="h-12 w-full outline-none" placeholder="이름" {...form.register("name")} />
          </InputUnderline>
          <ErrorMessage>{hasClickedNext && form.formState.errors.name?.message}</ErrorMessage>

          <InputUnderline>
            <div className="flex">
              <input
                className="h-12 min-w-0 flex-1 outline-none"
                placeholder="생년월일 6자리"
                {...form.register("birth")}
              />
              <Hyphen />
              <div className="flex min-w-0 flex-1 items-center justify-end">
                <input
                  className="spinner-none flex h-12 w-full items-center text-right outline-none"
                  type="password"
                  placeholder="•"
                  maxLength={1}
                  {...form.register("gender", { valueAsNumber: true })}
                />
                <input className="flex h-12 w-10 items-center" value="••••••" disabled />
              </div>
            </div>
          </InputUnderline>
          <ErrorMessage>
            {hasClickedNext && (form.formState.errors.birth?.message || form.formState.errors.gender?.message)}
          </ErrorMessage>

          <InputUnderline>
            <div className="flex gap-2">
              <select className="outline-none" {...form.register("carrier")}>
                <option value="KT">KT</option>
                <option value="SKT">SKT</option>
                <option value="LG U+">LG U+</option>
                <option value="KT 알뜰폰">KT 알뜰폰</option>
                <option value="SKT 알뜰폰">SKT 알뜰폰</option>
                <option value="LG U+ 알뜰폰">LG U+ 알뜰폰</option>
              </select>
              <input className="h-12 outline-none" placeholder="휴대폰 번호" {...form.register("phoneNumber")} />
            </div>
          </InputUnderline>
          <ErrorMessage>{hasClickedNext && form.formState.errors.phoneNumber?.message}</ErrorMessage>
        </InputsWrap>
        <div className="p-6 text-xs text-gray-400">
          타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적 제재를 받으실 수 있습니다.
        </div>
      </form>

      <FixedFooter>
        <PhoneNextButton onClick={handleClickNext} />
      </FixedFooter>
    </>
  );
}

export default PhoneStep;

function TermWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-6 px-6 pt-6">{children}</div>;
}

function InputsWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-2 px-6">{children}</div>;
}

function Greeting() {
  return (
    <h1 className="text-2xl font-bold">
      본인확인을 위해
      <br />
      인증을 진행해 주세요
    </h1>
  );
}

function TermDetailButton({ children }: React.PropsWithChildren) {
  return (
    <button className="flex w-full items-center justify-between p-2" type="button">
      <span className="text-xs text-gray-500">{children}</span>
      <ChevronLeftIcon className="h-[12px] w-[7px]" />
    </button>
  );
}

function Hr() {
  return <div className="border-b border-gray-300" />;
}

function Hyphen() {
  return <div className="flex items-center text-2xl text-gray-300">-</div>;
}
