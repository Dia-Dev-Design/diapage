import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Container = styled.div`
  width: 100%; 
  height: 100%;
  position: relative;
  background: #F2F2F2;
`;

const Content = styled.div`
  left: 16px;
  top: 130px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`;

const Heading = styled.div`
  span:nth-child(1), span:nth-child(3) {
    color: #070D0D;
    font-size: 48px;
    font-family: Aileron;
    font-weight: 700;
    word-wrap: break-word;
  }

  span:nth-child(2) {
    color: #02A66A;
    font-size: 48px; 
    font-family: Aileron;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

const Paragraph = styled.div`
  width: 361px;
  color: #070D0D;
  font-size: 16px;
  font-family: Aileron;
  font-weight: 400;
  word-wrap: break-word;
`;

const ContactButton = styled.div`
  width: 179px;
  height: 61px;
  padding: 16px 27px;
  background: #02A66A;
  border-radius: 8px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  div {
    text-align: center;
    color: white;
    font-size: 24px;
    font-family: Aileron;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

const Logo = styled.img`
  width: 65px;
  height: 80px;
  left: 16px;
  top: 16px;
  position: absolute;
`;

const Menu = styled.div`
  width: 32px;
  height: 32px; 
  left: 345px;
  top: 16px;
  position: absolute;

  div {
    width: 24px;
    height: 16px;
    left: 4px;
    top: 8px;
    position: absolute;
    background: black;
  }
`;

function LandingPageM() {
  return (
    <>
    <Container>
      <Content>
        <Heading>
          <span>Every-</span><span>Día</span><span>.<br/>We create.<br/>You succeed.</span>
        </Heading>
        <Paragraph>
          We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation.
        </Paragraph>
        <ContactButton>
          <div>Contact Us</div>
        </ContactButton>
      </Content>
      <Logo src="https://via.placeholder.com/65x80" />
      <Menu>
        <div></div>
      </Menu>
    </Container>
    <ContactForm />
    </>
  );
}

export default LandingPageM;