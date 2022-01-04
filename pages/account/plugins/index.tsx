import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import MyPluginList from "../../../components/Account/MyPluginList/MyPluginList";
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

  const { data } = await apolloClient.query({
    query: gql`
      query {
        myPluginList {
          publisher {
            name
            id
          }
          plugins {
            name
            id
            logo_url
            versions {
              name
              version
              short_description
              active
              created_at
              publish_error {
                code
                message
              }
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

  const pluginList = data.myPluginList;
  return { props: { account, pluginList } };
};

export default AccountPluginsPage;
