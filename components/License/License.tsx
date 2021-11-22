import Link from "next/link";

/**
 * Software license terms component.
 */
function License() {
  /**
   * Renders a link.
   */
  const renderLink = (href: string, text?: string) => (
    <Link href={href}>
      <a target="_blank">{text || href}</a>
    </Link>
  );

  return (
    <div className="terms-and-conditions page-max-width">
      <p>
        <i>
          <span>This license applies to the TagoCore product. Source Code for TagoCore is available at </span>
          {renderLink("https://github.com/tago-io/tcore")}
          <span> under the MIT license agreement at </span>
          {renderLink("https://github.com/tago-io/tcore/blob/main/LICENSE.txt")}
          <span>. Additional license information can be found in our FAQ at </span>
          {renderLink("/faq", "https://tagocore.com/faq")}
          <span>.</span>
        </i>
      </p>

      <h1>TAGOCORE SOFTWARE LICENSE TERMS</h1>

      <section>
        <h2>TagoCore</h2>

        <p>
          These license terms are an agreement between you and Tago LLC (TagoIO). They apply to the software named
          above. The terms also apply to any TagoIO services or updates for the software, except to the extent those
          have different terms.
        </p>

        <h3>IF YOU COMPLY WITH THESE LICENSE TERMS, YOU HAVE THE RIGHTS BELOW.</h3>
        <ol>
          <li className="main-item">
            <h3>INSTALLATION AND USE RIGHTS</h3>

            <ol>
              <li>
                <h3>General.&nbsp;</h3>
                <span>
                  You may use any number of copies of the software to develop and test your applications, including
                  deployment within your internal corporate network.
                </span>
              </li>

              <li>
                <h3>Demo use.&nbsp;</h3>
                <span>The uses permitted above include use of the software in demonstrating your applications.</span>
              </li>

              <li>
                <h3>Third Party Components.&nbsp;</h3>
                <span>
                  The software may include third party components with separate legal notices or governed by other
                  agreements, as may be described in the ThirdPartyNotices file accompanying the software.
                </span>
              </li>

              <li>
                <h3>Plug-ins.&nbsp;</h3>
                <span>
                  The software gives you the option to download other TagoIO and third party software packages from our
                  extension marketplace or package managers. Those packages are under their own licenses, and not this
                  agreement. TagoIO does not distribute, license or provide any warranties for any of the third party
                  packages. By accessing or using our marketplace, you agree to the marketplace terms located at&nbsp;
                  {renderLink("/pluginstore/terms-of-use", "https://tagocore.com/marketplace/terms-of-use")}.
                </span>
              </li>
            </ol>
          </li>

          <li className="main-item">
            <h3>DATA.</h3>

            <ol>
              <li>
                <h3>Data Collection.&nbsp;</h3>
                <span>
                  The software may collect information about you and your use of the software, and send that to TagoIO.
                  TagoIO may use this information to provide services and improve our products and services. You may
                  opt-out of many of these scenarios, but not all, as described in the product documentation located
                  at&nbsp;
                  {renderLink("/faq", "https://tagocore.com/faq")}. There may also be some features in the software that
                  may enable you and TagoIO to collect data from users of your applications. If you use these features,
                  you must comply with applicable law, including providing appropriate notices to users of your
                  applications together with TagoIO’s privacy statement. For information relating to the collection and
                  data processing visit our {renderLink("https://tago.io/privacy", "Privacy Policy")}. Your use of the
                  software operates as your consent to these practices.
                </span>
              </li>
            </ol>
          </li>

          <li className="main-item">
            <h3>UPDATES.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              The software may periodically check for updates and download and install them for you. You may obtain
              updates only from TagoIO or authorized sources. TagoIO may need to update your system to provide you with
              updates. You agree to receive these automatic updates without any additional notice. Updates may not
              include or support all existing software features, services, or peripheral devices.
            </p>
          </li>

          <li className="main-item">
            <h3>FEEDBACK.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              If you give feedback about the software to TagoIO, you give to TagoIO, without charge, the right to use,
              share and commercialize your feedback in any way and for any purpose. You will not give feedback that is
              subject to a license that requires TagoIO to license its software or documentation to third parties
              because we include your feedback in them. These rights survive this agreement.
            </p>
          </li>

          <li className="main-item">
            <h3>SCOPE OF LICENSE.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              This license applies to the TagoCore product. Source code for TagoCore is available at&nbsp;
              {renderLink("https://github.com/tago-io/tcore")} under the MIT license agreement. The software is
              licensed, not sold. This agreement only gives you some rights to use the software. TagoIO reserves all
              other rights. Unless applicable law gives you more rights despite this limitation, you may use the
              software only as expressly permitted in this agreement. In doing so, you must comply with any technical
              limitations in the software that only allow you to use it in certain ways. You may not
            </p>

            <ol>
              <li>
                reverse engineer, decompile or disassemble the software, or otherwise attempt to derive the source code
                for the software except and solely to the extent required by third party licensing terms governing use
                of certain open source components that may be included in the software;
              </li>
              <li>remove, minimize, block or modify any notices of TagoIO or its suppliers in the software;</li>
              <li>use the software in any way that is against the law;</li>
              <li>
                share, publish, rent or lease the software, or provide the software as a stand-alone offering for others
                to use.
              </li>
            </ol>
          </li>

          <li className="main-item">
            <h3>SUPPORT SERVICES.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              Because this software is “as is,” we may not provide support services for it unless agreed to in writing
              based on acquired support plans.
            </p>
          </li>

          <li className="main-item">
            <h3>ENTIRE AGREEMENT.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              This agreement, and the terms for supplements, updates, Internet-based services and support services that
              you use, are the entire agreement for the software and support services.
            </p>
          </li>

          <li className="main-item">
            <h3>EXPORT RESTRICTIONS.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              You must comply with all domestic and international export laws and regulations that apply to the
              software, which include restrictions on destinations, end-users, and end use.
            </p>
          </li>

          <li className="main-item">
            <h3>APPLICABLE LAW.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              If you acquired the software in the United States, North Carolina law applies to interpretation of and
              claims for breach of this agreement, and the laws of the state where you live apply to all other claims.
              If you acquired the software in any other country, its laws apply.
            </p>
          </li>

          <li className="main-item">
            <h3>DISCLAIMER OF WARRANTY.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              <b>
                The software is licensed “as-is.” You bear the risk of using it. TagoIO gives no express warranties,
                guarantees or conditions.
              </b>
            </p>
          </li>

          <li className="main-item">
            <h3>LIMITATIONS OF LIABILITY.&nbsp;</h3>

            <p style={{ display: "inline" }}>
              Visit the {renderLink("https://tago.io/terms-of-support", "Terms and Conditions of TagoIO")} for
              information about the limitations of liability.
            </p>
          </li>
        </ol>
      </section>

      <style jsx>{`
        .terms-and-conditions {
          display: flex;
          margin-top: 40px;
          margin-bottom: 40px;
          flex-direction: column;
        }

        .terms-and-conditions p {
          margin: 0;
          margin-bottom: 1.5rem;
        }

        .terms-and-conditions .number {
          margin-right: 10px;
        }

        .terms-and-conditions .main-item:not(:last-child) {
          margin-bottom: 1.5rem;
        }

        .terms-and-conditions h1 {
          font-size: 1.6rem;
          display: block;
        }

        .terms-and-conditions h2 {
          font-size: 1.3rem;
          display: block;
          margin-bottom: 10px;
          margin-top: 1rem;
        }

        .terms-and-conditions h3 {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

export default License;
