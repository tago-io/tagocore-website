import Button from "../../Common/Button/Button";
import SVGEnvelope from "../../../assets/icons/envelope-circle-check.svg";
import isEmail from "validator/lib/isEmail";
import { KeyboardEvent, useCallback, useState } from "react";
import { theme } from "../../../styles/Theme";

/**
 * Props.
 */
interface INewsletterButtonProps {
  autoFocus?: boolean;
}

function NewsletterButton(props: INewsletterButtonProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /**
   * Sends a POST request to our lambda endpoint.
   */
  const postEmail = useCallback(async () => {
    try {
      setLoading(true);

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

      setSuccess(true);
      setLoading(false);
    } catch (ex) {
      setLoading(false);
      setError(true);
      alert("Could not subscribe to mail list");
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
  };

  return (
    <div className={`newsletter ${error ? "error" : ""} ${loading ? "loading" : ""}`}>
      {success ? (
        <b>Thank you for joining!</b>
      ) : (
        <>
          <input
            value={value}
            onKeyDown={onInputKeyDown}
            onChange={(e) => setValue(e.target.value)}
            type="email"
            placeholder="Email"
            autoFocus={props?.autoFocus}
          />

          <Button onClick={submit}>
            <SVGEnvelope width="20px" height="20px" />
            <span>&nbsp;Join newsletter</span>
          </Button>
        </>
      )}

      <style jsx>{`
        .newsletter {
          display: inline-flex;
          max-width: 100%;
          width: 100%;
          align-items: center;
          text-align: center;
          justify-content: center;
        }

        .newsletter.loading {
          opacity: 0.5;
          pointer-events: none;
        }

        .newsletter input {
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          padding: 0px 10px;
          margin: 0;
          margin-right: -1px;
          outline: 0;
          min-width: 0;
          display: inline-block;
          flex: 1;
          height: 40px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .newsletter.error input {
          border-color: ${theme.colors.error} !important;
        }

        .newsletter :global(button) {
          padding-left: 15px;
          padding-right: 15px;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          margin: 0;
          margin-left: -1px;
        }

        @media screen and (max-width: 576px) {
          .newsletter {
            flex-direction: column;
            width: 100%;
            align-items: initial;
          }

          .newsletter :global(button) {
            border-radius: 3px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin: 0;
          }

          .newsletter input {
            flex: none;
            margin: 0;
            border-radius: 3px;
            margin-bottom: -1px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            text-align: center;
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default NewsletterButton;
