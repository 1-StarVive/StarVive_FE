"use client";

import SignupHeader from "@/components/headers/signup-header";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

const Funnel = dynamic(() => import("./_ui/funnel"), {
  ssr: false,
});

function Signup() {
  return (
    <>
      <SignupHeader />
      <Wrap>
        <Image src={logo} alt="logo" width={64} height={64} />
        <h2 className="text-2xl font-bold">
          고객님
          <br />
          환영합니다!
        </h2>
        <Funnel />
      </Wrap>
    </>
  );
}

export default Signup;

function Wrap({ children }: React.PropsWithChildren) {
  return <div className="mt-8 flex flex-col gap-6 p-6">{children}</div>;
}
