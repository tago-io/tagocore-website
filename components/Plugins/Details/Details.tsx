import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SVGAngleRight from "../../SVG/SVGAngleRight";
import AdditionalInfo from "./AdditionalInfo";
import Categories from "./Categories";
import Resources from "./Resources";
import Image from "next/image";
import imgMqtt from "../../../assets/apple-logo.svg";
import { readableColor } from "polished";
import Breadcrumb from "./Breadcrumbs";

/**
 * Plugins details component. This component shows a banner with a bunch of information from a plugin, as well
 * as a command to install the plugin.
 */
function Details() {
  const [content, setContent] = useState("");
  const backgroundColor = "#23649d";

  const bannerTextColor = readableColor(backgroundColor, "black", "white");

  /**
   * Fetches the readme data.
   */
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/facebook/react/main/README.md")
      .then((r) => r.text())
      .then(setContent);
  }, []);

  return (
    <div className="plugin-details page-max-width">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main banner at the top side */}
      <div className={`banner color-${bannerTextColor}`} style={{ backgroundColor }}>
        <div className="image-container">
          <div className="inner-image">
            <Image alt="plugin-logo" src={imgMqtt} layout="fill" objectFit="contain" />
          </div>
        </div>

        <div className="data">
          <h3>Plugin #1</h3>
          <div className="developer">Plugin Developer</div>
          <div className="small-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>

        <div className="install">
          <h4>Install</h4>
          <code>
            <SVGAngleRight width="8px" />
            <span>tagocore i plugin-1</span>
          </code>
        </div>
      </div>

      {/* Main content below the banner */}
      <div className="content">
        <div className="readme">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="sidebar">
          <section>
            <h4>Categories</h4>
            <Categories />
          </section>

          <section>
            <h4>Main Information</h4>
            <AdditionalInfo />
          </section>

          <section>
            <h4>Resources</h4>
            <Resources />
          </section>
        </div>
      </div>

      <style jsx>{`
        .plugin-details {
          display: flex;
          padding-top: 40px;
          flex-direction: column;
        }

        .plugin-details .content {
          display: flex;
          width: 100%;
          flex: 1;
          margin-top: 30px;
        }

        .plugin-details .content .readme {
          flex: 1;
          font-size: 15px;
          padding-right: 30px;
        }

        .plugin-details .content .sidebar {
          flex: none;
          width: 330px;
          padding: 0px 20px;
          display: flex;
          flex-direction: column;
          /* border-left: 1px solid rgba(0, 0, 0, 0.1); */
          background: rgba(0, 0, 0, 0.05);
          border-radius: 7px;
          padding: 20px 20px;
        }

        .plugin-details .content .sidebar section:not(:last-child) {
          margin-bottom: 40px;
        }

        .plugin-details .banner {
          display: flex;
          background: rgba(0, 0, 0, 0.05);
          padding: 40px 30px;
          border-radius: 7px;
          align-items: center;
        }

        .plugin-details .banner.color-white .data * {
          color: white;
        }

        .plugin-details .banner.color-white .install h4 {
          color: white;
        }

        .plugin-details .banner .data {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .plugin-details .banner .install {
          flex: none;
          display: flex;
          flex-direction: column;
          width: 300px;
        }

        .plugin-details .banner .install code {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          padding: 10px 20px;
          background: white;
          margin-top: 10px;
          display: flex;
          align-items: center;
        }

        .plugin-details .banner .install code span {
          font-size: 15px;
        }

        .plugin-details .banner .install code :global(svg) {
          margin-right: 10px;
        }

        .plugin-details .banner .data .developer {
          margin-top: 5px;
          font-weight: 500;
          opacity: 0.7;
        }

        .plugin-details .banner .data .small-description {
          margin-top: 5px;
          opacity: 0.5;
        }

        .plugin-details .banner .image-container {
          width: 150px;
          height: 110px;
          border-radius: 25 px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
          border-radius: 30px;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          margin-right: 30px;
          position: relative;
        }

        .plugin-details .banner .image-container .inner-image {
          position: relative;
          width: 80%;
          height: 80%;
        }

        @media screen and (max-width: 992px) {
          .plugin-details .banner {
            flex-direction: column;
            text-align: center;
          }

          .plugin-details .banner .image-container {
            margin: 0;
            margin-bottom: 20px;
          }

          .plugin-details .banner .data {
            margin: 0;
            margin-bottom: 20px;
          }

          .plugin-details .content {
            flex-direction: column-reverse;
            margin-top: 0px;
          }

          .plugin-details .content .sidebar {
            flex-direction: row;
            width: 100%;
            flex: 1;
            margin: 20px 0px;
          }

          .plugin-details .content .sidebar section {
            flex: 1;
            padding-right: 20px;
            margin-bottom: 0 !important;
          }

          .plugin-details .content .sidebar section:not(:first-child) {
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            padding-left: 20px;
          }
        }

        @media screen and (max-width: 768px) {
          .plugin-details .content .sidebar {
            flex-direction: column;
          }

          .plugin-details .content .sidebar section {
            border-left: 0 !important;
            padding: 0 !important;
          }

          .plugin-details .content .sidebar section:not(:last-child) {
            margin-bottom: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Details;
