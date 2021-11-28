
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: rgb(238, 237, 239);
  margin: auto;
  font-family: 'Montserrat', sans-serif;
}
`;