import Head from "next/head";
import Section from "../../components/Home/Section/Section";
import PluginsList from "../../components/Plugin/List/List";

function PluginListPage() {
  return (
    <div className="plugins">
      <Head>
        <title>TagoCore Plugins</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <PluginsList />
      </Section>
    </div>
  );
}

export default PluginListPage;
