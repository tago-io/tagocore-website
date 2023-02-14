import { useCallback, useState } from "react";
import Banner from "./Banner/Banner";
import Credentials from "./Credentials/Credentials";
import { Account } from "@tago-io/sdk";
import Otp from "./Otp/Otp";
import { TOtpType } from "./Login.types";
import OtpPicker from "./OtpPicker/OtpPicker";
import { useRouter } from "next/router";

/**
 * Login component.
 */
function Login() {
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("credentials");
  const [otpType, setOtpType] = useState<TOtpType>("authenticator");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [otpTypesEnabled, setOtpTypesEnabled] = useState<TOtpType[]>(["authenticator", "email", "sms"]);

  const router = useRouter();

  /**
   * Logs in.
   */
  const login = useCallback(
    async (pinCode?: string) => {
      try {
        if (loading) {
          // prevent user clicking enter multiple times while focusing an input
          return;
        }

        setLoading(true);
        setAnimating(true);
        setInvalidCredentials(false);

        if (!pinCode) {
          // wait a bit for the banner animation
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        // logs in and gets the account
        const account = await Account.login(
          {
            email,
            password,
            otp_type: pinCode ? otpType : undefined,
            pin_code: pinCode ? pinCode : undefined,
          } as never,
          "usa-1"
        );

        // uses the account to get a profile token
        const tokenData = await Account.tokenCreate(
          {
            email,
            password,
            otp_type: pinCode ? otpType : undefined,
            pin_code: pinCode ? pinCode : undefined,
            expire_time: "3 months",
            name: "Generated automatically by TagoCore",
            profile_id: account.profiles[0].id,
          } as never,
          "usa-1"
        );

        document.cookie = `token=${tokenData.token}; Path=/; expires=Sat, 1 Apr 2023 00:00:00 UTC; path=/`;

        router.push("/account/plugins");
      } catch (ex) {
        const error = ex.includes("otp_enabled") ? JSON.parse(ex) : {};

        if (error.otp_enabled && error.otp_autosend) {
          setOtpType(error.otp_autosend);
          setOtpTypesEnabled(error.otp_enabled);
          setContent("otp");
          setLoading(false);
        } else {
          setInvalidCredentials(true);
          setLoading(false);

          if (!pinCode) {
            setAnimating(false);
          }
        }
      }
    },
    [email, password, router, loading, otpType]
  );

  /**
   * Switches the OTP type to another type.
   */
  const switchOtpType = useCallback(
    async (newType: TOtpType) => {
      setOtpType(newType);
      setContent("otp");

      if (newType !== "authenticator") {
        await Account.requestLoginPINCode({ email, password }, newType, "usa-1");
      }
    },
    [email, password]
  );

  /**
   * Switches to the OTP picker content.
   */
  const activateOtpPickerContent = useCallback(() => {
    setContent("otp-picker");
  }, []);

  /**
   * Switches to the OTP content.
   */
  const activateOtpContent = useCallback(() => {
    setContent("otp");
  }, []);

  /**
   * Switches to the credentials content.
   */
  const activateCredentialsContent = useCallback(() => {
    setLoading(false);
    setContent("credentials");
    setInvalidCredentials(false);
    setAnimating(false);
  }, []);

  return (
    <div className="login page-max-width">
      {content === "credentials" ? (
        // email and password
        <Credentials
          email={email}
          invalidCredentials={invalidCredentials}
          loading={loading}
          onChangeEmail={setEmail}
          onChangePassword={setPassword}
          onLogin={login}
          password={password}
        />
      ) : content === "otp-picker" ? (
        // types available of otp
        <OtpPicker types={otpTypesEnabled} onGoBack={activateOtpContent} onPick={switchOtpType} />
      ) : content === "otp" ? (
        // currently selected otp
        <Otp
          onGoToCredentials={activateCredentialsContent}
          onGoToOtpTypes={activateOtpPickerContent}
          onLogin={login}
          type={otpType}
          typesEnabled={otpTypesEnabled}
          loading={loading}
          invalidCredentials={invalidCredentials}
        />
      ) : null}

      <Banner animate={animating} />

      <style jsx>{`
        .login {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          margin-top: 40px;
          margin-bottom: 40px;
          height: calc(100vh - 290px);
          min-height: 500px;
          overflow: hidden;
          align-items: center;
        }

        @media screen and (max-width: 768px) {
          .login :global(.banner) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
