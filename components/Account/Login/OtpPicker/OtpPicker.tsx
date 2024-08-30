import Link from "../../../Common/Link/Link";
import { TOtpType } from "../Login.types";
import { MouseEvent, ReactNode, useCallback } from "react";
import FormGroup from "../../../Common/FormGroup/FormGroup";
import SVGKey from "../../../../assets/icons/key.svg";
import SVGMobile from "../../../../assets/icons/mobile-alt.svg";
import SVGEnvelope from "../../../../assets/icons/envelope.svg";
import SVGAngleRight from "../../../../assets/icons/angle-right.svg";

/**
 * Props.
 */
interface IOtpPickerProps {
  types: TOtpType[];
  onPick: (value: TOtpType) => void;
  onGoBack: () => void;
}

function OtpPicker(props: IOtpPickerProps) {
  const { types, onPick, onGoBack } = props;

  /**
   */
  const renderType = useCallback(
    (type: TOtpType) => {
      let svg: ReactNode = null;
      let text: string = null;

      if (type === "authenticator") {
        svg = <SVGKey width="12px" />;
        text = "Authenticator";
      } else if (type === "sms") {
        svg = <SVGMobile width="10px" />;
        text = "SMS";
      } else if (type === "email") {
        svg = <SVGEnvelope width="13px" />;
        text = "Email";
      }

      return (
        <div key={type} onClick={() => onPick(type)} className="item">
          <div className="data">
            <div className="icon-container">{svg}</div>
            <span>{text}</span>
          </div>

          <SVGAngleRight width="10px" />
        </div>
      );
    },
    [onPick]
  );

  /**
   * Goes back to the OTP page.
   */
  const goBack = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onGoBack();
    },
    [onGoBack]
  );

  return (
    <div className="otp">
      <div className="inner-otp">
        <div className="title-container">
          <h3>Request a new code</h3>
        </div>

        <FormGroup>{types.map(renderType)}</FormGroup>

        <div>
          <span>Or </span>
          <Link href="#" onClick={goBack}>
            type the code again
          </Link>
          <span>.</span>
        </div>
      </div>

      <style jsx>{`
        .otp {
          flex: 1;
          padding: 20px;
        }

        .otp :global(.item) {
          padding: 10px 20px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          margin-bottom: 5px;
          cursor: pointer;
          background: white;
        }

        .otp :global(.item):last-child {
          margin-bottom: 0px;
        }

        .otp :global(.item > .data) {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .otp :global(.item > .data > .icon-container) {
          width: 20px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .otp .inner-otp {
          width: 450px;
          margin: 0 auto;
          transition: opacity 0.15s;
        }

        .otp .inner-otp.loading {
          opacity: 0.5;
          pointer-events: none;
        }

        .otp .title-container {
          margin-bottom: 20px;
        }

        .otp .title-container h3 {
          margin-bottom: 3px;
        }

        .otp .title-container :global(svg) {
          position: relative;
          top: 3.5px;
          margin: 0px 7px;
        }

        .otp :global(.form-group) {
          width: 100%;
        }

        .otp :global(button) {
          width: 100%;
          text-align: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default OtpPicker;
