import css from "styled-jsx/css";
import { theme } from "./Theme";

/**
 * Controls the global css for elements.
 */
const globalCss = css.global`
  body,
  html {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: auto;
  }

  * {
    box-sizing: border-box;
  }

  .stripe {
    height: 2px;
    width: 100%;
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .page-max-width {
    width: 100%;
    margin: 0 auto;
    max-width: 1340px;
  }

  body * {
    font-size: 16px;
    color: ${theme.colors.body};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    display: inline-block;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.3rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1400px) {
    .page-max-width {
      max-width: calc(100% - 60px);
    }
  }

  @media screen and (max-width: 992px) {
    .page-max-width {
      max-width: calc(100% - 20px);
    }

    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.link};
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
`;

export default globalCss;
