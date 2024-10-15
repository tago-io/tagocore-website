import getAccountServerSideProps from "../helpers/getAccountServerSideProps";
import { GetServerSideProps } from "next";
import Page from "../components/Page/Page";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import CityAnimation from "../components/Home/CityAnimation/CityAnimation";
import DatabaseSupport from "../components/Home/DatabaseSupport/DatabaseSupport";
import AddMissingPiece from "../components/Home/AddMissingPiece/AddMissingPiece";
import OpenSourceBanner from "../components/Home/OpenSourceBanner/OpenSourceBanner";
import RunsAnywhere from "../components/Home/RunsAnywhere/RunsAnywhere";
import Download from "../components/Home/Download/Download";
import WhatIsTagoCore from "../components/Home/WhatIsTagoCore/WhatIsTagoCore";

/**
 * Props.
 */
interface IHomePageProps {
  account: AccountInfo;
}

function HomePage(props: IHomePageProps) {
  return (
    <Page account={props.account}>
      <CityAnimation />

      <WhatIsTagoCore />

      <DatabaseSupport />

      <AddMissingPiece />

      <div id="pricing" style={{ position: "relative", top: -100, height: "0px" }} />

      <OpenSourceBanner />

      <RunsAnywhere />

      <div id="download" style={{ height: "100px" }} />

      <Download />

      <div style={{ height: "100px" }} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default HomePage;
