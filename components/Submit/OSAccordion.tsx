/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useCallback, useState } from "react";
import Image from "next/image";
import SVGAngleDown from "../SVG/SVGAngleDown";

/**
 * Props.
 */
interface IOSAccordionProps {
  imgSrc: any;
  children: ReactElement | ReactElement[];
  title: string;
  description: string;
}

/**
 */
function OSAccordion(props: IOSAccordionProps) {
  const [open, setOpen] = useState(false);
  const { imgSrc, title, description } = props;

  /**
   * Toggles the open state.
   */
  const toggleOpen = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  return (
    <div className={`os-accordion ${open ? "open" : ""}`}>
      <div className="title" onClick={toggleOpen}>
        <Image layout="fixed" width="40px" height="40px" objectFit="contain" src={imgSrc} alt="windows-logo" />

        <div className="info">
          <div className="label">{title}</div>
          <div className="description">{description}</div>
        </div>

        <div>
          <SVGAngleDown width="12px" />
        </div>
      </div>

      {open && <div className="content">{props.children}</div>}

      <style jsx>{`
        .os-accordion {
          background: white;
        }

        .os-accordion.open .title {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        .os-accordion.open .content {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-top: 0;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        .os-accordion .content {
          padding: 15px;
        }

        .os-accordion .title {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 15px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 5px;
        }

        .os-accordion .title:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .os-accordion .title .info {
          margin-left: 15px;
          flex: 1;
        }

        .os-accordion .title .info .label {
          font-weight: bold;
        }

        .os-accordion .title .info .description {
          display: block;
          font-size: 14px;
          font-weight: 400;
          margin: 0;
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}

export default OSAccordion;
