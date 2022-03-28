import { Fragment, useCallback, useRef, useState } from "react";
import PluginAccordion from "./Accordion/Accordion";
import ProfileHeader from "./PublisherHeader/PublisherHeader";
import SVGPlugin from "../../../assets/icons/puzzle-piece.svg";
import Link from "../../Common/Link/Link";
import { IPluginListItem, IPluginListItemPlugin, IPluginListItemPluginVersion } from "./Plugins.types";
import Input from "../../Common/Input/Input";
import SVGSearch from "../../../assets/icons/search.svg";

/**
 * Props.
 */
interface IAccountPluginsProps {
  list: IPluginListItem[];
}

/**
 */
function AccountPlugins(props: IAccountPluginsProps) {
  const [list, setList] = useState(() => props.list);
  const [search, setSearch] = useState("");

  /**
   * Renders the empty message in the middle of the page.
   */
  const filter = useCallback(
    (value: string) => {
      setSearch(value);
      const newList = props.list
        .map((x: IPluginListItem) => {
          const plugins = x.plugins.filter(
            (y) =>
              y.name.toLowerCase().includes(value.toLowerCase()) ||
              String(y.slug).toLowerCase().includes(value.toLowerCase()) ||
              String(y.id).toLowerCase().includes(value.toLowerCase())
          );
          if (plugins.length === 0) {
            return null;
          }

          return {
            publisher: x.publisher,
            plugins,
          };
        })
        .filter((x) => x);
      setList(newList);
    },
    [props.list]
  );

  /**
   */
  const deleteVersion = useCallback(
    (version: IPluginListItemPluginVersion, item: IPluginListItemPlugin) => {
      item.versions = item.versions.filter((x) => x !== version);
      if (item.versions.length === 0) {
        const i = props.list.find((x) => x.plugins.includes(item));
        if (i) {
          i.plugins = i.plugins.filter((x) => x !== item);
        }
      }
      setList([...list]);
    },
    [list, props.list]
  );

  /**
   */
  const renderPluginItem = useCallback(
    (item: IPluginListItemPlugin) => {
      return <PluginAccordion onDeleteVersion={(version) => deleteVersion(version, item)} key={item.id} data={item} />;
    },
    [deleteVersion]
  );

  /**
   * Renders a single item in the list.
   */
  const renderItem = (item: IPluginListItem) => {
    if (item.plugins.length === 0) {
      return null;
    }
    return (
      <Fragment key={item.publisher.name}>
        <ProfileHeader id={item.publisher.id} name={item.publisher.name} pluginAmount={item.plugins.length} />
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

  /**
   */
  const renderSearch = useCallback(() => {
    return (
      <div className="search-container">
        <SVGSearch width="16px" />
        <Input autoFocus onChange={(e) => filter(e.target.value)} placeholder="Find a plugin..." value={search} />
      </div>
    );
  }, [filter, search]);

  return (
    <div className="account-plugins page-max-width">
      {props.list.length === 0 ? (
        renderEmptyMessage()
      ) : (
        <>
          {renderSearch()}
          {list.map(renderItem)}
        </>
      )}

      <style jsx>{`
        .account-plugins {
          margin-bottom: 40px;
        }

        .a {
          display: flex;
          flex-direction: column;
        }

        .b {
          display: flex;
        }

        .c {
          flex: none;
          margin-right: 40px;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
          margin-top: 40px;
          width: 200px;
          padding: 10px 0px;
        }

        .c h2 {
          font-size: 1.1rem;
          font-weight: normal;
          padding: 10px 15px;
          width: 100%;

          cursor: pointer;
        }

        .c h2:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .d {
          flex: 1;
        }

        .aa {
          flex: none;
        }

        .account-plugins :global(.search-container) {
          margin-top: 40px;
          position: relative;
        }

        .account-plugins :global(.search-container input) {
          padding-left: 50px;
        }

        .account-plugins :global(.search-container svg) {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translate(0, -50%);
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

export default AccountPlugins;
