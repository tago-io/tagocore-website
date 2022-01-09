import Console from "../Console/Console";

/**
 * Banner with an image to explain plugins and how to build them.
 */
function AddMissingPiece() {
  return (
    <div className="a page-max-width">
      <div className="cc">
        <div />
      </div>

      <div className="title">
        <h1>Add the missing piece.</h1>
        <div className="description">
          With TagoCore SDK, you can build your very own <b>plugins</b>.
        </div>

        <span>
          <br />
          Plugins allow you to perform any kind of task in the system, such as adding different types of parsers,
          options, and screens.
        </span>
      </div>

      <div className="bb">
        <Console title="Create a Plugin">
          <div>
            <span className="arrow">→</span>
            <span className="user">~/tagocore-user/my-plugin</span>
            <span>$ tagocore init-plugin</span>
          </div>

          <br />

          <div>This utility will walk you through creating a TagoCore plugin.</div>
          <div>First we will start by creating a plugin manifest.</div>

          <br />

          <div>See `tagocore plugin-help-init` for a guide.</div>

          <br />

          <div>Press ^C at any time to quit.</div>

          <br />

          <div>Name: my-plugin</div>
          <div>Version: 1.0.0</div>
          <div>Description: This is my first plugin</div>
          <div>License: ISC</div>
          <div>Author: John Doe</div>

          <br />

          <div>Done. Happy editing!</div>
        </Console>
      </div>

      <style jsx>{`
        .a {
          display: flex;
          position: relative;
          padding-top: 250px;
          padding-bottom: 100px;
        }

        .a .description,
        .a .description * {
          font-size: 1.3rem;
          color: rgba(0, 0, 0, 0.7);
        }

        .a .title span {
          color: rgba(0, 0, 0, 0.6);
        }

        .a .cc {
          border: 2px solid rgba(0, 0, 0, 0.2);
          position: absolute;
          height: 100%;
          z-index: -1;
          margin-left: 20px;
          top: 0px;
        }

        .a .cc > div {
          position: absolute;
          background: black;
          padding: 5px;
          border-radius: 50%;
          border: 3px solid black;
          top: 270px;
          left: 50%;
          transform: translate(-50%, 0);
        }

        .a .title {
          flex: 1;
          margin-left: 50px;
        }

        .a .bb {
          flex: 1.2;
          margin-left: 40px;
        }
      `}</style>
    </div>
  );
}

export default AddMissingPiece;
