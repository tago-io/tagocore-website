import SVGMysql from "../../../assets/logos/mysql.svg";
import SVGPostgreSQL from "../../../assets/logos/postgresql.svg";
import SVGMongoDB from "../../../assets/logos/mongodb.svg";
import SVGSQLite from "../../../assets/logos/sqlite.svg";
import SVGMariaDB from "../../../assets/logos/mariadb.svg";
import SVGOracle from "../../../assets/logos/oracle.svg";
import SVGBoxOpen from "../../../assets/icons/box-open.svg";
import Console from "../Console/Console";

/**
 */
function DatabaseSupport() {
  return (
    <div className="database-support page-max-width">
      <div className="line" />

      <div className="title">
        <SVGBoxOpen width="30px" fill="white" />
        <div className="text">
          <h2>Database Support</h2>
          <span className="description">TagoCore supports more than 10 different databases through plugins.</span>
        </div>
      </div>

      <Console>
        <div>
          <span className="arrow">→</span>
          <span className="user">~/</span>
          <span>$ tagocore list-plugins -c database{"\n\n"}</span>
        </div>

        <div className="console-color-description">
          <div className="">* TagoCore supports a variety of databases,</div>
          <div>* yet some are still in active development.{"\n\n"}</div>
        </div>

        <div>{"- SQLite (installed)"}</div>
        <div>{"- MySQL"}</div>
        <div>{"- PostgreSQL"}</div>
        <div>{"- MongoDB"}</div>
        <div>{"- MariaDB"}</div>
        <div>{"- SQL Server"}</div>
        <div>{"- Amazon Redshift"}</div>
        <div>{"- Amazon RDS"}</div>
        <div>{"- Oracle"}</div>
        <div>{"- ...and many others\n\n"}</div>

        <div>To install a database, run the command:</div>
        <div className="user">{"> tagocore install-plugin <name>"}</div>
      </Console>

      <div className="visual-list">
        <div className="brand-box mysql">
          <SVGMysql />
        </div>
        <div className="brand-box postgres">
          <SVGPostgreSQL />
        </div>
        <div className="brand-box mongodb">
          <SVGMongoDB />
        </div>
        <div className="brand-box sqlite">
          <SVGSQLite />
        </div>
        <div className="brand-box mariadb">
          <SVGMariaDB />
        </div>
        <div className="brand-box oracle">
          <SVGOracle />
        </div>
      </div>

      <style jsx>{`
        .database-support {
          position: relative;
          z-index: 1000000;
          margin-top: -10px;
        }

        .database-support .line {
          margin: 0 auto;
          width: calc(100% - 50px);
          opacity: 0.15;
          background: white;
          height: 1px;
        }

        .database-support .title :global(svg) {
          flex: none;
        }

        .database-support .title {
          padding: 20px;
          display: flex;
          background: black;
          color: white;
        }

        .database-support .title .text {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        }

        .database-support .title .description {
          color: rgba(255, 255, 255, 0.6);
        }

        .brand-box {
          align-items: center;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          overflow: hidden;
          padding: 30px 15px;
          position: relative;
        }

        .visual-list {
          width: 580px;
          position: absolute;
          right: 20px;
          top: 145px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .visual-list > :global(div) {
          width: calc(50% - 10px);
          margin: 5px;
          background: rgba(0, 0, 0, 0.3);
          height: 110px;
        }

        .visual-list .mysql :global(svg),
        .visual-list .sqlite :global(svg),
        .visual-list .mongodb :global(svg) {
          height: 70px;
        }

        .visual-list .postgres :global(svg) {
          width: 200px;
        }

        .visual-list .mariadb :global(svg) {
          width: 170px;
        }

        .visual-list .oracle :global(svg) {
          width: 160px;
        }

        .visual-list :global(svg *) {
          fill: white !important;
        }

        .database-support :global(.console) {
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        @media only screen and (max-width: 992px) {
          .visual-list .mysql :global(svg),
          .visual-list .sqlite :global(svg),
          .visual-list .mongodb :global(svg) {
            height: 50px;
          }

          .visual-list .postgres :global(svg) {
            width: 140px;
          }

          .visual-list .mariadb :global(svg) {
            width: 120px;
          }

          .visual-list .oracle :global(svg) {
            width: 110px;
          }

          .visual-list {
            width: 360px;
          }
        }

        @media only screen and (max-width: 768px) {
          .database-support :global(.console) {
            border-radius: 0;
          }

          .database-support :global(.content) {
            padding-bottom: 200px !important;
          }

          .visual-list .mysql :global(svg),
          .visual-list .sqlite :global(svg),
          .visual-list .mongodb :global(svg) {
            height: 40px;
          }

          .visual-list .postgres :global(svg) {
            width: 130px;
          }

          .visual-list .mariadb :global(svg) {
            width: 90px;
          }

          .visual-list .oracle :global(svg) {
            width: 80px;
          }

          .visual-list {
            width: 100%;
            right: 0px;
            top: calc(100% - 195px);
            padding: 10px;
          }

          .visual-list > :global(div) {
            height: 80px;
            margin: 0px;
            width: calc(33.333% - 4px);
            margin: 2px;
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
    </div>
  );
}

export default DatabaseSupport;
