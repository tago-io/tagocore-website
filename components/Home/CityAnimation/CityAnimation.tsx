import { theme } from "../../../styles/Theme";
import SVGBuilding from "../../../assets/icons/building.svg";
import SVGCar from "../../../assets/icons/car-side.svg";
import SVGCity from "../../../assets/icons/city.svg";
import SVGTree from "../../../assets/icons/tree.svg";
import SVGTagoCoreIcon from "../../../assets/logos/tagocore-favicon-black.svg";
import SVGMountain from "../../../assets/icons/mountain.svg";
import SVGIndustry from "../../../assets/icons/industry.svg";
import SVGHospital from "../../../assets/icons/hospital.svg";
import SVGCloud from "../../../assets/icons/cloud.svg";
import SVGTruck from "../../../assets/icons/truck.svg";
import SVGTagoIO from "../../../assets/logos/tagoio-logo-white.svg";
import DataPoint from "../DataPoint/DataPoint";
import EarlyAccessButton from "../EarlyAccessButton/EarlyAccessButton";

/**
 */
function CityAnimation() {
  return (
    <div className="page-max-width">
      <div className="title">
        <h2>Blazing fast Edge Computing</h2>
        <span className="description">
          TagoCore is a <b>free</b>, <b>fast</b>, and <b>open-source</b> IoT platform for edge computing
        </span>
        <div className="early-access">
          <EarlyAccessButton autoFocus />
        </div>
      </div>

      <div className="city-animation">
        <div className="content ">
          <div className="sun" />

          <div className="clouds">
            <SVGCloud width="60px" />
            <SVGCloud width="100px" />
            <SVGCloud width="160px" />
            <SVGCloud width="60px" />
            <SVGCloud width="100px" />
            <SVGCloud width="120px" />
          </div>

          <div className="trees-1">
            <SVGTree width="50px" />
            <SVGTree width="50px" />
          </div>

          <div className="bg mountains">
            <SVGMountain width="350px" />
            <SVGMountain width="250px" />
          </div>

          <div className="bg trees-2">
            <SVGTree width="40px" />
            <SVGTree width="40px" />
            <SVGTree width="40px" />
            <SVGTree width="30px" />
          </div>

          <div className="bg bg-building">
            <SVGTree width="30px" />
            <SVGTree width="30px" />
            <SVGCity width="120px" />
            <SVGBuilding width="120px" />
          </div>

          <div className="bg trees-3">
            <SVGTree width="80px" />
            <SVGTree width="60px" />
          </div>

          <div className="building">
            <SVGBuilding width="150px" height="171px" />

            <SVGTagoCoreIcon className="logo bounce" width="60px" />

            <div className="cloud bounce">
              <SVGCloud fill="#337ab7" width="80px" />
              <SVGTagoIO width="55px" />
            </div>

            <DataPoint delay={0.01} data={{ x1: 75, y1: -75, x2: 75, y2: -185 }} />

            <DataPoint delay={0.01} data={{ x1: 75, y1: 20, x2: 75, y2: -75 }} />
            <DataPoint delay={0.35} data={{ x1: 75, y1: 20, x2: 75, y2: -75 }} />
            <DataPoint delay={0.95} data={{ x1: 30, y1: 20, x2: 75, y2: -75 }} />
            <DataPoint delay={0.15} data={{ x1: 120, y1: 20, x2: 75, y2: -75 }} />
            <DataPoint delay={0.55} data={{ x1: 75, y1: 20, x2: 75, y2: -75 }} />
          </div>

          <div className="industry">
            <SVGIndustry width="120px" />
            <SVGIndustry width="150px" />

            <SVGTagoCoreIcon className="logo bounce" width="60px" />

            <DataPoint delay={0.01} data={{ x1: 20, y1: 0, x2: 135, y2: -175 }} />
            <DataPoint delay={0.75} data={{ x1: 40, y1: 0, x2: 135, y2: -175 }} />
            <DataPoint delay={0.35} data={{ x1: 250, y1: 0, x2: 135, y2: -175 }} />
            <DataPoint delay={0.05} data={{ x1: 210, y1: 0, x2: 135, y2: -175 }} />
          </div>

          <div className="hospital">
            <SVGHospital width="150px" height="171px" />

            <SVGTagoCoreIcon className="logo bounce" width="60px" />

            <DataPoint delay={0.01} data={{ x1: 25, y1: 50, x2: 75, y2: -65 }} />
            <DataPoint delay={0.35} data={{ x1: 125, y1: 50, x2: 75, y2: -65 }} />
          </div>

          <div className="vehicle truck">
            <SVGTruck width="50px" height="36px" />
            <SVGTagoCoreIcon className="logo bounce" width="50px" />
            <DataPoint delay={0.01} data={{ x1: 25, y1: 50, x2: 25, y2: -35 }} />
          </div>

          <div className="vehicle car">
            <SVGCar width="40px" height="30px" />
            <SVGTagoCoreIcon className="logo bounce" width="50px" />
            <DataPoint delay={0.01} data={{ x1: 20, y1: 50, x2: 20, y2: -35 }} />
          </div>
        </div>

        <div className="floor" />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: translate(-50%, 0%) scale(1);
          }
          25% {
            transform: translate(-50%, 0%) scale(1.05);
          }
          100% {
            transform: translate(-50%, 0%) scale(1);
          }
        }

        .page-max-width {
          position: relative;
        }

        .page-max-width .title {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0%);
          top: 10%;
          z-index: 100;
          width: 100%;
          max-width: 1340px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .page-max-width .title .description {
          margin-top: 5px;
          color: rgba(0, 0, 0, 0.6);
        }

        .page-max-width .title .early-access {
          max-width: 580px;
          margin: 0 auto;
          margin-top: 30px;
          width: 100%;
        }

        .page-max-width .title .early-access :global(button) {
          height: 40px;
        }

        .city-animation {
          display: flex;
          flex-direction: column;
          height: ${`calc(100vh - ${theme.sizes.headerHeight}px + 50px)`};
          overflow: hidden;
          max-height: 980px;
          width: 100%;
          align-items: center;
        }

        .city-animation .clouds {
          opacity: 0.4;
        }

        .city-animation .clouds :global(:nth-child(1)) {
          position: absolute;
          top: 20%;
          left: 50px;
          opacity: 0.45;
        }

        .city-animation .clouds :global(:nth-child(2)) {
          position: absolute;
          top: 30%;
          left: 75px;
          opacity: 0.3;
        }

        .city-animation .clouds :global(:nth-child(3)) {
          position: absolute;
          top: 10%;
          left: 150px;
          opacity: 0.3;
        }

        .city-animation .clouds :global(:nth-child(4)) {
          position: absolute;
          top: 20%;
          left: 75%;
          opacity: 0.4;
        }

        .city-animation .clouds :global(:nth-child(5)) {
          position: absolute;
          top: 30%;
          left: 84%;
          opacity: 0.3;
        }

        .city-animation .clouds :global(:nth-child(6)) {
          position: absolute;
          top: 10%;
          left: 82%;
          opacity: 0.4;
        }

        .city-animation .sun {
          background: black;
          width: 1100px;
          height: 1100px;
          position: absolute;
          z-index: -1;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          opacity: 0.03;
          top: calc(100% + 80px);
        }

        .city-animation .content {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: flex-end;
          position: relative;
          width: 1260px;
        }

        .city-animation .content .bg {
          fill: rgba(195, 195, 195);
          position: absolute;
          display: flex;
          align-items: flex-end;
        }

        .city-animation .content :global(.bounce) {
          transform: translate(-50%, 0);
        }

        .city-animation .content :global(.cloud) {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .city-animation .content :global(.cloud :nth-child(2)) {
          position: absolute;
          top: 35px;
        }

        .city-animation .content .trees-1 {
          position: absolute;
          transform: translateX(20px);
          bottom: -5px;
          display: flex;
          align-items: flex-end;
        }

        .city-animation .content .building {
          display: flex;
          position: absolute;
          transform: translateX(140px);
          bottom: -1px;
        }

        .city-animation .content .building :global(.logo) {
          position: absolute;
          background: white;
          border-radius: 19%;
          left: 50%;
          top: -115px;
        }

        .city-animation .content .building :global(.cloud) {
          left: 50%;
          top: -230px;
        }

        .city-animation .content .industry {
          display: flex;
          position: absolute;
          bottom: -15px;
          align-items: flex-end;
          transform: translateX(720px);
        }

        .city-animation .content .industry :global(.logo) {
          position: absolute;
          background: white;
          border-radius: 19%;
          left: 50%;
          top: -85px;
        }

        .city-animation .content .industry :global(*):nth-child(2) {
          transform: translateX(10px);
        }

        .city-animation .content .hospital {
          display: flex;
          position: absolute;
          transform: translateX(1050px);
        }

        .city-animation .content .hospital :global(.logo) {
          position: absolute;
          background: white;
          border-radius: 19%;
          left: 50%;
          top: -105px;
        }

        @keyframes vehicle-animation {
          0% {
            transform: translateX(0px);
            opacity: 0;
          }
          1% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(1200px);
            opacity: 0;
          }
        }

        .city-animation .content .vehicle.car {
          bottom: -7px;
          animation-duration: 7s;
          animation-delay: 0.4s;
        }

        .city-animation .content .vehicle.truck {
          bottom: -2px;
        }

        .city-animation .content .vehicle {
          display: flex;
          position: absolute;
          transform: translateX(0px);
          animation: vehicle-animation 10s linear infinite;
          opacity: 0;
        }

        .city-animation .content .vehicle :global(.logo) {
          position: absolute;
          background: white;
          border-radius: 19%;
          left: 50%;
          top: -75px;
        }

        .city-animation .content .vehicle :global(:first-child) {
          font-size: 18px;
          paint-order: stroke;
          stroke: white;
          stroke-width: 80px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          font-weight: 800;
        }

        .city-animation .content .mountains {
          z-index: -1;
          opacity: 0.55;
          bottom: -20px;
          transform: translateX(100px);
        }

        .city-animation .content .mountains :global(*):nth-child(2) {
          transform: translateX(-100px);
          opacity: 0.55;
        }

        .city-animation .content .trees-2 {
          transform: translateX(250px);
          bottom: -10px;
        }

        .city-animation .content .trees-3 {
          transform: translateX(920px);
          bottom: -10px;
        }

        .city-animation .content .bg-building {
          transform: translateX(450px);
          bottom: -10px;
        }

        .city-animation .floor {
          height: 150px;
          width: 100%;
          background: black;
          z-index: 1111;
          position: relative;
          border-radius: 20px;
          max-width: 1280px;
          margin: 0 auto;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        @media screen and (max-width: 1280px) {
          .city-animation .floor {
            border-radius: 0;
          }
        }

        @media screen and (max-width: 768px) {
          .title {
            padding: 20px 10px;
            background: rgba(255, 255, 255, 1);
            top: 0px !important;
            box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
          }
          .city-animation {
            transform: scale(0.8);
            height: calc(100vh - 100px);
            overflow: visible;
            transform-origin: bottom;
          }
          .city-animation .content .building {
            transform: translateX(380px);
          }
          .city-animation .content .industry {
            transform: translateX(630px);
          }
          .city-animation .floor {
            border-radius: 0;
            max-width: 1900px;
            left: -200px;
            width: 1900px;
          }

          .city-animation .clouds :global(:nth-child(1)) {
            left: 350px;
          }

          .city-animation .clouds :global(:nth-child(2)) {
            top: 0%;
            left: 325px;
          }

          .city-animation .clouds :global(:nth-child(3)) {
            top: 0%;
            left: 450px;
          }

          .city-animation .clouds :global(:nth-child(4)) {
            top: 0%;
            left: 55%;
          }

          .city-animation .clouds :global(:nth-child(5)) {
            top: 20%;
            left: 64%;
          }

          .city-animation .clouds :global(:nth-child(6)) {
            top: 0%;
            left: 62%;
          }
        }
      `}</style>
    </div>
  );
}

export default CityAnimation;
