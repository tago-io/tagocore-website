import imgBrands from "../../assets/brands.png";

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
  raspberry = "raspberry",
  redhat = "redhat",
  ubuntu = "ubuntu",
  windows = "windows",
  oracle = "oracle",
}

const data = {
  [EBrandBox.mysql]: {
    width: `73px`,
    height: `50px`,
    position: `-329px -0px`,
  },
  [EBrandBox.postgres]: {
    width: `137px`,
    height: `50px`,
    position: `-327px -50px`,
  },
  [EBrandBox.mongoDB]: {
    width: `152px`,
    height: `40px`,
    position: `-0px -125px`,
  },
  [EBrandBox.sqlServer]: {
    width: `93px`,
    height: `75px`,
    position: `-0px -50px`,
  },
  [EBrandBox.sqlite]: {
    width: `106px`,
    height: `50px`,
    position: `-93px -50px`,
  },
  [EBrandBox.mariaDB]: {
    width: `177px`,
    height: `50px`,
    position: `-307px -125px`,
  },
  [EBrandBox.amazonRedshift]: {
    width: `128px`,
    height: `50px`,
    position: `-199px -50px`,
  },
  [EBrandBox.apple]: {
    width: `42px`,
    height: `50px`,
    position: `-79px -0px`,
  },
  [EBrandBox.aws]: {
    width: `84px`,
    height: `50px`,
    position: `-402px -0px`,
  },
  [EBrandBox.debian]: {
    width: `40px`,
    height: `50px`,
    position: `-39px -0px`,
  },
  [EBrandBox.linux]: {
    width: `42px`,
    height: `50px`,
    position: `-121px -0px`,
  },
  [EBrandBox.raspberry]: {
    width: `39px`,
    height: `50px`,
    position: `-0px -0px`,
  },
  [EBrandBox.redhat]: {
    width: `66px`,
    height: `50px`,
    position: `-263px -0px`,
  },
  [EBrandBox.windows]: {
    width: `50px`,
    height: `50px`,
    position: `-213px -0px`,
  },
  [EBrandBox.ubuntu]: {
    width: `50px`,
    height: `50px`,
    position: `-163px -0px`,
  },
  [EBrandBox.oracle]: {
    width: `155px`,
    height: `20px`,
    position: `-152px -125px`,
  },
};

/**
 */
interface IBrandBoxProps {
  type: EBrandBox;
}

function BrandBox(props: IBrandBoxProps) {
  const { type } = props;

  const item = (data as any)[type];
  const width = item.width;
  const height = item.height;
  const backgroundPosition = item.position;
  const backgroundImage = `url(${imgBrands.src})`;

  return (
    <div className={`brand-box brand-${type}`}>
      <div className="stripe bg-primary" />
      <div
        className="img-container"
        style={{ width, height, backgroundImage, backgroundPosition }}
      />

      <style jsx>{`
        .brand-box {
          padding: 30px 0px;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px 10px;
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
