import { useEffect, useState } from "react";
import { post } from "../../services/authService";
import styled from "styled-components";
import SendMessageIcon from "../../assets/Send_Message_Icon.svg";
import dogImage from "../../assets/Dog.svg";
import emailImage from "../../assets/EnvelopeFill.svg";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #01402f;
  padding: 8% 5%;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
  text-align: center;
`;

const ContactFormTitle = styled.h3`
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`;

const GreenColor = styled.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`;

const EmailDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
  margin-bottom: 8%;
  color: white;

  img {
    width: 24px;
    height: auto;
  }
`;

const EmailText = styled.span`
  color: white;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 500;
`;

const DogImage = styled.img`
  width: 30%;
  max-width: 150px;
  margin-bottom: -2%;
  position: relative;
  z-index: 1;
`;

const FormContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  background-color: #eeeeee;
  border-radius: 16px;
  padding: 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SubjectLabel = styled.span`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin-bottom: 4%;
  font-weight: 500;
`;

const SubjectButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  margin-bottom: 6%;
`;

const SubjectButton = styled.button`
  flex-basis: calc(50% - 1.5%);
  min-height: 48px;
  padding: 12px;
  border-radius: 8px;
  font-size: clamp(1.4rem, 3.5vw, 1.6rem);
  border: 1px solid var(--gray);
  background-color: white;
  color: #b4a7bc;
  margin-bottom: 3%;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #a9e6b9;
    color: black;
  }

  &:active {
    background-color: #77b9f;
  }

  ${(props) =>
    props.$active &&
    `
    background-color: #77b9f3;
    color: black;
    border-color: var(--green);
  `}
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormLabel = styled.label`
  color: var(--gray);
  font-size: ${(props) => (props.$active ? "1.3rem" : "1.6rem")};
  margin-top: ${(props) => (props.$active ? "4%" : "6%")};
  margin-bottom: 1%;
  transition: font-size 0.3s ease;
`;

const FormInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${(props) => (props.$active ? "var(--green)" : "var(--gray)")};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;
`;

const FormTextArea = styled.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${(props) => (props.$active ? "var(--green)" : "var(--gray)")};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  min-height: 80px;
  resize: vertical;
  transition: border-color 0.3s ease;
`;

const SendButton = styled.button`
  width: 100%;
  max-width: 250px;
  height: 56px;
  background-color: var(--green);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4%;
  font-size: 1.8rem;
  color: white;
  border: none;
  margin: 8% auto 0;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
  }

  img {
    width: 24px;
    height: auto;
  }

  p {
    margin: 0;
  }
`;

const SuccessMessage = styled.p`
  white-space: pre-wrap;
  color: white;
  font-family: "Aileron-Bold";
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 900;
  text-align: center;
  margin-top: 10%;
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
    e.preventDefault();
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
    const handleClickOutside = () => setInputSelected(null);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <FooterContainer id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactFormTitle>
        Let&apos;s discuss something <GreenColor>cool</GreenColor> together!
      </ContactFormTitle>
      <EmailDisplayContainer>
        <img src={emailImage} alt="Email icon" />
        <EmailText>info@diadevdesign.com</EmailText>
      </EmailDisplayContainer>

      {!emailSuccessMessage ? (
        <>
          <DogImage src={dogImage} alt="Dog mascot" />
          <FormContainer>
            <FormContent>
              <SubjectLabel>I&apos;m interested in...</SubjectLabel>
              <SubjectButtonGroup>
                <SubjectButton
                  $active={subjectsSelected.includes("Web Development")}
                  onClick={(e) => subjectSelect(e, "Web Development")}
                >
                  Web Development
                </SubjectButton>
                <SubjectButton
                  $active={subjectsSelected.includes("UX/UI Design")}
                  onClick={(e) => subjectSelect(e, "UX/UI Design")}
                >
                  UX/UI Design
                </SubjectButton>
                <SubjectButton
                  $active={subjectsSelected.includes("Marketing")}
                  onClick={(e) => subjectSelect(e, "Marketing")}
                >
                  Marketing
                </SubjectButton>
                <SubjectButton
                  $active={subjectsSelected.includes("Custom APIs")}
                  onClick={(e) => subjectSelect(e, "Custom APIs")}
                >
                  Custom APIs
                </SubjectButton>
                <SubjectButton
                  $active={subjectsSelected.includes("AI Apps/Agents")}
                  onClick={(e) => subjectSelect(e, "AI Apps/Agents")}
                >
                  AI Apps/Agents
                </SubjectButton>
                <SubjectButton
                  $active={subjectsSelected.includes("Other")}
                  onClick={(e) => subjectSelect(e, "Other")}
                >
                  Other
                </SubjectButton>
              </SubjectButtonGroup>
              <ContactForm onSubmit={handleSubmit}>
                <FormLabel htmlFor="name" $active={inputSelected === "input-1"}>
                  Your Name
                </FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  id="name"
                  value={emailContent.name}
                  $active={inputSelected === "input-1"}
                  onClick={() => setInputSelected("input-1")}
                  onChange={(e) => handleTextInput(e)}
                  required
                />
                <FormLabel
                  htmlFor="email"
                  $active={inputSelected === "input-2"}
                >
                  Your Email
                </FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  value={emailContent.email}
                  $active={inputSelected === "input-2"}
                  onClick={() => setInputSelected("input-2")}
                  onChange={(e) => handleTextInput(e)}
                  required
                />
                <FormLabel
                  htmlFor="message"
                  $active={inputSelected === "input-3"}
                >
                  Your Message
                </FormLabel>
                <FormTextArea
                  name="message"
                  id="message"
                  value={emailContent.message}
                  $active={inputSelected === "input-3"}
                  onClick={() => setInputSelected("input-3")}
                  onChange={(e) => handleTextInput(e)}
                  required
                />
                <SendButton type="submit">
                  <img src={SendMessageIcon} alt="Send message icon" />
                  <p>Send Message</p>
                </SendButton>
              </ContactForm>
            </FormContent>
          </FormContainer>
        </>
      ) : (
        <SuccessMessage>{emailSuccessMessage}</SuccessMessage>
      )}
    </FooterContainer>
  );
};

export default Footer;
