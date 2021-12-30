import Publish from "../../../components/Plugins/Publish/Publish";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { Account } from "@tago-io/sdk";
import { ProfileListInfo } from "@tago-io/sdk/out/modules/Account/profile.types";

/**
 * Props.
 */
interface IPluginPublishPage {
  account: AccountInfo;
  profiles: ProfileListInfo[];
}

/**
 * Page component for publishing a plugin.
 */
function PluginPublishPage(props: IPluginPublishPage) {
  const { account, profiles } = props;
  return (
    <Page title="Publish Plugin" account={account}>
      <Publish account={account} profiles={profiles} />
    </Page>
  );
}

/**
 * Retrieves the information about the account and the profiles.
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx?.req?.cookies?.["token"];
  if (!token) {
    return {
      redirect: { permanent: true, destination: "/auth/login" },
    };
  }

  const acc = new Account({ region: "usa-1", token });
  const data = await Promise.all([await acc.info(), await acc.profiles.list()]).catch(() => false);
  if (!data) {
    return {
      redirect: { permanent: true, destination: "/auth/login" },
    };
  }

  const account = { id: data[0].id, email: data[0].email, name: data[0].name };
  const profiles = data[1];

  return { props: { account, profiles } };
};

export default PluginPublishPage;
