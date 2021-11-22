import { memo } from "react";
import imgTagoIOLogoColor from "../../assets/tagoio-logo.svg";
import Image from "next/image";

/**
 * Main footer of the application.
 */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <div className="page-max-width">
        <div className="copyright">
          <div className="image">
            <Image alt="tagoio-logo" src={imgTagoIOLogoColor} width="107px" height="30px" />
          </div>
          <div>Copyright © {year} TagoIO, Inc. All rights reserved.</div>
        </div>
      </div>

      <style jsx>{`
        .page-footer {
          background: rgb(245, 245, 245);
          padding: 50px 0px;
          position: relative;
          z-index: 100;
        }

        .page-footer .copyright {
          margin-top: 30px;
        }

        .page-footer .copyright .image {
          margin-bottom: 5px;
        }

        .page-footer .copyright div {
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </footer>
  );
}

export default memo(Footer);
