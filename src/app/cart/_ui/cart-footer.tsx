import { Button } from "@/components/buttons/button";

function CartFooter() {
  return (
    <div className="fixed bottom-0 left-0 flex w-full flex-col gap-3 bg-white p-[24px] font-bold shadow-[0_-1px_5px_0_rgba(0,0,0,0.1)]">
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
    </div>
  );
}

export default CartFooter;
