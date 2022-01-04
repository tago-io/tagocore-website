import SVGShare from "../../../../assets/icons/share-alt.svg";
import VerifiedMark from "../../../Plugin/VerifiedMark/VerifiedMark";

/**
 * Props.
 */
interface IProfileHeaderProps {
  name: string;
  shared?: boolean;
  domain?: string;
  pluginAmount: number;
}

/**
 */
function ProfileHeader(props: IProfileHeaderProps) {
  const { name, shared, domain, pluginAmount } = props;

  return (
    <div className="profile-header">
      <div className="data">
        <div className="title">
          <h3>{name}</h3>

          {domain && (
            <div className="verified-container">
              <VerifiedMark />
            </div>
          )}

          {shared && (
            <div className="share-container">
              <SVGShare width="12px" />
            </div>
          )}
        </div>
      </div>

      <div className="description">
        {pluginAmount} {pluginAmount === 1 ? "Plugin" : "Plugins"}
      </div>

      <style jsx>{`
        .profile-header {
          display: flex;
          align-items: center;
          margin-top: 40px;
        }

        .profile-header .image {
          display: flex;
          align-items: center;
          position: relative;
          margin-right: 10px;
          top: 1px;
        }

        .profile-header > .data {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .profile-header > .data .title {
          display: flex;
          align-items: center;
        }

        .profile-header > .data .title h3 {
          font-size: 1.6rem;
        }

        .profile-header > .data .title .verified-container {
          position: relative;
          margin-left: 5px;
        }

        .profile-header > .description {
          font-weight: normal;
          opacity: 0.6;
          margin-top: 3px;
        }
      `}</style>
    </div>
  );
}

export default ProfileHeader;
