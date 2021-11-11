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
import SVGArrow from "../../SVG/SVGArrow";
import PublishSteps from "./PublishSteps";

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
  const [platformType, setPlatformType] = useState<TPluginPlatformType>("platform-specific");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [files, setFiles] = useState<IPluginPublishFiles>({});

  const { publishing, step, onPublish } = props;

  /**
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
          <h3>Publish Plugin</h3>

          <FormGroup>
            <PlatformRadio value={platformType} onChange={setPlatformType} />
          </FormGroup>

          {platformType === "cross-platform" ? (
            <FormGroup label="Plugin File" required>
              <InputUpload value={files.any} onChange={(file) => setFiles({ ...files, any: file })} />
            </FormGroup>
          ) : (
            <FormGroup>
              <OSAccordion
                checked={!!(files.LINUX_X64 && files.LINUX_ARM64 && files.LINUX_ARM7)}
                description="Upload the files that will work on Linux"
                imgSrc={imgLinux}
                title="Linux"
              >
                <FormGroup label="x64 File">
                  <InputUpload value={files.LINUX_X64} onChange={(file) => setFiles({ ...files, LINUX_X64: file })} />
                </FormGroup>

                <FormGroup label="ARM64 File">
                  <InputUpload
                    value={files.LINUX_ARM64}
                    onChange={(file) => setFiles({ ...files, LINUX_ARM64: file })}
                  />
                </FormGroup>

                <FormGroup label="ARM7 File" addMarginBottom={false}>
                  <InputUpload value={files.LINUX_ARM7} onChange={(file) => setFiles({ ...files, LINUX_ARM7: file })} />
                </FormGroup>
              </OSAccordion>

              <OSAccordion
                checked={!!(files.ALPINE_ARM64 && files.ALPINE_X64)}
                description="Upload the files that will work on Alpine"
                imgSrc={imgAlpine}
                title="Alpine"
              >
                <FormGroup label="x64 File">
                  <InputUpload value={files.ALPINE_X64} onChange={(file) => setFiles({ ...files, ALPINE_X64: file })} />
                </FormGroup>

                <FormGroup label="ARM64 File" addMarginBottom={false}>
                  <InputUpload
                    value={files.ALPINE_ARM64}
                    onChange={(file) => setFiles({ ...files, ALPINE_ARM64: file })}
                  />
                </FormGroup>
              </OSAccordion>

              <OSAccordion
                checked={!!(files.WINDOWS_ARM64 && files.WINDOWS_X64)}
                description="Upload the files that will work on Windows"
                imgSrc={imgWindows}
                title="Windows"
              >
                <FormGroup label="x64 File">
                  <InputUpload
                    value={files.WINDOWS_X64}
                    onChange={(file) => setFiles({ ...files, WINDOWS_X64: file })}
                  />
                </FormGroup>

                <FormGroup label="ARM64 File" addMarginBottom={false}>
                  <InputUpload
                    value={files.WINDOWS_ARM64}
                    onChange={(file) => setFiles({ ...files, WINDOWS_ARM64: file })}
                  />
                </FormGroup>
              </OSAccordion>

              <OSAccordion
                checked={!!(files.MACOS_ARM64 && files.MACOS_X64)}
                description="Upload the files that will work on MacOS"
                imgSrc={imgApple}
                title="MacOS"
              >
                <FormGroup label="x64 File">
                  <InputUpload value={files.MACOS_X64} onChange={(file) => setFiles({ ...files, MACOS_X64: file })} />
                </FormGroup>

                <FormGroup label="ARM64 File" addMarginBottom={false}>
                  <InputUpload
                    value={files.MACOS_ARM64}
                    onChange={(file) => setFiles({ ...files, MACOS_ARM64: file })}
                  />
                </FormGroup>
              </OSAccordion>
            </FormGroup>
          )}

          <FormGroup>
            <CheckboxTerms checked={acceptedTerms} onChange={setAcceptedTerms} />
          </FormGroup>

          <FormGroup addMarginBottom={false}>
            <Button onClick={publish} className="publish-button">
              <span>Publish Plugin&nbsp;</span>
              <SVGArrow width="12px" height="12px" />
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

        .form h3 {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          width: 100%;
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
