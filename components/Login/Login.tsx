import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import FormGroup from "../FormGroup/FormGroup";
import Banner from "./Banner/Banner";
import Button from "../Button/Button";
import SVGTagoIO from "../../assets/logos/tagoio-logo.svg";
import Input from "../Input/Input";
import Link from "../Link/Link";

/**
 */
function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("matheuslopesbenachio@gmail.com");
  const [password, setPassword] = useState("123456");
  const router = useRouter();

  /**
   * Tries to login with the provided credentials.
   */
  const login = async () => {
    try {
      setLoading(true);
      const accResponse = await axios.post("https://api.tago.io/account/login", { email, password });
      const accData = accResponse.data.result;

      const profile = accData.profiles[0];
      const profileResponse = await axios.post("https://api.tago.io/account/profile/token", {
        email,
        expire_time: "3 months",
        name: "Generated automatically by TagoCore",
        password,
        profile_id: profile.id,
      });

      const token = profileResponse.data.result.token;
      document.cookie = `tagoio-account-token=${token}; Path=/; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`;

      router.push("/account/plugins");
    } finally {
    }
  };

  return (
    <div className="login page-max-width">
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
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>

          <FormGroup label="Password">
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </FormGroup>

          <FormGroup>
            <Button onClick={login}>{loading ? "Signing in..." : "Sign in"}</Button>
          </FormGroup>

          <div>
            <span>New here? </span>
            <Link target="_blank" href="https://admin.tago.io/signup">
              Sign up
            </Link>
            <span>.</span>
          </div>
        </div>
      </div>

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

        .login .credentials {
          flex: 1;
          padding: 20px;
        }

        .login .credentials .inner-credentials {
          width: 450px;
          margin: 0 auto;
          transition: opacity 0.15s;
        }

        .login .credentials .inner-credentials.loading {
          opacity: 0.7;
          pointer-events: none;
        }

        .login .title-container {
          margin-bottom: 20px;
        }

        .login .title-container h3 {
          margin-bottom: 3px;
        }

        .login .title-container :global(svg) {
          position: relative;
          top: 3.5px;
          margin: 0px 7px;
        }

        .login :global(.form-group) {
          width: 100%;
        }

        .login :global(button) {
          width: 100%;
          text-align: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Login;
