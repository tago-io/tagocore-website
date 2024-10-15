import SVGExclamationTriangle from "../../../assets/icons/exclamation-triangle.svg";
import SVGCheckCircle from "../../../assets/icons/check-circle.svg";
import SVGExternalLinkAlt from "../../../assets/icons/external-link-alt.svg";
import Link from "../../Common/Link/Link";
import { theme } from "../../../styles/Theme";
import { useCallback } from "react";

/**
 * Props.
 */
interface IPublishStatusProps {
  errorCode?: number;
  version?: string;
}

const errorMessages = {
  1: "Some properties are inconsistent across package.json files",
  2: "Invalid package.json name",
  3: "Invalid package.json version",
  4: "TagoCore manifest is missing",
  5: "'tagocore.icon' property missing in package.json",
  6: "'tagocore.full_description' file not found",
  7: "'tagocore.short_description' length exceeded 100 characters",
  8: `Same version is already published`,
  9: `There is a greater version already published`,
  10: "Unknown error while extracting plugin",
  11: "No package.json files were found",
  12: "Unknown error",
  13: "Authorization denied",
  14: "Unknown error while parsing package.json file",
  15: "Bundle size exceeds 100 MB",
};

/**
 * Renders the publishing status of the plugin.
 */
function PublishStatus(props: IPublishStatusProps) {
  const { version, errorCode } = props;

  /**
   * Renders the error part of the status.
   */
  const renderError = useCallback(() => {
    const errorMessage = `Error #${errorCode} - ${errorMessages[errorCode] || ""}`;
    return (
      <Link
        target="_blank"
        href={`https://tagocore.com/docs/plugin/store/publishing-errors#error-${errorCode}`}
        className="error"
      >
        <SVGExclamationTriangle width="12px" fill={theme.colors.error} />
        {version === "Unknown"
          ? errorMessage
          : version
          ? `Error while publishing v${version}: ${errorMessage}`
          : errorMessage}
        <div className="external">
          <SVGExternalLinkAlt width="10px" fill={theme.colors.error} />
        </div>
      </Link>
    );
  }, [errorCode, version]);

  /**
   * Renders the success part of the status.
   */
  const renderSuccess = useCallback(() => {
    return (
      <div className="success">
        <SVGCheckCircle width="12px" fill={theme.colors.success} />
        <span>Successfully published</span>
      </div>
    );
  }, []);

  return (
    <div className="publish-status">
      {errorCode ? renderError() : renderSuccess()}

      <style jsx>{`
        .publish-status {
          width: 100%;
        }

        .publish-status :global(*) {
          font-size: 0.88rem;
        }

        .publish-status > :global(.error) {
          font-weight: bold;
          color: ${theme.colors.error};
        }

        .publish-status :global(.external) {
          margin-left: 7px;
          display: inline-block;
        }

        .publish-status :global(svg) {
          margin-right: 7px;
        }

        .publish-status > :global(.success) {
          display: flex;
          align-items: center;
          margin-right: 7px;
        }
      `}</style>
    </div>
  );
}

export default PublishStatus;
