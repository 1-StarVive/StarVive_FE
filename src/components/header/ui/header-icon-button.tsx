type HeaderIconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
function HeaderIconButton({ children, onClick }: HeaderIconButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-[32px] w-[32px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default HeaderIconButton;
