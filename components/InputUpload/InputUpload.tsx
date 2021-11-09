import { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import Button from "../Button/Button";
import SVGCheckCircle from "../SVG/SVGCheckCircle";

/**
 * Props.
 */
type IInputUploadProps = InputHTMLAttributes<HTMLButtonElement>;

/**
 * This component contains an input and a button and its design for the user to pick
 * a local file in their filesystem and upload it to the cloud.
 */
function InputUpload(props: IInputUploadProps) {
  const [file, setFile] = useState(null);
  const refFile = useRef(null);
  const { placeholder } = props;

  /**
   * Saves the file selected by the user.
   */
  const onChangeFileInput = useCallback((e) => {
    setFile(e.target?.files?.[0]);
  }, []);

  /**
   * Shows the file selector.
   */
  const showFileSelector = useCallback(() => {
    refFile.current.click();
  }, []);

  return (
    <div className={`input-upload ${file ? "with-file" : ""}`}>
      <input
        className="border-primary-focus"
        placeholder={placeholder || "Select a file or drag and drop a .tcore file here"}
        value={file?.name || ""}
        readOnly
      />

      {file && (
        <div className="check">
          <SVGCheckCircle width="17px" />
        </div>
      )}

      <input ref={refFile} type="file" className="file" onChange={onChangeFileInput} />

      <Button onClick={showFileSelector}>Select file</Button>

      <style jsx>{`
        .input-upload {
          display: flex;
          position: relative;
        }

        .input-upload .check :global(svg) {
          position: absolute;
          right: 143px;
          top: 50%;
          transform: translate(0%, -50%);
          fill: hsl(121, 100%, 28%);
        }

        .input-upload.with-file input {
          background: hsl(121, 100%, 95%);
          border-color: hsl(121, 100%, 23%) !important;
        }

        .input-upload .file {
          display: none;
        }

        .input-upload input {
          flex: 1;
          margin-right: -1px;
          border-radius: 3px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 10px 15px;
          outline: 0;
        }

        .input-upload :global(button) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      `}</style>
    </div>
  );
}

export default InputUpload;
