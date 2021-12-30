import ImageBanner from "../ImageBanner/ImageBanner";
import imgHeroBanner from "../../../assets/home-page.png";
import EarlyAccessButton from "../EarlyAccessButton/EarlyAccessButton";

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
          <h1 className="accent">Relentlessly fast&nbsp;</h1>
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
          TagoCore is a <b>free</b>, <b>fast</b>, and <b>open-source</b> IoT platform for edge computing that you can
          use to parse and analyze the data from your devices, and more!
        </div>

        <div className="description">
          <EarlyAccessButton />
        </div>
      </>
    );
  };

  return (
    <div className="banner-hero">
      <ImageBanner title={renderTitle()} description={renderDescription()} imageSrc={imgHeroBanner.src} />

      <style jsx>{`
        @media screen and (max-width: 768px) {
          .banner-hero {
            margin-top: 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default BannerHero;
