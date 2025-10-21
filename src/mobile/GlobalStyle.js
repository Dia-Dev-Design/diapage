import { createGlobalStyle } from "styled-components";

// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/700.css';

// import "@fontsource-variable/inter/wght.css"

import AileronRegular from '../fonts/aileron/Aileron-Regular.otf';
import AileronBold from '../fonts/aileron/Aileron-Bold.otf';
import AileronBlack from '../fonts/aileron/Aileron-Black.otf'
import AileronBlackItalic from '../fonts/aileron/Aileron-BlackItalic.otf'
import AileronBoldItalic from '../fonts/aileron/Aileron-BoldItalic.otf'
import AileronHeavy from '../fonts/aileron/Aileron-Heavy.otf'
import AileronHeavyItalic from '../fonts/aileron/Aileron-HeavyItalic.otf'
import AileronItalic from '../fonts/aileron/Aileron-Italic.otf'
import AileronLight from '../fonts/aileron/Aileron-Light.otf'
import AileronLightItalic from '../fonts/aileron/Aileron-LightItalic.otf'
import AileronSemiBold from '../fonts/aileron/Aileron-SemiBold.otf'
import AileronSemiBoldItalic from '../fonts/aileron/Aileron-SemiBoldItalic.otf'
import AileronThin from '../fonts/aileron/Aileron-Thin.otf'
import AileronThinItalic from '../fonts/aileron/Aileron-ThinItalic.otf'
import AileronUltraLite from '../fonts/aileron/Aileron-UltraLight.otf'
import AileronUltraLiteItalic from '../fonts/aileron/Aileron-UltraLightItalic.otf'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Aileron-Regular";   /*Can be any text*/
  src: url(${AileronRegular}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black";   /*Can be any text*/
  src: url(${AileronBlack}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black-Italic";   /*Can be any text*/
  src: url(${AileronBlackItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold";   /*Can be any text*/
  src: url(${AileronBold}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold-Italic";   /*Can be any text*/
  src: url(${AileronBoldItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy";   /*Can be any text*/
  src: url(${AileronHeavy}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy-Italic";   /*Can be any text*/
  src: url(${AileronHeavyItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Italic";   /*Can be any text*/
  src: url(${AileronItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light";   /*Can be any text*/
  src: url(${AileronLight}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light-Italic";   /*Can be any text*/
  src: url(${AileronLightItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold";   /*Can be any text*/
  src: url(${AileronSemiBold}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold-Italic";   /*Can be any text*/
  src: url(${AileronSemiBoldItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin";   /*Can be any text*/
  src: url(${AileronThin}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin-Italic";   /*Can be any text*/
  src: url(${AileronThinItalic}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite";   /*Can be any text*/
  src: url(${AileronUltraLite}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite-Italic";   /*Can be any text*/
  src: url(${AileronUltraLiteItalic}) format("opentype");
}

  :root {
    font-family: "Aileron-Regular", 'Inter Variable', 'poppins', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    ${'' /* background-color: #ffffff; */}

    ${'' /* background-color: black */}


    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px;
    ${'' /* background-color: #F2F2F2 */}
    ${'' /* background-color: black; */}
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${'' /* background-color: #F2F2F2 */}
    ${'' /* background-color: black */}
  }
`;

export default GlobalStyle;