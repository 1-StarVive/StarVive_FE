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

  useEffect(
    function handleChangeFold() {
      const el = ref.current;
      if (!el) return;

      if (isFolded) {
        el.style.height = el.scrollHeight + "px";
        el.style.overflow = "hidden";
        requestAnimationFrame(() => {
          el.style.transition = "height 500ms ease";
          el.style.height = "0px";
        });
      } else {
        el.style.height = "0px";
        el.style.overflow = "hidden";
        requestAnimationFrame(() => {
          el.style.transition = "height 500ms ease";
          el.style.height = el.scrollHeight + "px";
        });

        const onEnd = () => {
          el.style.height = "auto";
          el.style.overflow = "auto";
          el.removeEventListener("transitionend", onEnd);
        };
        el.addEventListener("transitionend", onEnd);
      }
    },
    [isFolded],
  );

  return {
    isFolded,
    ref,
    toggle,
    open,
    close,
  };
}

export default useFlodable;
