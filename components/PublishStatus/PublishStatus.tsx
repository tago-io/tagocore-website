import SVGExclamationTriangle from "../../assets/icons/exclamation-triangle.svg";
import SVGCheckCircle from "../../assets/icons/check-circle.svg";
import Link from "../Common/Link/Link";
import { theme } from "../../styles/Theme";
import { useCallback } from "react";

/**
 */
interface IPublishStatusProps {
  publishError: any;
  version?: string;
}

/**
 */
function PublishStatus(props: IPublishStatusProps) {
  const { version, publishError } = props;

  /**
   * Renders the error part of the status.
   */
  const renderError = useCallback(() => {
    const message = version ? `Error while publishing v${version}: ${publishError.message}` : publishError.message;
    return (
      <Link href="#" className="error">
        <SVGExclamationTriangle width="12px" fill={theme.colors.error} />
        <span>{message}</span>
      </Link>
    );
  }, [publishError, version]);

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
      {publishError ? renderError() : renderSuccess()}

      <style jsx>{`
        .publish-status {
          width: 100%;
        }

        .publish-status * {
          font-size: 0.88rem;
        }

        .publish-status > :global(.error) {
          font-weight: bold;
          color: ${theme.colors.error};
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
