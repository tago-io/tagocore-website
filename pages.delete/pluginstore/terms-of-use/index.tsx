import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { GetServerSideProps } from "next";
import Page from "../../../components/Page/Page";
import TermsAndConditions from "../../../components/Legal/PluginStoreTerms/PluginStoreTerms";
import getAccountServerSideProps from "../../../helpers/getAccountServerSideProps";

/**
 * Props.
 */
interface IPluginStoreTermsOfUseProps {
  account: AccountInfo;
}

/**
 * Page component for the plugin store terms of use.
 */
function PluginStoreTermsOfUse(props: IPluginStoreTermsOfUseProps) {
  return (
    <Page title="Plugin Store - Terms Of Use" account={props.account}>
      <TermsAndConditions />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default PluginStoreTermsOfUse;
