import { useCallback, useState } from "react";
import Banner from "./Banner/Banner";
import Credentials from "./Credentials/Credentials";
import { Account } from "@tago-io/sdk";
import Otp from "./Otp/Otp";
import { TOtpType } from "./Login.types";
import OtpPicker from "./OtpPicker/OtpPicker";
import { useRouter } from "next/router";

/**
 */
function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("benachio@tago.io");
  const [password, setPassword] = useState("tagodev14");
  const [content, setContent] = useState("credentials");
  const [otpType, setOtpType] = useState<TOtpType>("authenticator");
  const [otpPhone, setOtpPhone] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [otpTypesEnabled, setOtpTypesEnabled] = useState<TOtpType[]>(["authenticator", "email", "sms"]);

  const router = useRouter();

  /**
   */
  const onLogin = useCallback(
    async (pinCode?: string) => {
      try {
        setLoading(true);

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

        document.cookie = `tagoio-account-token=${tokenData.token}; Path=/; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`;

        router.push("/account/plugins");
      } catch (ex) {
        const error = ex.includes("otp_enabled") ? JSON.parse(ex) : {};

        if (error.otp_enabled && error.otp_autosend) {
          setOtpType(error.otp_autosend);
          setOtpTypesEnabled(error.otp_enabled);
          setOtpPhone(error.phone);
          setContent("otp");
        } else {
          setInvalidCredentials(true);
        }
      } finally {
        // setLoading(false);
      }
    },
    [email, password, router, otpType]
  );

  /**
   * Switches the OTP type to another type.
   */
  const switchOtpType = useCallback(
    async (newType: TOtpType) => {
      try {
        setOtpType(newType);
        setContent("otp");

        if (newType !== "authenticator") {
          await Account.requestLoginPINCode({ email, password }, newType, "usa-1");
        }
      } catch (ex) {
        //
      }
    },
    [email, password]
  );

  /**
   */
  const activateOtpPicker = useCallback(() => {
    setContent("otp-picker");
  }, []);

  /**
   */
  const activateOtp = useCallback(() => {
    setContent("otp");
  }, []);

  /**
   */
  const activateCredentialsContent = useCallback(() => {
    setLoading(false);
    setContent("credentials");
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
          onLogin={onLogin}
          password={password}
        />
      ) : content === "otp-picker" ? (
        // types available of otp
        <OtpPicker types={otpTypesEnabled} onGoBack={activateOtp} onPick={switchOtpType} />
      ) : content === "otp" ? (
        // currently selected otp
        <Otp
          type={otpType}
          typesEnabled={otpTypesEnabled}
          onGoToOtpTypes={activateOtpPicker}
          onGoToCredentials={activateCredentialsContent}
          onLogin={onLogin}
        />
      ) : null}

      <Banner animate={loading} />

      <style jsx>{`
        .login {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          margin-top: 40px;
          margin-bottom: 40px;
          height: 500px;
          overflow: hidden;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Login;
