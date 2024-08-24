import { useEffect } from "react";
import { useState } from "react";
import SendMessageIcon from "../assets/Send_Message_Icon.svg"
import styled from "styled-components";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const SectionTitleThin = styled.h1`
  font-weight: 100;
  font-size: 128px;
`

const ContactUsFormContainer = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 1024px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`

const ContactUsFormContentDescription = styled.div`
  transform: translate(10vw, -20rem);
`

const ContactUsFormTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  width: 490px;
  text-align: left;
  color: white;
`

const GreenColor = styled.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`

const ContactUsFormContentContainer = styled.div`
  width: 700px;
  height: 896px;
  text-align: left;
  background-color: #eeeeee;
  border-radius: 24px;
`

const ContactUsFormContent = styled.div`
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`

const ContactUsFormSubjectButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4vh;
`

const ContactUsFormSubjectButton = styled.button`
  width: 190.67px;
  height: 62px;
  padding: 16px;
  border-radius: 8px;
  font-size: 20px;
  border: 1px solid;
  border-color: var(--gray);
  background-color: white;
  color: #b4a7bc;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: #a9e6b9;
    color: black;
  }

  &:active{
    background-color: var(--green);
  }

  ${(props) =>
    props.active &&
    `
    background-color: var(--green);
    color: black;
    `
  }
`

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ContactUsFormLabel = styled.label`
  transform: translate(3px, ${(props) => (props.active ? '0.1rem' : '1.3rem')});
  color: var(--gray);
  margin-top: 3rem;
  font-size: ${(props) => (props.active ? '15px' : '20px')};
  transition: transform 0.5s ease-in-out, font-size 0.5s ease-in-out;
`

const ContactUsFormInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid ${(props) => (props.active ? 'var(--green)' : 'var(--gray)')};
  z-index: 9999;
  width: 80%;
  transition: border-color 0.5s ease-in-out;
`

const FooterSendMessageButton = styled.button`
  width: 315px;
  height: 78px;
  padding: 24px 64px;
  background-color: var(--green);
  border-radius: 16px;
  display: flex;
  font-size: 20px;
  color: white;
  border: none;
  justify-content: space-between;
  transform: translateY(13rem);
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`;

const Footer = () => {
  const [subjectButtonIsActive, setSubjectButtonIsActive] = useState(null);
  const [inputSelected, setInputSelected] = useState(null);

  useEffect(() => {
    document.addEventListener("mousedown", () => setInputSelected(null));
  }, []);

  return (
    <FooterContainer>
      <SectionTitleThin>Get In Touch</SectionTitleThin>
      <ContactUsFormContainer>
        <ContactUsFormContentDescription>
          <ContactUsFormTitle>
            Let’s discuss on something <GreenColor>cool</GreenColor>{" "}
            together
          </ContactUsFormTitle>
          <span></span>
          <span></span>
          <span></span>
        </ContactUsFormContentDescription>
        <ContactUsFormContentContainer>
          <ContactUsFormContent>
            <span>I’m interested in...</span>
            <ContactUsFormSubjectButtonGroup>
              <ContactUsFormSubjectButton
                key="button-1"
                active={subjectButtonIsActive === "button-1"}
                value="UI/UX design"
                onClick={() => setSubjectButtonIsActive("button-1")}
              >
                UI/UX design
              </ContactUsFormSubjectButton>
              <ContactUsFormSubjectButton
                key="button-2"
                active={subjectButtonIsActive === "button-2"}
                value="Web design"
                onClick={() => setSubjectButtonIsActive("button-2")}
              >
                Web design
              </ContactUsFormSubjectButton>
              <ContactUsFormSubjectButton
                key="button-3"
                active={subjectButtonIsActive === "button-3"}
                value="Graphic design"
                onClick={() => setSubjectButtonIsActive("button-3")}
              >
                Graphic design
              </ContactUsFormSubjectButton>
              <ContactUsFormSubjectButton
                key="button-4"
                active={subjectButtonIsActive === "button-4"}
                value="Design system"
                onClick={() => setSubjectButtonIsActive("button-4")}
              >
                Design system
              </ContactUsFormSubjectButton>
              <ContactUsFormSubjectButton
                key="button-5"
                active={subjectButtonIsActive === "button-5"}
                value="Other"
                onClick={() => setSubjectButtonIsActive("button-5")}
              >
                Other
              </ContactUsFormSubjectButton>
            </ContactUsFormSubjectButtonGroup>
            <ContactUsForm
              action="submit"
            >
              <ContactUsFormLabel
                htmlFor="name"
                active={inputSelected === "input-1"}
              >
                Your Name
              </ContactUsFormLabel>
              <ContactUsFormInput
                type="text"
                name="name"
                active={inputSelected === "input-1"}
                onClick={() => setInputSelected("input-1")}
              />
              <ContactUsFormLabel
                htmlFor="email"
                active={inputSelected === "input-2"}
              >
                Your Email
              </ContactUsFormLabel>
              <ContactUsFormInput
                type="text"
                name="email"
                active={inputSelected === "input-2"}
                onClick={() => setInputSelected("input-2")}
              />
              <ContactUsFormLabel
                htmlFor="message"
                active={inputSelected === "input-3"}
              >
                Your Message
              </ContactUsFormLabel>
              <ContactUsFormInput
                type="text"
                name="message"
                active={inputSelected === "input-3"}
                onClick={() => setInputSelected("input-3")}
              />
              <FooterSendMessageButton type="submit">
                <img src={SendMessageIcon} alt="send message" />
                Send Message
              </FooterSendMessageButton>
            </ContactUsForm>
          </ContactUsFormContent>
        </ContactUsFormContentContainer>
      </ContactUsFormContainer>
    </FooterContainer>
  );
};

export default Footer;
