import SVGCheckCircle from "../../../assets/icons/check-circle.svg";
import SVGPuzzlePiece from "../../../assets/icons/puzzle-piece.svg";
import SVGSyncAlt from "../../../assets/icons/sync-alt.svg";

interface IPublishStepsProps {
  step?: number;
}

/**
 * Shows the steps of the publication.
 */
function PublishSteps(props: IPublishStepsProps) {
  const { step } = props;
  const done = step >= 3;

  /**
   * Renders a single item.
   */
  const renderItem = (index: number, text: string) => {
    const done = step > index;
    const processing = step === index;
    return (
      <div className={`item ${done ? "done" : ""} ${processing ? "processing" : ""}`}>
        {processing ? <SVGSyncAlt width="17px" /> : <SVGCheckCircle width="17px" />}
        <span>{text}</span>
      </div>
    );
  };

  return (
    <div className="publish-steps">
      <div className="icon-container">
        <SVGPuzzlePiece fill="black" width="85px" />
      </div>

      <div className="steps">
        {renderItem(0, "Starting upload process")}
        {renderItem(1, "Uploading file")}
      </div>

      <div className="button-container">
        {done
          ? "Your Plugin was uploaded successfully. We'll send you an e-mail as soon as the plugin is published."
          : "Please wait..."}
      </div>

      <style jsx>{`
        .publish-steps {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          flex: 1;
        }

        .publish-steps .icon-container {
          width: 200px;
          height: 110px;
          border-radius: 25px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
        }

        .publish-steps .icon-container :global(svg) {
          position: absolute;
        }

        .publish-steps .steps {
          width: 300px;
          border-left: 3px solid hsl(207, 79%, 30%);
          border-radius: 3px;
          padding: 10px 20px;
          margin: 30px 0px;
        }

        .publish-steps .steps :global(.item) {
          display: flex;
          transition: left 0.2s;
          position: relative;
          left: 0px;
        }

        .publish-steps .steps :global(.item span) {
          font-size: 18px;
        }

        .publish-steps .steps :global(.item) :global(svg) {
          position: relative;
          top: 1px;
          margin-right: 10px;
        }

        .publish-steps .steps :global(.item.processing) {
          left: 20px;
        }

        .publish-steps .steps :global(.item:not(.done)) :global(svg) {
          opacity: 0.3;
          fill: black;
        }

        .publish-steps .steps :global(.item.done) :global(svg) {
          fill: hsl(207, 79%, 30%);
        }

        .publish-steps .steps :global(.item):not(:last-child) {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default PublishSteps;
