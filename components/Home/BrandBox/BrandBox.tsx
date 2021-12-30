import { ReactNode } from "react";

/**
 * Props.
 */
interface IBrandBoxProps {
  /**
   * Content of the component.
   */
  children: ReactNode;
}

/**
 * This component shows a logo of a brand inside of a box.
 * The brand that will be shown can be customized via props.
 */
function BrandBox(props: IBrandBoxProps) {
  return (
    <div className="brand-box">
      {props.children}

      <style jsx>{`
        .brand-box {
          align-items: center;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          justify-content: center;
          overflow: hidden;
          padding: 30px 0px;
          position: relative;
        }
      `}</style>
    </div>
  );
}

export default BrandBox;
