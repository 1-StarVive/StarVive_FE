import {
  headerCategories,
  HeaderCategory,
} from "@/components/categories-header/etc/const";
import CategoryLink from "./ui/category-link";

type CategoriesHeaderProps = {
  selected: HeaderCategory["href"];
};
function CategoriesHeader({ selected }: CategoriesHeaderProps) {
  return (
    <Wrap>
      {headerCategories.map((category, i) => (
        <CategoryLink
          key={i}
          href={category.href}
          selected={category.href === selected ? "active" : "none"}
        >
          {category.title}
        </CategoryLink>
      ))}
    </Wrap>
  );
}

export default CategoriesHeader;

function Wrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="grid grid-flow-col auto-cols-[minmax(min-content,1fr)] h-[56px] shadow-sm">
      {children}
    </ul>
  );
}
