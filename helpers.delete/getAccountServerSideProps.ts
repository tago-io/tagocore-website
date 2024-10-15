import { GetServerSidePropsContext } from "next";
import { Account } from "@tago-io/sdk";

const cache = {};

async function getAccountServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx?.req?.cookies?.["token"];

  // console.log(token, cache[token]?.email);

  if (cache[token]) {
    return cache[token];
  }

  if (token) {
    const account = new Account({ region: "usa-1", token });
    const data = await account.info();
    cache[token] = { id: data.id, email: data.email, name: data.name };
    return cache[token];
  }

  return null;
}

export default getAccountServerSideProps;
