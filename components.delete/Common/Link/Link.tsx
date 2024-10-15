import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";

/**
 * Simple link element.
 */
function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, onClick, className, target, href } = props;

  return (
    <NextLink passHref href={href}>
      <a onClick={onClick} className={className} target={target}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
