import { ChangeEvent, useCallback, useState } from "react";
import Button from "../../Common/Button/Button";
import InputUpload from "../../InputUpload/InputUpload";
import OSAccordion from "./OSAccordion";
import SVGWindows from "../../../assets/logos/windows.svg";
import SVGLinux from "../../../assets/logos/linux.svg";
import SVGAlpine from "../../../assets/logos/alpine.svg";
import SVGApple from "../../../assets/logos/apple.svg";
import PlatformRadio from "./PlatformRadio";
import { IPluginPublishFiles, TPluginPlatformType } from "../Plugin.types";
import FormGroup from "../../Common/FormGroup/FormGroup";
import CheckboxTerms from "./CheckboxTerms";
import PublishSteps from "./PublishSteps";
import Link from "next/link";
import Select from "../../Common/Select/Select";
import { ProfileListInfo } from "@tago-io/sdk/out/modules/Account/profile.types";

/**
 * Props.
 */
interface IFormProps {
  /**
   * Called when the form publishes the plugin.
   */
  onPublish?: (files: IPluginPublishFiles, profileID: string) => void;
  publishing?: boolean;
  step?: number;
  profiles: ProfileListInfo[];
}

/**
 * Form of plugin publish.
 * It contains all the information that we need to ask the developer before submitting a plugin.
 */
function Form(props: IFormProps) {
  const [platformType, setPlatformType] = useState<TPluginPlatformType>("cross-platform");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [profileID, setProfileID] = useState("");
  const [files, setFiles] = useState<IPluginPublishFiles>({});

  const { publishing, step, profiles, onPublish } = props;

  /**
   * Clears a single file input.
   */
  const clearFile = useCallback(
    (name: string) => {
      delete files[name];
      setFiles({ ...files });
    },
    [files]
  );

  /**
   * Called when the profile ID changes by the user.
   */
  const onChangeProfileID = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setProfileID(e.target.value);
  }, []);

  /**
   * Publishes.
   */
  const publish = useCallback(() => {
    onPublish(files, profileID);
  }, [onPublish, profileID, files]);

  return (
    <div className="form">
      {publishing ? (
        <PublishSteps step={step} />
      ) : (
        <>
          <div className="title">
            <h3>Publish Plugin</h3>
            <Link href="/">
              <a>Documentation</a>
            </Link>
          </div>

          <FormGroup label="Publisher">
            <Select value={profileID} onChange={onChangeProfileID}>
              <option disabled value="">
                Select a profile
              </option>

              {profiles.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <PlatformRadio value={platformType} onChange={setPlatformType} />
          </FormGroup>

          {platformType === "cross-platform" ? (
            <FormGroup label="Plugin File" required>
              <InputUpload
                value={files.any}
                onChange={(file) => setFiles({ ...files, any: file })}
                onClear={() => clearFile("any")}
              />
            </FormGroup>
          ) : (
            <>
              <FormGroup>
                <OSAccordion
                  checked={!!(files["alpine-arm64"] && files["alpine-x64"])}
                  description="Upload the files that will work on Alpine"
                  imgSrc={SVGAlpine}
                  title="Alpine"
                >
                  <FormGroup label="x64 File">
                    <InputUpload
                      value={files["alpine-x64"]}
                      onChange={(file) => setFiles({ ...files, "alpine-x64": file })}
                      onClear={() => clearFile("alpine-x64")}
                    />
                  </FormGroup>

                  <FormGroup label="ARM64 File" addMarginBottom={false}>
                    <InputUpload
                      value={files["alpine-arm64"]}
                      onChange={(file) => setFiles({ ...files, "alpine-arm64": file })}
                      onClear={() => clearFile("alpine-arm64")}
                    />
                  </FormGroup>
                </OSAccordion>

                <OSAccordion
                  checked={!!(files["linux-x64"] && files["linux-arm64"] && files["linux-armv7"])}
                  description="Upload the files that will work on Linux"
                  imgSrc={SVGLinux}
                  imgHeight="50px"
                  title="Linux"
                >
                  <FormGroup label="x64 File">
                    <InputUpload
                      value={files["linux-x64"]}
                      onChange={(file) => setFiles({ ...files, ["linux-x64"]: file })}
                      onClear={() => clearFile("linux-x64")}
                    />
                  </FormGroup>

                  <FormGroup label="ARM64 File">
                    <InputUpload
                      value={files["linux-arm64"]}
                      onChange={(file) => setFiles({ ...files, "linux-arm64": file })}
                      onClear={() => clearFile("linux-arm64")}
                    />
                  </FormGroup>

                  <FormGroup label="ARMV7 File" addMarginBottom={false}>
                    <InputUpload
                      value={files["linux-armv7"]}
                      onChange={(file) => setFiles({ ...files, "linux-armv7": file })}
                      onClear={() => clearFile("linux-armv7")}
                    />
                  </FormGroup>
                </OSAccordion>

                <OSAccordion
                  checked={!!files["mac-x64"]}
                  description="Upload the files that will work on MacOS"
                  imgSrc={SVGApple}
                  title="MacOS"
                >
                  <FormGroup addMarginBottom={false} label="x64 File">
                    <InputUpload
                      value={files["mac-x64"]}
                      onChange={(file) => setFiles({ ...files, "mac-x64": file })}
                      onClear={() => clearFile("mac-x64")}
                    />
                  </FormGroup>
                </OSAccordion>

                <OSAccordion
                  checked={!!files["win-x64"]}
                  description="Upload the files that will work on Windows"
                  imgSrc={SVGWindows}
                  title="Windows"
                >
                  <FormGroup addMarginBottom={false} label="x64 File">
                    <InputUpload
                      value={files["win-x64"]}
                      onChange={(file) => setFiles({ ...files, ["win-x64"]: file })}
                      onClear={() => clearFile("win-x64")}
                    />
                  </FormGroup>
                </OSAccordion>
              </FormGroup>
            </>
          )}

          <FormGroup>
            <CheckboxTerms checked={acceptedTerms} onChange={setAcceptedTerms} />
          </FormGroup>

          <FormGroup addMarginBottom={false}>
            <Button
              disabled={Object.keys(files).length === 0 || !acceptedTerms || !profileID}
              onClick={publish}
              className="publish-button"
            >
              <span>Publish Plugin</span>
            </Button>
          </FormGroup>
        </>
      )}

      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          padding: 20px;
          flex: 1;
          min-height: 400px;
        }

        .form .title {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .form :global(.publish-button) {
          display: flex;
          justify-content: center;
          margin: 0 auto;
          padding: 12px 35px;
        }
      `}</style>
    </div>
  );
}

export default Form;
