import Modal from "./modals/modal";

export type AlertProps = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  /** @default "확인" */
  buttonText?: string;
  onClickDimmed?: () => void;
  onClickButton?: () => void;
};

function Alert({ title, content = "", buttonText = "확인", onClickDimmed, onClickButton }: AlertProps) {
  return (
    <Modal className="w-full max-w-[300px]" onClickDimmed={onClickDimmed}>
      <div className="grid rounded-lg bg-white shadow-lg">
        <div className="flex flex-col gap-3 border-b border-gray-200 p-8">
          {title && <span className="font-bold">{title}</span>}
          <span className="text-sm text-gray-500">{content}</span>
        </div>
        <button className={"text-primary w-full p-4 text-sm font-bold"} onClick={onClickButton}>
          {buttonText}
        </button>
      </div>
    </Modal>
  );
}

export default Alert;
