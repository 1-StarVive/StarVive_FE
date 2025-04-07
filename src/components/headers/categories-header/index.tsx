import CommonHeader from "../ui/common-header";
import CloseButton from "./ui/close-button";

function CategoriesHeader() {
  return <CommonHeader right={<CloseButton />} sticky={true} />;
}

export default CategoriesHeader;
