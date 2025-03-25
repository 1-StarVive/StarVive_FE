type HeaderIconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};
function HeaderIconButton({ icon, onClick }: HeaderIconButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-[32px] w-[32px]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default HeaderIconButton;
