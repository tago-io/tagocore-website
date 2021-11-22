import SVGCheckCircle from "../../SVG/SVGCheckCircle";
import SVGPuzzlePiece from "../../SVG/SVGPuzzlePiece";
import SVGSyncAlt from "../../SVG/SVGSyncAlt";

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
        <SVGPuzzlePiece width="120px" />
        <SVGPuzzlePiece width="120px" />
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
          width: 120px;
          height: 90px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.12);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(-8deg);
        }

        .publish-steps .icon-container :global(svg) {
          position: absolute;
          transform: rotate(20deg);
        }

        .publish-steps .icon-container :global(svg:nth-child(1)) {
          margin-right: -7px;
          margin-top: -7px;
          fill: hsla(207, 79%, 30%, 0.4);
          transform: rotate(18deg);
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
