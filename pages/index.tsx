import BannerAddPlugin from "../components/Home/BannerAddPlugin/BannerAddPlugin";
import BannerHero from "../components/Home/BannerHero/BannerHero";
import BannerPricing from "../components/Home/BannerPricing/BannerPricing";
import DatabaseSupport from "../components/Home/DatabaseSupport/DatabaseSupport";
import Download from "../components/Home/Download/Download";
import RunsOnEverySystem from "../components/Home/RunsOnEverySystem/RunsOnEverySystem";
import Section from "../components/Home/Section/Section";
import AlreadyACustomer from "../components/Home/AlreadyACustomer/AlreadyACustomer";
import getAccountServerSideProps from "../helpers/getAccountServerSideProps";
import { GetServerSideProps } from "next";
import Page from "../components/Page/Page";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";

/**
 * Props.
 */
interface IHomePageProps {
  account: AccountInfo;
}

/**
 * `/` (Home) page.
 */
function HomePage(props: IHomePageProps) {
  return (
    <Page title="TagoCore" account={props.account}>
      <Section id="hero" useSpaceBottom>
        <BannerHero />
      </Section>

      <Section id="db-support" useSpaceTop useSpaceBottom>
        <DatabaseSupport />
      </Section>

      <Section id="plugin" useSpaceTop useSpaceBottom>
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
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default HomePage;
