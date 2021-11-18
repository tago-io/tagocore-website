import SVGAngleRight from "../../SVG/SVGAngleRight";
import Link from "next/link";

/**
 * Renders the breadcrumbs above the plugin details.
 */
function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <span>
        <Link href="/marketplace">
          <a>App Marketplace</a>
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
          color: #337ab7;
        }
      `}</style>
    </div>
  );
}

export default Breadcrumb;
