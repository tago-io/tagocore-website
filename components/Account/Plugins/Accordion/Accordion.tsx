import { useCallback, useState } from "react";
import PluginImage from "../../../Plugin/Image/PluginImage";
import SVGCaretDown from "../../../../assets/icons/caret-down.svg";
import PublishStatus from "../../../Plugin/PublishStatus/PublishStatus";
import PluginVersions from "../Versions/Versions";
import { IPluginListItemPlugin, IPluginListItemPluginVersion } from "../Plugins.types";
import CopySVG from "../../../../assets/logos/copy.svg";
import CopyButton from "../CopyButton/CopyButton";

interface IPluginAccordionProps {
  data: IPluginListItemPlugin;
  onDeleteVersion: (version: IPluginListItemPluginVersion) => void;
}

function PluginAccordion(props: IPluginAccordionProps) {
  const { data, onDeleteVersion } = props;
  const [open, setOpen] = useState(false);

  /**
   * Toggles the open state.
   */
  const toggleOpen = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  const highest = data.versions.find((x) => x.active || !x.error_code) || data.versions[0];
  const errorVersion = data.versions.find((x) => x.error_code);
  const allErrors = data.versions.every((x) => x.error_code);

  return (
    <div className={`plugin-accordion ${open ? "open" : ""}`}>
      <div onClick={toggleOpen} className="accordion-title">
        <div className="img-container">
          <PluginImage width={50} src={data.logo_url} />
        </div>

        <div className="info">
          <div className="data">
            <h5 className="title">{highest.name}</h5>

            <span className="description">
              {highest.version}
              {highest.version ? ` • ` : ""}

              {errorVersion ? (
                <div className="error">
                  <PublishStatus version={errorVersion.version} errorCode={errorVersion.error_code} />
                </div>
              ) : (
                highest.short_description || "No description."
              )}
            </span>
          </div>

          <div className="icons">
            {data.id && (
              <CopyButton tooltipData={data.id} tooltip="Copy ID">
                {data.id.substring(data.id.length - 5)}
              </CopyButton>
            )}
            {data.slug && (
              <CopyButton tooltipData={data.slug} tooltip="Copy slug">
                {data.slug}
              </CopyButton>
            )}
            <SVGCaretDown width="12px" />
          </div>
        </div>
      </div>

      {open && <PluginVersions onDeleteVersion={onDeleteVersion} pluginID={data.id} versions={data.versions} />}

      <style jsx>{`
        .plugin-accordion {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 7px;
          margin-bottom: 10px;
        }

        .plugin-accordion .icons {
          margin-right: 15px;
          display: flex;
        }

        .plugin-accordion .icons .a {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          margin-right: 15px;
          display: flex;
          align-items: center;
          background: white;
          overflow: hidden;
        }

        .plugin-accordion .icons .a > div {
          padding: 5px 12px;
          padding-top: 7px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .plugin-accordion .icons .a > div :global(svg) {
          fill: rgba(0, 0, 0, 0.5);
        }

        .plugin-accordion .icons .a > div:hover {
          background: rgba(0, 0, 0, 0.07);
        }

        .plugin-accordion .icons .a > div:hover :global(svg) {
          fill: #337ab7;
        }

        .plugin-accordion .icons .a > div:active {
          background: rgba(0, 0, 0, 0.14);
        }

        .plugin-accordion .icons .a > code {
          font-size: 13px;
          padding: 0px 10px;
          background: rgba(0, 0, 0, 0.03);
          height: 100%;
          display: flex;
          align-items: center;
        }

        .plugin-accordion .accordion-title {
          align-items: center;
          cursor: pointer;
          display: flex;
          padding: 0px 0px;
          transition: opacity 0.2s;
        }

        .plugin-accordion .accordion-title:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .plugin-accordion.open .accordion-title {
          z-index: 1;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        }

        .plugin-accordion.loading {
          pointer-events: none;
          opacity: 0.5;
        }

        .plugin-accordion .img-container {
          background: white;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          margin-right: 20px;
          padding: 15px 15px;
          border-top-left-radius: 7px;
          border-bottom-left-radius: 7px;
        }

        .plugin-accordion .plugin-image {
          box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 10%);
        }

        .plugin-accordion .info {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex: 1;
        }

        .plugin-accordion .data {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .plugin-accordion :global(.title) {
          font-size: 1rem;
          font-weight: bold;
          display: inline;
          display: flex;
          margin-bottom: 2px;
        }

        .plugin-accordion .description {
          margin-top: 2px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.88rem;
          display: flex;
          align-items: center;
        }

        .plugin-accordion .id {
          font-size: 15px;
          margin-right: 5px;
          color: rgba(0, 0, 0, 0.6);
        }

        .plugin-accordion .error {
          margin-left: 5px;
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

export default PluginAccordion;
