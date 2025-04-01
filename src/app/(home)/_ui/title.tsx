import TitleSkeleton from "./title.skeleton";

function Title({ children }: React.PropsWithChildren) {
  return <h1 className="text-[22px] px-[24px] font-bold">{children}</h1>;
}

export default Title;

Title.Skeleton = TitleSkeleton;
