import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('/node_modules/@fontsource-variable/inter/wght.css');

@import url('/node_modules/@fontsource-variable/inter/wght.css');

@import url("/node_modules/@fontsource/poppins/500.css");
@import url("/node_modules/@fontsource/poppins/700.css");

@font-face {
  font-family: "Aileron-Black";   /*Can be any text*/
  src: local("Aileron-Black"),
    url("./fonts/aileron/Aileron-Black.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Black-Italic";   /*Can be any text*/
  src: local("Aileron-Black-Italic"),
    url("./fonts/aileron/Aileron-BlackItalic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Bold";   /*Can be any text*/
  src: local("Aileron-Bold"),
    url("./fonts/aileron/Aileron-Bold.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Bold-Italic";   /*Can be any text*/
  src: local("Aileron-Bold-Italic"),
    url("./fonts/aileron/Aileron-BoldItalic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy";   /*Can be any text*/
  src: local("Aileron-Heavy"),
    url("./fonts/aileron/Aileron-Heavy.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy-Italic";   /*Can be any text*/
  src: local("Aileron-Heavy-Italic"),
    url("./fonts/aileron/Aileron-HeavyItalic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Italic";   /*Can be any text*/
  src: local("Aileron-Italic"),
    url("./fonts/aileron/Aileron-Italic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Light";   /*Can be any text*/
  src: local("Aileron-Light"),
    url("./fonts/aileron/Aileron-Light.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Light-Italic";   /*Can be any text*/
  src: local("Aileron-Light-Italic"),
    url("./fonts/aileron/Aileron-LightItalic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Regular";   /*Can be any text*/
  src: local("Aileron-Regular"),
    url("./fonts/aileron/Aileron-Regular.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold";   /*Can be any text*/
  src: local("Aileron-Semi-Bold"),
    url("./fonts/aileron/Aileron-SemiBold.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold-Italic";   /*Can be any text*/
  src: local("Aileron-Semi-Bold-Italic"),
    url("./fonts/aileron/Aileron-SemiBoldItalic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Thin";   /*Can be any text*/
  src: local("Aileron-Thin"),
    url("./fonts/aileron/Aileron-Thin.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Thin-Italic";   /*Can be any text*/
  src: local("Aileron-Thin-Italic"),
    url("./fonts/aileron/Aileron-ThinItalic.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite";   /*Can be any text*/
  src: local("Aileron-Ultra-Lite"),
    url("./fonts/aileron/Aileron-UltraLight.otf") format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite-Italic";   /*Can be any text*/
  src: local("Aileron-Ultra-Lite-Italic"),
    url("./fonts/aileron/Aileron-UltraLightItalic.otf") format("opentype");
}

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
    font-size: 10px;
    background-color: #F2F2F2
  }

  body {
    margin: 0;
    padding: 0;
    width: 99vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2F2F2
  }
`;

export default GlobalStyle;