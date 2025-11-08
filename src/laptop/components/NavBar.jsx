import styled from "styled-components";

import { useNavigate, Link } from "react-router-dom";

import { GreenLettering } from "./GreenLettering";

import navLogo from "../../assets/NavbarLogo.png";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 15vh;
  margin-left: 3%;
`;

const NavBarLogo = styled.img`
  height: 75%;
`;

const CompanyTitle = styled.h1`
  font-size: 5rem;
  margin-left: 1%;
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
      <NavBarLogo onClick={goHome} src={navLogo} />
      <CompanyTitle>
        &lt;<GreenLettering>Día:</GreenLettering> Dev &amp; Design&gt;
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
