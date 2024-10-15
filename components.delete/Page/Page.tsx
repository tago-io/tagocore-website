import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Head from "next/head";
import { ReactNode } from "react";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";

/**
 * Props.
 */
interface IPageProps {
  /**
   * Title of the document.
   */
  title?: string;
  /**
   * Account in case the user is logged in.
   */
  account?: AccountInfo;
  /**
   * Content of the page.
   */
  children: ReactNode;
}

/**
 * Component that adds the header and the footer between a child component.
 */
function Page(props: IPageProps) {
  const { account, children, title } = props;

  return (
    <>
      <Header account={account} />

      <div className="page-content">
        <Head>
          <title>{title ? `${title} | TagoCore` : "TagoCore"}</title>
        </Head>

        {children}
      </div>

      <Footer />

      <style jsx>{`
        .page-content {
          z-index: 1;
          position: relative;
        }
      `}</style>
    </>
  );
}

export default Page;
