"use client";

import useBlockBodyScroll from "@/hooks/use-block-body-scroll";
import useHasMounted from "@/hooks/use-has-mounted";
import { createPortal } from "react-dom";
import Dimmed from "./dimmed";
import SpinIcon from "./icons/spin-icon";

function Loading() {
  const hasMounted = useHasMounted();

  useBlockBodyScroll();

  if (!hasMounted) return null;

  return createPortal(
    <Dimmed className="z-[60]">
      <div className="size-8 animate-spin">
        <SpinIcon />
      </div>
    </Dimmed>,
    document.body,
  );
}

export default Loading;
