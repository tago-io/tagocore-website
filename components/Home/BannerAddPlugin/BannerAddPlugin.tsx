import ImageBanner from "../ImageBanner/ImageBanner";
import imgAddPlugin from "../../../assets/add-plugin.png";

/**
 * Banner with an image to explain plugins and how to build them.
 */
function BannerAddPlugin() {
  /**
   * Renders the title part.
   */
  const renderTitle = () => {
    return (
      <>
        <div>
          <h2>Don&apos;t have it?</h2>
        </div>
        <div>
          <h2 className="text-gradient-primary">Build it.</h2>
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
          With <b>TagoCore SDK</b>, you can build your very own plugins and perform any kind of task in the system, such
          as adding different types of parsers, options, and screens.
        </div>
      </>
    );
  };

  return <ImageBanner title={renderTitle()} description={renderDescription()} image1={imgAddPlugin.src} />;
}

export default BannerAddPlugin;
