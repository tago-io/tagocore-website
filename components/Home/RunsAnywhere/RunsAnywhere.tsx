import SVGLinux from "../../../assets/logos/linux.svg";
import SVGWindows from "../../../assets/logos/windows.svg";
import SVGApple from "../../../assets/logos/apple.svg";
import SVGRaspberryPi from "../../../assets/logos/raspberrypi.svg";
import SVGRockPi from "../../../assets/logos/rockpi.svg";
import SVGHd from "../../../assets/logos/hdd.svg";
import SVGAws from "../../../assets/logos/aws.svg";
import SVGAzure from "../../../assets/logos/azure.svg";
import SVGGoogleCloud from "../../../assets/logos/googlecloud.svg";
import { useCallback } from "react";

/**
 */
function RunsAnywhere() {
  /**
   * Renders a single brand box.
   */
  const renderItem = useCallback((Element, height: string) => {
    return (
      <div className="brand-box">
        <Element height={height} />
      </div>
    );
  }, []);

  return (
    <div className="runs-anywhere page-max-width">
      <div className="title">
        <h2>It runs anywhere</h2>
        <span className="description">We&apos;ve got you covered, wherever you go.</span>
      </div>

      <div className="items">
        <div className="item">
          <div className="a">
            {renderItem(SVGLinux, "50px")}
            {renderItem(SVGWindows, "35px")}
            {renderItem(SVGApple, "35px")}
          </div>

          <div className="b">
            <h3>Operating systems</h3>
            <span style={{ marginTop: "10px" }}>
              Run it on all major operating systems available today. <b>Linux</b>, <b>Windows</b>, or <b>macOS</b>: it
              doesn't matter, we've got you covered.
            </span>
          </div>
        </div>

        <div className="item">
          <div className="a">
            {renderItem(SVGRaspberryPi, "35px")}
            {renderItem(SVGHd, "35px")}
            {renderItem(SVGRockPi, "35px")}
          </div>

          <div className="b">
            <h3>On the edge</h3>
            <span style={{ marginTop: "10px" }}>
              Deploy a TagoCore instance and compute data on the edge by using <b>Raspberry Pi</b>, <b>Rock Pi</b>, and
              many <b>others</b>! Quick and easy, just like that.
            </span>
          </div>
        </div>

        <div className="item">
          <div className="a">
            {renderItem(SVGAws, "30px")}
            {renderItem(SVGGoogleCloud, "40px")}
            {renderItem(SVGAzure, "30px")}
          </div>

          <div className="b">
            <h3>On the cloud</h3>
            <span style={{ marginTop: "10px" }}>
              Set up TagoCore on cloud providers such as AWS, Azure, Google Cloud, and others! Deploy an instance and
              operate from far away.
            </span>
          </div>
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

        .runs-anywhere .item {
          flex: 1;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        .runs-anywhere .items {
          display: flex;
          margin-top: 30px;
          width: 100%;
        }

        .runs-anywhere .items .a {
          display: flex;
          width: 100%;
          height: 70px;
          background: rgba(0, 0, 0, 0.05);
          overflow: hidden;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
        }

        .runs-anywhere .items :global(.brand-box) {
          padding: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          position: relative;
        }

        .runs-anywhere :global(svg *) {
          fill: black !important;
        }

        .runs-anywhere :global(svg) {
          opacity: 0.2;
        }

        .runs-anywhere :global(.b) {
          display: flex;
          overflow: hidden;
          padding: 20px;
          position: relative;
          flex: 1;
          flex-direction: column;
          z-index: 1;
        }

        .runs-anywhere .item:nth-child(2) {
          margin: 0px 20px;
        }

        @media only screen and (max-width: 768px) {
          .runs-anywhere .items {
            flex-direction: column;
            padding: 0px 10px;
          }

          .runs-anywhere :global(.brand-box):nth-child(2) {
            margin: 0px;
          }

          .runs-anywhere .item:nth-child(2) {
            margin: 20px 0px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default RunsAnywhere;
