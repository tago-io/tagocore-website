import { useCallback, useState } from "react";
import { IPluginListItemPluginVersion } from "../Plugins.types";
import PluginVersion from "../Version/Version";

/**
 */
interface IPluginVersions {
  versions: IPluginListItemPluginVersion[];
  pluginID: string;
  onDeleteVersion: (version: IPluginListItemPluginVersion) => void;
}

// /**
//  */
//  const deleteVersion = useCallback(
//   (version: IPluginListItemPluginVersion) => {
//     const i = versions.indexOf(version);
//     if (i >= 0) {
//       versions.splice(i, 1);
//       setDate(Date.now());
//     }
//   },
//   [versions]
// );

/**
 */
function PluginVersions(props: IPluginVersions) {
  const { versions, onDeleteVersion, pluginID } = props;

  /**
   */
  const renderVersion = (version: IPluginListItemPluginVersion) => {
    return (
      <PluginVersion
        onDelete={() => onDeleteVersion(version)}
        key={version.version}
        data={version}
        pluginID={pluginID}
      />
    );
  };

  return (
    <table>
      <tr>
        <th>Publish Date</th>
        <th>Version</th>
        <th>Status</th>
        <th>Visible</th>
        <th>Delete</th>
      </tr>

      {versions.map(renderVersion)}

      <style jsx>{`
        table {
          width: calc(100% + 2px);
          border-spacing: 0px;
          border-collapse: collapse;
          border: 0;
          margin: -1px;
          background: white;
        }

        table :global(*) {
          font-size: 0.88rem;
        }

        table th {
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 5px 14px;
        }

        table :global(tr:nth-child(even)) {
          background: rgba(0, 0, 0, 0.03);
        }

        table :global(td) {
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 3px 14px;
        }

        table th,
        table :global(td) {
        }

        table th {
          background: rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </table>
  );
}

export default PluginVersions;
