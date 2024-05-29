import { useEffect } from "react";
import { useState } from "react";
import SendMessageIcon from "../assets/Send_Message_Icon.svg"

const Footer = () => {
  const [subjectButtonIsActive, setSubjectButtonIsActive] = useState(null);
  const [inputSelected, setInputSelected] = useState(null);
  useEffect(() => {
    document.addEventListener("mousedown", () => setInputSelected(null));
  }, []);
  return (
    <section className="footer-container">
      <h1 className="section-title-thin">Get In Touch</h1>
      <div className="contact-us-form-container background-black">
        <div className="contact-us-form-content-description">
          <h1 className="white-color contact-us-form-title">
            Let’s discuss on something <span className="green-color">cool</span>{" "}
            together
          </h1>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="contact-us-form-content-container">
          <div className="contact-us-form-content">
            <span>I’m interested in...</span>
            <div className="contact-us-form-subject-button-group">
              <button
                key="button-1"
                className={`contact-us-form-subject-button ${
                  subjectButtonIsActive === "button-1"
                    ? "background-green black-color"
                    : ""
                }`}
                value="UI/UX design"
                onClick={() => setSubjectButtonIsActive("button-1")}
              >
                UI/UX design
              </button>

              <button
                key="button-2"
                className={`contact-us-form-subject-button ${
                  subjectButtonIsActive === "button-2"
                    ? "background-green black-color"
                    : ""
                }`}
                value="Web design"
                onClick={() => setSubjectButtonIsActive("button-2")}
              >
                Web design
              </button>
              <button
                key="button-3"
                className={`contact-us-form-subject-button ${
                  subjectButtonIsActive === "button-3"
                    ? "background-green black-color"
                    : ""
                }`}
                value="Graphic design"
                onClick={() => setSubjectButtonIsActive("button-3")}
              >
                Graphic design
              </button>
              <button
                key="button-4"
                className={`contact-us-form-subject-button ${
                  subjectButtonIsActive === "button-4"
                    ? "background-green black-color"
                    : ""
                }`}
                value="Design system"
                onClick={() => setSubjectButtonIsActive("button-4")}
              >
                Design system
              </button>
              <button
                key="button-5"
                className={`contact-us-form-subject-button ${
                  subjectButtonIsActive === "button-5"
                    ? "background-green black-color"
                    : ""
                }`}
                value="Other"
                onClick={() => setSubjectButtonIsActive("button-5")}
              >
                Other
              </button>
            </div>
            <form action="submit" className="contact-us-form">
              <label
                htmlFor="name"
                className={`${
                  inputSelected === "input-1"
                    ? "contact-us-form-label-active"
                    : "contact-us-form-label"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className={`${inputSelected ==="input-1"? "contact-us-form-input-active": "contact-us-form-input"}`}
                onClick={() => setInputSelected("input-1")}
              />
              <label
                htmlFor="email"
                className={`${
                  inputSelected === "input-2"
                    ? "contact-us-form-label-active"
                    : "contact-us-form-label"
                }`}
              >
                Your Email
              </label>
              <input
                type="text"
                name="email"
                className={`${inputSelected ==="input-2"? "contact-us-form-input-active": "contact-us-form-input"}`}
                onClick={() => setInputSelected("input-2")}
              />
              <label
                htmlFor="message"
                className={`${
                  inputSelected === "input-3"
                    ? "contact-us-form-label-active"
                    : "contact-us-form-label"
                }`}
              >
                Your Message
              </label>
              <input
                type="text"
                name="message"
                className={`${inputSelected ==="input-3"? "contact-us-form-input-active": "contact-us-form-input"}`}
                onClick={() => setInputSelected("input-3")}
              />
              <button type="submit" className="footer-send-message-button">  <img src={SendMessageIcon} alt="send message" /> Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
