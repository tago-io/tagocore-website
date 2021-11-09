import { theme } from "../../styles/Theme";
import SVGVerified from "../SVG/SVGVerified";

/**
 * Props.
 */
interface IDeveloperProps {
  name: string;
  verified?: boolean;
  domain?: string;
}

/**
 */
function Developer(props: IDeveloperProps) {
  const { name, verified } = props;

  return (
    <div className={`developer ${verified ? "verified" : ""}`}>
      <span>{name}</span>

      {verified && <SVGVerified color={theme.colors.verified} width="12px" />}

      <style jsx>{`
        .developer {
          display: flex;
          align-items: center;
        }

        .developer span {
          color: rgba(0, 0, 0, 0.5);
          font-size: 14px;
          margin-top: 2px;
          margin-right: 3px;
        }

        .developer.verified span {
          color: ${theme.colors.verified};
        }

        .developer.verified :global(.verified) {
          top: 1px;
        }
      `}</style>
    </div>
  );
}

export default Developer;
