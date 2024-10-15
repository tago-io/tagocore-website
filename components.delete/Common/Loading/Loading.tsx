import { memo } from "react";

/**
 * Main loading component.
 */
function Loading() {
  return (
    <footer className="loading">
      <div className="inner" />

      <style jsx>{`
        @keyframes animation {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .loading {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .loading .inner {
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 100%;
          animation: animation 1s infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
}

export default memo(Loading);
