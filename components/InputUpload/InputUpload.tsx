import { useCallback, useRef } from "react";
import formatBytes from "../../helpers/formatBytes";
import Button from "../Button/Button";
import SVGCheckCircle from "../SVG/SVGCheckCircle";
import SVGTimes from "../SVG/SVGTimes";

/**
 * Props.
 */
interface IInputUploadProps {
  /**
   * The selected file object.
   */
  value: File;
  /**
   * Called when the file changes.
   */
  onChange: (value: File) => void;
  /**
   * Called when the clear button is pressed.
   */
  onClear: () => void;
  /**
   * Placeholder for the input.
   */
  placeholder?: string;
}

/**
 * This component contains an input and a button and its design for the user to pick
 * a local file in their filesystem and upload it to the cloud.
 */
function InputUpload(props: IInputUploadProps) {
  const { value, onChange, onClear, placeholder } = props;
  const refFile = useRef(null);

  /**
   * Saves the file selected by the user.
   */
  const onChangeFileInput = useCallback(
    (e) => {
      const file = e.target?.files?.[0];
      onChange(file);
    },
    [onChange]
  );

  /**
   * Called when the clear button is pressed by the user.
   */
  const clear = useCallback(() => {
    refFile.current.value = "";
    onClear();
  }, [onClear]);

  /**
   * Shows the file selector.
   */
  const showFileSelector = useCallback(() => {
    refFile.current.click();
  }, []);

  return (
    <div className={`input-upload ${value ? "checked" : ""}`}>
      <input
        className="border-primary-focus"
        placeholder={placeholder || "Waiting for .tcore file"}
        value={value?.name ? `${value?.name} (${formatBytes(value.size)})` : ""}
        readOnly
      />

      {value && (
        <div className="delete" onClick={clear}>
          <SVGTimes width="12px" />
        </div>
      )}

      {value && (
        <div className="check">
          <SVGCheckCircle width="17px" />
        </div>
      )}

      <input accept=".tcore" ref={refFile} type="file" className="file" onChange={onChangeFileInput} />

      <Button onClick={showFileSelector}>Select file</Button>

      <style jsx>{`
        .input-upload {
          display: flex;
          position: relative;
        }

        .input-upload:hover .check {
          display: none;
        }

        .input-upload:hover .delete {
          display: flex;
        }

        .input-upload .delete {
          position: absolute;
          right: 141px;
          top: 50%;
          transform: translate(0%, -50%);
          padding: 5px;
          display: flex;
          align-items: center;
          cursor: pointer;
          display: none;
          justify-content: center;
        }

        .input-upload .check :global(svg) {
          position: absolute;
          right: 143px;
          top: 50%;
          transform: translate(0%, -50%);
          fill: hsl(121, 100%, 28%);
        }

        .input-upload.checked input {
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
