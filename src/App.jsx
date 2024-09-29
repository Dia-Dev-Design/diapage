import styled from "styled-components";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

import GlobalStyle from "./GlobalStyle";

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

        </Routes>
    </>
  );
}

export default App;
