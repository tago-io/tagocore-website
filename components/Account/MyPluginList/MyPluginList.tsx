import PublisherPluginItem from "./Item/Item";
import ProfileHeader from "./ProfileHeader";

/**
 * Props.
 */
interface IMyPluginListProps {
  list;
}

/**
 */
function MyPluginList(props: IMyPluginListProps) {
  const { list } = props;

  /**
   */
  const renderPluginItem = (item) => {
    return <PublisherPluginItem key={item.id} data={item} />;
  };

  /**
   * Renders a single item in the list.
   */
  const renderItem = (item) => {
    return (
      <>
        <ProfileHeader
          name={item.publisher.name}
          domain={item.publisher.domain}
          shared={item.publisher.shared}
          pluginAmount={item.plugins.length}
        />
        <div className="items">{item.plugins.map(renderPluginItem)}</div>
      </>
    );
  };

  return (
    <div className="account-plugins page-max-width">
      {list.map(renderItem)}

      <style jsx>{`
        .account-plugins {
          margin-bottom: 40px;
        }

        .account-plugins > :global(.items) {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default MyPluginList;
