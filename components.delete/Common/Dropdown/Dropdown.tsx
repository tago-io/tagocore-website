import { useCallback, useEffect } from "react";
import { theme } from "../../../styles/Theme";
import Link from "../Link/Link";

/**
 * A Single item inside of the dropdown.
 */
interface IDropdownItem {
  /**
   * SVG element to act as the item's icon.
   */
  svg;
  /**
   * Label of the item.
   */
  label: string;
  /**
   * Link of the dropdown item. Optional, but if this is not informed then `onClick` probably should.
   */
  link?: string;
  /**
   * Called when the dropdown item is clicked by the user.
   */
  onClick?: () => void;
}

/**
 * Props.
 */
interface IDropdownProps {
  /**
   * Indicates if the dropdown is open or not.
   */
  open: boolean;
  /**
   * Items to render inside of the dropdown.
   */
  items: IDropdownItem[];
  /**
   * Called when the dropdown needs to be closed.
   */
  onClose: () => void;
}

function Dropdown(props: IDropdownProps) {
  const { open, items, onClose } = props;

  /**
   * Called when the dropdown receives a mouse-down event.
   */
  const onDropdownClick = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  /**
   */
  const onClickItem = useCallback(
    (item: IDropdownItem) => {
      item.onClick?.();
      onClose();
    },
    [onClose]
  );

  /**
   * Renders a single item.
   */
  const renderItem = useCallback(
    (item: IDropdownItem) => {
      return item.link ? (
        <Link onClick={() => onClickItem(item)} key={item.link} className="item" href={item.link}>
          <item.svg width="12px" height="12px" />
          <span>{item.label}</span>
        </Link>
      ) : (
        <div key={item.label} className="item" onClick={() => onClickItem(item)}>
          <item.svg width="12px" height="12px" />
          <span>{item.label}</span>
        </div>
      );
    },
    [onClickItem]
  );

  /**
   * Listens to click events in window to close the dropdown.
   */
  useEffect(() => {
    if (open) {
      window.addEventListener("click", onClose);
      return () => window.removeEventListener("click", onClose);
    }
  }, [open, onClose]);

  return (
    <div className="dropdown" onClick={onDropdownClick}>
      {items.map(renderItem)}

      <style jsx>{`
        .dropdown {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          top: calc(100% + 10px);
          right: 0px;
          width: 200px;
          background: white;
          padding: 10px 0px;
          flex-direction: column;
          border-radius: 7px;
        }

        .dropdown > :global(.item) {
          padding: 7px 15px;
          width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .dropdown > :global(.item > span) {
          margin-left: 10px;
          color: ${theme.colors.primary};
        }

        .dropdown > :global(.item:hover) {
          background-color: ${theme.colors.primary};
        }

        .dropdown > :global(.item:hover *) {
          color: ${theme.colors.secondary};
          fill: ${theme.colors.secondary};
        }
      `}</style>
    </div>
  );
}

export default Dropdown;
