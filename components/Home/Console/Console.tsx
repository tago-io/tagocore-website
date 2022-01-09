import { ReactNode } from "react";

/**
 * Props.
 */
interface IConsoleProps {
  title?: string;
  children: ReactNode;
}

/**
 */
function Console(props: IConsoleProps) {
  return (
    <div className="console">
      <div className="title">
        <div className="buttons">
          <div className="red" />
          <div className="yellow" />
          <div className="green" />
        </div>

        <span>{props.title}</span>
      </div>

      <div className="content">{props.children}</div>

      <style jsx>{`
        .console {
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.3);
        }

        .console .buttons {
          display: flex;
          position: absolute;
        }

        .console .buttons > div {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 7px;
        }

        .console .buttons > .red {
          background: #ff5f57;
        }

        .console .buttons > .yellow {
          background: #ffbc2d;
        }

        .console .buttons > .green {
          background: #27c840;
        }

        .console .title {
          background: #35343d;
          padding: 5px 10px;
          font-weight: bold;
          text-align: center;
          width: 100%;
          display: flex;
          align-items: center;
          border-bottom: 1px solid black;
        }

        .console .title * {
          color: rgb(200, 200, 200) !important;
          font-size: 0.88rem;
        }

        .console .title span {
          flex: 1;
        }

        .console .content {
          background: #1e1e1e;
          padding: 15px;
          display: flex;
          flex-direction: column;
          color: white;
        }

        .console .content :global(*) {
          font-family: Monospace;
          font-size: 0.88rem;
          line-height: 20px;
          white-space: pre;
        }

        .console .content :global(.arrow) {
          color: #ea4aaa;
          margin-right: 10px;
        }

        .console .content :global(.user) {
          color: #3fb950;
          margin-right: 10px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

export default Console;
