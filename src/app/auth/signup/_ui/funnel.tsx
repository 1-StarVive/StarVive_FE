"use client";

import { signUpRequest, SignUpRequest, TermSchema } from "@/schemas/api/user";
import TermStep from "./term-step";
import { useFunnel } from "@use-funnel/browser";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Funnel() {
  const funnel = useSignupFunnel();
  const form = useForm<SignUpRequest>({
    resolver: zodResolver(signUpRequest),
  });

  const values = form.getValues();
  return (
    <FormProvider {...form}>
      <form>
        <funnel.Render
          term={({ history }) => <TermStep onClickNext={() => history.push("IdentityVerification", values)} />}
          IdentityVerification={({ history }) => <div>{}</div>}
        />
      </form>
    </FormProvider>
  );
}

export default Funnel;

function useSignupFunnel() {
  const funnel = useFunnel<{
    term: Partial<TermSchema>;
    IdentityVerification: TermSchema;
  }>({
    id: "sign-up-funnel",
    initial: {
      step: "term",
      context: { 개인정보_수집_및_이용_동의: false, 이용약관_동의: false, 스타벅스_카드_이용약관: false },
    },
  });

  return funnel;
}
