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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const NavLogo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const CompanyTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto;
  font-family: "Aileron-Black", "Aileron-Heavy", "Aileron-Bold";
  font-weight: 900;
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 394px) {
    font-size: 2.21.8rem;
  }
  @media (max-width: 321px) {
    font-size: 1.9rem;
  }
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
  z-index: 999;
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

const TitleBlueText = styled.span`
  color: #77b9f3;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateAndClose = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const scrollToContact = () => {
    setIsMenuOpen(false);

    // If already on home page, just scroll
    if (window.location.pathname === "/") {
      // Small delay to ensure menu closes and layout stabilizes
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
    } else {
      // Navigate home first, then scroll
      navigate("/");
      // Longer delay to ensure page fully renders
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          const navbarHeight = 70;
          const elementTop = contactElement.offsetTop;
          const scrollPosition = elementTop - navbarHeight;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  };

  return (
    <>
      <NavBarContainer>
        <NavContent>
          <NavLogo onClick={goHome} src={DiaLogo} alt="Día Dev & Design Logo" />
          <CompanyTitle>
            <TitleBlueText>&lt;</TitleBlueText>
            <GreenText>Día</GreenText>
            <TitleBlueText>: Dev &amp; Design /&gt;</TitleBlueText>
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
