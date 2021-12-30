import FormGroup from "../../../Common/FormGroup/FormGroup";
import Button from "../../../Common/Button/Button";
import SVGTagoIO from "../../../../assets/logos/tagoio-logo.svg";
import Input from "../../../Common/Input/Input";
import Link from "../../../Common/Link/Link";
import { KeyboardEvent, useCallback, useRef } from "react";

/**
 * Props.
 */
interface ICredentialsProps {
  email: string;
  invalidCredentials?: boolean;
  loading?: boolean;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onLogin: (pinCode?: string) => void;
  password: string;
}

/**
 */
function Credentials(props: ICredentialsProps) {
  const { email, password, invalidCredentials, loading, onLogin, onChangeEmail, onChangePassword } = props;
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  /**
   * Tries to log in.
   */
  const login = useCallback(() => {
    onLogin();
  }, [onLogin]);

  /**
   */
  const onEmailKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      passwordRef?.current?.focus();
    }
  }, []);

  /**
   */
  const onPasswordKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        login();
      }
      // emailRef?.current?.focus();
    },
    [login]
  );

  return (
    <div className="credentials">
      <div className={`inner-credentials ${loading ? "loading" : ""}`}>
        <div className="title-container">
          <h3>Sign in</h3>
          <div>
            <span className="description">Enter your</span>
            <Link href="https://admin.tago.io">
              <SVGTagoIO width="55px" />
            </Link>
            <span className="description">credentials.</span>
          </div>
        </div>

        <FormGroup label="Email">
          <Input
            autoFocus
            error={invalidCredentials}
            onChange={(e) => onChangeEmail(e.target.value)}
            onKeyDown={onEmailKeyDown}
            ref={emailRef}
            value={email}
          />
        </FormGroup>

        <FormGroup label="Password">
          <Input
            error={invalidCredentials}
            onChange={(e) => onChangePassword(e.target.value)}
            onKeyDown={onPasswordKeyDown}
            ref={passwordRef}
            type="password"
            value={password}
          />
        </FormGroup>

        <FormGroup>
          <Button disabled={loading} onClick={login}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </FormGroup>

        <div>
          <span>New here? </span>
          <Link target="_blank" href="https://admin.tago.io/signup">
            Sign up
          </Link>
          <span>.</span>
        </div>
      </div>

      <style jsx>{`
        .credentials {
          flex: 1;
          padding: 20px;
        }

        .credentials .inner-credentials {
          width: 450px;
          margin: 0 auto;
          transition: opacity 0.15s;
        }

        .credentials .inner-credentials.loading {
          opacity: 0.5;
          pointer-events: none;
        }

        .credentials .title-container {
          margin-bottom: 20px;
        }

        .credentials .title-container h3 {
          margin-bottom: 3px;
        }

        .credentials .title-container :global(svg) {
          position: relative;
          top: 3.5px;
          margin: 0px 7px;
        }

        .credentials :global(.form-group) {
          width: 100%;
        }

        .credentials :global(button) {
          width: 100%;
          text-align: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Credentials;
