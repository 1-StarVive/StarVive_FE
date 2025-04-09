"use client";

import { TermSchema } from "@/app/auth/signup/basic/_schema/term";
import TermStep from "./term-step";
import { useFunnel } from "@use-funnel/browser";
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import PhoneStep from "./phone-step";
import IdPasswordStep from "./id-password-step";
import EmailStep from "./email-step";
import NicknameStep from "./nickname-step";
import { signupSchema, SignupSchema } from "../_schema/signup";
import { IdPasswordSchema } from "../_schema/id-password";
import { EmailSchema } from "../_schema/email";
import { NicknameSchema } from "../_schema/nickname";
import SignupHeader from "@/components/headers/signup-header";

function Funnel() {
  const funnel = useSignupFunnel();
  const form = useForm<SignupSchema>({
    mode: "onChange",
    resolver: valibotResolver(signupSchema),
  });

  const values = form.getValues();

  return (
    <>
      <SignupHeader step={stepOrder[funnel.step]} />
      <FormProvider {...form}>
        <funnel.Render
          term={({ history }) => <TermStep onClickNext={() => history.push("phone", values)} />}
          phone={({ history }) => <PhoneStep onClickNext={() => history.push("idPassword", values)} />}
          idPassword={({ history }) => <IdPasswordStep onClickNext={() => history.push("email", values)} />}
          email={({ history }) => <EmailStep onClickNext={() => history.push("nickname", values)} />}
          nickname={() => <NicknameStep />}
        />
      </FormProvider>
    </>
  );
}

export default Funnel;

function useSignupFunnel() {
  const funnel = useFunnel<{
    term: Partial<TermSchema> & Partial<IdPasswordSchema> & Partial<EmailSchema> & Partial<NicknameSchema>;
    phone: TermSchema & Partial<IdPasswordSchema> & Partial<EmailSchema> & Partial<NicknameSchema>;
    idPassword: TermSchema & IdPasswordSchema & Partial<EmailSchema> & Partial<NicknameSchema>;
    email: TermSchema & IdPasswordSchema & EmailSchema & Partial<NicknameSchema>;
    nickname: TermSchema & IdPasswordSchema & EmailSchema & NicknameSchema;
  }>({
    id: "sign-up-funnel",
    initial: {
      step: "term",
      context: { privacyAgreed: false, termsAgreed: false, cardTermsAgreed: false },
    },
  });

  return funnel;
}

const stepOrder = {
  term: undefined,
  phone: 1,
  idPassword: 2,
  email: 3,
  nickname: 4,
} as const;
