import css from "styled-jsx/css";

const globalCss = css.global`
  body, html {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
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

  .border-primary {
    border: 1px solid rgb(113, 158, 255);
  }

  .border-primary-focus:focus {
    border: 1px solid rgb(113, 158, 255);
  }

  .bg-primary {
    background: linear-gradient(rgb(113, 158, 255), #297cc4);
  }

  .bg-primary-hover:hover {
    background: linear-gradient(to right, rgb(113, 158, 255), #297cc4);
    color: white;
    fill: white;
  }

  .bg-primary-hover:hover * {
    color: white;
    fill: white;
  }

  .color-primary, .color-primary * {
    color: rgb(113, 158, 255);
    fill: rgb(113, 158, 255);
  }

  .text-gradient-primary {
    background-image: linear-gradient(rgb(113, 158, 255), #297cc4);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .page-max-width {
    width: 100%;
    margin: 0 auto;
    max-width: 1340px;
  }

  body * {
    font-size: 16px;
    color: #323030;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    display: inline-block;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.3rem;
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
  }
`;

export default globalCss;
