import BrandBox, { EBrandBox } from "../../BrandBox/BrandBox";

function DatabaseSupport() {
  return (
    <div className="database-support">
      <div className="title">
        <h2>Out-of-the-box&nbsp;</h2>
        <h2 className="text-gradient-primary">Database Support</h2>
      </div>

      <div className="description">
        These are a few of the databases that TagoCore supports, some are still in active development.
      </div>

      <div className="row">
        <BrandBox type={EBrandBox.mysql} />
        <BrandBox type={EBrandBox.postgres} />
        <BrandBox type={EBrandBox.mongoDB} />
        <BrandBox type={EBrandBox.sqlite} />
        <BrandBox type={EBrandBox.amazonRedshift} />
        <BrandBox type={EBrandBox.sqlServer} />
        <BrandBox type={EBrandBox.mariaDB} />
        <BrandBox type={EBrandBox.oracle} />

        <div className="your-own">
          <div className="stripe bg-primary" />
          <span>...and many more via Plugins!</span>
        </div>
      </div>

      <style jsx>{`
        .database-support {
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
          position: relative;
        }

        .database-support .title {
          margin-bottom: 20px;
        }

        .database-support .description {
          margin-bottom: 40px;
        }

        .database-support .row {
          display: flex;
          width: 1000px;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 100%;
        }

        .database-support :global(.brand-box) {
          flex: none;
          height: 110px;
          width: 20%;
          margin-bottom: 20px;
        }

        .database-support .your-own {
          padding: 20px;
          width: 500px;
          max-width: calc(100% - 40px);
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        @media screen and (max-width: 992px) {
          .database-support .row .brand-box {
            width: calc(33.3333% - 40px);
          }
          .database-support .your-own {
            width: 730px;
          }
        }

        @media screen and (max-width: 768px) {
          .database-support .row .brand-box {
            width: calc(50% - 40px);
          }
        }

        @media screen and (max-width: 576px) {
          .database-support .row .brand-box {
            width: calc(100% - 40px);
          }
        }
      `}</style>
    </div>
  );
}

export default DatabaseSupport;
