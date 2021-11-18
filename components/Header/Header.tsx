import { useEffect, useState } from "react";
import imgLogoColor from "../../assets/tagocore-logo-color.png";
import SVGGithub from "../SVG/SVGGithub";
import Link from "next/link";
import Image from "next/image";
import { theme } from "../../styles/Theme";

/**
 * Main header of the application, it contains the logo on the left side and some
 * links/anchors on the right side to direct the user.
 */
function Header() {
  const [shadow, setShadow] = useState(false);

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
    <header className={`header ${shadow ? "shadow" : ""}`}>
      <div className="page-max-width">
        <div className="left">
          <Link href="/">
            <a>
              <Image alt="main-logo" src={imgLogoColor} layout="fixed" width={147} height={30} />
            </a>
          </Link>
        </div>

        <div className="right">
          <Link href="/marketplace">
            <a className="item color-primary-hover">Marketplace</a>
          </Link>

          <Link href="/marketplace/publish">
            <a className="item color-primary-hover">Publish</a>
          </Link>

          <Link href="/#download">
            <a className="item color-primary-hover">Download</a>
          </Link>

          <span className="github-container" title="Coming soon">
            <SVGGithub width="22px" />
          </span>
        </div>
      </div>

      <style jsx>{`
        .header {
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

        .header .page-max-width {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .header.shadow {
          background: white;
          box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.15);
        }

        .header .logo {
          height: 30px;
          width: auto;
        }

        .header .left {
          display: flex;
          flex: 1;
        }

        .header .right {
          display: flex;
          flex: none;
        }

        .header .right .item {
          padding: 10px 25px;
          cursor: pointer;
        }

        .header .right .item:last-child {
          margin-right: -25px;
        }

        .header .right .github-container {
          display: flex;
          margin-left: 20px;
        }

        .header .right :global(a) {
          margin-left: 20px;
          color: ${theme.colors.body};
        }

        .header .right :global(svg) {
          opacity: 0.3;
          pointer-events: none;
        }

        @media screen and (max-width: 768px) {
          .header .right .item,
          .header :global(svg) {
            display: none;
          }
          .header .left {
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
