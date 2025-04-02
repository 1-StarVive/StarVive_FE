"use client";

import { TokenDto, useAuthStore } from "@/store/auth.store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    // 구글이 state와 code를 param으로 준다.
    const state = searchParams.get("state");
    const code = searchParams.get("code");
    // sessionStorage에 저장된 값과 비교
    const savedState = window.sessionStorage.getItem("oauth_state");
    if (state !== savedState) {
      console.error("state 값이 일치하지 않습니다.");
      router.replace("/auth/signin");
      return;
    }

    if (code) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          alert("로그인에 실패했습니다.");
          router.replace("/auth/signin");
        })
        .then((token: TokenDto) => {
          setToken(token);
          router.replace("/");
        });
    }
  }, [searchParams]);

  return <div>로그인중...</div>;
}

export default Callback;
