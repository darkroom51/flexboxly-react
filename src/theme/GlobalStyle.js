import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%; 
}

body {
  font-size: 1.6rem;
  font-family: "Merriweather", serif;
  color: ${theme.mainBlack};
  background: ${theme.mainWhite};
  padding-top: ${theme.menuOffset};
}

//temp
img {
  width: 100%;
}
`;

export default GlobalStyle;
