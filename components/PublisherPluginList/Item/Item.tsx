import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useState } from "react";
import Link from "../../Link/Link";
import PluginImage from "../../Plugins/Image/PluginImage";

/**
 * Query to fetch the categories and plugins.
 */
const SET_PLUGIN_ACTIVE_MUTATION = gql`
  mutation ($id: String!, $active: Boolean!) {
    setPluginActive(id: $id, active: $active) {
      status
      result
    }
  }
`;

/**
 */
interface IPublisherPluginItemProps {
  data;
}

/**
 */
function PublisherPluginItem(props: IPublisherPluginItemProps) {
  const { data } = props;

  const [loading, setLoading] = useState(false);
  const [setPluginActive] = useMutation(SET_PLUGIN_ACTIVE_MUTATION);
  const [active, setActive] = useState(data.active);

  /**
   * Toggles the `active` property of the plugin.
   */
  const toggleActive = async () => {
    try {
      setLoading(true);
      const response = await setPluginActive({ variables: { id: data.id, active: !active } });
      const success = response.data.setPluginActive.status;
      if (success) {
        setActive(!active);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`publisher-plugin-item ${loading ? "loading" : ""}`}>
      <div className="img-container">
        <PluginImage width={70} src={data.logo_url} />
      </div>

      <div className="data">
        <Link className="title" href={`/pluginstore/details/${data.id}`} target="_blank">
          {data.name}
        </Link>

        <span className="description">
          v{data.version} • {data.short_description}
        </span>

        {/* <span className="error">
          <>Error during v6.0.0 publish: Permission array is required.</>
        </span> */}
      </div>

      <label className="active">
        <input type="checkbox" checked={active} onChange={toggleActive} />
        <span>Visible in Store</span>
      </label>

      <style jsx>{`
        .publisher-plugin-item {
          display: flex;
          padding: 20px;
          align-items: center;
          transition: opacity 0.2s;
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
          font-size: 1.3rem;
          font-weight: bold;
          display: inline;
          display: flex;
        }

        .publisher-plugin-item .description {
          margin-top: 5px;
          opacity: 0.6;
          font-size: 0.88rem;
        }

        .publisher-plugin-item .error {
          margin-top: 5px;
          font-size: 0.88rem;
          color: #d30e0e;
          font-weight: bold;
        }

        .publisher-plugin-item:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
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
