import { ReactNode } from "react";
import Image from "next/image";

/**
 * Props.
 */
interface IImageBannerProps {
  title?: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  side?: "left" | "right";
}

/**
 * This banner shows a strong text on either side and an image on the opposite side.
 * The side of the image can be configured.
 */
function ImageBanner(props: IImageBannerProps) {
  const { title, description, imageSrc } = props;
  const side = props.side || "right";

  return (
    <div className={`image-banner page-max-width ${side === "right" ? "right" : "left"}`}>
      <div className="title-side">
        <div className="data">
          <div className="title">{title}</div>
          <span className="description">{description}</span>
        </div>
      </div>

      <div className="picture-side">
        <div className="image">
          {imageSrc && (
            <Image priority objectFit="cover" layout="fill" className="img1" src={imageSrc} alt="banner-image1" />
          )}
        </div>
      </div>

      <div className="fade" />

      <style jsx>{`
        .image-banner {
          height: calc(100vh - 60px);
          display: flex;
          max-height: 950px;
          min-height: 600px;
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

        .image-banner .title-side .data .description {
          color: rgba(0, 0, 0, 0.6);
        }

        .image-banner .title-side .title {
          margin-bottom: 20px;
        }

        .image-banner .title-side :global(.description) {
          margin-bottom: 20px;
        }

        .image-banner .picture-side {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .image-banner .picture-side .image {
          height: 95%;
          position: relative;
          width: 100%;
          box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          overflow: hidden;
        }

        .image-banner .picture-side :global(img) {
          width: auto !important;
          height: auto !important;
          object-position: left;
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

        .image-banner.left .image {
          position: relative;
          right: 60px;
          justify-content: flex-end;
        }

        .image-banner.left .image :global(img) {
          object-position: right;
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
            min-height: auto;
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

          .image-banner.left .image {
            right: 0px;
          }

          .image-banner .picture-side {
            margin: 0px -10px;
          }

          .image-banner .picture-side .image {
            border-radius: 0px;
            box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.25);
          }

          .image-banner .image :global(*) {
            position: relative !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ImageBanner;
