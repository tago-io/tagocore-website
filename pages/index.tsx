import getAccountServerSideProps from "../helpers/getAccountServerSideProps";
import { GetServerSideProps } from "next";
import Page from "../components/Page/Page";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import CityAnimation from "../components/Home/CityAnimation/CityAnimation";
import DatabaseSupport from "../components/Home/DatabaseSupport/DatabaseSupport";
import AddMissingPiece from "../components/Home/AddMissingPiece/AddMissingPiece";
import OpenSourceBanner from "../components/Home/OpenSourceBanner/BannerPricing";
import RunsAnywhere from "../components/Home/RunsAnywhere/RunsOnEverySystem";
import Download from "../components/Home/Download/Download";

/**
 * Props.
 */
interface IHomePageProps {
  account: AccountInfo;
}

/**
 */
function HomePage(props: IHomePageProps) {
  return (
    <Page account={props.account}>
      <CityAnimation />

      <DatabaseSupport />

      {/* <div style={{ height: "250px" }} /> */}

      <AddMissingPiece />

      {/* <div style={{ height: "100px" }} /> */}

      <OpenSourceBanner />

      <div style={{ height: "100px" }} />

      {/* <AlreadyACustomer /> */}

      <RunsAnywhere />

      <div style={{ height: "100px" }} />

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
