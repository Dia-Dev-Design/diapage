import React from "react";
import styled from "styled-components";

// Base styles
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  font-family: Aileron, sans-serif;
`;

const Header = styled.header`
  padding: 24px 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

// Main content sections
const Section = styled.section`
  padding: 64px 16px;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 32px 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubTitle = styled.h3`
  font-size: 34px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 24px 0;
  text-align: center;
`;

const BodyText = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
`;

// Feature cards
const FeatureGrid = styled.div`
  display: grid;
  gap: 16px;
  margin: 32px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #02a66a;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 8px 0;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

// Cards for "We Build" and "You Get" sections
const Card = styled.div`
  background: rgba(119, 185, 243, 0.3);
  border: 8px solid #77b9f3;
  border-radius: 20px;
  padding: 32px 24px;
  margin: 32px 0;
  backdrop-filter: blur(5px);
`;

const CardTitle = styled.h3`
  font-size: 34px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 32px 0;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 16px;
`;

const CardItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(7, 13, 13, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const CardItemTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 4px 0;
`;

const CardItemDescription = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

// Talent Incubator section
const TalentGrid = styled.div`
  display: grid;
  gap: 32px;
  margin: 32px 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const TalentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const TalentImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 64px;
`;

const TalentTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 12px 0;
`;

const TalentDescription = styled.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

// Story section with dark background
const StorySection = styled.section`
  padding: 64px 16px;
  background: #01402f;
  color: white;
`;

const StoryTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 0 0 32px 0;
  text-align: center;
`;

const StoryText = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Illustration placeholder
const IllustrationPlaceholder = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: #f0f0f0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  color: #666;
  font-size: 18px;
`;

export default function AboutUs() {
  const coreValues = [
    {
      icon: "🎯",
      title: "Tailored Solutions",
      description: "We are committed to empowering your business with cutting-edge solutions that align with your goals."
    },
    {
      icon: "⚙️", 
      title: "Custom Technology",
      description: "Our primary focus is on delivering customized technology that caters to your unique requirements."
    },
    {
      icon: "🤝",
      title: "Community Support", 
      description: "Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."
    }
  ];

  const buildFeatures = [
    {
      title: "Tailored",
      description: "Solutions for your unique business needs and goals."
    },
    {
      title: "Scalable",
      description: "Applications that evolve as your business grows."
    },
    {
      title: "Responsive", 
      description: "Seamlessly compatible with all devices and screen sizes."
    },
    {
      title: "Cross-Platform Integration",
      description: "Incorporate custom applications with your current systems and software."
    },
    {
      title: "Robust Architecture",
      description: "Reliable and scalable software that can handle increasing loads and complexities."
    },
    {
      title: "User-Centered Experience",
      description: "Intuitive design and engaging interfaces."
    },
    {
      title: "Agile Development",
      description: "To deliver projects on time and adapt to changing requirements quickly."
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Save time and cut costs with automated, streamlined processes."
    },
    {
      title: "Competitive Advantage",
      description: "Cutting-edge technology to stay ahead in your industry and set you apart."
    },
    {
      title: "Advanced Analytics",
      description: "Reporting features to provide valuable insights into your operations."
    },
    {
      title: "Security",
      description: "Safeguard your data and observe compliance with advanced measures and best practices."
    },
    {
      title: "Maintenance and Support",
      description: "Keep your software up-to-date and optimized with ongoing care."
    }
  ];

  const incubatorPrograms = [
    {
      icon: "👨‍💻",
      title: "Hands-On Training",
      description: "Training and workshops covering the latest technologies and industry best practices."
    },
    {
      icon: "📊",
      title: "Performance Feedback", 
      description: "Regular assessments and constructive feedback to help you grow and improve your skills."
    },
    {
      icon: "🌍",
      title: "Community Engagement",
      description: "Participate in advancing local technological innovation and progress."
    }
  ];

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

      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <BodyText>
          We are committed to empowering your business with cutting-edge solutions that align with your goals. 
          Our primary focus is on delivering customized technology that caters to your unique requirements. 
          Simultaneously we support our community through continuous learning and creative collaboration, 
          turning our efforts into sustainable, fulfilling careers and successful businesses.
        </BodyText>
        
        <IllustrationPlaceholder>
          Company Illustration
        </IllustrationPlaceholder>

        <FeatureGrid>
          {coreValues.map((value, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>{value.icon}</FeatureIcon>
              <FeatureContent>
                <FeatureDescription>{value.description}</FeatureDescription>
              </FeatureContent>
            </FeatureItem>
          ))}
        </FeatureGrid>
      </Section>

      <Section>
        <SectionTitle>Why We Do It</SectionTitle>
        <BodyText>
          At Dia Dev Design, we offer tailored solutions to meet your unique challenges, ensuring that your 
          business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses 
          to pinpoint the root causes of technical issues, helping you enhance your operational efficiency 
          and streamline your processes. By addressing problems quickly and effectively, we drive cost 
          savings and maximize the value of your technology investments.
        </BodyText>
        <BodyText>
          At Dia Dev Design, we are committed to fostering a collaborative partnership with your team, 
          ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, 
          we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis 
          to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific 
          objectives. We also offer preventative monitoring through systems which are designed to anticipate 
          and mitigate future issues.
        </BodyText>
      </Section>

      <Section>
        <Card>
          <CardTitle>We build…</CardTitle>
          <CardGrid>
            {buildFeatures.map((feature, index) => (
              <CardItem key={index}>
                <CardItemTitle>{feature.title}</CardItemTitle>
                <CardItemDescription>{feature.description}</CardItemDescription>
              </CardItem>
            ))}
          </CardGrid>
        </Card>

        <Card>
          <CardTitle>You get…</CardTitle>
          <CardGrid>
            {benefits.map((benefit, index) => (
              <CardItem key={index}>
                <CardItemTitle>{benefit.title}</CardItemTitle>
                <CardItemDescription>{benefit.description}</CardItemDescription>
              </CardItem>
            ))}
          </CardGrid>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Talent Incubator</SectionTitle>
        <TalentGrid>
          {incubatorPrograms.map((program, index) => (
            <TalentCard key={index}>
              <TalentImage>{program.icon}</TalentImage>
              <TalentTitle>{program.title}</TalentTitle>
              <TalentDescription>{program.description}</TalentDescription>
            </TalentCard>
          ))}
        </TalentGrid>
      </Section>

      <StorySection>
        <StoryTitle>Our Journey</StoryTitle>
        <StoryText>
          Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came 
          to fruition after one of those intense conversations about the state of affairs in the tech industry.
        </StoryText>
        <StoryText>
          In the early days, our discussions often turned into achieving two goals: delivering valuable 
          technological solutions to businesses and individuals while nurturing the community and emerging 
          local talent. Our vision is a business that fosters continuous learning and growth while making 
          a tangible impact on the tech industry.
        </StoryText>
        <StoryText>
          Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative 
          effort that embodies our passion for problem-solving and innovation. And so we also crafted an 
          Incubator program designed to offer internships and mentorship to jump-start careers in tech. By 
          nurturing local enterprises, we aim to foster a community of skilled professionals propelling the 
          technological progress of our region.
        </StoryText>
      </StorySection>
    </Container>
  );
}
