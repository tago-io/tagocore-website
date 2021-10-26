import imgTagoIOLogoColor from "../../assets/tagoio-logo-color.png";

/**
 * Main footer of the application.
 */
function Footer() {
  return (
    <footer className="page-footer">
      <div className="stripe bg-primary" />

      <div className="page-max-width">
        <div className="copyright">
          <img alt="tagoio-logo" src={imgTagoIOLogoColor.src} />
          <div>Copyright © 2021 TagoIO, Inc. All rights reserved.</div>
        </div>
      </div>

      <style jsx>{`
        .page-footer {
          background: rgb(245, 245, 245);
          padding: 50px 0px;
          position: relative;
        }

        .page-footer .columns {
          display: flex;
          flex: 1;
        }

        .page-footer .column {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .page-footer .stripe {
          height: 1px;
          width: 100%;
          position: absolute;
          top: 0px;
        }

        .page-footer .column h4 {
          margin-bottom: 15px;
        }

        .page-footer .column a {
          display: inline-block;
          color: rgba(0, 0, 0, 0.4);
          text-decoration: none;
          margin-bottom: 3px;
        }

        .page-footer .column a:hover {
          color: rgba(0, 0, 0, 1);
        }

        .page-footer .copyright {
          margin-top: 30px;
        }

        .page-footer .copyright img {
          height: 30px;
          margin-bottom: 5px;
          margin-right: 25px;
        }

        .page-footer .copyright div {
          color: rgba(0, 0, 0, 0.4);
        }

      `}</style>
    </footer>
  );
}

export default Footer;
