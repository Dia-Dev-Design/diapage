import styled from "styled-components";

import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";


const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header />
      <Services />
      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;
