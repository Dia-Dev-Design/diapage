import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Hello, welcome to Header</h1>
    </HeaderContainer>
  );
};

export default Header;
