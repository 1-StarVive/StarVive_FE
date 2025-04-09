import useCategoriesModalStore from "@/store/categories-modal.store";
import CommonHeader from "./ui/common-header";
import HeaderIconButton from "./ui/header-icon-button";
function CategoriesHeader() {
  return <CommonHeader right={<CloseButton />} sticky={true} />;
}

export default CategoriesHeader;

function CloseButton() {
  const close = useCategoriesModalStore((state) => state.close);

  return <HeaderIconButton icon="close" onClick={close} />;
}
