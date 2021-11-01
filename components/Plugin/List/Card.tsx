import SVGCog from "../../SVG/SVGCog";
import Link from "next/link";

/**
 * A Single plugin card in the list of plugins. Clicking one of these plugin cards
 * will transfer you to the plugin details page.
 */
function PluginCard(props) {
  const { name } = props;

  return (
    <Link href="/plugins/899a8e65132a1e384a6s84sa1q">
      <a className="plugin-card">
        <div className="icon-container">
          <SVGCog width="40px" />
        </div>

        <div className="data">
          <h5>{name}</h5>
          <span className="author">Developer</span>
          <span className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
          <span className="rating">
            <div className="info">
              <SVGCog width="14px" />
              <span>4.2</span>
            </div>

            <span className="separator" />

            <div className="info">
              <SVGCog width="14px" />
              <span>1,000,000+</span>
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
            min-width: calc(33.3333% - 10px);
            max-width: calc(33.3333% - 10px);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }

          .plugin-card:hover {
            box-shadow: 0px 16px 16px 0px rgba(0, 0, 0, 0.1);
          }

          .plugin-card .icon-container {
            margin-right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
            opacity: 0.7;
          }

          .plugin-card .data {
            display: flex;
            flex-direction: column;
          }

          .plugin-card .data .author {
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            margin-top: 2px;
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
