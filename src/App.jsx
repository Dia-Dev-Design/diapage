import styled from "styled-components";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

import GlobalStyle from "./GlobalStyle";
import AboutUs from "./pages/AboutUs";

const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function App() {
  return (
    <>
      <GlobalStyle />

        <NavBar />

        <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path='/about' element={<AboutUs />} />

        </Routes>
    </>
  );
}

export default App;
