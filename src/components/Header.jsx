import headerImg from "../assets/headerImage.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    padding: 0;
    position: relative;
    height: 85vh;
    ${'' /* left: 1%; */}
    justify-content: space-around;
    gap: 6%;
    background-color: #F2F2F2;
`

const HeaderContent = styled.div`
  width: 40em;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 48px;
  opacity: 0px;
  position: relative;
  top: 150px;
  left: 50px;
  gap: 25px;
`

const ContactButton = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #FFFFFF;
  background-color: var(--green);
  height: 45px;
  padding: 0;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`

const LandingPageHeader = styled.h1`
  font-size: 50px;
  text-align: left;
  margin: 0px;
`

const GreenColor = styled.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`

const HeaderDescription = styled.p`
  margin: 0px;
  width: 100%;
  line-height: 22px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
`

const HeaderImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 500px;
  max-width: 581px;
  max-height: 600px;
  min-height: 500px;

  img {
    width: 100%;
    height: 649.79px;

    @media (max-width: 1200px) {
      height: 649.79px; /* Override height for specific breakpoints */
    }

    @media (max-width: 1100px) {
      height: 649.79px; /* Same height for this breakpoint */
    }

    @media (max-width: 885px) {
      height: 649.79px; /* Same height for smaller screens */
    }
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
        <img src={headerImg} alt="header-image" />
      </HeaderImageContainer>
    </HeaderContainer>
  );
};

export default Header;
