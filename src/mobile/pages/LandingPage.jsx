// import styled from "styled-components";

// import Header from "../components/Header";
// import Services from "../components/Services";
// import Footer from "../components/Footer";

// import EveryDia from "../components/EveryDia";


// const LandingPageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justiy-content: center;
//   width: 100%;
//   margin-top: 32vw;
//   ${'' /* align-items: center; */}
//   ${'' /* width: 1200px */}
//   background-color: black
// `;

// const LandingPage = () => {
//   return (
//     <LandingPageContainer>
//       <EveryDia />

//     </LandingPageContainer>
//   );
// };

// export default LandingPage;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Main Container
// const MobileContainer = styled.div`
//   max-width: 375px;
//   margin: 0 auto;
//   background-color: #ffffff;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
// `;

// // Header Component
// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px 20px;
//   background-color: #f8f9fa;
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 600;
//   font-size: 18px;
//   color: #333;
// `;

// const LogoIcon = styled.div`
//   width: 24px;
//   height: 24px;
//   background-color: #10b981;
//   border-radius: 4px;
//   margin-right: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: bold;
// `;

// const MenuButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 18px;
//   cursor: pointer;
// `;

// // Hero Section
// const HeroSection = styled.section`
//   padding: 40px 20px;
//   text-align: left;
// `;

// const HeroTitle = styled.h1`
//   font-size: 32px;
//   font-weight: 700;
//   line-height: 1.2;
//   margin-bottom: 16px;
//   color: #1f2937;
  
//   .highlight {
//     color: #10b981;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 14px;
//   line-height: 1.6;
//   color: #6b7280;
//   margin-bottom: 24px;
// `;

// const ContactButton = styled.button`
//   background-color: #10b981;
//   color: white;
//   border: none;
//   padding: 12px 24px;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 14px;
//   cursor: pointer;
//   transition: background-color 0.2s;
  
//   &:hover {
//     background-color: #059669;
//   }
// `;

// // Illustration Section
// const IllustrationContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   justify-content: center;
// `;

// const IllustrationWrapper = styled.div`
//   width: 280px;
//   height: 200px;
//   background-color: #f3f4f6;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// `;

// // About Section
// const Section = styled.section`
//   padding: 40px 20px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 24px;
//   font-weight: 700;
//   color: #1f2937;
//   margin-bottom: 16px;
// `;

// const SectionText = styled.p`
//   font-size: 14px;
//   line-height: 1.6;
//   color: #6b7280;
// `;

// // Services Section
// const ServiceItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 24px;
//   padding: 16px;
//   background-color: #f8f9fa;
//   border-radius: 8px;
// `;

// const ServiceIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   background-color: #e5f3ff;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 12px;
//   flex-shrink: 0;
// `;

// const ServiceContent = styled.div`
//   flex: 1;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 16px;
//   font-weight: 600;
//   color: #1f2937;
//   margin-bottom: 4px;
// `;

// const ServiceDescription = styled.p`
//   font-size: 12px;
//   line-height: 1.4;
//   color: #6b7280;
// `;

// // Contact Form Section
// const ContactSection = styled.section`
//   background-color: #10b981;
//   padding: 40px 20px;
//   color: white;
// `;

// const ContactTitle = styled.h2`
//   font-size: 24px;
//   font-weight: 700;
//   margin-bottom: 8px;
// `;

// const ContactSubtitle = styled.p`
//   font-size: 14px;
//   margin-bottom: 24px;
//   opacity: 0.9;
// `;

// const FormContainer = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 12px;
// `;

// const InterestButtons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-bottom: 16px;
// `;

// const InterestButton = styled.button`
//   padding: 8px 16px;
//   border: 1px solid #e5e7eb;
//   background-color: ${props => props.active ? '#10b981' : 'white'};
//   color: ${props => props.active ? 'white' : '#6b7280'};
//   border-radius: 20px;
//   font-size: 12px;
//   cursor: pointer;
//   transition: all 0.2s;
// `;

// const FormInput = styled.input`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid #e5e7eb;
//   border-radius: 6px;
//   margin-bottom: 12px;
//   font-size: 14px;
  
//   &::placeholder {
//     color: #9ca3af;
//   }
// `;

// const FormTextarea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid #e5e7eb;
//   border-radius: 6px;
//   margin-bottom: 16px;
//   font-size: 14px;
//   min-height: 80px;
//   resize: vertical;
  
//   &::placeholder {
//     color: #9ca3af;
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background-color: #10b981;
//   color: white;
//   border: none;
//   padding: 12px;
//   border-radius: 6px;
//   font-weight: 600;
//   font-size: 14px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
// `;

// // Main Component
// const LandingPage = () => {
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const interests = ['UI/UX design', 'Web design', 'Graphic Design', 'Design system', 'Other'];

//   const toggleInterest = (interest) => {
//     setSelectedInterests(prev => 
//       prev.includes(interest) 
//         ? prev.filter(i => i !== interest)
//         : [...prev, interest]
//     );
//   };

