import NextLink from 'next/link';
import css from "styled-jsx";
import { CSSProperties, ReactNode } from "react";

/**
 * Props.
 */
interface ILinkProps {
  href: string;
  target?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Link(props: ILinkProps) {
  const styles = `
    a {
      text-decoration: none;
    }
  `;

  const isLocalLink = props.href && props.href.startsWith("/");

  return isLocalLink ? (
    <NextLink {...props} href={props.href}>
      {props.children}
    </NextLink>
  ) : (
    <a {...props}>
      {props.children}
    </a>
  );
}

export default Link;
