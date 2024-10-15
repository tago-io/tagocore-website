import FormGroup from "../../../Common/FormGroup/FormGroup";
import Button from "../../../Common/Button/Button";
import Input from "../../../Common/Input/Input";
import Link from "../../../Common/Link/Link";
import { TOtpType } from "../Login.types";
import { MouseEvent, useCallback, useState } from "react";

/**
 * Props.
 */
interface IOtpProps {
  type: TOtpType;
  typesEnabled: TOtpType[];
  phone?: string;
  loading?: boolean;
  invalidCredentials?: boolean;
  onGoToOtpTypes: () => void;
  onGoToCredentials: () => void;
  onLogin: (pinCode?: string) => void;
}

function Otp(props: IOtpProps) {
  const [pinCode, setPinCode] = useState("");
  const { type, invalidCredentials, loading, typesEnabled, onGoToCredentials, onLogin, onGoToOtpTypes, phone } = props;

  /**
   * Renders the description of the selected type.
   */
  const renderDescription = useCallback(() => {
    if (type === "authenticator") {
      return (
        <span>
          Your <b>app</b> will display an authentication code.
        </span>
      );
    } else if (type === "sms") {
      return (
        <span>
          We sent you a <b>SMS</b> with the authentication code to your phone<b>{phone}</b>. It can take up to 1 minute
          to arrive.
        </span>
      );
    } else {
      return (
        <span>
          We sent you an authentication code to your <b>email</b>, it may take a minute to arrive.
        </span>
      );
    }
  }, [phone, type]);

  /**
   * Goes to the otp type selector.
   */
  const pickAnotherType = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onGoToOtpTypes();
    },
    [onGoToOtpTypes]
  );

  /**
   * Signs out.
   */
  const signOut = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onGoToCredentials();
    },
    [onGoToCredentials]
  );

  /**
   * Tries to log in.
   */
  const login = useCallback(() => {
    onLogin(pinCode);
  }, [pinCode, onLogin]);

  return (
    <div className="otp">
      <div className={`inner-otp ${loading ? "loading" : ""}`}>
        <div className="title-container">
          <div>
            <h3>Two-factor Authentication</h3>
            <div>{renderDescription()}</div>
          </div>

          <div>
            <Link href="#" onClick={signOut}>
              Sign out
            </Link>
          </div>
        </div>

        <FormGroup>
          <Input
            autoFocus
            error={invalidCredentials}
            onChange={(e) => setPinCode(e.target.value)}
            placeholder="6-digit code"
            value={pinCode}
          />
        </FormGroup>

        <FormGroup>
          <Button disabled={loading || !pinCode} onClick={login}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </FormGroup>

        {(typesEnabled.length > 1 || type !== "authenticator") && (
          <div>
            <span>Haven&apos;t received a code? </span>
            <Link href="#" onClick={pickAnotherType}>
              Send one again
            </Link>
            <span>.</span>
          </div>
        )}
      </div>

      <style jsx>{`
        .otp {
          flex: 1;
          padding: 20px;
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
          display: flex;
        }

        .otp .title-container h3 {
          margin-bottom: 3px;
        }

        .otp .title-container > div:first-child {
          flex: 1;
        }

        .otp .title-container .back:hover {
          opacity: 0.5;
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

export default Otp;
