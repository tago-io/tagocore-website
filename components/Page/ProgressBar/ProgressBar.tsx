import { Router } from "next/router";
import { useEffect, useRef, useState } from "react";
import { theme } from "../../../styles/Theme";

/**
 * Renders a progress bar below the header to indicate progress when switching routes.
 */
function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [rebuild, setRebuild] = useState(false);
  const parent = useRef<HTMLDivElement>(null);

  /**
   * Effect used to listen to the next.js routes and activate the progress bar.
   */
  useEffect(() => {
    const routeChangeStart = () => {
      setRebuild(true);
      setProgress(0);
    };

    const routeChangeEnd = () => {
      setProgress(100);
    };

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeError", routeChangeEnd);

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeComplete", routeChangeEnd);
      Router.events.off("routeChangeError", routeChangeEnd);
    };
  }, []);

  /**
   * Effect used to rebuild the bar by toggling states.
   */
  useEffect(() => {
    if (rebuild) {
      setRebuild(false);
      setProgress(75);
    }
  }, [rebuild]);

  return (
    <div className="progress-bar" ref={parent}>
      {progress > 0 && !rebuild && <div className={`progress ${progress === 100 ? "end" : ""}`} />}

      <style jsx>{`
        @keyframes initial-animation {
          from {
            width: 0%;
          }
          to {
            width: 75%;
          }
        }

        @keyframes end-animation {
          from {
            width: 75%;
          }
          to {
            width: 100%;
          }
        }

        .progress-bar {
          height: 2px;
          position: fixed;
          top: ${theme.sizes.headerHeight}px;
          z-index: 10;
          width: 100%;
          pointer-events: none;
        }

        .progress-bar .progress {
          height: 2px;
          background: black;
          width: 0%;
          transition: width 1s ease-out, opacity 0.3s;
          animation: initial-animation 1s forwards;
          opacity: ${progress === 100 ? 0 : 1};
        }

        .progress-bar .progress.end {
          animation: end-animation 0.3s forwards;
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
