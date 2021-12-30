import Image from "next/image";

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
      <Image alt="" src={src} layout="fill" objectFit="contain" />

      <style jsx>{`
        .plugin-image {
          border-radius: 20%;
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
