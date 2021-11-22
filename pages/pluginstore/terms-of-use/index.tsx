import Head from "next/head";
import Section from "../../../components/Home/Section/Section";
import TermsAndConditions from "../../../components/Plugins/TermsAndConditions/TermsAndConditions";

/**
 * Page component for the plugin store terms of use.
 */
function PluginStoreTermsOfUse() {
  return (
    <div>
      <Head>
        <title>Plugin Store Terms of Use | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <TermsAndConditions />
      </Section>
    </div>
  );
}

export default PluginStoreTermsOfUse;
