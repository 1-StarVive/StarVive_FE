import { headerCategories } from "@/components/categories-header/etc/const";
import CategoryLink from "./ui/category-link";

function CategoriesHeader() {
  return (
    <Wrap>
      {headerCategories.map((category, i) => (
        <CategoryLink
          key={i}
          href={category.href}
          selected={i === 1 ? "active" : "none"}
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
