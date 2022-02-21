import { useEffect, useState } from "react";
import SVGTagoCoreBlack from "../../../assets/logos/tagocore-black.svg";
import { theme } from "../../../styles/Theme";
import AccountDropdown from "../../Account/AccountDropdown/AccountDropdown";
import Link from "../../Common/Link/Link";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";

/**
 * Props.
 */
interface IHeaderProps {
  account: AccountInfo;
}

/**
 * Main header of the application, it contains the logo on the left side and some
 * links/anchors on the right side to direct the user.
 */
function Header(props: IHeaderProps) {
  const [shadow, setShadow] = useState(false);
  const { account } = props;

  /**
   * Controls if the shadow should appear or not based on the scroll of the document.
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
    <>
      <header className={`header ${shadow ? "shadow" : ""} ${account ? "logged-in" : ""}`}>
        <div className="page-max-width">
          <div className="left">
            <Link className="logo-container" href="/">
              <SVGTagoCoreBlack width="147px" />
            </Link>
          </div>

          <div className="right">
            <Link className="item color-primary-hover" href="/#pricing">
              Pricing
            </Link>

            <Link className="item color-primary-hover" href="/docs">
              Docs
            </Link>

            <Link className="item color-primary-hover" href="/#download">
              Download
            </Link>

            {account && (
              <>
                <AccountDropdown account={account} />
              </>
            )}
          </div>
        </div>

        <style jsx>{`
          .header {
            align-items: center;
            display: flex;
            height: ${theme.sizes.headerHeight}px;
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

          .header :global(.logo) {
            height: 2px;
            width: auto;
          }

          .header .left {
            display: flex;
            flex: 1;
          }

          .header :global(.logo-container) {
            display: flex;
          }

          .header .right {
            display: flex;
            align-items: center;
            flex: none;
          }

          .header .right > :global(.item) {
            padding: 10px 25px;
            cursor: pointer;
          }

          .header .right > :global(.item):last-child {
            margin-right: -25px;
          }

          .header .right :global(a) {
            color: ${theme.colors.primary};
          }

          @media only screen and (max-width: 992px) {
            .header .right > :global(.item) {
              display: none;
            }
            .header:not(.logged-in) .left {
              justify-content: center;
            }
          }

          @media only screen and (max-width: 768px) {
            .header .page-max-width {
              padding: 0px 10px;
            }
          }
        `}</style>
      </header>

      <div className="invisible-header">
        <style jsx>{`
          .invisible-header {
            height: ${theme.sizes.headerHeight}px;
          }
        `}</style>
      </div>
    </>
  );
}

export default Header;
