import { memo } from "react";
import SVGTagoIO from "../../assets/logos/tagoio-logo.svg";
import { theme } from "../../styles/Theme";

/**
 * Main footer of the application.
 */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="page-footer">
        <div className="page-max-width">
          <div className="copyright">
            <div className="image">
              <SVGTagoIO width="107px" />
            </div>
            <div>Copyright © {year} TagoIO, Inc. All rights reserved.</div>
          </div>
        </div>

        <style jsx>{`
          .page-footer {
            background: rgb(245, 245, 245);
            z-index: 100;
            width: 100%;
            height: ${theme.sizes.footerHeight}px;
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0px;
          }

          .page-footer .copyright .image {
            margin-bottom: 5px;
          }

          .page-footer .copyright div {
            color: rgba(0, 0, 0, 0.6);
          }
        `}</style>
      </footer>

      <div className="invisible-footer">
        <style jsx>{`
          .invisible-footer {
            height: ${theme.sizes.footerHeight}px;
          }
        `}</style>
      </div>
    </>
  );
}

export default memo(Footer);
