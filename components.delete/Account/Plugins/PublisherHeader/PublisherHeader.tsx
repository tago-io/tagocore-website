import Button from "../../../Common/Button/Button";
import SVGPlus from "../../../../assets/icons/plus-circle.svg";
import Link from "../../../Common/Link/Link";

/**
 * Props.
 */
interface IProfileHeaderProps {
  name: string;
  id: string;
  pluginAmount: number;
}

function ProfileHeader(props: IProfileHeaderProps) {
  const { id, name, pluginAmount } = props;

  return (
    <div className="profile-header">
      <div className="data">
        <div className="title">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="description">
        {pluginAmount} {pluginAmount === 1 ? "Plugin" : "Plugins"}
      </div>

      <div className="publish">
        <Link href={`/pluginstore/publish?publisher=${id}`}>
          <Button>
            <SVGPlus width="12px" height="12px" />
            <span>&nbsp;&nbsp;Publish Plugin</span>
          </Button>
        </Link>
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

        .profile-header .publish :global(button) {
          padding: 7px 20px;
          margin-left: 20px;
        }

        .profile-header .publish :global(a) {
          text-decoration: none;
        }

        .profile-header > .description {
          font-weight: normal;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

export default ProfileHeader;
