import css from "styled-jsx/css";
import { theme } from "./Theme";

/**
 * Controls the global css for elements.
 */
const globalCss = css.global`
  input:focus {
    border: 1px solid black !important;
  }

  .accent {
    color: ${theme.colors.accent};
    font-weight: 700;
  }

  body,
  html {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    position: relative;
  }

  body * {
    font-size: 16px;
    box-sizing: border-box;
  }

  .page-max-width {
    width: 100%;
    margin: 0 auto;
    max-width: 1360px;
    padding: 0px 10px;
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

  @media screen and (max-width: 768px) {
    .page-max-width {
      padding: 0;
    }

    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 1.6rem;
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
