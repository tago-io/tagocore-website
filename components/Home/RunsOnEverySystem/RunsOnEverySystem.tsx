import BrandBox, { EBrandBox } from "../../BrandBox/BrandBox";

function RunsOnEverySystem() {
  return (
    <div className="section-runs-on">
      <div className="page-max-width">
        <div>
          <h2>Also, it runs on&nbsp;</h2>
          <h2 className="text-gradient-primary">every system&nbsp;</h2>
          <h2>you know</h2>
        </div>

        <div className="description">
          TagoCore versatile framework allows it to run pretty much anywhere you want it to.
        </div>

        <div className="row">
          <BrandBox type={EBrandBox.linux} />
          <BrandBox type={EBrandBox.windows} />
          <BrandBox type={EBrandBox.apple} />
          <BrandBox type={EBrandBox.aws} />
          <BrandBox type={EBrandBox.redhat} />
          <BrandBox type={EBrandBox.ubuntu} />
          <BrandBox type={EBrandBox.debian} />
          <BrandBox type={EBrandBox.raspberry} />
        </div>

        <div className="your-own">
          <div className="stripe bg-primary" />
          <span>...and many more!</span>
        </div>
      </div>

      <style jsx>{`
        .section-runs-on {
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
          background: white;
          position: relative;
        }

        .section-runs-on h2 {
          margin-bottom: 20px !important;
        }

        .section-runs-on .description {
          margin-bottom: 40px;
        }

        .section-runs-on .row {
          display: flex;
          width: 100%;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-runs-on :global(.brand-box) {
          flex: none;
          width: 100px;
          height: 80px;
          margin-bottom: 20px;
        }

        .section-runs-on :global(.brand-box) :global(.img-container) {
          transform: scale(0.7) !important;
        }

        .section-runs-on .item:first-child {
          margin-left: 0px;
        }

        .section-runs-on .item:last-child {
          margin-right: 0px;
        }

        .section-runs-on .item img {
          width: 65%;
          height: 65%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.5;
        }

        .section-runs-on .your-own {
          padding: 20px;
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          width: 500px;
          max-width: calc(100% - 40px);
        }
      `}</style>
    </div>
  );
}

export default RunsOnEverySystem;
