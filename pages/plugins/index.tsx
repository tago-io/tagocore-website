import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Head from "next/head";
import Section from "../../components/Home/Section/Section";
import globalCss from "../../styles/Global";
import themeCss from "../../styles/Theme";
import PluginsList from "../../components/Plugin/List/List";

export default function Plugins() {
  return (
    <div className="plugins">
      <Head>
        <title>TagoCore Plugins</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <Section>
        <PluginsList />
      </Section>

      <Footer />

      <style jsx global>
        {globalCss}
      </style>
      <style jsx global>
        {themeCss}
      </style>
    </div>
  );
}
