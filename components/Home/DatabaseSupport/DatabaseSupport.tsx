import SVGMysql from "../../../assets/logos/mysql.svg";
import SVGPostgreSQL from "../../../assets/logos/postgresql.svg";
import SVGMongoDB from "../../../assets/logos/mongodb.svg";
import SVGSQLite from "../../../assets/logos/sqlite.svg";
import SVGMariaDB from "../../../assets/logos/mariadb.svg";
import SVGOracle from "../../../assets/logos/oracle.svg";
import Console from "../Console/Console";

/**
 */
function DatabaseSupport() {
  return (
    <div className="database-support page-max-width">
      <Console title="Out-of-the-box Database Support">
        <div>
          <span className="arrow">→</span>
          <span className="user">~/tagocore-user</span>
          <span>$ tagocore list-plugins --category database</span>
        </div>

        <br />

        <div>
          <span>* TagoCore supports a variety of databases such as those below</span>
          <br />
          <span>* yet some are still in active development.</span>
        </div>

        <br />

        <div>{"  - SQLite (installed)"}</div>
        <div>{"  - MySQL"}</div>
        <div>{"  - PostgreSQL"}</div>
        <div>{"  - MongoDB"}</div>
        <div>{"  - MariaDB"}</div>
        <div>{"  - SQL Server"}</div>
        <div>{"  - Amazon Redshift"}</div>
        <div>{"  - Amazon RDS"}</div>
        <div>{"  - Oracle"}</div>
        <div>{"  and many others"}</div>

        <br />

        <div>To install any of the databases listed above, run the command:</div>
        <div>{"  tagocore install-plugin <name>"}</div>
      </Console>

      <div className="visual-list">
        <div className="brand-box">
          <SVGMysql height="70px" />
        </div>
        <div className="brand-box">
          <SVGPostgreSQL height="70px" />
        </div>
        <div className="brand-box">
          <SVGMongoDB height="70px" />
        </div>
        <div className="brand-box">
          <SVGSQLite height="70px" />
        </div>
        <div className="brand-box">
          <SVGMariaDB width="170px" />
        </div>
        <div className="brand-box">
          <SVGOracle width="160px" />
        </div>
      </div>

      <style jsx>{`
        .database-support {
          position: relative;
          z-index: 1000000;
          margin-top: -10px;
        }

        .brand-box {
          align-items: center;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          justify-content: center;
          overflow: hidden;
          padding: 30px 0px;
          position: relative;
        }

        /* .brand-box :global(svg *) {
          fill: black !important;
        } */

        .visual-list {
          width: 50%;
          position: absolute;
          right: 10px;
          bottom: 350px;
          display: flex;
          flex-wrap: wrap;
          transform: translate(0%, 100%);
        }

        .visual-list > :global(div) {
          width: calc(50% - 10px);
          min-width: 200px;
          margin: 5px;
          background: white;
          min-height: 150px;
        }
      `}</style>
    </div>
  );
}

export default DatabaseSupport;
