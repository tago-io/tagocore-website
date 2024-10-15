import { SelectHTMLAttributes } from "react";

/**
 * Simple select element.
 */
function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <>
      <select {...props} />
      <style jsx>{`
        select {
          width: 100%;
          flex: 1;
          border-radius: 3px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 10px 15px;
          outline: 0;
          transition: border 0.2s;
        }

        select:focus {
          border-color: black !important;
        }
      `}</style>
    </>
  );
}

export default Select;
