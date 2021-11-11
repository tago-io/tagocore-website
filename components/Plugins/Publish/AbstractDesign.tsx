import imgLaptop from "../../../assets/laptop.png";
import Image from "next/image";

/**
 * Component that handles publishing/submitting a plugin.
 */
function AbstractDesign() {
  return (
    <div className="abstract-design">
      <div className="fade" />
      <div className="bb" />

      <div className="img">
        <Image layout="fixed" width="400px" height="400px" objectFit="contain" src={imgLaptop.src} alt="aa" />
      </div>

      {/*
        <div className="cc" />
        <div className="dd" /> */}

      <style jsx>{`
        .abstract-design {
          width: 400px;
          flex: none;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-left: 50px;
          margin-top: 180px;
          top: 0px;
        }

        .abstract-design .fade {
          position: absolute;
          flex: none;
          background: linear-gradient(to right, black, white, white, white, white);
          opacity: 0.1;
          width: 700px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-5deg);
          left: 170px;
          margin-top: -50px;
          height: 600px;
        }

        .abstract-design .bb {
          flex: none;
          background: black;
          padding: 10px;
          width: 300px;
          height: 300px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-10deg);
          position: relative;
        }

        .abstract-design .img {
          position: absolute;
          transform: rotate(7deg);
        }

        .abstract-design .bb,
        .abstract-design .bb *:not(img) {
          box-shadow: 0px 8px 20px 10px rgba(0, 0, 0, 0.1);
        }

        .abstract-design .cc {
          position: absolute;
          flex: none;
          background: black;
          opacity: 0.2;
          padding: 10px;
          width: 70px;
          height: 70px;
          border-radius: 10px;
          margin-left: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 100px;
          transform: rotate(-30deg);
          left: 160px;
          top: 170px;
        }

        .abstract-design .dd {
          position: absolute;
          flex: none;
          background: black;
          opacity: 0.1;
          width: 20px;
          height: 20px;
          border-radius: 7px;
          margin-left: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 100px;
          transform: rotate(-30deg);
          left: 230px;
          top: 170px;
        }

        .abstract-design .bb img {
          width: 150%;
          transform: rotate(15deg);
        }
      `}</style>
    </div>
  );
}

export default AbstractDesign;
