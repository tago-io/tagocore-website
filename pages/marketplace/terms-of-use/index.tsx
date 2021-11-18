import Head from "next/head";
import Section from "../../../components/Home/Section/Section";
import TermsAndConditions from "../../../components/Plugins/TermsAndConditions/TermsAndConditions";

/**
 * Page component for the marketplace terms of use.
 */
function TermsOfUsePage() {
  return (
    <div className="terms-of-use-page">
      <Head>
        <title>Marketplace Terms of Use | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <TermsAndConditions />
      </Section>

      <style jsx>{`
        .terms-of-use-page {
          display: flex;
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
}

export default TermsOfUsePage;
