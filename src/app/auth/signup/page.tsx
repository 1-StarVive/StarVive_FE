"use client";

import SignupHeader from "@/components/headers/signup-header";
import { startGoogleOAuth } from "@/lib/social-login";
import Link from "next/link";
import googleLogo from "@/../public/images/google-logo.png";
import kakaoLogo from "@/../public/images/kakao-logo.webp";
import Image from "next/image";

function Signup() {
  return (
    <>
      <SignupHeader />
      <div className="flex flex-col gap-4 p-6">
        <button
          className="flex items-center justify-center gap-3 rounded border border-black p-2"
          onClick={startGoogleOAuth}
        >
          <Image src={googleLogo} width={20} height={20} alt="google logo" />
          구글로 계속하기
        </button>
        <button className="flex items-center justify-center gap-3 rounded border border-[#fddc3f] bg-[#fddc3f] p-2">
          <Image src={kakaoLogo} width={25} height={25} alt="kakao logo" />
          카카오로 계속하기
        </button>
        <Link
          className="bg-primary border-primary flex items-center justify-center gap-3 rounded border p-2 text-white"
          href={"/auth/signup/basic"}
        >
          휴대폰 번호로 가입하기
        </Link>
      </div>
    </>
  );
}

export default Signup;
