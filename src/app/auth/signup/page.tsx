"use client";

import dynamic from "next/dynamic";

const Funnel = dynamic(() => import("./_ui/funnel"), {
  ssr: false,
});

function Signup() {
  return <Funnel />;
}

export default Signup;
