import { Button } from "@/components/buttons/button";
import Link, { LinkProps } from "next/link";

type SuggestedTagProps = React.PropsWithChildren<LinkProps>;

function SuggestedTag({ children, ...props }: SuggestedTagProps) {
  return (
    <li>
      <Button asChild>
        <Link {...props}>#{children}</Link>
      </Button>
    </li>
  );
}

export default SuggestedTag;
