import SVGDownload from "../../../assets/icons/download.svg";
import SVGEnvelope from "../../../assets/icons/envelope-circle-check.svg";
import DownloadButton from "../DownloadButton/DownloadButton";
import NewsletterButton from "../NewsletterButton/NewsletterButton";

/**
 * Download section of the home page.
 */
function Download() {
  return (
    <section className="download page-max-width">
      <div className="inner">
        <div className="title">
          <SVGDownload width="35px" fill="white" style={{ marginRight: "15px" }} />
          <h2>Download TagoCore</h2>
        </div>

        <span className="description">Available for Linux, MacOS and Windows.</span>

        <div className="early-access">
          <DownloadButton />
        </div>

        <div className="newsletter">
          <span>
            <SVGEnvelope fill="white" width="20px" />
            &nbsp; Join our newsletter to receive tips and updates about TagoCore!
          </span>
          <NewsletterButton />
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
          flex: 1;
          box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.3);
        }

        .download .inner .title {
          display: flex;
          align-items: center;
        }

        .download .early-access :global(button):hover {
          border-color: white;
        }

        .download .newsletter {
          margin-top: 50px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.15);
          padding: 30px;
          width: 550px;
          text-align: center;
        }

        .download .newsletter span {
          margin-bottom: 15px;
          display: flex;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
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
            padding-left: 20px;
            padding-right: 20px;
            text-align: center;
          }

          .newsletter {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Download;
