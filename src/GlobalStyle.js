import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Aileron-Regular", 'Inter Variable', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    background-color: #ffffff;
    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px
  }

  body {
    margin: 0;
    padding: 0;
    width: 99vw;
  }
`;

export default GlobalStyle;