import Head from "next/head";
import Section from "../../../components/Home/Section/Section";
import Publish from "../../../components/Plugins/Publish/Publish";

/**
 * Page component for publishing a plugin.
 */
function PluginPublishPage() {
  return (
    <div>
      <Head>
        <title>Publish Plugin | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <Publish />
      </Section>
    </div>
  );
}

export default PluginPublishPage;
