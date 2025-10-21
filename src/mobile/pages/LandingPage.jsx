import styled from "styled-components";

import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header />
      <Services />
      <Footer />
      <br style={{ width: "99vw" }} />
      <hr
        style={{
          width: "99vw",
          color: "black",
          height: "0.5vh",
          backgroundColor: "black",
        }}
      />
      <h1>Under Construction...</h1>
    </LandingPageContainer>
  );
};

export default LandingPage;
