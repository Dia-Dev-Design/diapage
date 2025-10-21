import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HamburgerMenu = () => {
  return (
    <HamburgerMenuContainer>
      <h1>Hello, welcome to HamburgerMenu</h1>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
