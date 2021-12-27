import SVGMicroChip from "../../SVG/SVGMicroChip";
import SVGTagoCoreBlack from "../../../assets/logos/tagocore-black.svg";

/**
 * This is the "TagoCore" square in the "Already a Customer?" section.
 */
function TagoCoreSquare() {
  return (
    <div className="tagocore-square">
      <div className="icon">
        <SVGMicroChip className="chip1" width="40px" />
        <SVGMicroChip className="chip2" width="30px" />
        <SVGMicroChip className="chip3" width="80px" />
      </div>

      <div className="item">
        <SVGTagoCoreBlack width="160px" height="35px" />
      </div>

      <style jsx>{`
        .tagocore-square {
          display: flex;
          flex-direction: column;
        }

        .tagocore-square .icon {
          position: relative;
          height: 80px;
        }

        .tagocore-square .icon :global(.chip1) {
          position: absolute;
          right: 45px;
          top: 10px;
          transform: rotate(20deg);
        }

        .tagocore-square .icon :global(.chip2) {
          position: absolute;
          right: 45px;
          top: 60px;
          transform: rotate(-10deg);
        }

        .tagocore-square .icon :global(.chip3) {
          position: relative;
          right: 25px;
          top: 15px;
          transform: rotate(-20deg);
        }

        .tagocore-square .item {
          padding: 60px 0px;
          width: 200px;
          border-radius: 10px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
          background: white;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .tagocore-square .item img {
          height: 35px;
          width: auto;
          max-width: 80%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}

export default TagoCoreSquare;
