import { useCallback, useState } from "react";
import Button from "../../Button/Button";
import InputUpload from "../../InputUpload/InputUpload";
import OSAccordion from "./OSAccordion";
import imgWindows from "../../../assets/windows-logo.png";
import imgLinux from "../../../assets/linux-logo.png";
import imgAlpine from "../../../assets/alpine-logo.svg";
import imgApple from "../../../assets/apple-logo.svg";
import PlatformRadio from "./PlatformRadio";
import { IPluginPublishFiles, TPluginPlatformType } from "../Plugin.types";
import FormGroup from "../../FormGroup/FormGroup";
import CheckboxTerms from "./CheckboxTerms";
import PublishSteps from "./PublishSteps";
import Link from "next/link";

/**
 * Props.
 */
interface IFormProps {
  /**
   * Called when the form publishes the plugin.
   */
  onPublish?: (files: IPluginPublishFiles) => void;
  publishing?: boolean;
  step?: number;
}

/**
 * Form of plugin publish.
 * It contains all the information that we need to ask the developer before submitting a plugin.
 */
function Form(props: IFormProps) {
  const [platformType, setPlatformType] = useState<TPluginPlatformType>("cross-platform");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [files, setFiles] = useState<IPluginPublishFiles>({});

  const { publishing, step, onPublish } = props;

  /**
   * Clears a file.
   */
  const clearFile = useCallback(
    (name: string) => {
      delete files[name];
      setFiles({ ...files });
    },
    [files]
  );

  /**
   * Publishes a file.
   */
  const publish = useCallback(() => {
    onPublish(files);
  }, [onPublish, files]);

  return (
    <div className="form">
      {publishing ? (
        <PublishSteps step={step} />
      ) : (
        <>
          <div className="title">
            <h3>Publish Plugin</h3>
            <Link href="/">
              <a>Learn more</a>
            </Link>
          </div>

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
                  checked={!!(files["linux-x64"] && files["linux-arm64"] && files["linux-arm7"])}
                  description="Upload the files that will work on Linux"
                  imgSrc={imgLinux}
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

                  <FormGroup label="ARM7 File" addMarginBottom={false}>
                    <InputUpload
                      value={files["linux-arm7"]}
                      onChange={(file) => setFiles({ ...files, "linux-arm7": file })}
                      onClear={() => clearFile("linux-arm7")}
                    />
                  </FormGroup>
                </OSAccordion>

                <OSAccordion
                  checked={!!(files["alpine-arm64"] && files["alpine-x64"])}
                  description="Upload the files that will work on Alpine"
                  imgSrc={imgAlpine}
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
                  checked={!!(files["windows-arm64"] && files["windows-x64"])}
                  description="Upload the files that will work on Windows"
                  imgSrc={imgWindows}
                  title="Windows"
                >
                  <FormGroup label="x64 File">
                    <InputUpload
                      value={files["windows-x64"]}
                      onChange={(file) => setFiles({ ...files, ["windows-x64"]: file })}
                      onClear={() => clearFile("windows-x64")}
                    />
                  </FormGroup>

                  <FormGroup label="ARM64 File" addMarginBottom={false}>
                    <InputUpload
                      value={files["windows-arm64"]}
                      onChange={(file) => setFiles({ ...files, ["windows-arm64"]: file })}
                      onClear={() => clearFile("windows-arm64")}
                    />
                  </FormGroup>
                </OSAccordion>

                <OSAccordion
                  checked={!!(files["macos-arm64"] && files["macos-x64"])}
                  description="Upload the files that will work on MacOS"
                  imgSrc={imgApple}
                  title="MacOS"
                >
                  <FormGroup label="x64 File">
                    <InputUpload
                      value={files["macos-x64"]}
                      onChange={(file) => setFiles({ ...files, "macos-x64": file })}
                      onClear={() => clearFile("macos-x64")}
                    />
                  </FormGroup>

                  <FormGroup label="ARM64 File" addMarginBottom={false}>
                    <InputUpload
                      value={files["macos-arm64"]}
                      onChange={(file) => setFiles({ ...files, "macos-arm64": file })}
                      onClear={() => clearFile("macos-arm64")}
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
              disabled={Object.keys(files).length === 0 || !acceptedTerms}
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
