import imgBrands from "../../assets/brands.png";
import brandsJSON from "../../assets/brands.json";

/**
 * Types of brands to choose from.
 */
export enum EBrandBox {
  mysql = "mysql",
  postgres = "postgres",
  mongoDB = "mongo-db",
  sqlServer = "sql-server",
  sqlite = "sqlite",
  mariaDB = "maria-db",
  amazonRedshift = "amazon-redshift",
  apple = "apple",
  aws = "aws",
  debian = "debian",
  linux = "linux",
  raspberry = "raspberry-pi",
  redhat = "redhat",
  ubuntu = "ubuntu",
  windows = "windows",
  oracle = "oracle",
  rockPI = "rock-pi",
  azure = "azure",
  googleCloud = "google-cloud",
  gateway = "gateway",
}

/**
 * Props.
 */
interface IBrandBoxProps {
  type: EBrandBox;
}

/**
 * This component shows a logo of a brand inside of a box.
 * The brand that will be shown can be customized via props.
 */
function BrandBox(props: IBrandBoxProps) {
  const { type } = props;

  const brandFrame = brandsJSON.frames[type];

  const width = `${brandFrame.frame.w}px`;
  const height = `${brandFrame.frame.h}px`;
  const backgroundPosition = `-${brandFrame.frame.x}px -${brandFrame.frame.y}px`;
  const backgroundImage = `url(${imgBrands.src})`;

  return (
    <div className={`brand-box brand-${type}`}>
      <div className="stripe bg-primary" />
      <div className="img-container" style={{ width, height, backgroundImage, backgroundPosition }} />

      <style jsx>{`
        .brand-box {
          padding: 30px 0px;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .brand-box .img-container {
          opacity: 0.7;
          transform: scale(0.9);
        }
      `}</style>
    </div>
  );
}

export default BrandBox;
