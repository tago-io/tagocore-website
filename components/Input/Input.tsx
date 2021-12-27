import { InputHTMLAttributes } from "react";

/**
 */
function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input {...props} />
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
      `}</style>
    </>
  );
}

export default Input;
