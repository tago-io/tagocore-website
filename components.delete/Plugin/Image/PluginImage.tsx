import Image from "next/image";
import SVGTimesCircle from "../../../assets/icons/times-circle.svg";

/**
 * Props.
 */
interface IPluginImageProps {
  /**
   * Width in pixels for the image. The height will be adjusted based on this.
   */
  width: number;
  /**
   * Source of the image.
   */
  src: string;
}

/**
 * Shows the logo of a plugin in the usual dimensions.
 */
function PluginImage(props: IPluginImageProps) {
  const { src, width } = props;
  const height = width / 1.455;

  return (
    <div className="plugin-image">
      {src ? (
        <Image alt="" src={src} layout="fill" objectFit="contain" />
      ) : (
        <SVGTimesCircle width="30px" fill="rgba(0, 0, 0, 0.3)" />
      )}

      <style jsx>{`
        .plugin-image {
          width: ${width}px;
          height: ${height}px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-sizing: content-box;
        }
      `}</style>
    </div>
  );
}

export default PluginImage;
