import { forwardRef, InputHTMLAttributes, MutableRefObject } from "react";
import { theme } from "../../../styles/Theme";

/**
 * Props.
 */
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Indicates if the input has a validation error or not.
   */
  error?: boolean;
}

/**
 * Simple input element.
 */
function Input(props: IInputProps, ref: MutableRefObject<HTMLInputElement>) {
  const { error, ...rest } = props;
  const className = [props.className, error ? "error" : ""].filter((x) => x).join();
  return (
    <>
      <input {...rest} ref={ref} className={className} />
      <style jsx>{`
        input {
          width: 100%;
          flex: 1;
          border-radius: 3px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 10px 15px;
          outline: 0;
          transition: border 0.2s;
        }

        input:focus {
          border-color: black !important;
        }

        input.error {
          border-color: ${theme.colors.error} !important;
        }
      `}</style>
    </>
  );
}

export default forwardRef(Input);
