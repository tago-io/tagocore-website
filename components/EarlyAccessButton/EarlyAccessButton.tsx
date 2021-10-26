import Button from "../Button/Button";
import SVGArrow from "../SVG/SVGArrow";
import isEmail from 'validator/lib/isEmail';
import { useState } from "react";

/**
 */
interface IEarlyAccessButtonProps {
  //
}

function EarlyAccessButton(props: IEarlyAccessButtonProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const onClick = () => {
    if (!isEmail(value)) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    window.open(`https://tago.io?email=${value}`, "_blank");
  };

  console.log(error);

  return (
    <div className="early-access-button">
      <input value={value} onChange={(e) => setValue(e.target.value)} type="email" placeholder="Email" className="border-primary-focus" />

      <Button onClick={onClick}>
        <span>Get Early Access&nbsp;</span>
        <SVGArrow width="12px" height="12px" />
      </Button>

      <style jsx>{`
        input {
          width: 200px;
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          padding: 0px 10px;
          margin-right: 8px;
          outline: 0;
        }

        .early-access-button :global(button) {
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
}

export default EarlyAccessButton;
