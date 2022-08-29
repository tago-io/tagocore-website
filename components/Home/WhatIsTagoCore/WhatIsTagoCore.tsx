import SVGDevice from "../../../assets/icons/device.svg";
import SVGBucket from "../../../assets/icons/bucket.svg";
import SVGBolt from "../../../assets/icons/bolt.svg";
import SVGCode from "../../../assets/icons/code.svg";
import SVGFolder from "../../../assets/icons/folder.svg";
import SVGPuzzle from "../../../assets/icons/puzzle-piece.svg";

function WhatIsTagoCore() {
  return (
    <div className="what-is-tagocore page-max-width">
      <div className="inner">
        <div className="title">
          <h2>What is TagoCore?</h2>
          <span className="description">Learn more about TagoCore's key features</span>
        </div>

        <div className="items">
          <div className="item">
            <h3>Devices</h3>
            <span>Start your application by authenticating your real device with a token</span>
            <SVGDevice height="100px" />
          </div>

          <div className="item">
            <h3>Buckets</h3>
            <span>All of the data that your devices send are stored in resources called Buckets</span>
            <SVGBucket height="100px" />
          </div>

          <div className="item">
            <h3>Analyses</h3>
            <span>Add more value to your solutions by implementing scripts that manipulate data</span>
            <SVGCode height="100px" />
          </div>

          <div className="item">
            <h3>Actions</h3>
            <span>Intercept events and handle them with your custom rules</span>
            <SVGBolt height="100px" />
          </div>

          <div className="item">
            <h3>Files</h3>
            <span>Use files and scripts located in your machine directly in Analysis</span>
            <SVGFolder height="100px" />
          </div>

          <div className="item">
            <h3>Plugins</h3>
            <span>Extend your application by using existing Plugins, or building your own</span>
            <SVGPuzzle height="100px" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .description {
          color: rgba(255, 255, 255, 0.6);
        }

        .what-is-tagocore .inner {
          background: black;
          color: white;
        }

        .what-is-tagocore .title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .what-is-tagocore .items {
          display: flex;
          padding: 0px 30px;
          flex-wrap: wrap;
        }

        .what-is-tagocore .item {
          padding: 30px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: center;
          flex-direction: column;
          min-width: 30%;
          position: relative;
          flex: 1;
          margin: 10px;
        }

        .what-is-tagocore .item span {
          color: rgba(255, 255, 255, 0.6);
          margin-right: 120px;
        }

        .what-is-tagocore :global(svg) {
          fill: white;
          position: absolute;
          right: 20px;
          opacity: 0.1;
        }

        .what-is-tagocore h3 {
          margin-bottom: 10px;
        }

        @media screen and (max-width: 768px) {
          .items {
            flex-direction: column;
            padding: 0px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default WhatIsTagoCore;
