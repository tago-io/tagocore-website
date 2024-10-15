import { GetServerSideProps } from "next";
import Login from "../../../components/Account/Login/Login";
import Page from "../../../components/Page/Page";
import getAccountServerSideProps from "../../../helpers/getAccountServerSideProps";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";

/**
 * Props.
 */
interface ILoginPageProps {
  account: AccountInfo;
}

/**
 * Login page.
 */
function LoginPage(props: ILoginPageProps) {
  return (
    <Page title="Sign in" account={props.account}>
      <Login />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    account: await getAccountServerSideProps(ctx),
  },
});

export default LoginPage;
