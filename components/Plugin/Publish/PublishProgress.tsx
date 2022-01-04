import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import SVGPuzzlePiece from "../../../assets/icons/puzzle-piece.svg";
import { theme } from "../../../styles/Theme";
import SVGExclamationTriangle from "../../../assets/icons/exclamation-triangle.svg";
import Link from "../../Common/Link/Link";
import { MouseEvent, useCallback } from "react";
import { ProfileListInfo } from "@tago-io/sdk/out/modules/Account/profile.types";

/**
 * Props.
 */
interface IPublishProgress {
  progress: number;
  account: AccountInfo;
  profiles: ProfileListInfo[];
  profileID: string;
  error?: string;
  onCancel: () => void;
}

/**
 * Shows the progress of the publishing.
 */
function PublishProgress(props: IPublishProgress) {
  const { account, error, progress, profileID, profiles, onCancel } = props;
  const done = !error && progress >= 100;
  const profile = profiles.find((x) => x.id === profileID);

  /**
   * Cancels the progress and goes back to the publish screen.
   */
  const cancel = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onCancel();
    },
    [onCancel]
  );

  return (
    <div className={`publish-progress ${done ? "done" : ""} ${error ? "error" : ""}`}>
      <div className="title">
        <h3>Publisher: {profile.name}</h3>
        <Link href="#" onClick={cancel}>
          {done || error ? "Go Back" : "Cancel publish"}
        </Link>
      </div>

      <div className="data">
        <div className="icon-container">
          <SVGPuzzlePiece width="75px" />
        </div>

        <div className="progress-bar">
          <div className="content" />
        </div>

        <div className="status">
          {error ? (
            <div>
              <SVGExclamationTriangle width="15px" fill={theme.colors.error} />
              <span> &nbsp;{error}</span>
            </div>
          ) : done ? (
            <div>
              Success! We&apos;ll send an e-mail to <b>{account.email}</b> with more details.
            </div>
          ) : (
            <span>Please wait...</span>
          )}
        </div>
      </div>

      <style jsx>{`
        .publish-progress {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .publish-progress .data {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          flex: 1;
        }

        .publish-progress .title {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .publish-progress .progress-bar {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          margin: 25px 0px;
          width: 200px;
          height: 5px;
          overflow: hidden;
        }

        .publish-progress .progress-bar .content {
          height: 100%;
          width: ${progress}%;
          background: ${theme.colors.primary};
          transition: width 0.2s, background-color 0.3s;
        }

        .publish-progress > .status {
          text-align: center;
        }

        .publish-progress .icon-container {
          width: 200px;
          height: 110px;
          border-radius: 25px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          transition: background-color 0.3s;
        }

        .publish-progress.done .icon-container {
          background: black;
        }

        .publish-progress.done .icon-container :global(svg) {
          fill: white;
          transition: fill 0.3s;
        }

        /* error */

        .publish-progress.error .progress-bar .content {
          background: ${theme.colors.error};
        }

        .publish-progress.error > .data > .status {
          color: ${theme.colors.error};
        }
      `}</style>
    </div>
  );
}

export default PublishProgress;
