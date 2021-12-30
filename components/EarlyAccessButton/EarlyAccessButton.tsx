import Button from "../Common/Button/Button";
import SVGArrow from "../../assets/icons/arrow-right.svg";
import isEmail from "validator/lib/isEmail";
import { KeyboardEvent, useCallback, useState } from "react";

/**
 * Component that shows an input and a button for someone to submit their e-mail
 * and get early access to the system.
 */
function EarlyAccessButton() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  /**
   * Opens a new tab for the survey.
   */
  const openSurvey = useCallback(() => {
    window.open(`https://survey.zohopublic.com/zs/5JB3f2?email=${value}`, "_blank");
  }, [value]);

  /**
   * Sends a POST request to our lambda endpoint.
   */
  const postEmail = useCallback(async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const body = {
        email: value,
        mail_list: ["core_news"],
      };

      await fetch("https://wkd7y6x1xi.execute-api.us-east-1.amazonaws.com/prod/mail-list/subscribe", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then((r) => r.json());
    } catch (ex) {
      console.error("Could not subscribe to mail list", ex.message || ex);
    }
  }, [value]);

  /**
   * Called when the user pressed a keydown in the input.
   */
  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  /**
   * Called when the button is clicked.
   */
  const submit = () => {
    if (!isEmail(value)) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    postEmail();
    openSurvey();
  };

  return (
    <div className={`early-access-button ${error ? "error" : ""}`}>
      <input
        value={value}
        onKeyDown={onInputKeyDown}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        placeholder="Email"
      />

      <Button onClick={submit}>
        <span>Get Early Access&nbsp;</span>
        <SVGArrow width="12px" height="12px" />
      </Button>

      <style jsx>{`
        .early-access-button {
          display: inline-flex;
          max-width: 100%;
          width: 100%;
        }

        .early-access-button input {
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          padding: 0px 10px;
          margin-right: 8px;
          outline: 0;
          min-width: 0;
          max-width: 300px;
          display: inline-block;
          flex: 1;
          height: 40px;
        }

        .early-access-button.error input {
          border-color: red !important;
        }

        .early-access-button :global(button) {
          padding-left: 15px;
          padding-right: 15px;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
        }

        @media screen and (max-width: 576px) {
          .early-access-button {
            flex-direction: column;
            width: 300px;
          }

          .early-access-button input {
            flex: none;
            margin-right: 0;
            margin-bottom: 5px;
            text-align: center;
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default EarlyAccessButton;
