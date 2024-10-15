import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { GetServerSideProps } from "next";
import SoftwareLicenseTerms from "../../components/Legal/SoftwareLicenseTerms/SoftwareLicenseTerms";
import Page from "../../components/Page/Page";
import getAccountServerSideProps from "../../helpers/getAccountServerSideProps";

/**
 * Props.
 */
interface ILicensePageProps {
  account: AccountInfo;
}

/**
 * Login page.
 */
function LicensePage(props: ILicensePageProps) {
  return (
    <Page title="Software License Terms" account={props.account}>
      <SoftwareLicenseTerms />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default LicensePage;
