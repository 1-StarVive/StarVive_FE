type HeaderIconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

function HeaderIconButton({ icon, onClick }: HeaderIconButtonProps) {
  return (
    <button className="flex h-[32px] w-[32px] items-center justify-center" onClick={onClick}>
      {icon}
    </button>
  );
}

export default HeaderIconButton;