//   const handleInputChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const services = [
//     {
//       title: "Web Dev",
//       description: "Save time and cut costs with automated, streamlined development. Experience data and observe compliance with advanced measures and security protocols. We scale software up to date and optimized with ongoing care."
//     },
//     {
//       title: "Web Dev",
//       description: "Save time and cut costs with automated, streamlined development. Experience data and observe compliance with advanced measures and security protocols. We scale software up to date and optimized with ongoing care."
//     },
//     {
//       title: "Web Dev",
//       description: "Save time and cut costs with automated, streamlined development. Experience data and observe compliance with advanced measures and security protocols. We scale software up to date and optimized with ongoing care."
//     },
//     {
//       title: "Web Dev",
//       description: "Save time and cut costs with automated, streamlined development. Experience data and observe compliance with advanced measures and security protocols. We scale software up to date and optimized with ongoing care."
//     }
//   ];

//   return (
//     <MobileContainer>
//       {/* Header */}
//       <Header>
//         <Logo>
//           <LogoIcon>D</LogoIcon>
//           Dia dev & Design
//         </Logo>
//         <MenuButton>≡</MenuButton>
//       </Header>

//       {/* Hero Section */}
//       <HeroSection>
//         <HeroTitle>
//           Every-<span className="highlight">Dia</span>,<br />
//           We create,<br />
//           You succeed.
//         </HeroTitle>
//         <HeroSubtitle>
//           We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on building strong foundations for long-term success.
//         </HeroSubtitle>
//         <ContactButton>Contact Us</ContactButton>
//       </HeroSection>

//       {/* Illustration */}
//       <IllustrationContainer>
//         <IllustrationWrapper>
//           {/* Simple illustration placeholder */}
//           <div style={{ 
//             width: '200px', 
//             height: '120px', 
//             background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//             borderRadius: '8px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             fontSize: '12px'
//           }}>
//             Developer Illustration
//           </div>
//         </IllustrationWrapper>
//       </IllustrationContainer>

//       {/* About Section */}
//       <Section>
//         <SectionTitle>We are</SectionTitle>
//         <SectionText>
//           We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on creating robust, scalable software that meets your unique requirements. Simultaneously we support our community through continuous learning and growth, ensuring our clients enjoy peace of mind, sustainable, fulfilling careers and successful businesses.
//         </SectionText>
//       </Section>

//       {/* Services Section */}
//       <Section>
//         <SectionTitle>What we do</SectionTitle>
//         {services.map((service, index) => (
//           <ServiceItem key={index}>
//             <ServiceIcon>
//               <span style={{ fontSize: '16px' }}>{'</>'}</span>
//             </ServiceIcon>
//             <ServiceContent>
//               <ServiceTitle>{service.title}</ServiceTitle>
//               <ServiceDescription>{service.description}</ServiceDescription>
//             </ServiceContent>
//           </ServiceItem>
//         ))}
//       </Section>

//       {/* Contact Section */}
//       <ContactSection>
//         <ContactTitle>Get in touch</ContactTitle>
//         <ContactSubtitle>
//           Let's discuss<br />
//           on something <span style={{ fontStyle: 'italic' }}>cool</span><br />
//           together
//         </ContactSubtitle>

//         <FormContainer>
//           <p style={{ fontSize: '14px', color: '#374151', marginBottom: '12px' }}>
//             I'm interested in...
//           </p>
          
//           <InterestButtons>
//             {interests.map((interest) => (
//               <InterestButton
//                 key={interest}
//                 active={selectedInterests.includes(interest)}
//                 onClick={() => toggleInterest(interest)}
//               >
//                 {interest}
//               </InterestButton>
//             ))}
//           </InterestButtons>

//           <FormInput
//             type="text"
//             name="name"
//             placeholder="Your name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />

//           <FormInput
//             type="email"
//             name="email"
//             placeholder="Your email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />

//           <FormTextarea
//             name="message"
//             placeholder="Your message"
//             value={formData.message}
//             onChange={handleInputChange}
//           />

//           <SubmitButton>
//             ✓ Send Message
//           </SubmitButton>
//         </FormContainer>
//       </ContactSection>
//     </MobileContainer>
//   );
// };

// export default LandingPage;


import React from "react";
import styled from "styled-components";

// Base styles
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f2f2f2;
  font-family: Aileron, sans-serif;
