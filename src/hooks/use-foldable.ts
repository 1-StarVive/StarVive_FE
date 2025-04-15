import { useCallback, useEffect, useRef, useState } from "react";

/**
 * `h-0` ↔ `h-auto`에 대한 transition을 지원하는 훅.
 *
 * @example
 * const { ref, isFolded, close, open } = useFlodable<HTMLDivElement>();
 *
 * <div ref={ref} className="h-0">...</div>
 */
function useFlodable<T extends HTMLElement>(initialFolded: boolean = true) {
  const ref = useRef<T>(null);
  const [isFolded, setIsFolded] = useState(initialFolded);

  const toggle = useCallback(() => {
    setIsFolded((prev) => !prev);
  }, []);

  const open = useCallback(() => {
    setIsFolded(false);
  }, []);

  const close = useCallback(() => {
    setIsFolded(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clearTransition = () => {
      el.style.transition = "none";
      el.removeEventListener("transitionend", onEnd);
    };

    const onEnd = () => {
      el.style.height = "auto";
      el.style.overflow = "auto";
      clearTransition();
    };

    clearTransition();

    if (isFolded) {
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
      void el.offsetHeight;

      el.style.transition = "height 500ms ease";
      el.style.height = "0px";
    } else {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      void el.offsetHeight;

      el.style.transition = "height 500ms ease";
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", onEnd);
    }

    return clearTransition;
  }, [isFolded]);

  return {
    isFolded,
    ref,
    toggle,
    open,
    close,
  };
}

export default useFlodable;
