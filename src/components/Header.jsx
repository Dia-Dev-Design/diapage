import DevBro from "../assets/DevBro.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    padding: 0;
    height: 85vh;
    width: 99vw;
    ${'' /* left: 1%; */}
    justify-content: space-around;
    align-items: center;
    background-color: #F2F2F2;
`

const HeaderContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
`

const ContactButton = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #FFFFFF;
  background-color: var(--green);
  height: 45px;
  padding: 1.5%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`

const LandingPageHeader = styled.h1`
  font-size: 5rem;
  margin: 0 0 2%;
`

const GreenColor = styled.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`

const HeaderDescription = styled.p`
  width: 120%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 120%;
  font-weight: 400;
  text-align: justify;
`

const HeaderImageContainer = styled.div`
  width: 50%;

  img {
    width: 80%;
  }
`

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LandingPageHeader>
          Every -{" "}
          <GreenColor id="dia">
            Día
          </GreenColor>{". "}
        </LandingPageHeader>
        <LandingPageHeader>
          We build.
        </LandingPageHeader>
        <LandingPageHeader>
          We create.
        </LandingPageHeader>
        <LandingPageHeader>
          You{" "}
          <GreenColor id="dia">
            succeed
          </GreenColor>{"!"}
        </LandingPageHeader>
        <HeaderDescription>
          We partner with you to craft tailored applications that meet your
          unique requirements, operational needs, and strategic goals. Our focus
          is on efficiency, productivity, and innovation.
        </HeaderDescription>
        <ContactButton onClick={scrollToBottom}>Contact Us</ContactButton>
      </HeaderContent>
      <HeaderImageContainer>
        <img src={DevBro} alt="header-image" />
      </HeaderImageContainer>
    </HeaderContainer>
  );
};

export default Header;
