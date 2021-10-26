import ImageBanner from "../ImageBanner/ImageBanner";
import imgHeroBanner from "../../../assets/home-page.png";
import EarlyAccessButton from "../../EarlyAccessButton/EarlyAccessButton";

/**
 * Hero banner in the front page of the website.
 */
function BannerHero() {
  /**
   * Renders the title part.
   */
  const renderTitle = () => {
    return (
      <>
        <div>
          <h1 className="text-gradient-primary">Relentlessly fast&nbsp;</h1>
        </div>
        <div>
          <h1>Edge computing</h1>
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
          TagoCore is a <b>free</b>, <b>fast</b>, and <b>open-source</b> IoT platform for edge
          computing. With TagoCore you can parse and analyze the data from your devices and do
          everything you need with it.
        </div>

        <div className="description">
          <EarlyAccessButton />
        </div>
      </>
    );
  };

  return (
    <div className="banner-hero">
      <ImageBanner title={renderTitle()} description={renderDescription()} image1={imgHeroBanner.src} />

      <style jsx>{`
        .banner-hero {
          margin-top: 60px;
        }

        @media screen and (max-width: 768px) {
          .banner-hero {
            margin-top: 80px;
          }
        }
      `}</style>
    </div>
  );
}

export default BannerHero;
