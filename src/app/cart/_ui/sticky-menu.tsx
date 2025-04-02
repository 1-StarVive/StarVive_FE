import { Checkbox } from "@/components/checkbox";
import { headerHeight } from "@/components/headers/utils/const";
import TextButton from "../../../components/buttons/text-button";

function StickyMenu() {
  return (
    <Wrap>
      <Checkbox />
      <Label>전체 선택</Label>
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

function Label({ children }: React.PropsWithChildren) {
  return <span className="text-sm text-nowrap">{children}</span>;
}
