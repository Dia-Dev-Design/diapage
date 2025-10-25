import styled from "styled-components";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

import GlobalStyle from "./GlobalStyle";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;

const App = ({ resize }) => {
  useEffect(() => {
    resize();
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />

      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
