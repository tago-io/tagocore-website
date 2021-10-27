import imgOpenSource from "../../../assets/open-source.png";
import ImageBanner from "../ImageBanner/ImageBanner";

/**
 * The "pricing" banner. This shows the pricing for tago core by explaining
 * that it is free and open source.
 */
function BannerPricing() {
  /**
   * Renders the title part.
   */
  const renderTitle = () => {
    return (
      <>
        <div>
          <div>
            <h2>Looking for usage prices?</h2>
          </div>
          <div>
            <h2>There aren&apos;t any.</h2>
          </div>
          <div>
            <h2 className="text-gradient-primary">It&apos;s free and open source.</h2>
          </div>
        </div>
      </>
    );
  };

  /**
   * Renders the description.
   */
  const renderDescription = () => {
    return (
      <>
        <div className="description">
          TagoCore <b>is</b> and will <b>forever be</b> free. We believe that great things should be accessible to
          everyone through open source code.
        </div>

        <div className="description">
          You can, however, go beyond with our premium <b>TagoCore support</b>! We offer exclusive support for any
          questions or implementation details you might have for a small monthly fee.
        </div>
      </>
    );
  };

  return <ImageBanner title={renderTitle()} description={renderDescription()} image1={imgOpenSource.src} side="left" />;
}

export default BannerPricing;
