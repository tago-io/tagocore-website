import { ReactNode } from "react";

/**
 * Props.
 */
interface IImageBannerProps {
  title?: ReactNode;
  description?: ReactNode;
  image1?: string;
  image2?: string;
  side?: "left" | "right";
}

/**
 * This banner shows a strong text on either side and an image on the opposite side.
 * The side of the image can be configured.
 */
function ImageBanner(props: IImageBannerProps) {
  const { title, description, image1, image2 } = props;
  const side = props.side || "right";

  return (
    <div className={`image-banner page-max-width ${side === "right" ? "right" : "left"}`}>
      <div className="title-side">
        <div className="data">
          <div className="title">{title}</div>
          {description}
        </div>
      </div>

      <div className="picture-side">
        <div className="images">
          {image1 && <img width="1043px" height="647px" className="img1" src={image1} alt="banner-image1" />}
          {image2 && <img width="1043px" height="647px" className="img2" src={image2} alt="banner-image2" />}
        </div>
      </div>

      <div className="fade" />

      <style jsx>{`
        .image-banner {
          height: calc(100vh - 60px);
          display: flex;
          max-height: 750px;
          position: relative;
        }

        .image-banner .title-side {
          flex: none;
          display: flex;
          flex-direction: column;
          text-align: left;
          justify-content: center;
          padding-right: 30px;
        }

        .image-banner .title-side .data {
          width: 500px;
          max-width: 100%;
        }

        .image-banner .title-side .title {
          margin-bottom: 20px;
        }

        .image-banner .title-side :global(.description) {
          margin-bottom: 20px;
        }

        .image-banner .picture-side {
          flex: 1;
        }

        .image-banner .picture-side .images {
          display: flex;
          align-items: center;
          position: relative;
          height: 100%;
        }

        .image-banner .picture-side img {
          box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.15);
          height: 95%;
          width: auto;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .image-banner .picture-side .img2 {
          position: absolute;
          left: 250px;
          border-radius: 0;
        }

        .image-banner .fade {
          position: absolute;
          right: 0px;
          top: -20px;
          background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
          width: 350px;
          height: 110%;
        }

        .image-banner .fade:after {
          content: "";
          position: absolute;
          right: -1080px;
          top: -20px;
          background: white;
          width: 1080px;
          height: 110%;
        }

        .image-banner.left {
          flex-direction: row-reverse;
        }

        .image-banner.left .images {
          position: relative;
          right: 60px;
          justify-content: flex-end;
        }

        .image-banner.left .fade {
          right: initial;
          left: 0px;
          background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
        }

        .image-banner.left .fade:after {
          right: initial;
          left: -1080px;
        }

        .image-banner.left .picture-side .img2 {
          left: -250px;
        }

        @media screen and (max-width: 1200px) {
          .image-banner .title-side .data {
            width: 400px;
          }
        }

        @media screen and (max-width: 992px) {
          .image-banner .title-side .data {
            width: 300px;
          }
        }

        @media screen and (max-width: 768px) {
          .image-banner {
            flex-direction: column !important;
            max-height: initial;
            height: auto;
          }

          .image-banner .title-side .data {
            width: 500px;
          }

          .image-banner .title-side {
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-right: 0;
          }

          .image-banner .fade {
            display: none;
          }

          .image-banner .images {
            position: static !important;
          }

          .image-banner .picture-side img {
            width: calc(100% - 20px);
            height: auto;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

export default ImageBanner;
