import { fonts } from "./lib/style/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  position: relative;
  overflow-x: hidden;
  font-size: 62.5%;
}

body {
  position: relative;
  font-family: ${fonts.primary};
  overflow-x: hidden;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