`;

const Header = styled.header`
  padding: 24px 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  
  .accent { color: #48d994; }
  .dark { color: #070d0d; }
`;

const MenuIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #070d0d;
  border-radius: 4px;
  cursor: pointer;
`;

// Hero section
const HeroSection = styled.section`
  padding: 64px 16px;
  text-align: center;
  background: white;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 24px 0;
  line-height: 1.2;
  
  .accent { color: #02a66a; }
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 32px 0;
`;

const CTAButton = styled.button`
  background: #02a66a;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  
  &:hover {
    background: #01402f;
  }
`;

// About section
const AboutSection = styled.section`
  padding: 64px 16px;
  background: #f2f2f2;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 32px 0;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

// Services section
const ServicesSection = styled.section`
  padding: 64px 16px;
  background: white;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #77b9f3;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: "💻";
    font-size: 24px;
  }
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #77b9f3;
  margin: 0 0 8px 0;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

// Contact section
const ContactSection = styled.section`
  padding: 64px 16px;
  background: #01402f;
  color: white;
`;

const ContactTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #eeeeee;
  margin: 0 0 32px 0;
  text-align: center;
`;

const ContactSubtitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 32px 0;
  
  .accent { color: #02a66a; }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
`;

const EmailIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #02a66a;
  border-radius: 2px;
`;

const ContactForm = styled.div`
  background: #f2f2f2;
  border-radius: 16px;
  padding: 32px 24px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: #070d0d;
  margin-bottom: 16px;
  display: block;
`;

const InterestButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

const InterestButton = styled.button`
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid ${props => props.active ? '#02a66a' : 'rgba(7, 13, 13, 0.3)'};
  background: ${props => props.active ? '#02a66a' : 'transparent'};
  color: ${props => props.active ? 'white' : 'rgba(7, 13, 13, 0.7)'};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 2px solid ${props => props.focused ? '#02a66a' : 'rgba(7, 13, 13, 0.3)'};
  background: transparent;
  font-size: 18px;
  margin-bottom: 24px;
  
  &:focus {
    outline: none;
    border-bottom-color: #02a66a;
  }
  
  &::placeholder {
    color: rgba(7, 13, 13, 0.5);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 2px solid rgba(7, 13, 13, 0.3);
  background: transparent;
  font-size: 18px;
  margin-bottom: 24px;
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-bottom-color: #02a66a;
  }
  
  &::placeholder {
    color: rgba(7, 13, 13, 0.5);
  }
`;

const SubmitButton = styled.button`
  background: #02a66a;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  
  &:hover {
    background: #01402f;
  }
`;

export default function LandingPage() {
  const [selectedInterests, setSelectedInterests] = React.useState(['UI/UX design']);
  
  const interests = ['UI/UX design', 'Web design', 'Graphic design', 'Design system', 'Other'];
  
  const services = [
    {
      title: "Web Development",
      description: "Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."
    },
    {
      title: "UI/UX Design", 
      description: "Create intuitive and engaging user experiences that delight your customers and drive business results through thoughtful design and user research."
    },
    {
      title: "Mobile Apps",
      description: "Build native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices."
    },
    {
      title: "Consulting",
      description: "Get expert guidance on technology strategy, architecture decisions, and best practices to scale your digital presence effectively."
    }
  ];

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <Container>
      <Header>
        <Logo>
          <div style={{width: '32px', height: '32px', background: '#48d994', borderRadius: '4px'}} />
          <LogoText>
            <span className="accent">Dia</span>
            <span className="dark"> dev & Design</span>
          </LogoText>
        </Logo>
        <MenuIcon />
      </Header>

      <HeroSection>
        <HeroTitle>
          Every-<span className="accent">Día</span>.<br />
          We create.<br />
          You succeed.
        </HeroTitle>
        <HeroSubtitle>
          We partner with you to craft tailored applications that meet your unique requirements, 
          operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation.
        </HeroSubtitle>
        <CTAButton>Contact Us</CTAButton>
      </HeroSection>

      <AboutSection>
        <SectionTitle>We are</SectionTitle>
        <AboutText>
          We are committed to empowering your business with cutting-edge solutions that align with your goals. 
          Our primary focus is on delivering customized technology that caters to your unique requirements. 
          Simultaneously we support our community through continuous learning and creative collaboration, 
          turning our efforts into sustainable, fulfilling careers and successful businesses.
        </AboutText>
      </AboutSection>

      <ServicesSection>
        <SectionTitle>What we do</SectionTitle>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesSection>

      <ContactSection>
        <ContactTitle>Get in touch</ContactTitle>
        <ContactSubtitle>
          Let's discuss on something <span className="accent">cool</span> together
        </ContactSubtitle>
        
        <ContactInfo>
          <EmailIcon />
          <span style={{fontSize: '14px'}}>SaulDesign@gmail.com</span>
        </ContactInfo>

        <ContactForm>
          <FormSection>
            <FormLabel>I'm interested in...</FormLabel>
            <InterestButtons>
              {interests.map(interest => (
                <InterestButton
                  key={interest}
                  active={selectedInterests.includes(interest)}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </InterestButton>
              ))}
            </InterestButtons>
          </FormSection>

          <FormInput placeholder="Your name" />
          <FormInput placeholder="Your email" type="email" />
          <FormTextarea placeholder="Your message" />
          
          <SubmitButton>
            <span>📧</span>
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactSection>
    </Container>
  );
}
