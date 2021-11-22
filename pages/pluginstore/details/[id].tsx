import Head from "next/head";
import Section from "../../../components/Home/Section/Section";
import Details from "../../../components/Plugins/Details/Details";

/**
 * Page component for the details of a plugin.
 */
function PluginDetailsPage() {
  return (
    <div>
      <Head>
        <title>Grafana | TagoCore Plugins</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section useSpaceBottom>
        <Details />
      </Section>
    </div>
  );
}

export default PluginDetailsPage;
