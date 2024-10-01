import { useEffect, useState } from "react";
import SendMessageIcon from "../assets/Send_Message_Icon.svg";
import dogImage from "../assets/Dog.svg";
import styled from "styled-components";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh ${"" /* margin-top: 20px; */};
`;

const SectionTitleThin = styled.h1`
  font-weight: 100;
  font-size: 70px;
  color: white;
`;

const ContactUsFormContainer = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;

const ContactUsFormContentDescription = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 40%;
  height: 60% ${"" /* transform: translate(10vw, -20rem); */};
`;
const RightSide = styled.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactUsFormTitle = styled.div`
  margin-top: -10%;
  font-weight: 700;
  font-size: 40px;
  width: 490px;
  text-align: left;
  color: white;
`;

const GreenColor = styled.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`;

const ContactUsFormContentContainer = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justif-content: space-between;
  margin-right: 10%;
  text-align: left;
  background-color: #eeeeee;
  border-radius: 24px;
`;

const DogImage = styled.img`
  width: 13%;
  ${"" /* height: 10%; */}
  display: block;
  z-index: 12;
  margin-bottom: -0.7%;
`;

const ContactUsFormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`;

const ContactUsFormSubjectButtonGroup = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 4vh;
`;

const ContactUsFormSubjectButton = styled.button`
  ${'' /* width: 100px; */}
  flex-basis: 30%;
  height: 47%;
  padding: 10px;
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

  &:active {
    background-color: var(--green);
  }

  ${(props) =>
    props.active &&
    `
    background-color: var(--green);
    color: black;
    `}
`;

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 70%;
`;

const ContactUsFormLabel = styled.label`
  transform: translate(3px, ${(props) => (props.active ? "0.1rem" : "1.3rem")});
  color: var(--gray);
  margin-top: 2rem;
  font-size: ${(props) => (props.active ? "15px" : "20px")};
  transition: transform 0.5s ease-in-out, font-size 0.5s ease-in-out;
`;

const ContactUsFormInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${(props) => (props.active ? "var(--green)" : "var(--gray)")};
  z-index: 9999;
  width: 80%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content
`;

const FooterSendMessageButton = styled.button`
  margin-top: 3%;
  height: 2vw;
  width: 20vw;
  padding: 24px 64px;
  background-color: var(--green);
  border-radius: 16px;
  display: flex;
  font-size: 20px;
  color: white;
  border: none;
  justify-content: space-between;
  transform: translateY(3rem);
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`;

const Footer = () => {
  const [subjectsSelected, setSubjectsSelected] = useState([]);
  const [inputSelected, setInputSelected] = useState(null);
  const [emailContent, setEmailContent] = useState({
    name: "",
    email: "",
    message: ""
  })

  const subjectSelect = (e, subject) => {
    let thisArray = [...subjectsSelected];
    let index = thisArray.findIndex((element) => element === subject);

    if (index > -1) {
      thisArray.splice(index, 1);
    } else {
      thisArray.push(subject);
    }
    setSubjectsSelected(thisArray);
  };

  useEffect(() => {

      document.addEventListener("mousedown", () => setInputSelected(null));
  }, []);

  return (
    <FooterContainer>
      <ContactUsFormContainer id="contact">
        <ContactUsFormContentDescription>
          <SectionTitleThin>Get In Touch</SectionTitleThin>
          <ContactUsFormTitle>
            Let’s discuss something <GreenColor>cool</GreenColor> together!
          </ContactUsFormTitle>
          <span></span>
          <span></span>
          <span
            style={{
              color: "white",
              justifySelf: "flex-end",
              alignSelf: "flex-start",
            }}
          >
            info@diadevdesign.com
          </span>
        </ContactUsFormContentDescription>

        <RightSide>
          <DogImage src={dogImage} alt="Dog Image" />
          <ContactUsFormContentContainer>
            <ContactUsFormContent>
              <span>I’m interested in...</span>
              <ContactUsFormSubjectButtonGroup>
                <ContactUsFormSubjectButton
                  key="button-1"
                  active={subjectsSelected.includes("Web Development")}
                  value="Web Development"
                  onClick={(e) => subjectSelect(e, "Web Development")}
                >
                  Web Development
                </ContactUsFormSubjectButton>
                <ContactUsFormSubjectButton
                  key="button-2"
                  active={subjectsSelected.includes("UX/UI Design")}
                  value="UX/UI Design"
                  onClick={(e) => subjectSelect(e, "UX/UI Design")}
                >
                  UX/UI Design
                </ContactUsFormSubjectButton>
                <ContactUsFormSubjectButton
                  key="button-3"
                  active={subjectsSelected.includes("Graphic Design")}
                  value="Graphic Design"
                  onClick={(e) => subjectSelect(e, "Graphic Design")}
                >
                  Marketing
                </ContactUsFormSubjectButton>
                {/* <ContactUsFormSubjectButton
                  key="button-4"
                  active={subjectsSelected.includes("Systems Design")}
                  value="Systems Design"
                  onClick={(e) => subjectSelect(e, "Systems Design")}
                >
                  Systems Design
                </ContactUsFormSubjectButton> */}
                <ContactUsFormSubjectButton
                  key="button-5"
                  active={subjectsSelected.includes("Custom APIs")}
                  value="Custom APIs"
                  onClick={(e) => subjectSelect(e, "Custom APIs")}
                >
                  Custom APIs
                </ContactUsFormSubjectButton>
                <ContactUsFormSubjectButton
                  key="button-6"
                  active={subjectsSelected.includes("Data Analysis")}
                  value="Data Analysis"
                  onClick={(e) => subjectSelect(e, "Data Analysis")}
                >
                  Data Analysis
                </ContactUsFormSubjectButton>
                <ContactUsFormSubjectButton
                  key="button-7"
                  active={subjectsSelected.includes("Other")}
                  value="Other"
                  onClick={(e) => subjectSelect(e, "Other")}
                >
                  Other
                </ContactUsFormSubjectButton>
              </ContactUsFormSubjectButtonGroup>
              <ContactUsForm action="submit">
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
        </RightSide>
      </ContactUsFormContainer>
    </FooterContainer>
  );
};

export default Footer;
