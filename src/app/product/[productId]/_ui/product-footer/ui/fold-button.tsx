type FoldButtonProps = {
  onClick?: () => void;
};

function FoldButton({ onClick }: FoldButtonProps) {
  return (
    <button
      className="flex w-full items-center justify-center p-3"
      onClick={onClick}
    >
      <div className="h-[4px] w-[70px] rounded-full bg-[#7f7f7f]"></div>
    </button>
  );
}

export default FoldButton;
