import { GetServerSidePropsContext } from "next";
import axios from "axios";

const cache = {};

/**
 */
async function getAccountServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx?.req?.cookies?.["tagoio-account-token"];

  // console.log(token, cache[token]?.email);

  if (cache[token]) {
    return cache[token];
  }

  if (token) {
    const response = await axios.get("https://api.tago.io/account", { headers: { token } });
    const account = response.data.result;
    cache[token] = account;
    return account;
  }

  return null;
}

export default getAccountServerSideProps;
