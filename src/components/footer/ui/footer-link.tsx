import Link, { LinkProps } from "next/link";

type FooterLinkProps = React.PropsWithChildren &
  LinkProps & {
    asChild?: boolean;
  };
function FooterLink({ children, asChild, ...props }: FooterLinkProps) {
  return (
    <li>
      <Link
        className="text-[11px] text-[#808080] whitespace-nowrap px-2"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default FooterLink;
