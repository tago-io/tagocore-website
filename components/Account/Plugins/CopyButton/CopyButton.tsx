import { ReactNode, useEffect, useRef, useState } from "react";
import CopySVG from "../../../../assets/logos/copy.svg";
import CheckSVG from "../../../../assets/icons/check.svg";
import copyToClipboard from "../../../../helpers/copyToClipboard";

interface ICopyButtonProps {
  children: ReactNode;
  tooltip: string;
  tooltipData: string;
}

function CopyButton(props: ICopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { children, tooltipData, tooltip } = props;
  const timeout = useRef(null);

  /**
   */
  useEffect(() => {
    if (copied) {
      timeout.current = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <div className="copy-button" onClick={(e) => e.stopPropagation()}>
      <div
        className="copy"
        onClick={() => {
          setCopied(true);
          copyToClipboard(tooltipData as string);
        }}
      >
        {copied ? <CheckSVG width="12px" /> : <CopySVG width="12px" />}
        <div className="tooltip">{tooltip}</div>
      </div>

      <div className="code">
        <span>&lrm;{children}</span>
      </div>

      <style jsx>{`
        .copy-button {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          margin-right: 15px;
          display: flex;
          align-items: center;
          background: white;
        }

        .tooltip {
          position: absolute;
          left: 50%;
          bottom: 10px;
          border-radius: 5px;
          white-space: nowrap;
          padding: 5px 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          z-index: 1111;
          transform: translate(-50%, -100%);
          opacity: 0;
          transition: opacity 0.15s;
          pointer-events: none;
        }

        .copy-button .copy {
          padding: 5px 12px;
          padding-top: 7px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          cursor: pointer;
          position: relative;
        }

        .copy-button .copy:hover .tooltip {
          opacity: 1;
        }

        .copy-button .copy :global(svg) {
          fill: rgba(0, 0, 0, 0.5);
        }

        .copy-button .copy:hover {
          background: rgba(0, 0, 0, 0.07);
        }

        .copy-button .copy:hover :global(svg) {
          fill: #337ab7;
        }

        .copy-button .copy:active {
          background: rgba(0, 0, 0, 0.14);
        }

        .copy-button > .code {
          padding: 0px 10px;
          background: rgba(0, 0, 0, 0.03);
          height: 100%;
          display: flex;
          align-items: center;
          max-width: 150px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          direction: rtl;
          font-family: Monospace;
        }

        .copy-button .code span {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

export default CopyButton;
