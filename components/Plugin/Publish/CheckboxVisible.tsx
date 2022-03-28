import { ChangeEvent, useCallback } from "react";
import Link from "next/link";

/**
 * Props.
 */
interface ICheckboxVisibleProps {
  /**
   * Checked or not.
   */
  checked: boolean;
  /**
   * Called when the checkbox is clicked.
   */
  onChange: (checked: boolean) => void;
}

/**
 */
function CheckboxVisible(props: ICheckboxVisibleProps) {
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
        <div className="text">
          <span>Make the plugin version visible in the Store</span>
        </div>
      </label>

      <style jsx>{`
        .checkbox-terms label {
          align-items: center;
          flex: none;
          display: inline-flex;
          cursor: pointer;
        }

        .checkbox-terms .text {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
          margin-left: 10px;
          font-weight: normal;
          color: rgba(0, 0, 0, 0.7);
        }

        .checkbox-terms .text :global(*) {
          font-size: 14px;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}

export default CheckboxVisible;
