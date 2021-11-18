import BannerAddPlugin from "../components/Home/BannerAddPlugin/BannerAddPlugin";
import BannerHero from "../components/Home/BannerHero/BannerHero";
import BannerPricing from "../components/Home/BannerPricing/BannerPricing";
import DatabaseSupport from "../components/Home/DatabaseSupport/DatabaseSupport";
import Download from "../components/Home/Download/Download";
import RunsOnEverySystem from "../components/Home/RunsOnEverySystem/RunsOnEverySystem";
import Section from "../components/Home/Section/Section";
import AlreadyACustomer from "../components/Home/AlreadyACustomer/AlreadyACustomer";
import Head from "next/head";

/**
 * `/` (Home) page.
 */
function HomePage() {
  return (
    <div className="home">
      <Head>
        <title>TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section id="hero" useSpaceBottom>
        <BannerHero />
      </Section>

      <Section id="db-support" useSpaceTop useSpaceBottom>
        <DatabaseSupport />
      </Section>

      <Section id="add-plugin" useSpaceTop useSpaceBottom>
        <BannerAddPlugin />
      </Section>

      <Section id="pricing" useSpaceTop useSpaceBottom>
        <BannerPricing />
      </Section>

      <Section id="sync-tagoio" useSpaceTop useSpaceBottom backgroundColor="rgb(250, 250, 250)">
        <AlreadyACustomer />
      </Section>

      <Section id="runs-on-every-system" useSpaceTop useSpaceBottom>
        <RunsOnEverySystem />
      </Section>

      <Section id="download" useBorderTop useSpaceTop useSpaceBottom>
        <Download />
      </Section>
    </div>
  );
}

export default HomePage;
