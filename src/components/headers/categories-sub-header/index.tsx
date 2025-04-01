import { headerCategories, HeaderCategory } from "@/components/headers/categories-sub-header/etc/const";
import CategoryLink from "./ui/category-link";

type CategoriesSubHeaderProps = {
  selected: HeaderCategory["href"];
};
function CategoriesSubHeader({ selected }: CategoriesSubHeaderProps) {
  return (
    <Wrap>
      {headerCategories.map((category, i) => (
        <CategoryLink key={i} href={category.href} selected={category.href === selected ? "active" : "none"}>
          {category.title}
        </CategoryLink>
      ))}
    </Wrap>
  );
}

export default CategoriesSubHeader;

function Wrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="grid h-[56px] auto-cols-[minmax(min-content,1fr)] grid-flow-col bg-white shadow-sm">{children}</ul>
  );
}
