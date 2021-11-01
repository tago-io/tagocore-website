import { useCallback, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import logoColor from "../../assets/tagocore-logo-color.png";
import SVGGithub from "../SVG/SVGGithub";
import Link from "next/link";

/**
 * Main header of the application.
 */
function Header() {
  const [shadow, setShadow] = useState(false);

  /**
   * Called when the plugin is clicked.
   */
  const onClickPlugins = useCallback(() => {
    scroller.scrollTo("add-plugin", {
      duration: 500,
      smooth: true,
    });
  }, []);

  /**
   * Called when the pricing is clicked.
   */
  const onClickPricing = useCallback(() => {
    scroller.scrollTo("pricing", {
      duration: 500,
      smooth: true,
    });
  }, []);

  /**
   * Called when the download is clicked.
   */
  const onClickDownload = useCallback(() => {
    scroller.scrollTo("download", {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  }, []);

  /**
   * Controls if the shadow should appear or not based on the scroll event
   * of the document.
   */
  useEffect(() => {
    const onScroll = () => {
      if (document?.scrollingElement) {
        const useShadow = document.scrollingElement.scrollTop > 0;
        if (shadow !== useShadow) {
          setShadow(useShadow);
        }
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.addEventListener("scroll", onScroll);
  }, [shadow]);

  return (
    <header className={`page-header ${shadow ? "shadow" : ""}`}>
      <div className="page-max-width">
        <div className="left">
          <Link href="/">
            <a>
              <img className="logo" src={logoColor.src} alt="logo" width="147px" height="30px" />
            </a>
          </Link>
        </div>

        <div className="right">
          <span onClick={onClickPlugins} className="item color-primary-hover">
            Plugins
          </span>
          <span onClick={onClickPricing} className="item color-primary-hover">
            Pricing
          </span>
          <span onClick={onClickDownload} className="item color-primary-hover">
            Download
          </span>
          <span title="Coming soon">
            <SVGGithub width="22px" />
          </span>
        </div>
      </div>

      <style jsx>{`
        .page-header {
          align-items: center;
          display: flex;
          height: 60px;
          justify-content: space-between;
          position: fixed;
          top: 0px;
          transition: box-shadow 0.3s;
          width: 100%;
          z-index: 10;
        }

        .page-header .page-max-width {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .page-header.shadow {
          background: white;
          box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.15);
        }

        .page-header .logo {
          height: 30px;
          width: auto;
        }

        .page-header .left {
          display: flex;
          flex: 1;
        }

        .page-header .right {
          display: flex;
          flex: none;
        }

        .page-header .right .item {
          padding: 10px 25px;
          cursor: pointer;
        }

        .page-header .right .item:last-child {
          margin-right: -25px;
        }

        .page-header .right span {
          display: flex;
          margin-left: 20px;
        }

        .page-header .right :global(svg) {
          opacity: 0.3;
          pointer-events: none;
        }

        @media screen and (max-width: 768px) {
          .page-header .right .item,
          .page-header :global(svg) {
            display: none;
          }
          .page-header .left {
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
