import css from "styled-jsx/css";

const mainColor1 = "hsl(207, 79%, 30%)";
const mainColor1Darker = "hsl(207, 79%, 20%)";
const mainColor2 = "hsl(207, 79%, 45%)";
const mainColor2Darker = "hsl(207, 79%, 35%)";
const tagoIOColor = "hsl(207, 56%, 48%)";
const tagoRunColor = "hsl(229, 100%, 23%)";

/**
 * Controls the global css for themes.
 */
const themeCss = css.global`
  .border-primary {
    border: 1px solid ${mainColor1};
  }
  .border-primary-focus:focus {
    border: 1px solid ${mainColor1} !important;
  }

  .fill-primary,
  .fill-primary * {
    fill: ${mainColor1};
  }

  .fill-tagoio,
  .fill-tagoio * {
    fill: ${tagoIOColor};
  }

  .fill-tagorun,
  .fill-tagorun * {
    fill: ${tagoRunColor};
  }

  .bg-primary {
    background: linear-gradient(${mainColor1}, ${mainColor2});
  }
  .bg-primary-hover:hover {
    background: linear-gradient(to right, ${mainColor1}, ${mainColor2});
    color: white;
    fill: white;
  }
  .bg-primary-hover:active {
    background: linear-gradient(to right, ${mainColor1Darker}, ${mainColor2Darker});
  }
  .bg-primary-hover:hover * {
    color: white;
    fill: white;
  }
  .bg-primary-hover:active * {
    color: white;
    fill: white;
  }

  .color-primary,
  .color-primary * {
    color: ${mainColor1};
    fill: ${mainColor1};
  }
  .color-primary-hover:hover,
  .color-primary-hover:hover * {
    color: ${mainColor1};
    fill: ${mainColor1};
  }

  .text-gradient-primary {
    background-image: linear-gradient(${mainColor1}, ${mainColor2});
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export default themeCss;
