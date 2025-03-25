import ReactDOM from "react-dom";
import Dimmed from "./ui/dimmed";
import useHasMounted from "@/hooks/use-has-mounted";

export type DialogProps = {
  children: React.ReactNode;
  className?: string;
  onClickDimmed?: () => void;
};

function Dialog({ children, onClickDimmed }: DialogProps) {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return ReactDOM.createPortal(
    <Dimmed onClick={onClickDimmed}>{children}</Dimmed>,
    document.body
  );
}

export default Dialog;
