import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import AdditionalInfo from "./AdditionalInfo";
import Categories from "./Categories";
import Resources from "./Resources";

function Details() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/facebook/react/main/README.md")
      .then((r) => r.text())
      .then(setContent);
  }, []);

  return (
    <div className="plugin-details page-max-width">
      <div className="banner">
        <div className="image-container">
          <img src="https://mqtt.org/assets/downloads/mqtt-ver.png" />
        </div>

        <div className="data">
          <h3>MQTT</h3>
          <div className="author">MQTT Team</div>
          <div className="small-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </div>
        </div>

        <div className="install">
          <h4>Install</h4>
          <code>{">"} tagocore install mqtt</code>
        </div>
      </div>

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
            <h4>Additional Information</h4>
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
          margin-top: 60px;
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
          font-size: 15px;
          margin-top: 10px;
        }

        .plugin-details .banner .data .author {
          margin-top: 5px;
          color: rgba(0, 0, 0, 0.5);
          font-weight: 500;
        }

        .plugin-details .banner .data .small-description {
          margin-top: 5px;
          color: rgba(0, 0, 0, 0.5);
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
        }

        .plugin-details .banner .image-container img {
          width: 100%;
          height: 100%;
          padding: 10px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}

export default Details;
