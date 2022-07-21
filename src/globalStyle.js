import { fonts } from "./lib/style/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: ${fonts.primary};
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
