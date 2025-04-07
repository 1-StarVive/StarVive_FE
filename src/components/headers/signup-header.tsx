"use client";

import { useRouter } from "next/navigation";
import CommonHeader from "./ui/common-header";
import HeaderIconButton from "./ui/header-icon-button";

function SignupHeader() {
  return <CommonHeader left={<CloseButton />} sticky={false} />;
}

export default SignupHeader;

function CloseButton() {
  const router = useRouter();
  return <HeaderIconButton icon="close" onClick={() => router.back()} />;
}
