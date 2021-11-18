import Head from "next/head";
import Section from "../../components/Home/Section/Section";
import License from "../../components/License/License";

/**
 * Page component for the software license of TagoCore.
 */
function LicensePage() {
  return (
    <div className="license-page">
      <Head>
        <title>Software License Terms | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <License />
      </Section>

      <style jsx>{`
        .license-page {
          display: flex;
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
}

export default LicensePage;
