import SVGClock from "../../../assets/icons/clock.svg";
import SVGDownload from "../../../assets/icons/download.svg";
import Button from "../../Common/Button/Button";
import EarlyAccessButton from "../EarlyAccessButton/EarlyAccessButton";
import SVGLinux from "../../../assets/logos/linux.svg";
import SVGWindows from "../../../assets/logos/windows.svg";
import SVGApple from "../../../assets/logos/apple.svg";

/**
 * Download section of the home page.
 */
function Download() {
  return (
    <div className="download page-max-width">
      <div className="title">
        <h1>Download TagoCore</h1>
        <span className="description">Downloads coming soon for Linux, Windows, MacOS and ARM.</span>
      </div>

      <div style={{ width: "570px", background: "white", padding: "5px", borderRadius: "5px" }}>
        <EarlyAccessButton />
      </div>

      <style jsx>{`
        .download {
          display: flex;
          position: relative;
          background: black;
          padding: 50px;
          border-radius: 20px;
          overflow: hidden;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .download .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 50px;
        }

        .download .description {
          font-size: 1.3rem;
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}

export default Download;
