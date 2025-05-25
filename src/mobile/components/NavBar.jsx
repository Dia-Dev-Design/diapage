import styled from "styled-components";

import NavLogo from "../../assets/NavbarLogo.png";
import MobileMenu from "../../assets/Mobile-Menu.svg";

import HamburgerMenu from "./HamburgerMenu";

import { GreenLettering } from "../../laptop/components/GreenLettering";

const NavContainer = styled.div`
  width: 100%;
  height: calc(100vw * 0.3);
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const LogoContainer = styled.div`
  height: 62.5%;
  width: 14.2%;
  margin-left: 4%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 70%;
  width: auto;
  margin-left: -45%;
`;

const BlackText = styled.span`
  color: #070d0d;
  font-size: 28px;
  font-family: "Aileron";
  font-weight: 700;
  white-space: nowrap;
`;

const MenuIcon = styled.img``;

const Header = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={NavLogo} alt="Logo" />
      </LogoContainer>

      <BlackText><span>{"<"}</span><GreenLettering>Día:</GreenLettering> Dev & Design<span>{">"}</span></BlackText>

      {/* <MenuIcon src={MobileMenu} alt="hamburger-icon" /> */}

      <HamburgerMenu />

    </NavContainer>
  );
};

export default Header;
