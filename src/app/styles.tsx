import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter-Italic-VariableFont_opsz,wght.ttf") format("ttf"),
          url("/fonts/Inter-VariableFont_opsz,wght.ttf") format("ttf");
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Inter", sans-serif;
        background-color: #000;
        color: #fff;
        line-height: 1.6;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyles;
