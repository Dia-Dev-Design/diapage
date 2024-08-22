import styled from "styled-components";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function App() {
  return (
    <LandingPageContainer>
      <NavBar />
      <Header />
      <AboutUs />
      <Services />
      <Footer />
    </LandingPageContainer>
  );
}

export default App;
