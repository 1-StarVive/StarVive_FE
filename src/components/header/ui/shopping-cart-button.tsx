import HeaderIconButton from "./header-icon-button";
import ShoppingCartIcon from "@/components/icons/shopping-cart-icon";

function ShoppingCartButton() {
  return (
    <HeaderIconButton
      icon={<ShoppingCartIcon className="h-[24px] w-[24px]" />}
    />
  );
}

export default ShoppingCartButton;
