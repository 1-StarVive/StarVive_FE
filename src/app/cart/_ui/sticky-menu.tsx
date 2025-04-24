import { headerHeight } from "@/components/headers/utils/const";
import TextButton from "../../../components/buttons/text-button";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCart, getCartList, updateCarts } from "@/lib/api/cart";
import ImperativeUI from "@/components/imperative-ui";

function StickyMenu() {
  const cartList = useQuery({
    queryKey: ["getCartList"],
    queryFn: getCartList,
  });

  const updateCartsMutation = useMutation({
    mutationFn: updateCarts,
  });

  const deleteCartsMutation = useMutation({
    mutationFn: deleteCart,
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

  const handleClickDeleteChecked = async () => {
    if (!cartList.data) return;
    const selected = cartList.data.filter(({ checked }) => checked).map(({ cartId }) => cartId);
    if (selected.length === 0) return;
    try {
      ImperativeUI.loading(true);

      await deleteCartsMutation.mutateAsync({
        cartItemIds: selected,
      });
      await cartList.refetch();
    } catch {
    } finally {
      ImperativeUI.loading(false);
    }
  };

  const handleClickDeleteAll = async () => {
    if (!cartList.data) return;
    if (cartList.data.length === 0) return;
    try {
      ImperativeUI.loading(true);
      await deleteCartsMutation.mutateAsync({
        cartItemIds: cartList.data.map(({ cartId }) => cartId),
      });
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
        <TextButton color="primary" onClick={handleClickDeleteChecked}>
          선택 삭제
        </TextButton>
        <TextButton onClick={handleClickDeleteAll}>전체 삭제</TextButton>
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
