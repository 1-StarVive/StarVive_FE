import Link, { LinkProps } from "next/link";

type FooterLinkProps = React.PropsWithChildren & LinkProps;
function FooterLink({ children, ...props }: FooterLinkProps) {
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
