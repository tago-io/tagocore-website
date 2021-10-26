import { ButtonHTMLAttributes } from "react";

/**
 * Props.
 */
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //
}

/**
 * Simple HTML Button with a different style.
 */
function Button(props: IButtonProps) {
  const { children, className } = props;
  const classNames = [className, "color-primary", "border-primary", "bg-primary-hover"].filter((x) => x).join(" ");

  return (
    <button {...props} className={classNames}>
      {children}
      <style jsx>{`
        button {
          padding: 10px 30px;
          outline: 0;
          border-radius: 3px;
          background: transparent;
          cursor: pointer;
          background: white;
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        button:hover, button:hover *, button:active, button:active * {
          color: white !important;
          fill: white !important;
        }
      `}</style>  
    </button>
  );
}

export default Button;
