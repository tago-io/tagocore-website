import SVGLinux from "../../../assets/logos/linux.svg";
import SVGWindows from "../../../assets/logos/windows.svg";
import SVGApple from "../../../assets/logos/apple.svg";
import SVGRaspberryPi from "../../../assets/logos/raspberrypi.svg";
import SVGRockPi from "../../../assets/logos/rockpi.svg";
import SVGHd from "../../../assets/logos/hdd.svg";
import SVGAws from "../../../assets/logos/aws.svg";
import SVGAzure from "../../../assets/logos/azure.svg";
import SVGGoogleCloud from "../../../assets/logos/googlecloud.svg";
import SVGAaeon from "../../../assets/images/aaeon.png";
import SVGDragino from "../../../assets/images/dragino.png";
import SVGSiemens from "../../../assets/images/siemens.png";
import SVGCircleNodes from "../../../assets/icons/circle-nodes.svg";
import SVGWindowMaximize from "../../../assets/icons/window-restore.svg";
import SVGExternalLink from "../../../assets/icons/external-link-alt.svg";
import SVGDocker from "../../../assets/logos/docker.svg";
import { useCallback } from "react";
import Image from "next/image";

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
        <h2>And it runs anywhere!</h2>
      </div>

      <div className="items">
        <div className="item">
          <div className="a">
            {renderItem(SVGRaspberryPi, "35px")}
            {renderItem(SVGHd, "35px")}
            {renderItem(SVGRockPi, "35px")}
          </div>

          <div className="b">
            <h3>On the edge</h3>
            <span style={{ marginTop: "10px", opacity: 0.7, maxWidth: "700px" }}>
              Deploy a TagoCore instance and compute data on the edge with a <b>Raspberry Pi</b>, <b>Rock Pi</b>, or
              many <b>others</b>, such as one of these gateways from ours partners:
            </span>
          </div>

          <div className="sub-items">
            <div className="inner-box">
              <Image
                alt="siemens"
                src={SVGSiemens.src}
                layout="fixed"
                width={300 / 2.5}
                height={401 / 2.5}
                objectFit="contain"
              />
            </div>

            <div className="inner-box">
              <Image
                alt="aaeon"
                src={SVGAaeon.src}
                layout="fixed"
                width={300 / 2.5}
                height={350 / 2.5}
                objectFit="contain"
              />
            </div>

            <div className="inner-box">
              <Image
                alt="dragino"
                src={SVGDragino.src}
                layout="fixed"
                width={300 / 2.5}
                height={350 / 2.5}
                objectFit="contain"
              />
            </div>
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
            <span style={{ marginTop: "10px", opacity: 0.7, maxWidth: "700px" }}>
              Set up TagoCore on cloud providers such as <b>AWS</b>, <b>Google Cloud</b>, <b>Azure</b>, and others!
              Deploy an instance and operate from far away.
            </span>
          </div>

          <div className="sub-items">
            <div className="inner-box">
              <SVGCircleNodes height="50px" />
              <span>
                TagoCore includes a <b>work-in-all-providers</b> cluster mode by allowing TagoIO to manage the instances
              </span>
            </div>

            <div className="inner-box">
              <SVGWindowMaximize height="50px" />
              <span>You can easily set-up TagoCore inside docker containers to build a containerized application</span>
            </div>

            <a href="https://hub.docker.com/r/tagoio/tagocore" target="_blank" className="inner-box" rel="noreferrer">
              <SVGDocker height="50px" />
              <div>
                <SVGExternalLink height="12px" />
                <span>&nbsp;&nbsp;Visit the official TagoCore image</span>
              </div>
            </a>
          </div>
        </div>

        <div className="item">
          <div className="a">
            {renderItem(SVGWindows, "35px")}
            {renderItem(SVGLinux, "50px")}
            {renderItem(SVGApple, "35px")}
          </div>

          <div className="b">
            <h3>Operating systems</h3>
            <span style={{ marginTop: "10px", opacity: 0.7, maxWidth: "700px" }}>
              Run it on all major operating systems available today. <b>Windows</b>, <b>Linux</b>, or <b>macOS</b>: it
              doesn't matter, we've got you covered.
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sub-items {
          padding: 30px 25px;
          padding-top: 0px;
          justify-content: center;
          display: flex;
        }

        .sub-items a {
          cursor: pointer;
        }

        .sub-items .inner-box {
          padding: 20px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 33%;
          text-decoration: none;
          color: black;
          margin: 0px 5px;
        }

        .sub-items a:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .sub-items .inner-box :global(img) {
          filter: grayscale(1) !important;
          margin-bottom: 10px;
        }

        .sub-items .inner-box > :global(svg) {
          margin-bottom: 10px;
        }

        .runs-anywhere {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
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
          text-align: center;
        }

        .runs-anywhere .items {
          display: flex;
          flex-direction: column;
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

        .runs-anywhere .a :global(svg *) {
          fill: black !important;
        }

        .runs-anywhere .a :global(svg) {
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
          align-items: center;
        }

        .runs-anywhere .item:nth-child(2) {
          margin: 50px 0px;
        }

        @media only screen and (max-width: 768px) {
          .sub-items {
            flex-direction: column;
            padding: 5px 20px;
          }

          .sub-items .inner-box {
            width: 100%;
            margin: 0;
            margin-bottom: 10px;
          }

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
