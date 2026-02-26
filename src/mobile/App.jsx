import styled from "styled-components";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

import GlobalStyle from "./GlobalStyle";
import AboutUs from "./pages/AboutUs";
import People from "./pages/People";
import ClientStories from "./pages/ClientStories";
import Services from "./pages/Services";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />

      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/people" element={<People />} />
        <Route path="/client-stories" element={<ClientStories />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
