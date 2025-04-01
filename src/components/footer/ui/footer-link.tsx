import Link, { LinkProps } from "next/link";

type FooterLinkProps = React.PropsWithChildren & LinkProps;
function FooterLink({ children, ...props }: FooterLinkProps) {
  return (
    <li>
      <Link className="px-2 text-[11px] whitespace-nowrap text-[#808080]" {...props}>
        {children}
      </Link>
    </li>
  );
}

export default FooterLink;
