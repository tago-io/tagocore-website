import { memo } from "react";
import imgTagoIOLogoColor from "../../assets/tagoio-logo-color.png";

/**
 * Main footer of the application.
 */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <div className="page-max-width">
        <div className="copyright">
          <img alt="tagoio-logo" src={imgTagoIOLogoColor.src} width="107px" height="30px" />
          <div>Copyright © {year} TagoIO, Inc. All rights reserved.</div>
        </div>
      </div>

      <style jsx>{`
        .page-footer {
          background: rgb(245, 245, 245);
          padding: 50px 0px;
          position: relative;
        }

        .page-footer .copyright {
          margin-top: 30px;
        }

        .page-footer .copyright img {
          height: 30px;
          width: auto;
          margin-bottom: 5px;
          margin-right: 25px;
        }

        .page-footer .copyright div {
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </footer>
  );
}

export default memo(Footer);
