import Dimmed from "../../dimmed";
import useHasMounted from "@/hooks/use-has-mounted";
import useBlockBodyScroll from "@/hooks/use-block-body-scroll";
import { createPortal } from "react-dom";
import ModalWrap, { ModalWrapProps } from "./ui/modal-wrap";

type ModalProps = ModalWrapProps & {
  children: React.ReactNode;
  onClickDimmed?: () => void;
};

/**
 * @example
 * ```tsx
 * import { AnimatePresence } from "framer-motion";
 *
 * <AnimatePresence>{isOpen && <Modal>...</Modal>}</AnimatePresence>
 * ```
 */
function Modal({ children, size, className, onClickDimmed }: ModalProps) {
  const hasMounted = useHasMounted();

  useBlockBodyScroll();

  if (!hasMounted) return null;

  return createPortal(
    <Dimmed onClick={onClickDimmed}>
      <ModalWrap className={className} size={size}>
        {children}
      </ModalWrap>
    </Dimmed>,
    document.body,
  );
}

export default Modal;
