import SVGDownload from "../../../assets/icons/download.svg";
import Button from "../../Common/Button/Button";
import EarlyAccessButton from "../EarlyAccessButton/EarlyAccessButton";

/**
 * Download section of the home page.
 */
function Download() {
  return (
    <div className="download page-max-width">
      <div className="inner">
        <div className="title">
          <SVGDownload width="35px" fill="white" style={{ marginRight: "15px" }} />
          <h2>Download TagoCore</h2>
        </div>

        <span className="description">Available for Alpine, Linux, MacOS and Windows.</span>

        <div className="early-access">
          <EarlyAccessButton />
        </div>
      </div>

      <style jsx>{`
        .download .inner {
          display: flex;
          position: relative;
          background: black;
          padding: 100px 0px;
          border-radius: 20px;
          overflow: hidden;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          flex: 1;
        }

        .download .inner .title {
          display: flex;
          align-items: center;
        }

        .download .early-access {
          border: 5px solid white;
          padding: 5px;
          max-width: 500px;
          border-radius: 5px;
          width: calc(100% - 20px);
        }

        .download .inner .description {
          font-size: 1.1rem;
          opacity: 0.75;
          margin-top: 10px;
          margin-bottom: 50px;
        }

        @media only screen and (max-width: 768px) {
          .download .inner {
            border-radius: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Download;
