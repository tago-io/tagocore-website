import imgTagoIOLogoColor from "../../../assets/tagoio-logo-color.png";
import imgTagoCoreLogoColor from "../../../assets/tagocore-logo-color.png";

function SyncTagoIO() {
  return (
    <div className="sync-tagoio">
      <div>
        <h2>Already a&nbsp;</h2>
        <h2 className="text-gradient-primary">TagoIO Customer</h2>
        <h2>?</h2>
      </div>

      <div className="description">
        <span>
          TagoCore enables you to synchronize the data between the <b>TagoIO IoT cloud platform</b>{" "}
          and your local data.
        </span>
        <br />
        <span>This means everything you see on your TagoCore is also on the cloud!</span>
      </div>

      <div className="data">
        <div className="item tagocore">
          <img alt="logo-tagocore" src={imgTagoCoreLogoColor.src} />
        </div>

        <div>
          <div className="connection" style={{ marginBottom: "10px" }}>
            <div className="data-point bg-primary" />
          </div>

          <div className="connection" style={{ marginTop: "20px" }}>
            <div className="data-point bg-primary" />
          </div>
        </div>

        <div className="item tagoio">
          <img alt="logo-tagoio" src={imgTagoIOLogoColor.src} />
          <div className="aa bg-primary" />
        </div>
      </div>

      <style jsx>{`
        .sync-tagoio {
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
        }

        .sync-tagoio h2 {
          margin-bottom: 20px !important;
        }

        .sync-tagoio .data {
          display: flex;
          align-items: center;
          padding-top: 60px;
          max-width: calc(100% - 40px);
        }

        .sync-tagoio .data .item {
          padding: 80px 0px;
          width: 300px;
          border-radius: 10px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
          background: white;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .sync-tagoio .data .item img {
          height: 40px;
          width: auto;
          max-width: 80%;
          object-fit: contain;
        }

        .sync-tagoio .data .connection {
          width: 150px;
          height: 0px;
          border-top: 5px dashed rgb(210, 210, 210);
        }

        /* @keyframes animation-data-point {
          0% { left: -20%; }
          80% { left: 110%; }
          100% { left: 110%; }
        }

        .sync-tagoio .data .connection .data-point {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          position: relative;
          top: 50%;
          transform: translate(0%, -50%);
          animation: animation-data-point 2s linear infinite;
        }

        @keyframes animation-waves {
          0% { width: 0px; height: 0px; opacity: 0.5 }
          25% { width: 0px; height: 0px; opacity: 0.5 }
          80% { width: 80px; height: 80px; opacity: 0 }
          100% { width: 80px; height: 80px; opacity: 0 }
        }

        .sync-tagoio .data .item .aa {
          width: 0px;
          height: 0px;
          border-radius: 50%;
          position: absolute;
          left: 0px;
          top: calc(50% + 1px);
          transform: translate(-50%, -50%);
          animation: animation-waves 2s ease-in-out infinite;
        } */

        @media screen and (max-width: 768px) {
          .sync-tagoio .data .connection {
            width: 75px;
          }
        }

      `}</style>
    </div>
  );
}

export default SyncTagoIO;
