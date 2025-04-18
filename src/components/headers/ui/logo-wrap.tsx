import Link from "next/link";

function LogoWrap({ children }: React.PropsWithChildren) {
  return (
    <Link href={"/"} className="text-center text-[1rem] font-bold whitespace-nowrap">
      {children}
    </Link>
  );
}

export default LogoWrap;
