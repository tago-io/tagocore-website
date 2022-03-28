import { useMutation } from "@apollo/react-hooks";
import { gql } from "@apollo/client";
import { useCallback, useState } from "react";
import PublishStatus from "../../../Plugin/PublishStatus/PublishStatus";
import SVGTrash from "../../../../assets/icons/trash-alt.svg";
import cookie from "cookie";
import { IPluginListItemPluginVersion } from "../Plugins.types";
import { theme } from "../../../../styles/Theme";

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
 * Query to delete a resource (plugin or plugin error).
 */
const DELETE_RESOURCE_MUTATION = gql`
  mutation ($resourceID: String!) {
    deleteResource(resourceID: $resourceID) {
      status
      result
    }
  }
`;

/**
 */
interface IPluginVersion {
  data: IPluginListItemPluginVersion;
  pluginID: string;
  onDelete: () => void;
}

/**
 */
function PluginVersion(props: IPluginVersion) {
  const { data, onDelete, pluginID } = props;
  const [active, setActive] = useState<boolean>(data.active);
  const [loading, setLoading] = useState(false);
  const [setVersionActive] = useMutation(SET_PLUGIN_ACTIVE_MUTATION, {
    context: { headers: { token: cookie.parse(document.cookie)?.token } },
  });
  const [deleteResource] = useMutation(DELETE_RESOURCE_MUTATION, {
    context: { headers: { token: cookie.parse(document.cookie)?.token } },
  });

  /**
   * Toggles the `active` property of a version and makes the request to the server.
   * The status will only change if the server doesn't throw any errors.
   */
  const toggleActive = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await setVersionActive({ variables: { id: pluginID, version: data.version, active: !active } });
      if (resp?.data?.setPluginVersionActive?.status) {
        data.active = !active;
        setActive((a) => !a);
      }
    } finally {
      setLoading(false);
    }
  }, [active, data, pluginID, setVersionActive]);

  /**
   */
  const deleteIt = useCallback(async () => {
    const text = `Are you sure you want to delete this version?`;
    if (confirm(text)) {
      setLoading(true);
      const resp = await deleteResource({ variables: { resourceID: data.resource_id } });
      if (resp?.data?.deleteResource?.status) {
        setLoading(false);
        onDelete();
      }
    }
  }, [data.resource_id, deleteResource, onDelete]);

  return (
    <tr className={loading ? "loading" : ""}>
      <td className="created_at">
        <span>{data.created_at}</span>
      </td>

      <td className="version">
        <span>{data.version || "Unknown"}</span>
      </td>

      <td className="error">
        <PublishStatus errorCode={data.error_code} />
      </td>

      <td className="active">
        <label>
          <input
            disabled={!!(loading || data.error_code)}
            type="checkbox"
            checked={data.error_code ? false : active}
            onChange={toggleActive}
          />
          <span>Visible in Store</span>
        </label>
      </td>

      <td className={`delete ${active ? "disabled" : ""}`} onClick={() => deleteIt()}>
        <SVGTrash fill={theme.colors.error} width="12px" />
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
          width: 230px;
        }

        tr .name {
          width: 20%;
          max-width: 20%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        tr .error {
          width: 450px;
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
          width: 160px;
          min-width: 160px;
        }

        tr .active label {
          display: flex;
          cursor: pointer;
        }

        tr .active label span {
          margin-left: 5px;
        }

        tr .delete {
          width: 50px;
          text-align: center;
          cursor: pointer;
        }

        tr .delete:hover {
          background: ${theme.colors.error};
        }

        tr .delete:hover :global(svg) {
          fill: white;
        }

        tr .delete.disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        tr .delete:active {
          background: ${theme.colors.errorDarker};
        }

        tr .delete:active :global(svg) {
          fill: white;
        }

        tr .delete :global(svg) {
          position: relative;
          top: 1px;
        }
      `}</style>
    </tr>
  );
}

export default PluginVersion;
