import TitleSkeleton from "./title.skeleton";

function Title({ children }: React.PropsWithChildren) {
  return <h1 className="px-[24px] text-[22px] font-bold">{children}</h1>;
}

Title.Skeleton = TitleSkeleton;
export default Title;
