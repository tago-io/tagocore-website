import { ButtonHTMLAttributes } from "react";
import { theme } from "../../styles/Theme";

/**
 * Props.
 */
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Simple HTML Button with a different style.
 */
function Button(props: IButtonProps) {
  const { children, className } = props;
  const classNames = [className].filter((x) => x).join(" ");

  return (
    <button {...props} className={classNames}>
      {children}
      <style jsx>{`
        button {
          padding: 10px 30px;
          border-radius: 3px;
          background: transparent;
          cursor: pointer;
          background: ${theme.colors.secondary};
          position: relative;
          display: inline-flex;
          align-items: center;
          outline: 0;
          border: 1px solid black;
        }

        button:hover,
        button:active {
          background: ${theme.colors.primary};
          color: ${theme.colors.secondary} !important;
          fill: ${theme.colors.secondary} !important;
        }

        button:hover,
        button:hover *,
        button:active,
        button:active * {
          color: ${theme.colors.secondary} !important;
          fill: ${theme.colors.secondary} !important;
        }

        button:disabled {
          opacity: 0.5;
          border-color: transparent;
          background: rgba(0, 0, 0, 0.15);
          pointer-events: none;
          fill: rgba(0, 0, 0, 0.8) !important;
          color: rgba(0, 0, 0, 0.8) !important;
        }

        button:disabled :global(*) {
          fill: rgba(0, 0, 0, 0.8) !important;
          color: rgba(0, 0, 0, 0.8) !important;
        }
      `}</style>
    </button>
  );
}

export default Button;
