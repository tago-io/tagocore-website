import Head from "next/head";
import Section from "../../../components/Home/Section/Section";
import Publish from "../../../components/Plugins/Publish/Publish";

/**
 * `/marketplace/publish` page component.
 */
function PluginsPublishPage() {
  return (
    <div className="plugins-publish-page">
      <Head>
        <title>Publish Plugin | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <Publish />
      </Section>

      <style jsx>{`
        .plugins-publish-page {
          display: flex;
          height: 100%;
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
}

export default PluginsPublishPage;
