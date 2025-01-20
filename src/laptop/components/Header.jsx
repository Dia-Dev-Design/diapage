import DevBro from "../../assets/DevBro.svg";
import styled from "styled-components";

import MainContainer from "./MainContainer";

const PageContainer = styled.div`
  height: 85vh;
  width: 100%;
  margin: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 0;
  ${"" /* width: 99vw; */}
  ${"" /* left: 1%; */}
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  width: 49.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* height: 60%; */}
`;

const ContactButton = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 45px;
  padding: 1.5%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`;

const LandingPageHeader = styled.h1`
  font-size: 6.4rem;
    margin: 0 0 2%;
`;

const GreenColor = styled.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`;

const HeaderDescription = styled.p`
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  word-wrap: break-word;
`;

const HeaderImageContainer = styled.div`
  width: 41.1%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`;

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <PageContainer>
      <MainContainer>
        <HeaderContainer>
          <HeaderContent>
            <LandingPageHeader>
              Every - <GreenColor id="dia">Día</GreenColor>
              {". "}
            </LandingPageHeader>
            <LandingPageHeader>We build.</LandingPageHeader>
            <LandingPageHeader>We create.</LandingPageHeader>
            <LandingPageHeader>
              You <GreenColor id="dia">succeed</GreenColor>
              {"!"}
            </LandingPageHeader>
            <HeaderDescription>
              We partner with you to craft tailored applications that meet your
              unique requirements, operational needs, and strategic goals. Our
              focus is on efficiency, productivity, and innovation.
            </HeaderDescription>
            <ContactButton onClick={scrollToBottom}>Contact Us</ContactButton>
          </HeaderContent>
          <HeaderImageContainer>
            <img src={DevBro} alt="header-image" />
          </HeaderImageContainer>
        </HeaderContainer>
      </MainContainer>
    </PageContainer>
  );
};

export default Header;
