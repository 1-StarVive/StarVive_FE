type CategoriesDialogIconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
function CategoriesDialogIconButton({
  children,
  onClick,
}: CategoriesDialogIconButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-[32px] w-[32px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CategoriesDialogIconButton;
