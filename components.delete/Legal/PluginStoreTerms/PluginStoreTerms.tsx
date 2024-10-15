import Link from "next/link";

/**
 * Terms and conditions of publishing a plugin.
 */
function PluginStoreTerms() {
  /**
   * Renders a link.
   */
  const renderLink = (href: string, text?: string) => (
    <Link href={href}>
      <a target="_blank">{text || href}</a>
    </Link>
  );

  return (
    <div className="plugin-store-terms page-max-width">
      <h1>TagoCore Plugin Store Terms of Use</h1>

      <p className="last-updated">Last Updated Nov 2021</p>

      <p>
        These TagoCore Plugin Store Terms of Use (“<b>Agreement</b>”) describe the relationship between you (“<b>you</b>
        ” or “<b>your</b>”) and Tago LLC (“TagoIO”, “<b>we</b>” or “<b>us</b>”) and govern your access to and use of the
        TagoCore Plugin Store (the “<b>Store</b>”).
      </p>

      <p>
        The Store enables you to access or purchase products or services which are designed to work with and extend the
        capabilities of TagoCore and successor products and services (the “<b>In-Scope Products and Services</b>”)
        offered by us. The Store may include products or services (“<b>Offerings</b>”) published by TagoIO, and various
        third-party publishers (“<b>Publisher</b>”).
      </p>

      <p>
        By accessing or using the Store, you represent and warrant to us that you have the authority to accept this
        Agreement, and you agree to be bound by its terms.
      </p>

      <section>
        <h2>1. Use Rights</h2>

        <h3>a. Publisher Terms of Use.</h3>
        <p>
          Your right to use any Offering is governed by separate terms of use provided by the Publisher of the Offering
          (“Publisher Terms of Use”). Except for Offerings that we publish, we are not a party to and are not bound by
          any Publisher Terms of Use. You are solely responsible for your dealings with the Publisher.
        </p>

        <h3>b. In-Scope Products and Services.</h3>
        <p>
          Your right to use any In-Scope Products and Services will be governed by the agreement under which you
          purchased such products or services, and will be subject to the payment of fees for such products or services,
          where applicable. Store Offerings are intended for use only with In-Scope Products and Services and you may
          install and use Store Offerings only with In-Scope Products and Services.
        </p>

        <h3>c. Bring-Your-Own-License (BYOL)</h3>
        <p>
          Publishers may make certain Offerings available on the condition that you have obtained, outside of the Store,
          the rights necessary to use such Offerings (“Bring-Your-Own- License (<b>BYOL</b>) Offerings”). If you use any
          BYOL Offering, you are responsible for ensuring that you have sufficient rights to use the Offering.
        </p>

        <h3>d. Application Programming Interfaces - APIs</h3>
        <p>
          We may make available application programming interfaces (“<b>Store APIs</b>”) for use with the Store. If you
          use any Store APIs to purchase or access Store Offerings, you are responsible for reviewing and complying with
          any applicable terms of use presented in the Store user interface, which may change from time to time. Your
          use of any Store APIs to purchase Store Offerings will also constitute your authorization to pay all
          applicable fees in accordance with the payment terms set forth in the Store user interface at the time of
          purchase.
        </p>

        <h3>e. Acceptable Use Policy. </h3>
        <p>
          You will not use the <b>Store</b> for any purpose that is unlawful or prohibited under this Agreement. You may
          not use the Store in any manner that could damage, disable, overburden, or impair any TagoIO server, or any
          networks connected to any TagoIO server, or that could interfere with any other party&apos;s use and enjoyment
          of the Store. You may not attempt to gain unauthorized access to the Store, other accounts, computer systems,
          or networks connected to any TagoIO server or to the Store through hacking, password mining, or any other
          means. You may not access, search, obtain or attempt to obtain any Offerings, materials, or information
          through any means other than TagoIO’s publicly supported interfaces (including, without limitation, through
          automated harvesting or ‘scraping’ the Store).
        </p>
      </section>

      <section>
        <h2>2. Code of Conduct.</h2>

        <p>By accessing or using the Store, you agree to adhere to the following rules: </p>

        <ul>
          <li>
            i. No disrespectful behavior. This includes threats, harassment, stalking, abuse, slurs, profanity, personal
            attacks, sexual remarks or innuendos, physical violence, public speculation about others, and any other
            behavior that TagoIO deems inconsistent with administration of the Store.
          </li>
          <li>ii. No impersonations of a TagoIO employee, agent, manager, host, or another user.</li>
          <li>
            iii. No illegal or offensive activities. You may not publish, post, distribute, or disseminate defamatory,
            infringing, obscene, or other unlawful or otherwise offensive material or discussion. This includes, but is
            not limited to, child pornography, bestiality, incest, illegal drugs, software piracy, discriminatory/racist
            statements or images and harassment.
          </li>
          <li>
            iv. Take responsibility for your actions. You are fully responsible and liable for anything you say (whether
            orally or in writing) or do with respect to your use or access to the Store. This includes any actions you
            may take, how you conduct yourself, and your interactions with others.
          </li>
          <li>
            v. Stay abreast of the codes of conduct. TagoIO reserves the right to amend or change the codes of conduct
            at any time without notice. You agree to periodically review this document to ensure you are doing your
            part.
          </li>
          <li>vi. No plagiarism. Only post your own original work or work that you have written permission to post.</li>
          <li>
            vii. No discrimination or harassment. TagoIO is committed to providing a harassment-free experience to the
            Store’s users regardless of age, ancestry, color, gender identity or expression, marital status, medical
            condition, national origin, physical size, physical or mental disability, political affiliation, veteran
            status, race, religion, sex (including pregnancy), sexual orientation, or technology choices. Harassment is
            unwelcome verbal, physical or virtual behavior based on the characteristics identified above.
          </li>
          <li>
            viii. No sexual harassment. Sexual harassment is unwelcome verbal, physical or virtual behavior based on sex
            and includes gender-based harassment of a person of the same or different gender.
          </li>
          <li>
            ix. Online Discussions Rules.
            <ul>
              <li>
                a) No off-topic discussions. All posts made to the Store should be constructive discussions related to
                the Store or to Offerings. This means no non-technical discussions on religion, sex, gender and/or
                politics.
              </li>
              <li>
                b) No self-appointed moderators. TagoIO reserves the right to moderate the Store’s online discussion
                spaces and actively enforce the Codes of Conduct.
              </li>
              <li>
                c) No spam. Spam includes sending identical and irrelevant or unsolicited submissions to many different
                users, and includes misrepresenting the source of anything you post.
              </li>
              <li>d) No posting of harmful data.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Privacy and Security Terms.</h2>

        <h3>a. Privacy.</h3>
        <p>
          For information relating to the collection and use of your information visit our{" "}
          {renderLink("https://tago.io/privacy", "Privacy Policy")}. TagoIO Privacy Policy is not applicable to the
          collection and use of your information through Offerings, but rather only the information collected through
          the Store.
        </p>

        <h3>b. Publisher Privacy Policies.</h3>
        <p>
          Publishers are responsible for providing privacy statements that describe their privacy practices with respect
          to customer data collected by their Offerings or any customer information that they receive from TagoIO.
          TagoIO’s privacy, security, and data location and data retention policies will not apply to any such Offering
          or to Publishers’ use of any customer data or other customer information.
        </p>

        <h3>c. Organizational Control of Account Data.</h3>
        <p>
          The Store and underlying <b>In-Scope Products and Services</b> may be used by organizations. If you use an
          email address provided by an organization you are affiliated with, such as an employer or school, to access
          the Store, the owner of the domain associated with your email address may: (i) control and administer your
          account and (ii) access and process your data, including the contents of your communications and files. Your
          use of the Store and underlying In-Scope Products and Services may be subject to your organization&apos;s
          policies, if any. If your organization is administering your use of the Store or the underlying In-Scope
          Products and Services, please direct your privacy inquiries to your administrator. TagoIO is not responsible
          for the privacy or security practices of our customers, which may differ from those set forth in this
          Agreement.
        </p>

        <h3>d. Security.</h3>
        <p>
          TagoIO is committed to helping protect the security of users’ information. TagoIO has implemented and will
          maintain and follow appropriate technical and organizational measures intended to protect customer data
          against accidental, unauthorized or unlawful access, disclosure, alteration, loss, or destruction.
        </p>
      </section>

      <section>
        <h2>4. No Warranty.</h2>

        <p>
          TagoIO, and its Affiliates, Resellers, Distributors, and Vendors, make no Warranties, express or implied,
          guarantees or conditions with respect to your use of the Store. YOU UNDERSTAND THAT USE OF THE PLUGIN STORE IS
          AT YOUR OWN RISK AND THAT WE PROVIDE THE SERVICES ON AN “AS IS” BASIS “WITH ALL FAULTS” AND “AS AVAILABLE.”
          TagoIO DOESN&apos;T GUARANTEE THE ACCURACY OR TIMELINESS OF INFORMATION AVAILABLE FROM THE PLUGIN STORE. To
          the extent permitted under your local law, we exclude any implied warranties, including for merchantability,
          satisfactory quality, fitness for a particular purpose, workmanlike effort, and non-infringement. You may have
          certain rights under your local law. Nothing in this Agreement is intended to affect those rights, if they are
          applicable. You acknowledge that computer and telecommunications systems are not fault-free and occasional
          periods of downtime occur. We do not guarantee your access to or use of the Store will be uninterrupted,
          timely, secure, or error-free or that data loss won&apos;t occur.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability.</h2>

        <p>
          To access information about limitation of liability, visit our{" "}
          {renderLink("https://tago.io/terms-of-support", "Terms of Support")}.
        </p>
      </section>

      <section>
        <h2>6. Termination and Suspension.</h2>

        <p>TagoIO may suspend your use of the Store or any Offering if:</p>

        <ol>
          <li>
            It is reasonably needed to prevent unauthorized access to data hosted in the Store or the In-Scope Products
            and Services; or
          </li>
          <li>
            You do not abide by the Store Participation Policies or you violate other terms of this Agreement. We also
            may discontinue the Store at any time.
          </li>
        </ol>
      </section>

      <section>
        <h2>7. Miscellaneous.</h2>

        <h3>a. Contracting authority</h3>
        <p>
          If you are an individual accepting these terms on behalf of an entity, you represent that you have the legal
          authority to enter into this Agreement on that entity&apos;s behalf. If you specify an entity, or you use an
          email address provided by an entity you are affiliated with (such as an employer) to sign in to the Store,
          that entity will be treated as the owner of the Store account for purposes of this Agreement.
        </p>

        <h3>b. Intellectual Property Rights.</h3>
        <p>
          TagoIO or its suppliers retain all right, title, and interest in and to the Store and all Offerings published
          by TagoIO, including all copyrights, patents, trade secrets, trademarks, and other intellectual property
          rights. TagoIO reserves all rights not expressly granted. The Agreement does not grant or imply any rights to
          any TagoIO or supplier trademarks, trade names, or logos. Any rights not expressly granted herein are
          reserved.
        </p>

        <h3>c. Jurisdiction and Governing Law.</h3>
        <p>
          This Agreement will be governed by the laws of the State of North Carolina, excluding its conflicts of laws,
          of the United States of America. All claims brought relating to this Agreement will be brought exclusively in
          the federal courts in Wake County, North Carolina, unless no federal subject matter jurisdiction exists, in
          which case the parties consent to exclusive jurisdiction and venue in the North Carolina State courts.
        </p>

        <h3>d. Updates. </h3>
        <p>
          We may update this Agreement from time to time. If we update this Agreement, we will indicate the last date on
          which the Agreement was modified at the top of the Agreement. By continuing to access and use the Store, you
          agree to be bound by the terms and conditions contained in the updated Agreement.
        </p>

        <h3>e. Entire Agreement. </h3>
        <p>
          This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof
          and supersedes all prior and contemporaneous communications.
        </p>
      </section>

      <style jsx>{`
        .plugin-store-terms {
          display: flex;
          margin-top: 40px;
          margin-bottom: 40px;
          flex-direction: column;
        }

        .plugin-store-terms .last-updated {
          margin-top: 10px;
          color: rgb(100, 100, 100);
        }

        .plugin-store-terms p {
          margin: 0;
          margin-bottom: 1.5rem;
        }

        .plugin-store-terms h1 {
          font-size: 1.6rem;
          display: block;
        }

        .plugin-store-terms h2 {
          font-size: 1.3rem;
          display: block;
          margin-bottom: 10px;
          margin-top: 1rem;
        }

        .plugin-store-terms h3 {
          font-size: 16px;
          color: rgb(100, 100, 100);
          margin-bottom: 3px;
        }
      `}</style>
    </div>
  );
}

export default PluginStoreTerms;
