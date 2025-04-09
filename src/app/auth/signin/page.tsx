"use client";

import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import BackButton from "@/components/headers/ui/back-button";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import Input from "@/components/inputs/input";
import { Button } from "@/components/buttons/button";
import TextButton from "@/components/buttons/text-button";
import { onClickFind } from "./_utils/handle-click-find";
import useSubmitSignin from "./_hooks/use-submit-signin";
import { signinRequest } from "@/lib/api/users_signin";
import Link from "next/link";
import GuestGuard from "@/components/guards/quest-guard";

function Signin() {
  const loginForm = useForm({
    resolver: valibotResolver(signinRequest),
  });

  const submitSignin = useSubmitSignin();

  return (
    <GuestGuard>
      <HeaderWrap>
        <BackButton />
      </HeaderWrap>
      <MainWrap>
        <Image src={logo} alt="logo" width={64} height={64} />
        <h2 className="mt-6 text-2xl font-bold">
          안녕하세요.
          <br />
          스타벅스입니다.
        </h2>
        <span className="text-sm">회원 서비스 이용을 위해 로그인 해주세요.</span>

        <form className="mt-10 flex flex-col gap-10" onSubmit={loginForm.handleSubmit(submitSignin)}>
          <Input
            label="아이디"
            {...loginForm.register("loginId")}
            errorMessage={loginForm.formState.errors.loginId?.message}
          />
          <Input
            label="비밀번호"
            type="password"
            {...loginForm.register("password")}
            errorMessage={loginForm.formState.errors.password?.message}
          />

          <TextButtonWrap>
            <TextButton onClick={onClickFind}>아이디 찾기</TextButton>
            <TextButton onClick={onClickFind}>비밀번호 찾기</TextButton>
            <TextButton>
              <Link href="/auth/signup">회원가입</Link>
            </TextButton>
          </TextButtonWrap>

          <Button type="submit" size="xl">
            로그인하기
          </Button>
        </form>
      </MainWrap>
    </GuestGuard>
  );
}

export default Signin;

function HeaderWrap({ children }: React.PropsWithChildren) {
  return <div className="sticky top-0 z-10 grid bg-white px-[16px] py-[8px]">{children}</div>;
}

function MainWrap({ children }: React.PropsWithChildren) {
  return <div className="px-6 py-24">{children}</div>;
}

function TextButtonWrap({ children }: React.PropsWithChildren) {
  return <div className="flex w-full justify-center gap-4">{children}</div>;
}
