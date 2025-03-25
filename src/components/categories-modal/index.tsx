"use client";

import useCategoriesStore from "@/store/categories.store";
import Dialog from "../modal";

function CategoriesModal() {
  const isOpen = useCategoriesStore((state) => state.isOpen);
  const close = useCategoriesStore((state) => state.close);

  return (
    <Dialog>
      <div>타케고리</div>
    </Dialog>
  );
}

export default CategoriesModal;

function XButtonWrap({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-end h-[56px] px-[16px] py-[8px] items-center">
      {children}
    </div>
  );
}
