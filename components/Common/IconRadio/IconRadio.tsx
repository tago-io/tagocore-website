interface IIconRadioOption {
  label: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svgElement: any;
  value: string;
}

/**
 * Props.
 */
interface IIconRadioProps {
  /**
   * Value currently selected.
   */
  value: string;
  /**
   * Options in the list.
   * Each option here will be rendered as a selectable input option.
   */
  options: IIconRadioOption[];
  /**
   * Called when the value changes.
   */
  onChange: (value: string) => void;
}

/**
 * This component shows a list of inputs with type="radio".
 * For each option, a big icon, a title and a description will be rendered.
 */
function IconRadio(props: IIconRadioProps) {
  const { value, onChange, options } = props;

  /**
   * Renders a single option in the list.
   */
  const renderOption = (option: IIconRadioOption) => {
    const checked = value === option.value;
    return (
      <div className="option" onClick={() => onChange(option.value)} key={option.value}>
        <input value={props.value} checked={checked} readOnly type="radio" />

        <div className="content">
          <option.svgElement width="30px" />
          <div className="info">
            <div className="title">{option.label}</div>
            <div className="description">{option.description}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="icon-radio">
      {options.map(renderOption)}

      <style jsx>{`
        .icon-radio :global(.option) {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .icon-radio :global(.option:not(:last-child)) {
          margin-bottom: 15px;
        }

        .icon-radio :global(.option > input) {
          float: left;
          vertical-align: middle;
          color: inherit;
          margin: 0;
        }

        .icon-radio :global(svg) {
          margin: 0px 15px;
        }

        .icon-radio :global(.option > .content) {
          display: flex;
          align-items: center;
        }

        .icon-radio :global(.option .info .title) {
          font-weight: bold;
        }

        .icon-radio :global(.option .info .description) {
          display: block;
          font-size: 14px;
          font-weight: 400;
          margin: 0;
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}

export default IconRadio;
