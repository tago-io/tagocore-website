import Publish from "../../../components/Plugins/Publish/Publish";
import getAccountServerSideProps from "../../../helpers/getAccountServerSideProps";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";

/**
 * Props.
 */
interface IPluginPublishPage {
  account: AccountInfo;
}

/**
 * Page component for publishing a plugin.
 */
function PluginPublishPage(props: IPluginPublishPage) {
  return (
    <Page title="Publish Plugin" account={props.account}>
      <Publish />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default PluginPublishPage;
