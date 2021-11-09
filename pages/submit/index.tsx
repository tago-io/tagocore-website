import Head from "next/head";
import Section from "../../components/Home/Section/Section";
import Submit from "../../components/Submit/Submit";

function SubmitPage() {
  return (
    <div className="submit-page">
      <Head>
        <title>Publish Plugin | TagoCore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Section>
        <Submit />
      </Section>

      <style jsx>{`
        .submit-page {
          display: flex;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default SubmitPage;
