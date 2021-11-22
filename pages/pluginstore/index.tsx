import Head from "next/head";
import Section from "../../components/Home/Section/Section";
import PluginsList from "../../components/Plugins/List/List";

/**
 * Page for the plugin store.
 */
function PluginListPage() {
  return (
    <div className="plugins">
      <Head>
        <title>Plugin Store | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <PluginsList />
      </Section>
    </div>
  );
}

export default PluginListPage;
