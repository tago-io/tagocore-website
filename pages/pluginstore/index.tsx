import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { GetServerSideProps } from "next";
import Page from "../../components/Page/Page";
import PluginsList from "../../components/Plugins/List/List";
import getAccountServerSideProps from "../../helpers/getAccountServerSideProps";

/**
 * Props.
 */
interface IPluginListPageProps {
  account: AccountInfo;
}

/**
 * Login page.
 */
function PluginListPage(props: IPluginListPageProps) {
  return (
    <Page title="Grafana" account={props.account}>
      <PluginsList />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default PluginListPage;
