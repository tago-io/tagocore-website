import { useState } from "react";
import Button from "../Button/Button";
import IconRadio from "../IconRadio/IconRadio";
import InputUpload from "../InputUpload/InputUpload";
import SVGStar from "../SVG/SVGStar";
import OSAccordion from "./OSAccordion";
import imgWindows from "../../assets/windows-logo.png";
import imgLinux from "../../assets/linux-logo.png";
import imgApple from "../../assets/apple-logo.svg";
import SVGAsterisk from "../SVG/SVGAsterisk";
import SVGDesktop from "../SVG/SVGDesktop";
import imgLaptop from "../../assets/laptop.png";

/**
 * Component that handles publishing/submitting a plugin.
 */
function Submit() {
  const [option, setOption] = useState("cross");

  return (
    <div className="submit page-max-width">
      <div className="aa">
        <h3>Publish Plugin</h3>

        <div className="fields">
          <fieldset>
            <div className="options form-group" style={{ marginBottom: 0 }}>
              <IconRadio
                value={option}
                onChange={setOption}
                options={[
                  {
                    label: "Cross-platform",
                    description: "Send a plugin package that works with all platforms",
                    svgElement: SVGStar,
                    value: "cross",
                  },
                  {
                    label: "Single-platform",
                    description: "Send multiple plugin packages for multiple platforms",
                    svgElement: SVGDesktop,
                    value: "single",
                  },
                ]}
              />
            </div>
          </fieldset>

          {option === "cross" ? (
            <div className="form-group required" style={{ marginBottom: 0 }}>
              <label>Plugin file</label>
              <InputUpload />
            </div>
          ) : (
            <>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <OSAccordion
                  title="Windows"
                  description="Upload the files that will work on Windows"
                  imgSrc={imgWindows}
                >
                  <div className="form-group" style={{ marginBottom: "1rem" }}>
                    <label>x64 File</label>
                    <InputUpload />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>ARM64 File</label>
                    <InputUpload />
                  </div>
                </OSAccordion>
              </div>

              <div className="form-group" style={{ marginBottom: "10px" }}>
                <OSAccordion title="MacOS" description="Upload the files that will work on MacOS" imgSrc={imgApple}>
                  <div className="form-group" style={{ marginBottom: "1rem" }}>
                    <label>x64 File</label>
                    <InputUpload />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>ARM64 File</label>
                    <InputUpload />
                  </div>
                </OSAccordion>
              </div>

              <div className="form-group" style={{ marginBottom: "10px" }}>
                <OSAccordion title="Alpine" description="Upload the files that will work on Alpine" imgSrc={imgLinux}>
                  <div className="form-group" style={{ marginBottom: "1rem" }}>
                    <label>x64 File</label>
                    <InputUpload />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>ARM64 File</label>
                    <InputUpload />
                  </div>
                </OSAccordion>
              </div>

              <div className="form-group">
                <OSAccordion title="Linux" description="Upload the files that will work on Linux" imgSrc={imgLinux}>
                  <div className="form-group" style={{ marginBottom: "1rem" }}>
                    <label>x64 File</label>
                    <InputUpload />
                  </div>

                  <div className="form-group" style={{ marginBottom: "1rem" }}>
                    <label>ARM64 File</label>
                    <InputUpload />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>ARM7 File</label>
                    <InputUpload />
                  </div>
                </OSAccordion>
              </div>
            </>
          )}

          <div className="terms form-group">
            <label>
              <input type="checkbox" />
              <span>
                I Agree with the Terms and Conditions of Publishing a plugin for TagoCore. I am responsible for the
                execution of the code in this plugin and any damage that this particular code is responsible for is no
                responsability of TagoIO, only mine.
              </span>
            </label>
          </div>

          <div className="publish form-group">
            <Button>Publish Plugin</Button>
          </div>
        </div>
      </div>

      <div className="bb">
        <div className="ee" />
        <img src={imgLaptop.src} alt="aa" />
        <div className="cc" />
        <div className="dd" />
      </div>

      <style jsx>{`
        .submit {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 800px;
          overflow: hidden;
        }

        .submit .bb {
          flex: none;
          background: black;
          padding: 10px;
          width: 300px;
          height: 300px;
          border-radius: 10px;
          margin-left: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 45px;
          transform: rotate(-10deg);
          position: relative;
        }

        .submit .bb,
        .submit .bb *:not(img) {
          box-shadow: 0px 8px 20px 10px rgba(0, 0, 0, 0.1);
        }

        .submit .cc {
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

        .submit .dd {
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

        .submit .ee {
          position: absolute;
          flex: none;
          background: linear-gradient(to right, black, white, white, white);
          opacity: 0.1;
          width: 700px;
          height: 600px;
          border-radius: 7px;
          margin-left: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 100px;
          transform: rotate(4deg);
          left: 0px;
          top: -220px;
        }

        .submit .bb img {
          width: 150%;
          transform: rotate(15deg);
        }

        .submit .aa {
          display: flex;
          flex-direction: column;
          width: 850px;
          margin-top: 100px;
          margin-bottom: 40px;
          position: relative;
          left: -70px;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          padding: 20px;
        }

        .submit fieldset {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          margin-bottom: 1.5rem;
          background: white;
          padding: 15px;
        }

        .submit .form-group.terms label {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          margin-top: 1.5rem;
        }

        .submit .form-group.terms span {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
          margin-left: 10px;
          font-weight: normal;
        }

        .submit .form-group label {
          font-weight: bold;
          margin-bottom: 7px;
          display: block;
        }

        .submit .form-group {
          margin-bottom: 1.5rem;
        }

        .submit .form-group.required label::after {
          content: "*";
          color: red;
          margin-left: 3px;
          opacity: 0.7;
        }

        .submit .publish {
          display: flex;
          justify-content: center;
          margin-bottom: 0;
        }

        .submit .publish :global(button) {
          padding: 12px 35px;
        }

        .submit h3 {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Submit;
