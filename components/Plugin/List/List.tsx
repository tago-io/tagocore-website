import SVGSearch from "../../SVG/SVGSearch";
import PluginCard from "../Card";
import Pagination from "../Pagination";

function List() {
  return (
    <div className="plugin-list page-max-width">
      <div className="content">
        <div className="categories">
          <div className="inner-categories">
            <h3>Categories</h3>
            <span>All categories</span>
            <span>MQTT</span>
            <span>LoRaWAN</span>
            <span>Services</span>
            <span>Integrations</span>
            <span>Databases</span>
            <span>Monitoring</span>
          </div>
        </div>

        <div className="data">
          <div className="search">
            <SVGSearch width="20px" />
            <input placeholder="Search plugins (i.e. MQTT, Grafana, MySQL...)" />
          </div>

          <div className="inner-data">
            <PluginCard name="Plugin #0" />
            <PluginCard name="Plugin #1" />
            <PluginCard name="Plugin #2" />
            <PluginCard name="Plugin #3" />
            <PluginCard name="Plugin #4" />
            <PluginCard name="Plugin #5" />
            <PluginCard name="Plugin #6" />
            <PluginCard name="Plugin #7" />
            <PluginCard name="Plugin #0" />
            <PluginCard name="Plugin #6" />
            <PluginCard name="Plugin #7" />
            <PluginCard name="Plugin #0" />
            <PluginCard name="Plugin #6" />
            <PluginCard name="Plugin #7" />
            <PluginCard name="Plugin #0" />
          </div>

          <Pagination />
        </div>
      </div>

      <style jsx>{`
        .plugin-list {
          display: flex;
          margin-top: 60px;
          padding-top: 40px;
          flex-direction: column;
        }

        .plugin-list .content {
          display: flex;
        }

        .plugin-list .categories {
          display: flex;
          flex-direction: column;
          width: 200px;
          margin-right: 40px;
        }

        .plugin-list .inner-categories {
          display: flex;
          flex-direction: column;
          width: 200px;
          position: fixed;
        }

        .plugin-list .categories h3 {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .plugin-list .categories span {
          cursor: pointer;
          margin-bottom: 20px;
        }

        .plugin-list .data {
          flex: 1;
          margin: -7px;
          margin-bottom: 20px;
          margin-top: 0;
          display: flex;
          flex-direction: column;
        }

        .plugin-list .data .inner-data {
          display: flex;
          flex-wrap: wrap;
          flex: none;
          flex: 1;
          background: rgba(0, 0, 0, 0.05);
          padding: 5px;
          border-radius: 7px;
        }

        .plugin-list .search {
          background: rgba(0, 0, 0, 0.05);
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 10px;
          position: relative;
        }

        .plugin-list .search :global(svg) {
          position: absolute;
          left: 30px;
          top: 50%;
          transform: translate(0%, -50%);
          z-index: 111;
          opacity: 0.7;
        }

        .plugin-list .search input {
          border: 1px solid rgba(0, 0, 0, 0.1);
          outline: 0;
          border-radius: 5px;
          padding: 15px 15px;
          padding-left: 55px;
          font-size: 15px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default List;
