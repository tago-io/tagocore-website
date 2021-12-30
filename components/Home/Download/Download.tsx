import SVGClock from "../../SVG/SVGClock";
import SVGDownload from "../../SVG/SVGDownload";
import Button from "../../Common/Button/Button";
import EarlyAccessButton from "../../EarlyAccessButton/EarlyAccessButton";
import SVGLinux from "../../../assets/logos/linux.svg";
import SVGWindows from "../../../assets/logos/windows.svg";
import SVGApple from "../../../assets/logos/apple.svg";

/**
 * Download section of the home page.
 */
function Download() {
  return (
    <div className="download page-max-width">
      <div className="inner-download" aria-disabled="true">
        <div>
          <h2>Download TagoCore</h2>
        </div>

        <div className="description">A fast IoT platform, forever free and built on open source.</div>

        <div className="row">
          <div className="column">
            <div className="logo-container">
              <SVGWindows height="100px" />
            </div>

            <div className="main-button-container">
              <Button className="main-button">
                <div className="main">
                  <SVGDownload width="12px" height="12px" />
                  <span> Windows</span>
                </div>
                <div className="small">Windows 7, 8, 10, 11</div>
              </Button>
            </div>

            <table>
              <tbody>
                <tr>
                  <td>User Installer</td>
                  <td>
                    <Button>64 bit</Button>
                  </td>
                  <td>
                    <Button>32 bit</Button>
                  </td>
                </tr>
                <tr>
                  <td>System Installer</td>
                  <td>
                    <Button>64 bit</Button>
                  </td>
                  <td>
                    <Button>32 bit</Button>
                  </td>
                </tr>
                <tr>
                  <td>.zip</td>
                  <td>
                    <Button>64 bit</Button>
                  </td>
                  <td>
                    <Button>32 bit</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="column">
            <div className="logo-container">
              <SVGLinux height="100px" />
            </div>

            <div className="main-button-container">
              <Button className="main-button">
                <div className="main">
                  <SVGDownload width="12px" height="12px" />
                  <span> .deb</span>
                </div>
                <div className="small">Debian, Ubuntu</div>
              </Button>

              <Button className="main-button">
                <div className="main">
                  <SVGDownload width="12px" height="12px" />
                  <span> .rpm</span>
                </div>
                <div className="small">Red Hat, Fedora, SUSE</div>
              </Button>
            </div>

            <table>
              <tbody>
                <tr>
                  <td>.deb</td>
                  <td>
                    <Button>64 bit</Button>
                  </td>
                  <td>
                    <Button>ARM</Button>
                  </td>
                  <td>
                    <Button>ARM 64</Button>
                  </td>
                </tr>
                <tr>
                  <td>.rpm</td>
                  <td>
                    <Button>64 bit</Button>
                  </td>
                  <td>
                    <Button>ARM</Button>
                  </td>
                  <td>
                    <Button>ARM 64</Button>
                  </td>
                </tr>
                <tr>
                  <td>.zip</td>
                  <td>
                    <Button>64 bit</Button>
                  </td>
                  <td>
                    <Button>ARM</Button>
                  </td>
                  <td>
                    <Button>ARM 64</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="column">
            <div className="logo-container">
              <SVGApple width="100px" height="100px" />
            </div>

            <div className="main-button-container">
              <Button className="main-button">
                <div className="main">
                  <SVGDownload width="12px" height="12px" />
                  <span> Mac</span>
                </div>
                <div className="small">macOS 10.11+</div>
              </Button>
            </div>

            <table>
              <tbody>
                <tr>
                  <td>.zip</td>
                  <td>
                    <Button>Intel Chip</Button>
                  </td>
                  <td>
                    <Button>Apple Silicon</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="coming-soon">
        <div className="message">
          <SVGClock width="12px" height="12px" />
          <span>&nbsp;Downloads coming soon</span>
        </div>

        <EarlyAccessButton />
      </div>

      <style jsx>{`
        .download {
          position: relative;
        }

        .download .coming-soon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 5px;
          padding: 20px 60px;
          background: white;
          z-index: 2;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          white-space: nowrap;
          flex-direction: column;
          width: 600px;
          max-width: 100%;
          border: 1px solid black;
        }

        .download td:first-child {
          padding-right: 10px;
        }

        .download .coming-soon .message {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          width: 100%;
          justify-content: center;
          margin-bottom: 20px;
          padding-bottom: 20px;
        }

        .download .coming-soon .message :global(svg) {
          opacity: 0.5;
          margin-right: 5px;
        }

        .download .inner-download {
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }

        .download h2 {
          margin-bottom: 20px;
        }

        .download .description {
          margin-bottom: 60px;
        }

        .download .row {
          flex: 1;
          display: flex;
          width: 100%;
          justify-content: center;
        }

        .download .column {
          flex: 1;
          margin: 10px;
        }

        .download .column .logo-container img {
          width: 100px;
          height: 100px;
          object-fit: contain;
        }

        .download .column :global(button) {
          flex-direction: column;
        }

        .download .column :global(button) .main {
          margin-bottom: 3px;
        }

        .download .column :global(button) .small {
          font-size: 12px;
        }

        .download .column .main-button-container :global(button) {
          margin: 5px 5px;
          flex: 1;
          width: 200px;
        }

        .download .column .main-button-container {
          margin: 30px 0px;
        }

        .download .column table {
          margin: 0 auto;
        }

        .download .column .options .option > span {
          display: inline-block;
        }

        .download .column table :global(button) {
          padding: 3px 5px;
          font-size: 12px;
        }

        @media screen and (max-width: 992px) {
          .download .inner-download .row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default Download;
