import { Button } from "@/components/buttons/button";
import FixedFooter from "@/components/footers/fixed-footer";

function CartFooter() {
  return (
    <FixedFooter>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span>총 </span>
          <span className="text-primary">0</span>
          <span>건</span>
        </div>
        <div>
          <span className="text-2xl">312,3000원</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button type="button" variant="outline" size="xl">
          선물하기
        </Button>
        <Button type="button" size="xl">
          구매하기
        </Button>
      </div>
    </FixedFooter>
  );
}

export default CartFooter;
