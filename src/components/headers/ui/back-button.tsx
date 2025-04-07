"use client";

import { useRouter } from "next/navigation";
import HeaderIconButton from "./header-icon-button";

function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return <HeaderIconButton icon="back" onClick={handleClick} />;
}

export default BackButton;
