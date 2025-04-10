import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import FixedFooter from "@/components/footers/fixed-footer";
import { SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import NicknameNextButton from "./nickname-next-button";
import { useMutation } from "@tanstack/react-query";
import signup from "@/lib/api/users_signup";
import ImperativeUI from "@/components/imperative-ui";
import Alert from "@/components/alert";
import { SignupSchema } from "../_schema/signup";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ValiError } from "valibot";
import InputBase from "@/components/inputs/input-base";
import ErrorMessage from "@/components/error-message";

function NicknameStep() {
  const router = useRouter();
  const [hasClickedNext, setHasClickedNext] = useState(false);
  const signUpForm = useFormContext<SignupSchema>();
  const signupMutation = useMutation({
    mutationFn: signup,
  });

  const handleSubmit: SubmitHandler<SignupSchema> = async (input) => {
    try {
      ImperativeUI.loading(true);

      const { localPart, domain, gender, birth, carrier: _, confirmPassword: __, phoneTerm: ___, ...rest } = input;

      const full = (gender === 1 || gender === 2 ? "19" : "20") + birth;
      const formatted = `${full.slice(0, 4)}-${full.slice(4, 6)}-${full.slice(6, 8)}`;

      await signupMutation.mutateAsync({
        birth: formatted,
        email: `${localPart}@${domain}`,
        gender: gender % 2 === 0 ? "FEMALE" : "MALE",
        ...rest,
      });

      ImperativeUI.show((close) => (
        <Alert
          content={"회원가입이 완료되었습니다. 로그인 후 이용해주세요."}
          onClickButton={() => {
            close();
            router.replace("/");
          }}
        />
      ));
    } catch (e) {
      console.error(e);
      if (axios.isAxiosError(e)) {
        ImperativeUI.show((close) => <Alert title="회원가입 실패" content={e.message} onClickButton={close} />);
      } else if (e instanceof ValiError) {
        ImperativeUI.show((close) => <Alert title="회원가입 실패" content={e.message} onClickButton={close} />);
      } else {
        ImperativeUI.show((close) => (
          <Alert title="회원가입 실패" content="알수없는 오류가 발생했습니다." onClickButton={close} />
        ));
      }
    } finally {
      ImperativeUI.loading(false);
    }
  };

  const handleSubmitError: SubmitErrorHandler<SignupSchema> = () => {
    setHasClickedNext(true);
  };

  return (
    <form className="p-6" onSubmit={signUpForm.handleSubmit(handleSubmit, handleSubmitError)}>
      <Greeting />

      <LabeledCheckbox label={"선택적 개인정보 수집동의 및 이용약관"} {...signUpForm.register("nicknameTermAgreed")} />

      <InputBase>
        <input
          className="h-12 w-full outline-none"
          placeholder="닉네임 (한글 6자리 이내)"
          {...signUpForm.register("nickname")}
        />
      </InputBase>
      <ErrorMessage>{hasClickedNext && signUpForm.formState.errors.nickname?.message}</ErrorMessage>

      <FixedFooter>
        <NicknameNextButton />
      </FixedFooter>
    </form>
  );
}

export default NicknameStep;

function Greeting() {
  return (
    <h1 className="pb-6 text-2xl font-bold">
      닉네임을
      <br />
      입력해 주세요.
    </h1>
  );
}
