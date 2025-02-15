import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  ${'' /* padding: 1rem; */}
  width: 8.2%
`;

const HamburgerButton = styled.button`
  display: block;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  margin: 6px 0;
  background-color: ${props => props.isOpen ? 'white' : 'black'};
  transition: all 0.3s ease-in-out;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 7px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'rotate(0)'};
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
`;

const MenuItem = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 1rem 0;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #ccc;
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
      </HamburgerButton>

      <MenuOverlay isOpen={isOpen}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </MenuOverlay>
    </NavContainer>
  );
};

export default HamburgerMenu;
