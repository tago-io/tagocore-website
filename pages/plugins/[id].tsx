import Head from "next/head";
import Section from "../../components/Home/Section/Section";
import Details from "../../components/Plugin/Details/Details";

export default function PluginDetailsPage() {
  return (
    <div className="plugins">
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
