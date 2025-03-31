import Link from "next/link";
import ShoppingCartIcon from "@/components/icons/shopping-cart-icon";

function ShoppingCartLink() {
  return (
    <Link
      className="flex h-[32px] w-[32px] items-center justify-center"
      href="/cart"
    >
      <ShoppingCartIcon className="h-[24px] w-[24px]" />
    </Link>
  );
}

export default ShoppingCartLink;
