import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { useCallback, useEffect, useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import SVGArrow from "../../SVG/SVGArrow";
import SVGPuzzlePiece from "../../SVG/SVGPuzzlePiece";
import SVGUserCircle from "../../SVG/SVGUserCircle";

/**
 * Props.
 */
interface IHeaderProps {
  account: AccountInfo;
}

/**
 */
function AccountDropdown(props: IHeaderProps) {
  const [open, setOpen] = useState(false);
  const { account } = props;

  /**
   * Logs the user out.
   */
  const logout = useCallback(() => {
    document.cookie = "tagoio-account-token=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location.reload();
  }, []);

  /**
   * Opens the dropdown.
   */
  const openDropdown = useCallback(() => {
    setOpen(true);
  }, []);

  /**
   * Closes the dropdown.
   */
  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  /**
   * Listens to click events in window to close the dropdown.
   */
  useEffect(() => {
    if (open) {
      window.addEventListener("click", closeDropdown);
      return () => window.removeEventListener("click", closeDropdown);
    }
  }, [open, closeDropdown]);

  return (
    <div className="account-dropdown">
      <div className="data" onClick={openDropdown}>
        <SVGUserCircle width="18px" height="18px" />
        <span>{account.name}</span>
      </div>

      {/* Actual floating dropdown: */}
      {open && (
        <Dropdown
          open={open}
          onClose={closeDropdown}
          items={[
            { svg: SVGPuzzlePiece, label: "Publish plugin", link: "/pluginstore/publish" },
            { svg: SVGPuzzlePiece, label: "My plugins", link: "/account/plugins" },
            { svg: SVGArrow, label: "Sign out", onClick: logout },
          ]}
        />
      )}

      <style jsx>{`
        .account-dropdown {
          position: relative;
          padding-left: 30px;
        }

        .account-dropdown .data {
          display: flex;
          align-items: center;
        }

        .account-dropdown .data > span {
          margin-left: 10px;
        }

        .account-dropdown .data:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default AccountDropdown;
