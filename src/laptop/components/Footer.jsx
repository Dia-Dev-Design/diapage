import { useEffect, useState } from "react";
import { post } from "../../services/authService";
import styled from "styled-components";

import MainContainer from "./MainContainer";

import SendMessageIcon from "../../assets/Send_Message_Icon.svg";
import dogImage from "../../assets/Dog.svg";
import emailImage from "../../assets/EnvelopeFill.svg";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #01402f;
  z-index: 11;
`;


const SectionTitleThin = styled.h1`
  margin-top: 5%;
  font-weight: 700;
  font-size: 9.6rem;
  color: white;
  line-height: 100%;
  width: fit-content;
`;

const ContactUsContainer = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${"" /* background-color: #01402f; */}
`;

const ContactUsFormContentDescription = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 65%;
  margin-top: -3%;
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
  margin-left: 7%;
  font-weight: 700;
  font-size: 4.9rem;
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
  min-height: 77%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justif-content: space-between;
  ${'' /* margin-right: 10%; */}
  text-align: left;
  background-color: #eeeeee;
  border-radius: 24px;
`;

const DogImage = styled.img`
  width: 20%;
  ${"" /* height: 10%; */}
  display: block;
  z-index: 12;
  margin-bottom: -1%;
  margin-left: 45%;
`;

const EmailImageDiv = styled.div`
  margin-top: 9%;
  margin-left: 10%;
  width: 50%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  ${"" /* margin-left: 10% */}
`;

const ContactUsFormContent = styled.div`
  height: 90%;
  width: 90%;
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
  ${"" /* width: 100px; */}
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
    props.$active &&
    `
    background-color: var(--green);
    color: black;
    `}
`;

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 65%;
  height: fit-content;
  justify-content: space-evenly;
  ${'' /* margin: 0; */}
`;

const ContactUsFormLabel = styled.label`
  transform: translate(3px, ${(props) => (props.$active ? "0.1rem" : "1.3rem")});
  color: var(--gray);
  margin-top: 2rem;
  font-size: ${(props) => (props.$active ? "15px" : "20px")};
  transition: transform 0.5s ease-in-out, font-size 0.5s ease-in-out;
`;

const ContactUsFormInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${(props) => (props.$active ? "var(--green)" : "var(--gray)")};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`;

const ContactUsFormTextArea = styled.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${(props) => (props.$active ? "var(--green)" : "var(--gray)")};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`;

// const FooterSendMessageButton = styled.button`
//   margin-bottom: 5%;
//   height: 2vw;
//   width: 20vw;
//   padding: 24px 64px;
//   background-color: var(--green);
//   border-radius: 16px;
//   display: flex;
//   font-size: 20px;
//   color: white;
//   border: none;
//   justify-content: center;
//   transform: translateY(3rem);
//   ${'' /* align-items: sapce-between; */}
//   transition: background-color 0.5s ease-in-out;
//   align-self: center;

//   &:hover {
//     background-color: #a9e6b9;
//   }
// `;

