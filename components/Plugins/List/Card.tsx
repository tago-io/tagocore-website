import Link from "next/link";
import { IPluginDeveloper } from "../Plugin.types";
import Image from "next/image";

interface IPluginCardProps {
  name: string;
  developer: IPluginDeveloper;
  description: string;
  logoURL: string;
}

/**
 * A Single plugin card in the list of plugins. Clicking one of these plugin cards
 * will transfer you to the plugin details page.
 */
function PluginCard(props: IPluginCardProps) {
  const { name, description, logoURL } = props;

  return (
    <Link href="/pluginstore/details/899a8e65132a1e384a6s84sa1q">
      <a className="plugin-card">
        <div className="icon-container">
          <Image width="50px" height="50px" objectFit="contain" alt="plugin-logo" src={logoURL} />
        </div>

        <div className="data">
          <h5>{name}</h5>
          <span className="developer">
            {/* <Developer name={developer?.name} verified={developer?.verified} domain={developer?.domain} /> */}
          </span>
          <span className="description">{description}.</span>
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
