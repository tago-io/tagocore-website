import SVGAngleRight from "../../SVG/SVGAngleRight";
import Link from "next/link";
import { theme } from "../../../styles/Theme";

/**
 * Renders the breadcrumbs above the plugin details.
 */
function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <span>
        <Link href="/pluginstore">
          <a>Plugin Store</a>
        </Link>
      </span>

      <SVGAngleRight width="8px" />

      <span>Plugin #1</span>

      <style jsx>{`
        .breadcrumb {
          display: flex;
          margin-bottom: 20px;
        }

        .breadcrumb :global(svg) {
          margin: 0px 10px;
          opacity: 0.25;
        }

        .breadcrumb a {
          cursor: pointer;
          font-weight: 500;
          opacity: 0.8;
        }

        .breadcrumb span:hover {
          opacity: 1;
        }

        .breadcrumb span:hover * {
          color: ${theme.colors.link};
        }
      `}</style>
    </div>
  );
}

export default Breadcrumb;
