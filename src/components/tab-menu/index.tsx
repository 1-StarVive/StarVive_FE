import Menu from "./ui/menu";

function TabMenu() {
  return (
    <Wrap>
      <Menu>Way of Working</Menu>
      <Menu>Flower Market</Menu>
      <Menu>Flower Market</Menu>
      <Menu>Flower Market</Menu>
      <Menu>Flower Market</Menu>
    </Wrap>
  );
}

export default TabMenu;

function Wrap({ children }: React.PropsWithChildren) {
  return <ul className="flex h-[55px] overflow-y-auto border-b border-[#E7E7E7]">{children}</ul>;
}
