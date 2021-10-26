import { useCallback, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import logoColor from "../../assets/tagocore-logo-color.png";
import Link from "../Link/Link";

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
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (document?.scrollingElement) {
        const isScrolled = document.scrollingElement.scrollTop > 0;
        setShadow(isScrolled);
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.addEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`page-header ${shadow ? "shadow" : ""}`}>
      <div className="page-max-width">
        <div className="left">
          <img className="logo" src={logoColor.src} alt="logo" />
        </div>

        <div className="right">
          <span onClick={onClickPlugins} className="item">Plugins</span>
          <span onClick={onClickPricing} className="item">Pricing</span>
          <span onClick={onClickDownload} className="item">Download</span>
          <span title="Coming soon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z"
                clipRule="evenodd"
              ></path>
            </svg>
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
          opacity: 0.65;
        }

        .page-header .right .item:last-child {
          margin-right: -25px;
        }

        .page-header .right .item:hover {
          color: #093a63;
          opacity: 1;
        }

        .page-header .right span {
          display: flex;
          margin-left: 20px;
        }

        .page-header .right svg {
          opacity: 0.3;
          pointer-events: none;
        }

        .page-header svg {
          width: 22px;
        }

        @media screen and (max-width: 768px) {
          .page-header a, .page-header span, .page-header svg {
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
