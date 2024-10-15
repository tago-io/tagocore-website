import SVGStar from "../../../assets/icons/star.svg";

function PremiumSupportBanner() {
  return (
    <div className="premium-support-banner">
      <div className="however">
        <span>However...</span>
      </div>

      <div className="content">
        <SVGStar width="55px" fill="white" />

        <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          You can go beyond with our premium TagoCore Support!
        </div>

        <span className="description2">
          With TagoCore Support you can ask questions directly to our team of experts ready to help you.
        </span>

        <a target="_blank" href="https://tago.io/contact-us/" rel="noreferrer">
          Get in touch!
        </a>
      </div>

      <style jsx>{`
        .premium-support-banner {
          text-align: center;
        }

        .premium-support-banner .however {
          margin-bottom: -10px;
          color: black;
          z-index: 111;
          font-size: 1.3rem;
          margin-left: 20px;
          font-weight: bold;
          display: inline-flex;
          margin: 0 auto;
        }

        .premium-support-banner .however span {
          background: white;
          padding: 5px 20px;
          border-radius: 10px;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .premium-support-banner .content :global(svg) {
          border-radius: 50%;
          background: black;
          width: 60px;
          height: 60px;
          overflow: visible;
          padding: 10px;
          margin-bottom: 20px;
        }

        .premium-support-banner .content {
          padding: 30px 20px;
          background: white;
          border-radius: 10px;
          color: black;
          display: flex;
          align-items: center;
          flex-direction: column;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
        }

        .premium-support-banner .content a {
          margin-top: 20px;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}

export default PremiumSupportBanner;
