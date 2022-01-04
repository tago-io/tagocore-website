import { Fragment, useCallback } from "react";
import PublisherPluginItem from "./Item/Item";
import ProfileHeader from "./PublisherHeader/PublisherHeader";
import SVGPlugin from "../../../assets/icons/puzzle-piece.svg";
import Link from "../../Common/Link/Link";

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
      <Fragment key={item.publisher.name}>
        <ProfileHeader
          name={item.publisher.name}
          domain={item.publisher.domain}
          shared={item.publisher.shared}
          pluginAmount={item.plugins.length}
        />
        <div className="items">{item.plugins.map(renderPluginItem)}</div>
      </Fragment>
    );
  };

  /**
   * Renders the empty message in the middle of the page.
   */
  const renderEmptyMessage = useCallback(() => {
    return (
      <div className="empty-message">
        <SVGPlugin width="70px" fill="rgba(0, 0, 0, 0.2)" />

        <div className="text">
          <h3>You haven&apos;t published any plugins.</h3>
          <div>
            <Link href="/pluginstore/publish" className="description">
              Why not start now?
            </Link>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <div className="account-plugins page-max-width">
      {list.length === 0 ? renderEmptyMessage() : list.map(renderItem)}

      <style jsx>{`
        .account-plugins {
          margin-bottom: 40px;
        }

        .account-plugins > :global(.items) {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        }

        .account-plugins > :global(.empty-message) {
          display: flex;
          align-items: flex-end;
          position: fixed;
          top: calc(50% - 150px + 60px);
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .account-plugins > :global(.empty-message .text) {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        }

        .account-plugins > :global(.empty-message .text h3) {
          margin: 0;
        }

        .account-plugins > :global(.empty-message .description) {
          display: inline-flex;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

export default MyPluginList;
