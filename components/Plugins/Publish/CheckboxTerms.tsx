import { ChangeEvent, useCallback } from "react";

/**
 * Props.
 */
interface ICheckboxTermsProps {
  /**
   * If the terms are accepted or not.
   */
  checked: boolean;
  /**
   * Called when the checkbox is clicked.
   */
  onChange: (checked: boolean) => void;
}

/**
 * Checkbox accompanied by a text saying that the user agrees to the terms and conditions
 * before submitting/publishing the plugin to our servers.
 */
function CheckboxTerms(props: ICheckboxTermsProps) {
  const { checked, onChange } = props;

  /**
   * Called when the input is clicked.
   */
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    },
    [onChange]
  );

  return (
    <div className="checkbox-terms">
      <label>
        <input type="checkbox" checked={checked} onChange={onInputChange} />
        <span>
          I Agree with the Terms and Conditions of Publishing a plugin for TagoCore. I am responsible for the execution
          of the code in this plugin and any damage that this particular code is responsible for is no responsibility of
          TagoIO, only mine.
        </span>
      </label>

      <style jsx>{`
        .checkbox-terms label {
          display: flex;
          align-items: center;
        }

        .checkbox-terms span {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
          margin-left: 10px;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}

export default CheckboxTerms;
