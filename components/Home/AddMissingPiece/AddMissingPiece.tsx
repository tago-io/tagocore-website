import Link from "next/link";
import { theme } from "../../../styles/Theme";
import Console from "../Console/Console";

/**
 */
function AddMissingPiece() {
  return (
    <div className="add-missing-piece page-max-width">
      <div className="inner">
        <div className="text">
          <div className="title">
            <span className="ball" />
            <h2>Add the missing piece</h2>
          </div>

          <div className="description">
            <span>
              You can build your very own plugins that are able to perform any kind of task in the system, such as
              adding different types of parsers, options, and screens.&nbsp;
            </span>
            <a href="https://tagocore.com/docs">Learn how to build plugins</a>
            <span>.</span>
          </div>

          <div></div>
        </div>

        <div className="console-container">
          <Console title="Create your own Plugin">
            <div>
              <span className="arrow">→</span>
              <span className="user">~/plugin</span>
              <span>$ tagocore init-plugin{"\n\n"}</span>
            </div>

            <div className="console-color-description">
              <div>This utility will walk you through creating a TagoCore plugin.{"\n\n"}</div>
            </div>

            <div>
              <span className="user">Name:</span>
              <span>my-plugin</span>
            </div>
            <div>
              <span className="user">Version:</span>
              <span>1.0.0</span>
            </div>
            <div>
              <span className="user">Description:</span>
              <span>This is my first plugin</span>
            </div>
            <div>
              <span className="user">License:</span>
              <span>ISC</span>
            </div>
            <div>
              <span className="user">Author:</span>
              <span>John Doe</span>
            </div>
            <br />
            <div>
              <span className="user">✔ Done</span>
              <span>- Happy editing!</span>
            </div>
          </Console>
        </div>
      </div>

      <style jsx>{`
        .add-missing-piece .inner {
          display: flex;
          position: relative;
          padding-top: 100px;
          padding-bottom: 100px;
          border-left: 5px dashed rgba(0, 0, 0, 0.2);
          margin-left: 40px;
        }

        .add-missing-piece .text .description {
          margin-top: 10px;
          color: rgba(0, 0, 0, 0.6);
        }

        .add-missing-piece .text .description * {
          font-size: 1.1rem;
        }

        .add-missing-piece .text :global(a) {
          color: ${theme.colors.link} !important;
        }

        .add-missing-piece .text .title {
          position: relative;
          display: flex;
          align-items: center;
        }

        .add-missing-piece .inner .text .ball {
          background: black;
          padding: 5px;
          width: 5px;
          height: 5px;
          flex: none;
          position: absolute;
          left: calc(-50px);
          transform: translate(0%, 0%);
          border-radius: 50%;
          box-sizing: content-box;
          border: 10px solid white;
        }

        .add-missing-piece .text {
          flex: 1;
          margin-left: 30px;
          margin-right: 40px;
        }

        .add-missing-piece .console-container {
          flex: 1;
        }

        @media only screen and (max-width: 992px) {
          .add-missing-piece .inner .text .ball {
            left: calc(-50px + 10px);
          }

          .add-missing-piece .text {
            flex: 1;
            margin-left: 20px;
          }

          .add-missing-piece .inner {
            display: flex;
            flex-direction: column;
          }

          .add-missing-piece .console-container {
            margin-top: 20px;
            width: calc(100% + 25px);
            margin-left: -35px;
          }
        }

        @media only screen and (max-width: 768px) {
          .add-missing-piece .inner .text .ball {
            left: calc(-50px + 11px);
          }

          .add-missing-piece .inner {
            border-left: 2px dashed rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
    </div>
  );
}

export default AddMissingPiece;
