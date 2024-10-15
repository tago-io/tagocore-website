import SVGCertificate from "../../../assets/icons/certificate.svg";
import SVGCheck from "../../../assets/icons/check.svg";

function VerifiedMark() {
  return (
    <div className="verified-mark">
      <SVGCertificate className="certificate" width="15px" />
      <SVGCheck className="check" width="15px" />

      <style jsx>{`
        .verified-mark {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .verified-mark > :global(.certificate) {
          fill: #337ab7;
        }

        .verified-mark > :global(.check) {
          fill: white;
          position: absolute;
          transform: scale(0.5);
        }
      `}</style>
    </div>
  );
}

export default VerifiedMark;
