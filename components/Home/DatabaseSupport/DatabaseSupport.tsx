import BrandBox from "../BrandBox/BrandBox";
import SVGMysql from "../../../assets/logos/mysql.svg";
import SVGPostgreSQL from "../../../assets/logos/postgresql.svg";
import SVGMongoDB from "../../../assets/logos/mongodb.svg";
import SVGSQLite from "../../../assets/logos/sqlite.svg";
import SVGMariaDB from "../../../assets/logos/mariadb.svg";
import SVGOracle from "../../../assets/logos/oracle.svg";

/**
 * Section that displays all databases that are supported by TagoCore.
 */
function DatabaseSupport() {
  return (
    <div className="database-support">
      <div className="title">
        <h2>Out-of-the-box&nbsp;</h2>
        <h2 className="accent">Database Support</h2>
      </div>

      <div className="description">
        TagoCore supports a variety of databases such as those below, yet some are still in active development.
      </div>

      <div className="row">
        <BrandBox>
          <SVGMysql height="50px" />
        </BrandBox>

        <BrandBox>
          <SVGPostgreSQL height="50px" />
        </BrandBox>

        <BrandBox>
          <SVGMongoDB height="60px" />
        </BrandBox>

        <BrandBox>
          <SVGSQLite height="50px" />
        </BrandBox>

        <BrandBox>
          <SVGMariaDB width="140px" />
        </BrandBox>

        <BrandBox>
          <SVGOracle width="130px" />
        </BrandBox>

        <div className="your-own">
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
          margin-bottom: 10px;
        }

        .database-support .description {
          margin-bottom: 40px;
          color: rgba(0, 0, 0, 0.6);
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
          width: 25%;
          margin: 0px 10px;
          margin-bottom: 20px;
        }

        .database-support .your-own {
          padding: 20px;
          width: 790px;
          max-width: calc(100% - 40px);
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        @media screen and (max-width: 992px) {
          .database-support .row :global(.brand-box) {
            width: calc(33.3333% - 40px);
          }
          .database-support .your-own {
            width: 730px;
          }
        }

        @media screen and (max-width: 768px) {
          .database-support .row :global(.brand-box) {
            width: calc(50% - 30px);
          }
        }

        @media screen and (max-width: 576px) {
          .database-support .row :global(.brand-box) {
            width: calc(100% - 40px);
            height: 80px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default DatabaseSupport;
