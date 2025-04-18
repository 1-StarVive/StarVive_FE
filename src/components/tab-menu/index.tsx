import Menu from "./ui/menu";

type TabMenuProps = {
  selectedId?: string;
  items: { id: string; name: string; href: string }[];
};
function TabMenu({ items, selectedId }: TabMenuProps) {
  return (
    <Wrap>
      {items.map((item) => (
        <Menu key={item.id} isSelected={item.id === selectedId} href={item.href}>
          {item.name}
        </Menu>
      ))}
    </Wrap>
  );
}

export default TabMenu;

function Wrap({ children }: React.PropsWithChildren) {
  return <ul className="flex h-[55px] overflow-y-auto border-b border-[#E7E7E7]">{children}</ul>;
}
