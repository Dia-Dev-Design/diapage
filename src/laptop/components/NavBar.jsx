import styled from "styled-components";

import { useNavigate, Link } from "react-router-dom";

import DiaLogo from "../../assets/DiaGreenLogo-No-Title-Clear-Background.png";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 0 2%;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const NavBarLogo = styled.img`
  height: 65%;
  cursor: pointer;
`;

const CompanyTitle = styled.h1`
  font-size: clamp(2.5rem, 3vw, 4rem);
  font-family: "Aileron-Black", "Aileron-Heavy", "Aileron-Bold";
  font-weight: 300;
  flex: 1;
  text-align: center;
  white-space: nowrap;
`;

const GreenText = styled.span`
  color: var(--green);
`;

const BlueText = styled.span`
  color: #77b9f3;
`;

const LinksContainer = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled(Link)`
  font-size: 2.1rem;
  font-family: "Aileron-Bold";
  text-decoration: none;
  font-weight: bolder;
  color: black;

  &:hover {
    color: var(--green);
  }
`;

const ContactButton = styled.button`
  width: 33%;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 45%;
  padding: 0;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const scrollToBottom = async () => {
    goHome(); // Synchronous call
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        window.scrollTo({
          top: contactElement.getBoundingClientRect().top,
          behavior: "smooth", // Add smooth scrolling behavior
        });
      }
    }, 1);
  };

  return (
    <NavContainer>
      <NavBarLogo onClick={goHome} src={DiaLogo} alt="Día Dev & Design Logo" />
      <CompanyTitle>
        <BlueText>&lt;</BlueText>
        <GreenText>Día</GreenText>
        <BlueText>: Dev &amp; Design /&gt;</BlueText>
      </CompanyTitle>
      <LinksContainer>
        <StyledButton to="/">Home</StyledButton>
        <StyledButton to="/about">About Us</StyledButton>
        <ContactButton onClick={scrollToBottom}>Contact Us</ContactButton>
      </LinksContainer>
    </NavContainer>
  );
};

export default NavBar;
