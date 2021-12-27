import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import Details from "../../../components/Plugins/Details/Details";
import getAccountServerSideProps from "../../../helpers/getAccountServerSideProps";

/**
 * Props.
 */
interface IPluginDetailsPageProps {
  account: AccountInfo;
}

/**
 * Login page.
 */
function PluginDetailsPage(props: IPluginDetailsPageProps) {
  return (
    <Page title="Grafana" account={props.account}>
      <Details />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default PluginDetailsPage;
