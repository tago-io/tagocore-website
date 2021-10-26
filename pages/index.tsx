import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import BannerAddPlugin from '../components/Home/BannerAddPlugin/BannerAddPlugin';
import BannerHero from '../components/Home/BannerHero/BannerHero';
import BannerPricing from '../components/Home/BannerPricing/BannerPricing';
import DatabaseSupport from '../components/Home/DatabaseSupport/DatabaseSupport';
import Download from '../components/Home/Download/Download';
import RunsOnEverySystem from '../components/Home/RunsOnEverySystem/RunsOnEverySystem';
import Section from '../components/Home/Section/Section';
import SyncTagoIO from '../components/Home/SyncTagoIO/SyncTagoIO';
import globalCss from '../styles/Global';

export default function Home() {
  return (
    <div className="home">
      <Header />

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
        <SyncTagoIO />
      </Section>

      <Section id="runs-on-every-system" useSpaceTop useSpaceBottom>
        <RunsOnEverySystem />
      </Section>

      <Section id="download" useBorderTop useSpaceTop useSpaceBottom>
        <Download />
      </Section>

      <Footer />

      <style jsx global>{globalCss}</style>
    </div>
  )
}
