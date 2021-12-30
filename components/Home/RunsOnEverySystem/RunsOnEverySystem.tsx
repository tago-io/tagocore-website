import BrandBox from "../../BrandBox/BrandBox";
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
function RunsOnEverySystem() {
  return (
    <div className="runs-on-every-system">
      <div className="page-max-width">
        <div className="title">
          <h2>It runs on pretty much&nbsp;</h2>
          <h2 className="accent">anything</h2>
        </div>

        <div className="description">
          TagoCore&apos;s versatility allows it to run pretty much anywhere you want it to.
        </div>

        {/* OS */}
        <div className="row">
          <div className="data">
            <h3>Operating systems</h3>
            <span>
              Run it on all major operating systems available today. Linux, Windows, or macOS: it doesn&apos;t matter,
              we&apos;ve got you covered.
            </span>
          </div>

          <div className="brands" style={{ marginLeft: "30px" }}>
            <BrandBox>
              <SVGLinux height="50px" />
            </BrandBox>

            <BrandBox>
              <SVGWindows height="40px" />
            </BrandBox>

            <BrandBox>
              <SVGApple height="40px" />
            </BrandBox>
          </div>
        </div>

        {/* EDGE */}
        <div className="row">
          <div className="brands" style={{ marginRight: "30px" }}>
            <BrandBox>
              <SVGRaspberryPi height="40px" />
            </BrandBox>

            <BrandBox>
              <SVGRockPi height="40px" />
            </BrandBox>

            <BrandBox>
              <SVGHd height="40px" />
            </BrandBox>
          </div>

          <div className="data">
            <h3>On the edge</h3>
            <span>
              Deploy a TagoCore instance and compute data on the edge by using Raspberry Pi, Rock Pi, and many others!
              Quick and easy, just like that.
            </span>
          </div>
        </div>

        {/* Cloud */}
        <div className="row">
          <div className="data">
            <h3>On the cloud</h3>
            <span>
              Set up TagoCore on cloud providers such as AWS, Azure, Google Cloud, and others! Deploy an instance and
              operate the platform from far, far away.
            </span>
          </div>

          <div className="brands" style={{ marginLeft: "30px" }}>
            <BrandBox>
              <SVGAws height="30px" />
            </BrandBox>

            <BrandBox>
              <SVGAzure height="40px" />
            </BrandBox>

            <BrandBox>
              <SVGGoogleCloud height="40px" />
            </BrandBox>
          </div>
        </div>
      </div>

      <div className="many-more">
        <span>...and many more!</span>
      </div>

      <style jsx>{`
        .runs-on-every-system {
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
          background: white;
          position: relative;
        }

        .runs-on-every-system .title {
          margin-bottom: 10px !important;
        }

        .runs-on-every-system .description {
          margin-bottom: 40px;
          color: rgba(0, 0, 0, 0.6);
        }

        .runs-on-every-system .row {
          display: flex;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 70px;
          align-items: center;
        }

        .runs-on-every-system .row .data {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          text-align: left;
        }

        .runs-on-every-system .row .brands {
          display: flex;
        }

        .runs-on-every-system .row .data h3 {
          margin-bottom: 5px;
        }

        .runs-on-every-system :global(.brand-box) {
          flex: none;
          width: 100px;
          height: 80px;
        }

        .runs-on-every-system :global(.brand-box):nth-child(2) {
          margin: 0px 10px;
        }

        .runs-on-every-system :global(.brand-box) :global(.img-container) {
          transform: scale(0.7) !important;
        }

        .runs-on-every-system .item:first-child {
          margin-left: 0px;
        }

        .runs-on-every-system .item:last-child {
          margin-right: 0px;
        }

        .runs-on-every-system .item img {
          width: 65%;
          height: 65%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.5;
        }

        .runs-on-every-system .many-more {
          padding: 20px;
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          width: 800px;
          max-width: calc(100% - 40px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        @media screen and (max-width: 768px) {
          .runs-on-every-system .row {
            flex-direction: column-reverse;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          .runs-on-every-system .row:nth-child(4) {
            flex-direction: column !important;
          }

          .runs-on-every-system .brands {
            justify-content: center;
            margin: 0px !important;
          }

          .runs-on-every-system .row .data {
            margin-top: 20px;
            justify-content: center;
            text-align: center;
            align-items: center;
            padding: 0px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default RunsOnEverySystem;
