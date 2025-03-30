import { useEffect } from "react";

function useBlockBodyScroll() {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);
}

export default useBlockBodyScroll;
