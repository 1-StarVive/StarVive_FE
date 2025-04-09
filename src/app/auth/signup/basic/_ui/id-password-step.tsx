"use client";

import FixedFooter from "@/components/footers/fixed-footer";
import { useFormContext } from "react-hook-form";
import IdPasswordNextButton, { IdPasswordNextButtonProps } from "./id-password-next-button";
import { SignupSchema } from "../_schema/signup";
import { useState } from "react";
import InputBase from "@/components/inputs/input-base";
import ErrorMessage from "@/components/error-message";

type IdPasswordStepProps = {
  onClickNext: () => void;
};
function IdPasswordStep({ onClickNext }: IdPasswordStepProps) {
  const [hasClickedNext, setHasClickedNext] = useState(false);
  const form = useFormContext<SignupSchema>();

  const handleClickNext: IdPasswordNextButtonProps["onClick"] = (triggerPassed) => {
    setHasClickedNext(true);
    if (triggerPassed) onClickNext();
  };

  return (
    <form className="p-6">
      <Greeting />

      <InputBase>
        <input
          className="h-12 w-full outline-none"
          placeholder="아이디 (4~13자리 이내)"
          {...form.register("loginId")}
        />
      </InputBase>
      <ErrorMessage>{hasClickedNext && form.formState.errors.loginId?.message}</ErrorMessage>

      <InputBase>
        <input
          className="h-12 w-full outline-none"
          placeholder="비밀번호 (10~20자리 이내)"
          type="password"
          {...form.register("password")}
        />
      </InputBase>
      <ErrorMessage>{hasClickedNext && form.formState.errors.password?.message}</ErrorMessage>

      <InputBase>
        <input
          className="h-12 w-full outline-none"
          placeholder="비밀번호 확인"
          type="password"
          {...form.register("confirmPassword")}
        />
      </InputBase>
      <ErrorMessage>{hasClickedNext && form.formState.errors.confirmPassword?.message}</ErrorMessage>

      <FixedFooter>
        <IdPasswordNextButton onClick={handleClickNext} />
      </FixedFooter>
    </form>
  );
}

export default IdPasswordStep;

function Greeting() {
  return (
    <h1 className="pb-6 text-2xl font-bold">
      아이디와 비밀번호를
      <br />
      입력해 주세요.
    </h1>
  );
}
