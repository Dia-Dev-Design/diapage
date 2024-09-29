import styled from "styled-components";

import navLogo from '../assets/NavbarLogo.png'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 10vh;
  margin-left: 3%;
`;

const NavBarLogo = styled.img`
  height: 90%
`;

// const Title = styled.header`
//   width: 298px;
//   height: 44px;
//   font-size: 2em;
//   font-weight: 700;
// `;

const ContactButton = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 45px;
  padding: 0;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`;

const NavBar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.getElementById("contact").getBoundingClientRect().top,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <NavContainer>
      <NavBarLogo src={navLogo} />
      <ContactButton onClick={scrollToBottom}>Contact Us</ContactButton>
    </NavContainer>
  );
};

export default NavBar;
