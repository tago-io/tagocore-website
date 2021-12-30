import IconRadio from "../../IconRadio/IconRadio";
import SVGDesktop from "../../../assets/icons/desktop.svg";
import { TPluginPlatformType } from "../Plugin.types";
import SVGMultipleDesktop from "../../../assets/icons/multiple-desktop.svg";

/**
 * Props.
 */
interface IPlatformRadioProps {
  /**
   * Value selected.
   */
  value: TPluginPlatformType;
  /**
   * Called when the selected value changes.
   */
  onChange: (value: TPluginPlatformType) => void;
}

/**
 * This component is a `IconRadio` component that extracts if the developer wants to publish
 * a `Platform-specific` plugin or a `Cross-platform` plugin.
 */
function PlatformRadio(props: IPlatformRadioProps) {
  const { value, onChange } = props;

  return (
    <fieldset>
      <IconRadio
        value={value}
        onChange={onChange}
        options={[
          {
            label: "Cross-platform",
            description: "Send a plugin file that works on all platforms",
            svgElement: SVGMultipleDesktop,
            value: "cross-platform",
          },
          {
            label: "Platform-specific",
            description: "Send one plugin file for each platform",
            svgElement: SVGDesktop,
            value: "platform-specific",
          },
        ]}
      />
      <style jsx>{`
        fieldset {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          background: white;
          padding: 15px;
        }
      `}</style>
    </fieldset>
  );
}

export default PlatformRadio;
