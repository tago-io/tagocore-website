import Button from "../../Common/Button/Button";
import SVGDownload from "../../../assets/icons/download.svg";
import SVGExternal from "../../../assets/icons/external-link-alt.svg";

/**
 * Props.
 */
interface IDownloadButton {
  localLink?: boolean;
}

/**
 * Renders an input and a button for someone to get early access to the system.
 */
function DownloadButton(props: IDownloadButton) {
  return (
    <div className="download-button">
      {props.localLink ? (
        <a href="#download">
          <Button>
            <SVGDownload width="16px" height="16px" />
            <span>&nbsp;Download TagoCore</span>
          </Button>
        </a>
      ) : (
        <a href="https://downloads.tagocore.com" target="_blank" rel="noreferrer">
          <Button>
            <SVGExternal width="16px" height="16px" />
            <span>&nbsp;Go to Downloads page</span>
          </Button>
        </a>
      )}

      <style jsx>{`
        .download-button a {
          text-decoration: none !important;
        }

        .download-button :global(button) {
          padding: 25px 40px;
          height: 40px;
          color: black;
        }

        .download-button :global(button) span {
          font-size: 18px;
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}

export default DownloadButton;
