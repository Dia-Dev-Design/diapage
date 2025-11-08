import { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import DiaLogo from "../../assets/DiaGreenLogo-No-Title-Clear-Background.png";
import hamburgerIcon from "../../assets/Mobile-Menu.svg";

const NavBarContainer = styled.nav`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const NavLogo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const CompanyTitle = styled.h1`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin: 0 auto 0 3%;
  font-family: "Aileron-Bold";
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GreenText = styled.span`
  color: var(--green);
`;

const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: ${(props) => (props.$isOpen ? "calc(100vh - 70px)" : "0")};
  background-color: #ffffff;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.$isOpen ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
`;

const MenuContent = styled.div`
  width: 100%;
  padding: 8% 5%;
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

const MenuLink = styled(Link)`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-family: "Aileron-Bold";
  text-decoration: none;
  color: black;
  padding: 4% 0;
  border-bottom: 1px solid #f0f0f0;

  &:active {
    color: var(--green);
  }
`;

const ContactButton = styled.button`
  width: 100%;
  max-width: 250px;
  font-size: clamp(1.8rem, 4vw, 2rem);
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 56px;
  margin-top: 6%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
  }
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goHome = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  const navigateAndClose = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const scrollToContact = () => {
    setIsMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <NavBarContainer>
        <NavContent>
          <NavLogo onClick={goHome} src={DiaLogo} alt="Día Dev & Design Logo" />
          <CompanyTitle>
            &lt;<GreenText>Día:</GreenText> Dev &amp; Design&gt;
          </CompanyTitle>
          <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
            <img src={hamburgerIcon} alt="Menu" />
          </HamburgerButton>
        </NavContent>
      </NavBarContainer>

      <MobileMenu $isOpen={isMenuOpen}>
        <MenuContent>
          <MenuLink to="/" onClick={() => navigateAndClose("/")}>
            Home
          </MenuLink>
          <MenuLink to="/about" onClick={() => navigateAndClose("/about")}>
            About Us
          </MenuLink>
          <ContactButton onClick={scrollToContact}>Contact Us</ContactButton>
        </MenuContent>
      </MobileMenu>
    </>
  );
};

export default NavBar;
