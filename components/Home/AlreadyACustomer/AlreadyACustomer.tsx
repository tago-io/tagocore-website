import TagoCoreSquare from "./TagoCoreSquare";
import TagoIOSquare from "./TagoIOSquare";
import TagoRunSquare from "./TagoRunSquare";

/**
 * Shows the "Already a Customer?" section.
 */
function AlreadyACustomer() {
  return (
    <div className="sync-tagoio">
      <div className="title">
        <h2>Already a&nbsp;</h2>
        <h2 className="text-gradient-primary">TagoIO Customer</h2>
        <h2>?</h2>
      </div>

      <div className="description">
        <span>
          TagoCore enables you to synchronize the data between the <b>TagoIO IoT cloud platform</b> and your{" "}
          <b>TagoCore data</b>.
        </span>
        <br />
        <span>This means everything you see on your TagoCore is also safely stored on the cloud!</span>
      </div>

      <div className="data">
        <TagoCoreSquare />

        <div className="connection">
          <div />
          <div />
        </div>

        <TagoIOSquare />

        <div className="connection">
          <div />
          <div />
        </div>

        <TagoRunSquare />
      </div>

      <style jsx>{`
        .sync-tagoio {
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
        }

        .sync-tagoio .title {
          margin-bottom: 20px !important;
        }

        .sync-tagoio .description {
          padding-bottom: 40px;
        }

        .sync-tagoio .data {
          display: flex;
          align-items: center;
          max-width: calc(100% - 40px);
        }

        .sync-tagoio .data .connection {
          display: flex;
          flex-direction: column;
          margin-top: 80px;
        }

        .sync-tagoio .data .connection > div {
          width: 100px;
          height: 0px;
          border-top: 5px dashed rgb(210, 210, 210);
        }

        .sync-tagoio .data .connection > div:first-child {
          margin-bottom: 20px;
        }

        @media screen and (max-width: 992px) {
          .sync-tagoio .data .connection {
            width: 60px;
          }
        }

        @media screen and (max-width: 768px) {
          .sync-tagoio .data .connection {
            flex-direction: row;
            justify-content: center;
            margin-top: 0px;
            margin-bottom: -80px;
          }

          .sync-tagoio .data .connection > div:first-child {
            margin-right: 20px;
            margin-bottom: 0px;
          }

          .sync-tagoio .data .connection > div {
            border-right: 5px dashed rgb(210, 210, 210);
            width: 0px;
            height: 150px;
          }

          .sync-tagoio .data {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default AlreadyACustomer;
