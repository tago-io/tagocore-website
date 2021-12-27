import SVGTagoIO from "../../../assets/logos/tagoio-logo.svg";
import SVGCog from "../../SVG/SVGCog";
import SVGCloud from "../../SVG/SVGCloud";
import SVGDatabase from "../../SVG/SVGDatabase";
import { theme } from "../../../styles/Theme";

/**
 * This is the "TagoIO" square in the "Already a Customer?" section.
 */
function TagoIOSquare() {
  return (
    <div className="tagoio-square">
      <div className="icon">
        <SVGCog className="cog" width="60px" />
        <SVGCloud className="cloud" width="100px" />
        <SVGDatabase className="database" width="30px" />
      </div>

      <div className="item">
        <SVGTagoIO width="125px" height="35px" />
      </div>

      <style jsx>{`
        .tagoio-square {
          display: flex;
          flex-direction: column;
        }

        .tagoio-square .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 80px;
        }

        .tagoio-square .icon :global(svg) {
          fill: ${theme.colors.tagoIO};
        }

        .tagoio-square .icon :global(.database) {
          position: absolute;
          z-index: 1;
          fill: white;
          margin-top: 30px;
        }

        .tagoio-square .icon :global(.database) :global(*) {
          fill: white;
        }

        .tagoio-square .icon :global(.cloud) {
          margin-top: 20px;
        }

        .tagoio-square .icon :global(.cog) {
          opacity: 0.5;
          position: absolute;
          margin-top: -12px;
          margin-right: -52px;
        }

        .tagoio-square .item {
          padding: 60px 0px;
          width: 200px;
          border-radius: 10px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
          background: white;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .tagoio-square .item img {
          height: 35px;
          width: auto;
          max-width: 80%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}

export default TagoIOSquare;
