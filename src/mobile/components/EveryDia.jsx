import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 361px;
  height: 375px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`;

const TitleContainer = styled.div``;

const BlackText = styled.span`
  color: #070D0D;
  font-size: 48px;
  font-family: 'Aileron';
  font-weight: 700;
  word-wrap: break-word;
`;

const GreenText = styled.span`
  color: #02A66A;
  font-size: 48px;
  font-family: 'Aileron';
  font-weight: 700;
  word-wrap: break-word;
`;

const Description = styled.div`
  width: 361px;
  color: #070D0D;
  font-size: 16px;
  font-family: 'Aileron';
  font-weight: 400;
  word-wrap: break-word;
`;

const Button = styled.div`
  width: 179px;
  height: 61px;
  padding: 16px 27px;
  background: #02A66A;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.div`
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: 'Aileron';
  font-weight: 700;
  word-wrap: break-word;
`;

const EveryDia = () => {

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth", // Add smooth scrolling behavior
        });
      };

  return (
    <Container>
      <TitleContainer>
        <BlackText>Every-</BlackText>
        <GreenText>Día</GreenText>
        <BlackText>
          .<br />
          We create.<br />
          You succeed.
        </BlackText>
      </TitleContainer>
      
      <Description>
        We partner with you to craft tailored applications that meet your unique 
        requirements, operational needs, and strategic goals. Our focus is on 
        efficiency, productivity, and innovation.
      </Description>
      
      <Button onClick={scrollToBottom}>
        <ButtonText>Contact Us</ButtonText>
      </Button>
    </Container>
  );
};

export default EveryDia;