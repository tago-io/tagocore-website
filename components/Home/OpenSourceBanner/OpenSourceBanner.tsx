import SVGStar from "../../../assets/icons/star.svg";
import SVGGithub from "../../../assets/icons/github.svg";
import Button from "../../Common/Button/Button";

/**
 */
function OpenSourceBanner() {
  return (
    <div className="open-source-banner page-max-width">
      <div className="inner">
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <h2>
              <SVGGithub width="35px" fill="white" style={{ marginRight: "15px" }} />
              Free and open-source
            </h2>

            <span className="description">
              We believe that great things should be accessible to everyone through open source code.
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="hove">
            <span>However...</span>
          </div>

          <div className="b">
            <SVGStar width="55px" fill="white" />
            <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              You can go beyond with our premium TagoCore Support!
            </div>

            <span className="description2">
              With TagoCore Support you can ask questions directly to our team of experts ready to help you.
            </span>

            <a target="_blank" href="https://tago.io/contact-us/" rel="noreferrer">
              Get in touch!
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .open-source-banner .inner {
          display: flex;
          position: relative;
          background: black;
          padding: 50px;
          border-radius: 20px;
          overflow: hidden;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .open-source-banner .inner h2 {
          display: flex;
          align-items: center;
        }

        .items {
          margin-left: 20px;
          flex: none;
          width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .item {
          border-radius: 10px;
          width: 100%;
          margin: 10px 0px;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item :global(svg) {
          margin-right: 7px;
        }

        .open-source-banner .inner .hove {
          margin-bottom: -10px;
          color: black;
          z-index: 111;
          font-size: 1.3rem;
          margin-left: 20px;
          font-weight: bold;
          display: inline-flex;
          margin: 0 auto;
        }

        .open-source-banner .inner .hove span {
          background: white;
          padding: 5px 20px;
          border-radius: 10px;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .open-source-banner .inner .b {
          padding: 30px 20px;
          background: white;
          border-radius: 10px;
          color: black;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .open-source-banner .inner .b :global(svg) {
          border-radius: 50%;
          background: black;
          width: 60px;
          height: 60px;
          overflow: visible;
          padding: 10px;
          margin-bottom: 20px;
        }

        .open-source-banner .inner .description {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 10px;
          margin-bottom: 40px;
        }

        .open-source-banner .inner .description2 {
          color: rgba(0, 0, 0, 0.6);
          margin-top: 3px;
        }

        .open-source-banner .inner a {
          margin-top: 20px;
          font-size: 1.1rem;
        }

        @media only screen and (max-width: 768px) {
          .open-source-banner .inner {
            padding: 30px 20px;
            border-radius: 0px;
          }
        }
      `}</style>
    </div>
  );
}

export default OpenSourceBanner;
