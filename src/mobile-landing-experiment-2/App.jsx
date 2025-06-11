import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const AppContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

// Header Styles
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #00D4AA;
  border-radius: 4px;
  position: relative;
  
  &::after {
    content: 'D';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

// Hero Section Styles
const HeroContainer = styled.section`
  padding: 40px 20px;
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px 0;
  color: #333;
  
  .highlight {
    color: #00D4AA;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 30px 0;
`;

const CTAButton = styled.button`
  background: #00D4AA;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 40px;
  
  &:hover {
    background: #00B896;
  }
`;

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Illustration = styled.div`
  width: 280px;
  height: 200px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
`;

// About Section Styles
const AboutContainer = styled.section`
  padding: 40px 20px;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
`;

const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;

// Services Section Styles
const ServicesContainer = styled.section`
  padding: 40px 20px;
`;

const ServiceCard = styled.div`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const ServiceIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #e3f2fd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  font-size: 18px;
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1976d2;
  margin: 0;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0;
`;

// Contact Section Styles
const ContactContainer = styled.section`
  background: linear-gradient(135deg, #00D4AA 0%, #00B896 100%);
  padding: 40px 20px;
  color: white;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const ContactSubtitle = styled.p`
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InterestSection = styled.div`
  margin-bottom: 20px;
`;

const InterestLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const InterestButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const InterestButton = styled.button`
  padding: 8px 16px;
  border: 2px solid white;
  background: ${props => props.selected ? 'white' : 'transparent'};
  color: ${props => props.selected ? '#00D4AA' : 'white'};
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #00D4AA;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  
  &::placeholder {
    color: #999;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #222;
  }
`;

// Components
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon />
        <LogoText>Dia Dev & Design</LogoText>
      </Logo>
      <MenuButton>☰</MenuButton>
    </HeaderContainer>
  );
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Every-<span className="highlight">Dia</span>.<br />
        We create.<br />
        You succeed.
      </HeroTitle>
      
      <HeroSubtitle>
        We partner with you to craft tailored applications 
        that align your unique requirements, operational 
        needs, and strategic goals. Our focus is on 
        efficiency, productivity, and innovation.
      </HeroSubtitle>
      
      <CTAButton>Contact Us</CTAButton>
      
      <IllustrationContainer>
        <Illustration>
          [Workspace Illustration]
        </Illustration>
      </IllustrationContainer>
    </HeroContainer>
  );
};

const AboutSection = () => {
  return (
    <AboutContainer>
      <SectionTitle>We are</SectionTitle>
      <AboutText>
        We are committed to empowering your business 
        with cutting-edge solutions that align with your 
        vision and objectives. Our mission is to deliver 
        customized technology that caters to your unique 
        requirements. Simultaneously we support our 
        clients in digital transformation through 
        creative collaboration, turning our efforts into 
        sustainable, fulfilling careers and successful 
        ventures.
      </AboutText>
    </AboutContainer>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Dev",
      description: "Save time and cut costs with automated, streamlined development. We ensure valid data and observant compliance with advanced measures and best practices, keep your software up-to-date and optimized with ongoing care."
    },
    {
      title: "Web Dev",
      description: "Save time and cut costs with automated, streamlined development. We ensure valid data and observant compliance with advanced measures and best practices, keep your software up-to-date and optimized with ongoing care."
    },
    {
      title: "Web Dev", 
      description: "Save time and cut costs with automated, streamlined development. We ensure valid data and observant compliance with advanced measures and best practices, keep your software up-to-date and optimized with ongoing care."
    },
    {
      title: "Web Dev",
      description: "Save time and cut costs with automated, streamlined development. We ensure valid data and observant compliance with advanced measures and best practices, keep your software up-to-date and optimized with ongoing care."
    }
  ];

  return (
    <ServicesContainer>
      <SectionTitle>What we do</SectionTitle>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceHeader>
            <ServiceIcon>{"</>"}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
          </ServiceHeader>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};

const ContactSection = () => {
  const [selectedInterests, setSelectedInterests] = useState(['UI/UX design']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const interests = ['UI/UX design', 'Web Design', 'Graphic Design', 'Design systems', 'Other'];

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, interests: selectedInterests });
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Get in touch</ContactTitle>
        <ContactSubtitle>
          Let's discuss<br />
          on something <em>cool</em><br />
          together
        </ContactSubtitle>
      </ContactHeader>

      <ContactForm onSubmit={handleSubmit}>
        <InterestSection>
          <InterestLabel>I'm interested in...</InterestLabel>
          <InterestButtons>
            {interests.map(interest => (
              <InterestButton
                key={interest}
                type="button"
                selected={selectedInterests.includes(interest)}
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </InterestButton>
            ))}
          </InterestButtons>
        </InterestSection>

        <FormField>
          <FormLabel>Your name</FormLabel>
          <FormInput
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormField>

        <FormField>
          <FormLabel>Your email</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormField>

        <FormField>
          <FormLabel>Your message</FormLabel>
          <FormTextarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleInputChange}
          />
        </FormField>

        <SubmitButton type="submit">
          ✓ Send Message
        </SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

// Main App Component
function App() {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;