const FooterSendMessageButton = styled.button`
  ${'' /* margin-top: 3%; */}
  height: 2vw;
  min-width: fit-content;
  width: 15vw;
  padding: 24px 0;
  background-color: var(--green);
  border-radius: 16px;
  display: flex;
  font-size: 20px;
  color: white;
  border: none;
  justify-content: space-evenly;
  transform: translateY(3rem);
  ${'' /* justify-content: center; */}
  align-items: center;
  align-self: center;
  margin-left: -2.5vw;
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
    message: "",
  });
  const [emailSuccessMessage, setEmailSuccessMessage] = useState("");

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

  const handleTextInput = (e) => {
    setEmailContent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/send-email", { emailContent, subjectsSelected })
      .then((res) => {
        console.log(res.data.message);
        setEmailSuccessMessage(res.data.message);
        setSubjectsSelected([]);
        setEmailContent({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setEmailSuccessMessage("");
        }, 4500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => setInputSelected(null));
  }, []);

  return (
    <FooterContainer>
      <MainContainer>
        <ContactUsContainer id="contact">
          <ContactUsFormContentDescription>
            <SectionTitleThin>Get In Touch</SectionTitleThin>
            <ContactUsFormTitle>
              Let’s discuss something <GreenColor>cool</GreenColor> together!
            </ContactUsFormTitle>
            <EmailImageDiv>
              <span>
                <img src={emailImage} />
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              >
                info@diadevdesign.com
              </span>
            </EmailImageDiv>
          </ContactUsFormContentDescription>

          {!emailSuccessMessage ? (
            <RightSide>
              <DogImage src={dogImage} alt="Dog Image" />
              <ContactUsFormContentContainer>
                <ContactUsFormContent>
                  <span>I’m interested in...</span>
                  <ContactUsFormSubjectButtonGroup>
                    <ContactUsFormSubjectButton
                      key="button-1"
                      $active={subjectsSelected.includes("Web Development")}
                      value="Web Development"
                      onClick={(e) => subjectSelect(e, "Web Development")}
                    >
                      Web Development
                    </ContactUsFormSubjectButton>
                    <ContactUsFormSubjectButton
                      key="button-2"
                      $active={subjectsSelected.includes("UX/UI Design")}
                      value="UX/UI Design"
                      onClick={(e) => subjectSelect(e, "UX/UI Design")}
                    >
                      UX/UI Design
                    </ContactUsFormSubjectButton>
                    <ContactUsFormSubjectButton
                      key="button-3"
                      $active={subjectsSelected.includes("Graphic Design")}
                      value="Graphic Design"
                      onClick={(e) => subjectSelect(e, "Graphic Design")}
                    >
                      Marketing
                    </ContactUsFormSubjectButton>
                    <ContactUsFormSubjectButton
                      key="button-5"
                      $active={subjectsSelected.includes("Custom APIs")}
                      value="Custom APIs"
                      onClick={(e) => subjectSelect(e, "Custom APIs")}
                    >
                      Custom APIs
                    </ContactUsFormSubjectButton>
                    <ContactUsFormSubjectButton
                      key="button-6"
                      $active={subjectsSelected.includes("AI Apps/Agents")}
                      value="AI Apps/Agents"
                      onClick={(e) => subjectSelect(e, "AI Apps/Agents")}
                    >
                      AI Apps/Agents
                    </ContactUsFormSubjectButton>
                    <ContactUsFormSubjectButton
                      key="button-7"
                      $active={subjectsSelected.includes("Other")}
                      value="Other"
                      onClick={(e) => subjectSelect(e, "Other")}
                    >
                      Other
                    </ContactUsFormSubjectButton>
                  </ContactUsFormSubjectButtonGroup>
                  <ContactUsForm onSubmit={handleSubmit}>
                    <ContactUsFormLabel
                      htmlFor="name"
                      $active={inputSelected === "input-1"}
                    >
                      Your Name
                    </ContactUsFormLabel>
                    <ContactUsFormInput
                      type="text"
                      name="name"
                      value={emailContent.name}
                      $active={inputSelected === "input-1"}
                      onClick={() => setInputSelected("input-1")}
                      onChange={(e) => handleTextInput(e)}
                    />
                    <ContactUsFormLabel
                      htmlFor="email"
                      $active={inputSelected === "input-2"}
                    >
                      Your Email
                    </ContactUsFormLabel>
                    <ContactUsFormInput
                      type="email"
                      name="email"
                      value={emailContent.email}
                      $active={inputSelected === "input-2"}
                      onClick={() => setInputSelected("input-2")}
                      onChange={(e) => handleTextInput(e)}
                    />
                    <ContactUsFormLabel
                      htmlFor="message"
                      $active={inputSelected === "input-3"}
                    >
                      Your Message
                    </ContactUsFormLabel>
                    <ContactUsFormTextArea
                      type="text"
                      name="message"
                      value={emailContent.message}
                      $active={inputSelected === "input-3"}
                      onClick={() => setInputSelected("input-3")}
                      onChange={(e) => handleTextInput(e)}
                    />
                    <FooterSendMessageButton type="submit">
                      <img src={SendMessageIcon} alt="send message" />
                      <p>Send Message</p>
                    </FooterSendMessageButton>
                  </ContactUsForm>
                </ContactUsFormContent>
              </ContactUsFormContentContainer>
            </RightSide>
          ) : (
            <p
              style={{
                whiteSpace: "pre-wrap",
                color: "white",
                fontFamily: "Aileron-Bold",
                fontSize: "3.6rem",
                fontWeight: "900",
              }}
            >
              {emailSuccessMessage}
            </p>
          )}
        </ContactUsContainer>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
