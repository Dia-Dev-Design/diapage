import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #01402f;
`;

const Title = styled.div`
  left: 16px;
  top: 32px;
  position: absolute;
  text-align: center;
  color: #eeeeee;
  font-size: 48px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

const ContactInfo = styled.div`
  padding: 2px;
  left: 16px;
  top: 209px;
  position: absolute;
  border-radius: 16px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const IconContainer = styled.div`
  width: 17px;
  height: 15px;
  position: relative;
`;

const Icon = styled.div`
  width: 15px;
  height: 11.25px;
  left: 1px;
  top: 2px;
  position: absolute;
  background: #02a66a;
`;

const Email = styled.div`
  color: white;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

const FormContainer = styled.div`
  padding: 49px 8px 48px 9px;
  left: 8px;
  top: 233px;
  position: absolute;
  background: #f2f2f2;
  border-radius: 24px;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const FormSection = styled.div`
  align-self: stretch;
  height: 272px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

const SectionTitle = styled.div`
  color: #070d0d;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

const OptionsContainer = styled.div`
  align-self: stretch;
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const OptionGroup = styled.div`
  align-self: stretch;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const OptionRow = styled.div`
  width: 360px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const Option = styled.div`
  flex: 1 1 0;
  height: 62px;
  padding: 16px;
  background: ${({ active }) => (active ? "#02A66A" : "transparent")};
  border-radius: 8px;
  border: ${({ active }) => (active ? "none" : "2px rgba(7, 13, 13, 0.30) solid")};
  color: ${({ active }) => (active ? "#EEEEEE" : "rgba(7, 13, 13, 0.30)")};
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  text-align: center;
`;

const InputGroup = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const InputLabel = styled.div`
  color: ${({ active }) => (active ? "#070D0D" : "rgba(7, 13, 13, 0.30)")};
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

const InputUnderline = styled.div`
  width: 360px;
  height: 0;
  border: ${({ active }) => (active ? "3px #02A66A solid" : "3px rgba(7, 13, 13, 0.30) solid")};
`;

const SubmitButton = styled.div`
  align-self: stretch;
  padding: 24px 64px;
  background: #02a66a;
  border-radius: 16px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background: white;
`;

const ButtonText = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

function ContactForm() {
  return (
    <Container>
      <Title>Get in touch</Title>
      <ContactInfo>
        <IconContainer>
          <Icon />
        </IconContainer>
        <Email>SaulDesign@gmail.com</Email>
      </ContactInfo>
      <FormContainer>
        <FormSection>
          <SectionTitle>I’m interested in...</SectionTitle>
          <OptionsContainer>
            <OptionGroup>
              <OptionRow>
                <Option active>UI/UX design</Option>
                <Option>Web design</Option>
              </OptionRow>
              <Option>Graphic design</Option>
            </OptionGroup>
            <OptionRow>
              <Option>Design system</Option>
              <Option>Other</Option>
            </OptionRow>
          </OptionsContainer>
        </FormSection>
        <InputGroup>
          <InputLabel>Your name</InputLabel>
          <InputUnderline active />
        </InputGroup>
        <InputGroup>
          <InputLabel>Your email</InputLabel>
          <InputUnderline />
        </InputGroup>
        <InputGroup>
          <InputLabel>Your message</InputLabel>
          <InputUnderline />
        </InputGroup>
        <SubmitButton>
          <ButtonIcon />
          <ButtonText>Send Message</ButtonText>
        </SubmitButton>
      </FormContainer>
    </Container>
  );
}

export default ContactForm;