import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import PublisherPlugins from "../../../components/PublisherPluginList/PublisherPluginList";
import getAccountServerSideProps from "../../../helpers/getAccountServerSideProps";

/**
 * Props.
 */
interface PublisherPluginsPage {
  account: AccountInfo;
}

/**
 * Page that lists all the plugins of the logged in publisher.
 */
function PublisherPluginsPage(props: PublisherPluginsPage) {
  return (
    <Page title="My plugins" account={props.account}>
      <PublisherPlugins />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const account = await getAccountServerSideProps(ctx);
  if (!account) {
    return {
      redirect: {
        permanent: true,
        destination: "/auth/login",
      },
    };
  }

  return { props: { account } };
};

export default PublisherPluginsPage;
