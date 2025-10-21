import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <h1>Hello, welcome to NavBar</h1>
    </NavBarContainer>
  );
};

export default NavBar;
