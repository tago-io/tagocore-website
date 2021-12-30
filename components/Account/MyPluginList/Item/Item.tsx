import { useCallback, useState } from "react";
import PluginImage from "../../../Plugins/Image/PluginImage";
import SVGCaretDown from "../../../../assets/icons/caret-down.svg";
import Version from "../Version";
import PublishStatus from "../../../PublishStatus/PublishStatus";

/**
 */
interface IPublisherPluginItemProps {
  data;
}

/**
 */
function PublisherPluginItem(props: IPublisherPluginItemProps) {
  const { data } = props;
  const [open, setOpen] = useState(false);

  /**
   * Toggles the open state.
   */
  const toggleOpen = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  /**
   */
  const renderVersion = useCallback(
    (versionData) => {
      return <Version pluginID={data.id} key={versionData.version} data={versionData} />;
    },
    [data.id]
  );

  const highest = data.versions[0];
  const errorVersion = data.versions.find((x) => x.publish_error);

  return (
    <div className={`publisher-plugin-item item ${open ? "open" : ""}`}>
      <div onClick={toggleOpen} className="accordion-title">
        <div className="img-container">
          <PluginImage width={70} src={data.logo_url} />
        </div>

        <div className="data">
          <h5 className="title">{highest.name}</h5>

          <span className="description">
            v{highest.version} • {highest.short_description}
          </span>

          {errorVersion && (
            <div className="error">
              <PublishStatus version={errorVersion.version} publishError={errorVersion.publish_error} />
            </div>
          )}
        </div>

        <div className="icons">
          <SVGCaretDown width="16px" />
        </div>
      </div>

      {open && (
        <div className="content">
          <div className="table-container">
            <table>
              <tr>
                <th>Publish Date</th>
                <th>Name</th>
                <th>Version</th>
                <th>Publish Status</th>
                <th>Visible</th>
              </tr>

              {data.versions.map(renderVersion)}
            </table>
          </div>
        </div>
      )}

      <style jsx>{`
        .item {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 7px;
          margin-bottom: 10px;
          overflow: hidden;
        }

        .item .accordion-title {
          align-items: center;
          cursor: pointer;
          display: flex;
          padding: 20px;
          transition: opacity 0.2s;
        }

        .item .accordion-title:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .item.open .accordion-title {
          z-index: 1;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        }

        .item .content {
          z-index: 0;
        }

        .item .table-container {
          overflow: hidden;
        }

        .item .content table {
          width: calc(100% + 2px);
          border-spacing: 0px;
          border-collapse: collapse;
          border: 0;
          margin: -1px;
          background: white;
        }

        .item .content table :global(*) {
          font-size: 0.88rem;
        }

        .item .content table th,
        .item .content table :global(td) {
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 7px 14px;
        }

        .item .content table th,
        .item .content table :global(td) {
        }

        .item .content table th {
          background: rgba(0, 0, 0, 0.05);
        }

        .publisher-plugin-item.loading {
          pointer-events: none;
          opacity: 0.5;
        }

        .publisher-plugin-item .img-container {
          margin-right: 20px;
        }

        .publisher-plugin-item .plugin-image {
          box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 10%);
        }

        .publisher-plugin-item .data {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .publisher-plugin-item :global(.title) {
          font-size: 1.1rem;
          font-weight: bold;
          display: inline;
          display: flex;
        }

        .publisher-plugin-item .description {
          margin-top: 5px;
          opacity: 0.6;
          font-size: 0.88rem;
        }

        .publisher-plugin-item .data :global(.error) {
          margin-top: 5px;
        }

        .active {
          cursor: pointer;
          display: flex;
        }

        .active input {
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}

export default PublisherPluginItem;
