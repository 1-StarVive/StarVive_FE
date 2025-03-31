import ShoppingCartIcon from "@/components/icons/shopping-cart-icon";

type ShoppingCartButtonProps = {
  onClick?: () => void;
};

function ShoppingCartButton({ onClick }: ShoppingCartButtonProps) {
  return (
    <button onClick={onClick}>
      <ShoppingCartIcon className="h-[25px] w-[25px]" />
    </button>
  );
}

export default ShoppingCartButton;
