import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Hello, welcome to Footer</h1>
    </FooterContainer>
  );
};

export default Footer;
