import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useCallback, useState } from "react";
import Link from "../../Common/Link/Link";
import PublishStatus from "../../Plugin/PublishStatus/PublishStatus";

/**
 * Query to fetch the categories and plugins.
 */
const SET_PLUGIN_ACTIVE_MUTATION = gql`
  mutation ($id: String!, $version: String!, $active: Boolean!) {
    setPluginVersionActive(id: $id, version: $version, active: $active) {
      status
      result
    }
  }
`;

/**
 */
interface IVersionProps {
  data;
  pluginID: string;
}

/**
 */
function Version(props: IVersionProps) {
  const { data, pluginID } = props;
  const [active, setActive] = useState<boolean>(data.active);
  const [loading, setLoading] = useState(false);
  const [setVersionActive] = useMutation(SET_PLUGIN_ACTIVE_MUTATION);

  /**
   * Toggles the `active` property of a version and makes the request to the server.
   * The status will only change if the server doesn't throw any errors.
   */
  const toggleActive = useCallback(async () => {
    try {
      setLoading(true);
      await setVersionActive({ variables: { id: pluginID, version: data.version, active: !active } });
      setActive((a) => !a);
    } finally {
      setLoading(false);
    }
  }, [active, data, pluginID, setVersionActive]);

  return (
    <tr className={loading ? "loading" : ""}>
      <td className="created_at">
        <span>2020-01-01T15:00:00Z</span>
      </td>

      <td className="name">
        <Link target="_blank" href="#">
          {data.name}
        </Link>
      </td>

      <td className="version">
        <span>{data.version}</span>
      </td>

      <td className="error">
        <PublishStatus publishError={data.publish_error} />
      </td>

      <td className="active">
        <label>
          <input disabled={loading || data.publish_error} type="checkbox" checked={active} onChange={toggleActive} />
          <span>Visible in Store</span>
        </label>
      </td>

      <style jsx>{`
        tr {
          width: 100%;
          transition: opacity 0.2s;
        }

        tr.loading {
          opacity: 0.5;
          pointer-events: none;
        }

        tr .created_at {
          width: 200px;
        }

        tr .name {
          width: 25%;
          max-width: 25%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        tr .name :global(a) {
          width: 100%;
          display: flex;
        }

        tr .version {
          width: 150px;
          max-width: 150px;
        }

        tr .active {
          width: 250px;
          min-width: 250px;
        }

        .active label {
          display: flex;
          cursor: pointer;
        }

        .active label span {
          margin-left: 5px;
        }
      `}</style>
    </tr>
  );
}

export default Version;
