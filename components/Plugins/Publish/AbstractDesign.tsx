import SVGPuzzlePiece from "../../SVG/SVGPuzzlePiece";
import { theme } from "../../../styles/Theme";
import Link from "next/link";

/**
 * Component that handles publishing/submitting a plugin.
 */
function AbstractDesign() {
  /**
   * Renders a link.
   */
  const renderLink = (href: string, text: string) => {
    return (
      <Link href={href}>
        <a>{text}</a>
      </Link>
    );
  };

  return (
    <div className="abstract-design">
      <div className="main-square">
        <SVGPuzzlePiece width="110px" />
      </div>

      <h3 className="explanation">
        <h3>Build. Test. Publish.</h3>

        <ul>
          <li className="description">Looking to build a Plugin? Check out our {renderLink("/", "documentation")}.</li>
          <li className="description" style={{ marginTop: "15px" }}>
            Looking to test your Plugin? Read about our {renderLink("/", "best practices")}.
          </li>
          <li className="description" style={{ marginTop: "15px" }}>
            Looking to publish your Plugin? Fill the form on the left side or {renderLink("/", "learn more")} about
            publishing Plugins.
          </li>
        </ul>
      </h3>

      <style jsx>{`
        .abstract-design {
          width: 380px;
          flex: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-left: 50px;
          background: white;
          border-radius: 7px;
          padding: 0px 30px;
          padding-bottom: 20px;
          background: rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .abstract-design .explanation {
          display: flex;
          font-weight: normal;
          flex-direction: column;
          z-index: 2;
          margin-top: 25px;
        }

        .abstract-design .explanation ul {
          margin-top: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          padding-left: 20px;
        }

        .abstract-design .explanation h3 {
          font-family: monospace;
          font-size: 1.4rem;
          margin: 0 auto;
        }

        .abstract-design :global(svg) {
          fill: white;
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .abstract-design .main-square {
          flex: none;
          background: black;
          width: 120%;
          height: 180px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
          transform: (2deg);
          box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

export default AbstractDesign;
