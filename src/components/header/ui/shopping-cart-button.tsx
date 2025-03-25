import HeaderIconButton from "./header-icon-button";
import ShoppingCartIcon from "@/components/icons/shopping-cart-icon";

function ShoppingCartButton() {
  return (
    <HeaderIconButton>
      <ShoppingCartIcon className="h-[24px] w-[24px]" />
    </HeaderIconButton>
  );
}

export default ShoppingCartButton;
