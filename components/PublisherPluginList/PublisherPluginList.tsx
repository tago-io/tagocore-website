import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import PublisherPluginItem from "./Item/Item";

/**
 * Query to fetch all plugins from the current logged-in user.
 */
const QUERY = gql`
  query {
    pluginList {
      active
      id
      logo_url
      name
      short_description
      version
    }
  }
`;

/**
 */
function PublisherPluginList() {
  const { data } = useQuery(QUERY);

  const list = data?.pluginList || [];

  /**
   * Renders a single item in the list.
   */
  const renderItem = (item) => {
    return <PublisherPluginItem key={data.id} data={item} />;
  };

  return (
    <div className="packages page-max-width">
      <div className="header">
        <h3>TagoIO</h3>
        <h5>
          {list.length} {list.length === 1 ? "Plugin" : "Plugins"}
        </h5>
      </div>

      <div className="items">{list.map(renderItem)}</div>

      <style jsx>{`
        .packages {
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .packages .items {
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          margin-top: 20px;
        }

        .packages .header {
          font-size: 1.6rem;
          display: flex;
          align-items: center;
        }

        .packages .header h5 {
          font-weight: normal;
          opacity: 0.8;
          margin-top: 3px;
          margin-left: 15px;
          padding-left: 15px;
          border-left: 1px solid rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default PublisherPluginList;
