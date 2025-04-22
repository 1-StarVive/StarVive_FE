import { headerHeight } from "@/components/headers/utils/const";
import TextButton from "../../../components/buttons/text-button";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCartList, updateCarts } from "@/lib/api/cart";
import ImperativeUI from "@/components/imperative-ui";

function StickyMenu() {
  const cartList = useQuery({
    queryKey: ["getCartList"],
    queryFn: getCartList,
  });

  const updateCartsMutation = useMutation({
    mutationFn: updateCarts,
  });

  const checkedAll = cartList.data?.every(({ checked }) => checked) ?? false;

  const handleClickAll = async () => {
    if (!cartList.data) return;
    try {
      ImperativeUI.loading(true);

      await updateCartsMutation.mutateAsync(
        cartList.data.map(({ cartId }) => ({
          cartId,
          checked: !checkedAll,
        })),
      );
      await cartList.refetch();
    } catch {
    } finally {
      ImperativeUI.loading(false);
    }
  };

  return (
    <Wrap>
      <LabeledCheckbox label={"전체 선택"} checked={checkedAll} onChange={() => {}} onClick={handleClickAll} />
      <ButtonsWrap>
        <TextButton color="primary">선택 삭제</TextButton>
        <TextButton>전체 삭제</TextButton>
      </ButtonsWrap>
    </Wrap>
  );
}

export default StickyMenu;

function Wrap({ children }: React.PropsWithChildren) {
  return (
    <section
      className="sticky grid h-12 grid-cols-[auto_1fr_auto] items-center gap-2 bg-white px-6 py-2 shadow-sm"
      style={{ top: `${headerHeight}px` }}
    >
      {children}
    </section>
  );
}

function ButtonsWrap({ children }: React.PropsWithChildren) {
  return <div className="grid grid-flow-col gap-3">{children}</div>;
}
