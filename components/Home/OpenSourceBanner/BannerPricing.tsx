import SVGStar from "../../../assets/icons/star.svg";
import SVGGithub from "../../../assets/icons/github.svg";

/**
 */
function OpenSourceBanner() {
  return (
    <div className="a page-max-width">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <h2>
            <SVGGithub width="35px" fill="white" style={{ marginRight: "15px" }} />
            It&apos;s free and open-source.
          </h2>

          <span className="description">There are no usage prices.</span>

          <br />
          <br />

          <div>
            TagoCore is and will forever be free.
            <br />
            We believe that great things should be accessible to everyone through open source code.
          </div>

          <br />
          <br />
        </div>
      </div>

      <span className="hove">
        <span>However...</span>
      </span>

      <div className="b">
        <SVGStar width="35px" />
        <span style={{ marginLeft: "15px" }}>
          You can, go beyond with our premium <b>TagoCore support!</b> <br />
          We offer exclusive support for any questions or implementation details you might have for a small monthly fee.
        </span>
      </div>

      <style jsx>{`
        .a {
          display: flex;
          position: relative;
          background: black;
          padding: 50px;
          border-radius: 20px;
          overflow: hidden;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .a h2 {
          display: flex;
          align-items: center;
        }

        .items {
          margin-left: 20px;
          flex: none;
          width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .item {
          border-radius: 10px;
          width: 100%;
          margin: 10px 0px;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item :global(svg) {
          margin-right: 7px;
        }

        .a .title {
        }

        .a .hove {
          margin-bottom: -10px;
          color: black;
          z-index: 111;
          font-size: 1.3rem;
          margin-left: 20px;
          font-weight: bold;
          display: inline-flex;
        }

        .a .hove span {
          background: white;
          padding: 5px 20px;
          border-radius: 10px;
        }

        .a .b {
          padding: 30px 20px;
          background: white;
          border-radius: 10px;
          color: black;
          display: flex;
          align-items: center;
        }

        .a .description {
          font-size: 1.3rem;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

export default OpenSourceBanner;
