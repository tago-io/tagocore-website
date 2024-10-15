import { ReactElement } from "react";

/**
 * Props.
 */
interface IFormGroupProps {
  /**
   * Label to be rendered above the field.
   */
  label?: string;
  /**
   * Visual field to indicate this component is required.
   */
  required?: boolean;
  /**
   * Content of the form group.
   */
  children: ReactElement | ReactElement[];
  /**
   * Indicates if this component should add a margin bottom style or not. Default is `true`.
   */
  addMarginBottom?: boolean;
}

/**
 * Component that shows a label above a field and space below it.
 * This component is designed to separate fields in a form, but can be used just to add a margin bottom to some components.
 */
function FormGroup(props: IFormGroupProps) {
  const { label, children, required } = props;
  const addMarginBottom = props.addMarginBottom !== false;

  return (
    <div className={`form-group ${required ? "required" : ""} ${addMarginBottom ? "margin" : ""}`}>
      {label && (
        <div className="title">
          <label>{label}</label>
        </div>
      )}

      <div className="content">{children}</div>

      <style jsx>{`
        .form-group.margin {
          margin-bottom: 1.5rem;
        }

        .form-group > .title {
          display: flex;
        }

        .form-group > .title label {
          font-weight: bold;
          margin-bottom: 7px;
          flex: 1;
          display: block;
        }

        .form-group.required label::after {
          content: "*";
          color: red;
          margin-left: 3px;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}

export default FormGroup;
