import getAccountServerSideProps from "../helpers/getAccountServerSideProps";
import { GetServerSideProps } from "next";
import Page from "../components/Page/Page";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import CityAnimation from "../components/Home/CityAnimation/CityAnimation";

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
    <Page account={props.account}>
      <CityAnimation />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default HomePage;
