"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import useHasMounted from "@/hooks/use-has-mounted";
import ImperativeUI from "../imperative-ui";
import Alert from "../alert";

function AuthGuard({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const auth = useAuthStore((s) => s.auth);
  const hasMounted = useHasMounted();

  useEffect(
    function redirectToLogin() {
      if (hasMounted && !auth) {
        ImperativeUI.show((close) => (
          <Alert
            title="안내"
            content="로그인이 필요한 화면입니다. 로그인페이지로 이동합니다."
            onClickButton={() => {
              router.replace("/auth/signin");
              close();
            }}
          />
        ));
      }
    },
    [hasMounted, auth, router],
  );

  if (!hasMounted || !auth) return null;
  else return children;
}

export default AuthGuard;
