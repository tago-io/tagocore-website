import imgTagoRunLogoColor from "../../../assets/tagorun-logo-color.png";
import SVGUser from "../../SVG/SVGUser";
import Image from "next/image";

/**
 * This is the "TagoRun" square in the "Already a Customer?" section.
 */
function TagoRunSquare() {
  return (
    <div className="tagorun-square">
      <div className="icon">
        <div className="users">
          <SVGUser className="fill-tagorun" width="55px" />
          <SVGUser className="fill-tagorun" width="55px" />
          <SVGUser className="fill-tagorun" width="55px" />
        </div>
      </div>

      <div className="item">
        <Image alt="logo-tagorun" src={imgTagoRunLogoColor.src} width="151px" height="38px" />
      </div>

      <style jsx>{`
        .tagorun-square {
          display: flex;
          flex-direction: column;
        }

        .tagorun-square .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 80px;
        }

        .tagorun-square .icon .users {
          display: flex;
          margin-top: 25px;
        }

        .tagorun-square .icon .users :global(svg) {
          margin: 0px 2px;
        }

        .tagorun-square .item {
          padding: 60px 0px;
          width: 200px;
          border-radius: 10px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
          background: white;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .tagorun-square .item img {
          height: 35px;
          width: auto;
          max-width: 80%;
          object-fit: contain;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default TagoRunSquare;
