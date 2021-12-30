import { ReactNode } from "react";

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
 * This is a single section in the home page of the application.
 * A section is a division showing a specific functionality or feature of the application.
 */
function Section(props: ISectionProps) {
  const { id, useSpaceTop, useSpaceBottom, backgroundColor, useBorderBottom, useBorderTop, children } = props;

  const className = ["home-section", useBorderTop ? "border-top" : "", useBorderBottom ? "border-bottom" : ""]
    .filter((x) => x)
    .join(" ");

  return (
    <section className={className} style={{ backgroundColor }}>
      {id && <div id={id}></div>}

      {useSpaceTop && <div className="space" />}
      {children}
      {useSpaceBottom && <div className="space" />}

      <style jsx>{`
        .home-section {
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .home-section.border-top {
          border-top: 1px solid rgba(0, 0, 0, 0.07);
        }

        .home-section.border-bottom {
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        }

        .home-section .space {
          height: 80px;
        }
      `}</style>
    </section>
  );
}

export default Section;
