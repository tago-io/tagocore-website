import { theme } from "../../../styles/Theme";
import SVGAngleRight from "../../SVG/SVGAngleRight";

/**
 * Renders the resources section of the plugin details page.
 */
function Resources() {
  return (
    <div className="resources">
      <div className="item">
        <SVGAngleRight width="8px" />
        Repository
      </div>

      <div className="item">
        <SVGAngleRight width="8px" />
        License
      </div>

      <div className="item">
        <SVGAngleRight width="8px" />
        Changelog
      </div>

      <div className="item">
        <SVGAngleRight width="8px" />
        Report abuse
      </div>

      <style jsx>{`
        .resources {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
        }

        .resources .item {
          margin-bottom: 3px;
          color: ${theme.colors.link};
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .resources .item :global(svg) {
          margin-right: 5px;
          fill: ${theme.colors.link};
        }
      `}</style>
    </div>
  );
}

export default Resources;
