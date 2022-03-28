import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import MyPluginList from "../../../components/Account/Plugins/Plugins";
import getAccountServerSideProps from "../../../helpers/getAccountServerSideProps";
import { apolloClient } from "../../_app";

/**
 * Props.
 */
interface AccountPluginsPage {
  account: AccountInfo;
  pluginList;
}

/**
 * Page that lists all the plugins of the logged in publisher.
 */
function AccountPluginsPage(props: AccountPluginsPage) {
  return (
    <Page title="My plugins" account={props.account}>
      <MyPluginList list={props.pluginList || []} />
    </Page>
  );
}

/**
 * Populates server side props.
 */
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

  const r = await apolloClient.query({
    query: gql`
      query {
        myPluginList {
          publisher {
            name
            id
            domain
          }
          plugins {
            name
            id
            logo_url
            slug
            versions {
              name
              version
              resource_id
              short_description
              active
              created_at
              error_code
            }
          }
        }
      }
    `,
    context: {
      headers: {
        token: ctx?.req?.cookies?.["token"],
      },
    },
  });

  const pluginList = r.data.myPluginList;
  return { props: { account, pluginList } };
};

export default AccountPluginsPage;
