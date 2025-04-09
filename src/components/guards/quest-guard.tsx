"use client";

import useHasMounted from "@/hooks/use-has-mounted";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function GuestGuard({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const token = useAuthStore((s) => s.auth);
  const hasMounted = useHasMounted();

  useEffect(
    function redirectToLogin() {
      if (hasMounted && token) {
        router.replace("/");
      }
    },
    [hasMounted, token, router],
  );

  if (!hasMounted || token) return null;
  else return children;
}

export default GuestGuard;
