"use client";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Callback() {
  const setToken = useAuthStore((s) => s.setToken);
  const router = useRouter();

  useEffect(() => {
    const cookies: Record<string, string> = document.cookie.split("; ").reduce(
      (acc, cookie) => ({
        ...acc,
        [cookie.split("=")[0]]: cookie.split("=")[1],
      }),
      {},
    );

    if (cookies.accessToken && cookies.expiresIn) {
      setToken({
        accessToken: cookies.accessToken,
        expiresIn: Number(cookies.expiresIn),
        refreshToken: cookies.refreshToken,
      });
    }

    router.replace("/");
  }, []);

  return <div>로그인중...</div>;
}

export default Callback;
