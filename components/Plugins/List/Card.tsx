import SVGCog from "../../SVG/SVGCog";
import Link from "next/link";
import SVGDownload from "../../SVG/SVGDownload";
import SVGStar from "../../SVG/SVGStar";
import Developer from "../../Developer/Developer";
import { IPluginDeveloper } from "../Plugin.types";

interface IPluginCardProps {
  name: string;
  rating: number;
  downloads: number;
  developer: IPluginDeveloper;
  description: string;
  logoURL: string;
}

/**
 * A Single plugin card in the list of plugins. Clicking one of these plugin cards
 * will transfer you to the plugin details page.
 */
function PluginCard(props: IPluginCardProps) {
  const { name, description, rating, downloads, logoURL, developer } = props;

  return (
    <Link href="/marketplace/899a8e65132a1e384a6s84sa1q">
      <a className="plugin-card">
        <div className="icon-container">
          <img src={logoURL} />
          {/* <SVGCog width="40px" /> */}
        </div>

        <div className="data">
          <h5>{name}</h5>
          <span className="developer">
            <Developer name={developer?.name} verified={developer?.verified} domain={developer?.domain} />
          </span>
          <span className="description">{description}.</span>

          <span className="rating">
            <div className="info">
              <SVGStar width="14px" />
              <span>{rating}</span>
            </div>

            <span className="separator" />

            <div className="info">
              <SVGDownload width="14px" />
              <span>{downloads}</span>
            </div>
          </span>
        </div>

        <style jsx>{`
          .plugin-card {
            padding: 10px 15px;
            border-radius: 7px;
            background: white;
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.07);
            display: flex;
            cursor: pointer;
            transition: box-shadow 0.15s;
            flex: 1;
            margin: 5px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            text-decoration: none;
          }

          .plugin-card:hover {
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
          }

          .plugin-card .icon-container {
            margin-right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
            width: 50px;
          }

          .plugin-card .icon-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .plugin-card .data {
            display: flex;
            flex-direction: column;
          }

          .plugin-card .data .description {
            font-size: 14px;
            margin: 15px 0px;
            color: rgba(0, 0, 0, 0.5);
            flex: 1;
            display: flex;
          }

          .plugin-card .data .rating {
            display: flex;
            align-items: center;
            opacity: 0.6;
          }

          .plugin-card .data .rating .info {
            display: flex;
            align-items: center;
          }

          .plugin-card .data .rating .info span {
            font-size: 13px;
          }

          .plugin-card .data .rating :global(svg) {
            margin-right: 5px;
          }

          .plugin-card .data .separator {
            width: 5px;
            height: 5px;
            background: black;
            margin: 0px 10px;
            border-radius: 50%;
            opacity: 0.7;
          }
        `}</style>
      </a>
    </Link>
  );
}

export default PluginCard;
