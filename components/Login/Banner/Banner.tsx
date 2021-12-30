import { memo } from "react";
import SVGPlug from "../../../assets/icons/plug.svg";
import SVGPuzzle from "../../../assets/icons/puzzle-piece.svg";

/**
 * Props.
 */
interface IBannerProps {
  animate?: boolean;
}

/**
 */
function Banner(props: IBannerProps) {
  const { animate } = props;

  return (
    <div className={`banner ${animate ? "animate" : ""}`}>
      <div className="stripe" />
      <div className="panel" />

      <div className="plugs">
        <div className="plug-in">
          <SVGPlug width="150px" fill="white" />
        </div>

        <div className="plug-out">
          <SVGPlug width="150px" fill="white" />
        </div>
      </div>

      <div className="text">Sign in to start managing Plugins.</div>

      <div className="puzzle" style={{ transform: "scale(0)" }}>
        <SVGPuzzle fill="black" />
        <div className="spin" />
      </div>

      <style jsx>{`
        .banner {
          width: 500px;
          height: 100%;
          background: black;
          position: relative;
        }

        .banner .text {
          color: white;
          left: 50%;
          top: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
          text-align: center;
          font-weight: bold;
          font-size: 1.6rem;
          transition: opacity 0.5s;
        }

        .banner .puzzle {
          left: 50%;
          top: 50%;
          position: absolute;
          transform: translate(-50%, -50%) scale(0) !important;
          background: white;
          border-radius: 50%;
          width: 190px;
          height: 190px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }

        .banner .puzzle :global(svg) {
          width: 100px;
        }

        .banner .plug-in {
          bottom: calc(50% - 50px);
          left: 50%;
          position: absolute;
          transform: translate(-50%, 100%);
          z-index: 1;
          transition: bottom 0.305s;
        }

        .banner .plug-out {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -100%);
          top: calc(50% + 20px);
          transition: top 0.305s;
        }

        .banner .plug-out::after {
          content: "";
          background: black;
          position: absolute;
          width: 100%;
          left: 0px;
          bottom: 0px;
          height: 60px;
        }

        .banner .plug-out :global(svg) {
          transform: rotate(180deg);
        }

        .banner .stripe {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0%);
          background: white;
          width: 25.5px;
          height: 100%;
          transition: width 0.3s;
        }

        .banner .panel {
          position: absolute;
          left: 50%;
          top: calc(50% + 20px);
          transform: translate(-50%, -50%);
          background: black;
          width: 100%;
          height: 270px;
          transition: height 0.305s;
        }

        /* Animation: */

        .banner.animate .plug-in {
          bottom: calc(50% + 70px);
          transform: translate(-50%, 100%);
          transition: bottom 0.677s;
          transition-timing-function: cubic-bezier(0.81, -1.04, 0.58, 0.8);
        }

        .banner.animate .plug-out {
          top: calc(50% + 73px);
          transform: translate(-50%, -100%);
          transition: top 0.677s;
          transition-timing-function: cubic-bezier(0.81, -1.04, 0.58, 0.8);
        }

        .banner.animate .panel {
          height: 0px;
          transition: height 0.677s;
          transition-delay: 0.3s;
        }

        .banner.animate .puzzle {
          transform: translate(-50%, -50%) scale(1) !important;
          transition: transform 0.3s;
          transition-delay: 0.5s;
          transition-timing-function: cubic-bezier(0.06, 0.99, 0.39, 1.16);
        }

        .banner.animate .text {
          opacity: 0;
        }

        @keyframes a {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .banner.animate .puzzle .spin {
          border-radius: 50%;
          width: 210px;
          height: 210px;
          border-right: 2px solid white;
          border-top: 2px solid white;
          animation: a 0.5s linear infinite;
          position: absolute;
        }

        .banner.animate .stripe {
          background: white;
          width: 40px;
          transition: width 0.3s;
          transition-delay: 0.3s;
          transition-timing-function: linear;
        }
      `}</style>
    </div>
  );
}

export default memo(Banner);
