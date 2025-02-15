import styled from "styled-components";

import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

import EveryDia from "../components/EveryDia";


const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
  margin-top: 32vw
  ${'' /* align-items: center; */}
  ${'' /* width: 1200px */}
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <EveryDia />

    </LandingPageContainer>
  );
};

export default LandingPage;
