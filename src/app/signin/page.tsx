"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import BackButton from "@/components/headers/ui/back-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./_lib/schema";
import Input from "@/components/inputs/input";
import { Button } from "@/components/buttons/button";
import TextButton from "@/components/buttons/text-button";
import Modal from "@/components/imperative/modal";
import { useEffect } from "react";

function Signin() {
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onClickId = () => {
    Modal.alert(() => ({
      title: "안내",
      content: "아이디를 입력해 주세요.",
      buttonText: "확인",
    }));
  };

  const handleSubmit = loginForm.handleSubmit((data) => {
    // fetch("http://52.78.250.41:8082/api/users/signin", {
    fetch("http://localhost:8080/api/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
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

        <form className="mt-10 flex flex-col gap-10" onSubmit={handleSubmit}>
          <Input
            label="아이디"
            {...loginForm.register("email")}
            errorMessage={loginForm.formState.errors.email?.message}
          />
          <Input
            label="비밀번호"
            type="password"
            {...loginForm.register("password")}
            errorMessage={loginForm.formState.errors.password?.message}
          />
          <div className="flex w-full justify-center gap-4">
            <TextButton onClick={onClickId}>아이디 찾기</TextButton>
            <TextButton>비밀번호 찾기</TextButton>
            <TextButton>회원가입</TextButton>
          </div>
          <Button type="submit" size="xl">
            로그인하기
          </Button>
        </form>
      </MainWrap>
    </>
  );
}

export default Signin;

function HeaderWrap({ children }: React.PropsWithChildren) {
  return <div className="sticky top-0 z-10 grid bg-white px-[16px] py-[8px]">{children}</div>;
}

function MainWrap({ children }: React.PropsWithChildren) {
  return <div className="px-6 py-24">{children}</div>;
}
