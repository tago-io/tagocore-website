import SVGGithub from "../../../assets/icons/github.svg";
import PremiumSupportBanner from "./PremiumSupportBanner";

function OpenSourceBanner() {
  return (
    <div className="page-max-width">
      <div className="inner">
        <div className="title">
          <div className="left">
            <SVGGithub width="35px" style={{ marginRight: "15px" }} />
            <h2>Free and open-source</h2>
          </div>

          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=tago-io&repo=tcore&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="130"
              height="30"
              title="GitHub"
            ></iframe>

            <iframe
              src="https://ghbtns.com/github-btn.html?user=tago-io&repo=tcore&type=watch&count=true&size=large&v=2"
              frameBorder="0"
              scrolling="0"
              width="130"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>

        <span className="description">
          We believe that great things should be accessible to everyone through open source code.
        </span>

        <PremiumSupportBanner />
      </div>

      <style jsx>{`
        .inner {
          display: flex;
          position: relative;
          background: linear-gradient(rgba(0, 0, 0, 0.1) 50%, transparent);
          padding: 50px;
          padding-bottom: 250px;
          margin-bottom: -100px;
          border-radius: 20px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .inner .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .inner .title .left {
          display: flex;
        }

        .inner .title iframe {
          display: inline-block;
          vertical-align: bottom;
          position: relative;
          top: 5px;
        }

        .inner .title .left h2 {
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

        .inner .description {
          font-size: 1.3rem;
          color: rgba(0, 0, 0, 0.6);
          margin-top: 10px;
          margin-bottom: 40px;
          display: flex;
        }

        .inner .description2 {
          color: rgba(0, 0, 0, 0.6);
          margin-top: 3px;
        }

        @media only screen and (max-width: 768px) {
          .title {
            flex-direction: column;
            margin-bottom: 20px;
          }
          .inner {
            padding: 30px 20px;
            padding-bottom: 200px;
            margin-bottom: -100px;
            border-radius: 0px;
          }
        }
      `}</style>
    </div>
  );
}

export default OpenSourceBanner;
