import styled from "styled-components";
import DevBro from "../../assets/DevBro.svg";

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 4% 5%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
`;

const LandingPageHeader = styled.h1`
  font-size: clamp(3.2rem, 8vw, 4.8rem);
  margin: 0 0 2%;
  font-family: "Aileron-Bold";
  line-height: 1.2;
`;

const GreenColor = styled.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`;

const HeaderDescription = styled.p`
  width: 100%;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  text-align: left;
  margin: 4% 0;
`;

const ContactButton = styled.button`
  width: 100%;
  max-width: 200px;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 48px;
  padding: 0;
  margin-top: 4%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
  }
`;

const HeaderImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  img {
    width: 100%;
    height: auto;
  }
`;

const Header = () => {
  const scrollToContact = () => {
    // Small delay to ensure click handler completes
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        const navbarHeight = 70; // Height of sticky navbar
        const elementTop = contactElement.offsetTop;
        const scrollPosition = elementTop - navbarHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LandingPageHeader>
          Every-<GreenColor>Día</GreenColor>
          {". "}
        </LandingPageHeader>
        <LandingPageHeader>We build.</LandingPageHeader>
        <LandingPageHeader>We create.</LandingPageHeader>
        <LandingPageHeader>
          You <GreenColor>succeed</GreenColor>
          {"!"}
        </LandingPageHeader>
        <HeaderDescription>
          We partner with you to craft tailored applications that meet your
          unique requirements, operational needs, and strategic goals. Our focus
          is on efficiency, productivity, and innovation.
        </HeaderDescription>
        <ContactButton onClick={scrollToContact}>Contact Us</ContactButton>
      </HeaderContent>
      <HeaderImageContainer>
        <img src={DevBro} alt="Developer illustration" />
      </HeaderImageContainer>
    </HeaderContainer>
  );
};

export default Header;
