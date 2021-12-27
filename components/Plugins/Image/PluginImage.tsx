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
  const height = width / 1.45;

  return (
    <div className="plugin-image">
      <Image alt="plugin-logo" src={src} layout="fill" objectFit="cover" />

      <style jsx>{`
        .plugin-image {
          border-radius: 20%;
          width: ${width}px;
          height: ${height}px;
          background: rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          background: white;

          /* width: 150px;
          height: 110px;
          border-radius: 25 px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
          border-radius: 30px;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          margin-right: 30px;
          position: relative; */
        }
      `}</style>
    </div>
  );
}

export default PluginImage;
