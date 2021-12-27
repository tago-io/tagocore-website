import NextLink from "next/link";
import { ReactNode } from "react";

/**
 * Props.
 */
interface ILinkProps {
  /**
   * Address for the link.
   */
  href: string;
  /**
   * Content inside of the link.
   */
  children: ReactNode;
  /**
   * Target for the link.
   */
  target?: string;
  /**
   * Class of the DOM node.
   */
  className?: string;
}

/**
 * Simple link that uses next/link internally.
 */
function Link(props: ILinkProps) {
  const { children, className, target, href } = props;

  return (
    <NextLink passHref href={href}>
      <a className={className} target={target}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
