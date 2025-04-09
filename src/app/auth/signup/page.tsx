import SignupHeader from "@/components/headers/signup-header";
import Link from "next/link";

function Signup() {
  return (
    <>
      <SignupHeader />
      <div className="flex flex-col items-center gap-6 p-6">
        <button>(구글로고) 구글로 계속하기</button>
        <button>(카카오로고) 카카오로 계속하기</button>
        <Link href={"/auth/signup/basic"}>휴대폰 번호로 가입하기</Link>
      </div>
    </>
  );
}

export default Signup;
