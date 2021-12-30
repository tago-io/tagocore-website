/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import SVGAngleDown from "../../SVG/SVGAngleDown";
import SVGCheckCircle from "../../SVG/SVGCheckCircle";

/**
 * Props.
 */
interface IOSAccordionProps {
  /**
   * Source of the Operating system logo.
   */
  imgSrc: any;
  /**
   * Optional parameter to override default size.
   */
  imgHeight?: string;
  /**
   * Title in the control bar of this component.
   */
  title: string;
  /**
   * Description in the control bar of this component.
   */
  description: string;
  /**
   * Content inside of this component.
   */
  children: ReactElement | ReactElement[];
  /**
   * Indicates if the accordion has all fields filled (selected).
   */
  checked?: boolean;
}

/**
 * Shows an accordion with the information of an operating system. This component can be expanded
 * to show its custom content when the user clicks on it.
 */
function OSAccordion(props: IOSAccordionProps) {
  const [open, setOpen] = useState(false);
  const lastChecked = useRef(null);
  const { title, checked, description } = props;

  /**
   * Toggles the open state.
   */
  const toggleOpen = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  /**
   * Closes the accordion when the component receives the `checked` prop.
   */
  useEffect(() => {
    if (checked && !lastChecked.current) {
      // setOpen(false);
    }
  }, [checked]);

  /**
   * Used to store the last checked prop.
   */
  useEffect(() => {
    lastChecked.current = checked;
  }, [checked]);

  return (
    <div className={`os-accordion ${open ? "open" : ""} ${checked ? "checked" : ""}`}>
      <div className="title" onClick={toggleOpen}>
        <props.imgSrc height={props.imgHeight || "40px"} width="50px" />

        <div className="info">
          <div className="label">
            <span>{title}</span>
            {checked && (
              <div className="check">
                <SVGCheckCircle width="15px" />
              </div>
            )}
          </div>

          <div className="description">{description}</div>
        </div>

        <div className="icons">
          <SVGAngleDown width="12px" />
        </div>
      </div>

      {open && <div className="content">{props.children}</div>}

      <style jsx>{`
        .os-accordion {
          background: white;
        }

        :global(.os-accordion:not(:last-child)) {
          margin-bottom: 10px;
        }

        .os-accordion.checked .title .label span {
          color: hsl(121, 100%, 28%);
        }

        .os-accordion .check {
          margin-left: 5px;
          position: relative;
          top: 2px;
        }

        .os-accordion .check :global(svg) {
          fill: hsl(121, 100%, 28%);
        }

        .os-accordion.checked .title,
        .os-accordion.checked .content {
          border-color: hsl(121, 100%, 23%) !important;
        }

        .os-accordion .content :global(.form-group.margin) {
          margin-bottom: 1rem;
        }

        .os-accordion.open .title {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          position: relative;
        }

        .os-accordion .icons {
          display: flex;
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
          display: flex;
          align-items: center;
          margin-bottom: 2px;
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
