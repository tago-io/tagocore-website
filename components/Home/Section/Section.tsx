import { ReactNode } from "react";
import { Element } from "react-scroll";

/**
 * Props.
 */
interface ISectionProps {
  children?: ReactNode;
  backgroundColor?: string;
  useBorderTop?: boolean;
  useSpaceTop?: boolean;
  useBorderBottom?: boolean;
  useSpaceBottom?: boolean;
  id?: string;
}

/**
 */
function Section(props: ISectionProps) {
  const {
    id,
    useSpaceTop,
    useSpaceBottom,
    backgroundColor,
    useBorderBottom,
    useBorderTop,
    children,
  } = props;

  return (
    <section
      className={`
        home-section
        ${useBorderTop ? "border-top" : ""}
        ${useBorderBottom ? "border-bottom" : ""}
      `}
      style={{ backgroundColor }}
    >
      {id && <Element name={id}></Element>}

      {useSpaceTop && <div className="space" />}
      {children}
      {useSpaceBottom && <div className="space" />}

      <style jsx>{`
        .home-section {
          position: relative;
          z-index: 1;
        }

        .home-section.border-top {
          border-top: 1px solid rgba(0, 0, 0, 0.07);
        }

        .home-section.border-bottom {
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        }

        .home-section .space {
          height: 60px;
        }
      `}</style>
    </section>
  );
}

export default Section;
