import BrandBox from "../BrandBox/BrandBox";
import SVGLinux from "../../../assets/logos/linux.svg";
import SVGWindows from "../../../assets/logos/windows.svg";
import SVGApple from "../../../assets/logos/apple.svg";
import SVGRaspberryPi from "../../../assets/logos/raspberrypi.svg";
import SVGRockPi from "../../../assets/logos/rockpi.svg";
import SVGHd from "../../../assets/logos/hdd.svg";
import SVGAws from "../../../assets/logos/aws.svg";
import SVGAzure from "../../../assets/logos/azure.svg";
import SVGGoogleCloud from "../../../assets/logos/googlecloud.svg";

/**
 * Section indicating how TagoCore can run on pretty much any system the user wants it to.
 */
function RunsAnywhere() {
  return (
    <div className="runs-anywhere page-max-width">
      <div className="title">
        <h2>It runs anywhere</h2>
        <span className="description">We've got you covered.</span>
      </div>

      <div className="items">
        <div className="item">
          <SVGLinux width="60px" />
        </div>
        <div className="item">
          <SVGWindows height="40px" />
        </div>
        <div className="item">
          <SVGApple height="40px" />
        </div>
        <div className="item">
          <SVGRaspberryPi height="40px" />
        </div>
        <div className="item">
          <SVGRockPi height="40px" />
        </div>
        <div className="item">
          <SVGAws height="40px" />
        </div>
        <div className="item">
          <SVGGoogleCloud height="40px" />
        </div>
        <div className="item">
          <SVGAzure height="40px" />
        </div>
      </div>

      <div className="exp">
        <div className="item">
          <h3>Operating systems</h3>
          <span style={{ marginTop: "10px" }}>
            Run it on all major operating systems available today. Linux, Windows, or macOS: it doesn't matter, we've
            got you covered.
          </span>
        </div>

        <div style={{ width: "20px" }} />

        <div className="item">
          <h3>On the edge</h3>
          <span style={{ marginTop: "10px" }}>
            Deploy a TagoCore instance and compute data on the edge by using Raspberry Pi, Rock Pi, and many others!
            Quick and easy, just like that.
          </span>
        </div>

        <div style={{ width: "20px" }} />

        <div className="item">
          <h3>On the cloud</h3>
          <span style={{ marginTop: "10px" }}>
            Set up TagoCore on cloud providers such as AWS, Azure, Google Cloud, and others! Deploy an instance and
            operate the platform from far away.
          </span>
        </div>
      </div>

      <style jsx>{`
        .runs-anywhere {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .runs-anywhere .title {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .runs-anywhere .description {
          color: rgba(0, 0, 0, 0.7);
        }

        .runs-anywhere .items {
          display: flex;
          margin-top: 30px;
          width: 100%;
        }

        .runs-anywhere .items .item {
          background: black;
          padding: 10px 0px;
          border-radius: 10px;
          margin: 0px 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .runs-anywhere .items .item :global(svg *) {
          fill: white !important;
        }

        .runs-anywhere .exp {
          display: flex;
          width: 100%;
        }

        .runs-anywhere .exp .item {
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          overflow: hidden;
          padding: 20px;
          position: relative;
          flex: 1;
          margin: 30px 0px;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default RunsAnywhere;
