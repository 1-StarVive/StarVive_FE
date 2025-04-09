"use client";

import { useRouter } from "next/navigation";
import CommonHeader from "../ui/common-header";
import HeaderIconButton from "../ui/header-icon-button";
import StepIndicator from "./step-indicator";

type SignupHeaderProps = {
  step?: 1 | 2 | 3 | 4;
};
function SignupHeader({ step }: SignupHeaderProps) {
  return (
    <CommonHeader
      left={<CloseButton />}
      center={step !== undefined ? <StepIndicator steps={[1, 2, 3, 4]} currentStep={step} /> : undefined}
      sticky={false}
    />
  );
}

export default SignupHeader;

function CloseButton() {
  const router = useRouter();
  return <HeaderIconButton icon="close" onClick={() => router.push("/")} />;
}
