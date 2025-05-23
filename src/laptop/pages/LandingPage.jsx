import styled from "styled-components";

import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";


const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
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
