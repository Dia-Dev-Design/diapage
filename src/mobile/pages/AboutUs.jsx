import styled from "styled-components";
import logoSubmark from "../../assets/DDDGreenLogoClearBackGround.svg";
import seaWave from "../../assets/Sea.svg";
import fishermanBoat from "../../assets/Fishermen.svg";

// Page Container
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

// Main Content Container
const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Section Styling
const Section = styled.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionTitle = styled.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
  width: 100%;
`;

const BodyText = styled.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  width: 100%;
`;

// Logo Illustration Container
const LogoContainer = styled.div`
  width: 100%;
  max-width: 310px;
  height: 310px;
  margin: 8% auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

// Feature List with Icons
const FeatureList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4%;
  margin-top: 4%;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8%;
  padding: 2%;
  box-sizing: border-box;
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg, img {
    width: 100%;
    height: 100%;
  }
`;

const FeatureText = styled.p`
  flex: 1;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

// Why We Do It Section (with fisherman scene)
const WhySection = styled.section`
  width: 100%;
  min-height: 708px;
  background: linear-gradient(180deg, #B8D8F0 0%, #7BB8E8 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 4% 0;
  box-sizing: border-box;
`;

// Sea Wave at Bottom
const SeaWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  max-width: 1512px;
  height: auto;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Fisherman Scene Container
const FishermanScene = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 250px;
  margin: 4% 0 6%;
  z-index: 2;
`;

// Fisherman Boat (from Fishermen.svg)
const FishermanBoat = styled.div`
  position: absolute;
  left: 15%;
  top: 30%;
  width: 45%;
  height: auto;
  z-index: 3;

  img {
    width: 100%;
    height: auto;
  }
`;

// Sun
const Sun = styled.div`
  position: absolute;
  top: 5%;
  right: 20%;
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #FFF9E6 0%, #FFE066 100%);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 224, 102, 0.6);
  z-index: 2;
`;

// Birds Container
const Birds = styled.div`
  position: absolute;
  top: 10%;
  left: 30%;
  width: 100px;
  height: 30px;
  z-index: 2;
`;

// Individual Bird
const Bird = styled.div`
  position: absolute;
  width: 20px;
  height: 10px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background: #5A8AB5;
    border-radius: 2px;
  }

  &::before {
    left: 0;
    transform: rotate(-20deg);
  }

  &::after {
    right: 0;
    transform: rotate(20deg);
  }

  &:nth-child(1) {
    left: 0;
    top: 5px;
  }

  &:nth-child(2) {
    left: 25px;
    top: 0;
  }

  &:nth-child(3) {
    left: 50px;
    top: 8px;
  }
`;

// Seagull
const Seagull = styled.div`
  position: absolute;
  top: 25%;
  right: 15%;
  width: 30px;
  height: 15px;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 3px;
    background: #4A7AA0;
    border-radius: 3px;
  }

  &::before {
    left: 0;
    transform: rotate(-25deg);
  }

  &::after {
    right: 0;
    transform: rotate(25deg);
  }
`;

const WhySectionTitle = styled.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
  text-align: center;
  z-index: 2;
`;

const WhyBodyText = styled.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Roboto", "Aileron-Regular", sans-serif;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  text-align: center;
  max-width: 361px;
  z-index: 2;
`;

// Glass Effect Cards
const GlassCard = styled.div`
  width: 100%;
  background: rgba(119, 185, 243, 0.3);
  backdrop-filter: blur(5px);
  border: 8px solid #77b9f3;
  border-radius: 20px;
  padding: 6%;
  box-sizing: border-box;
  box-shadow: 
    4px -4px 6px 2px inset rgba(0, 0, 0, 0.25),
    -4px 4px 6px 2px inset rgba(0, 0, 0, 0.25);
  margin-bottom: 8%;
`;

const CardTitle = styled.h3`
  font-size: clamp(2.8rem, 7vw, 3.4rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
`;

const CardItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4%;
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;

const CardItemTitle = styled.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0;
`;

const CardItemDescription = styled.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

// Talent Incubator Section
const TalentSection = styled.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TalentTitle = styled.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 8%;
  text-align: center;
`;

const TalentCardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6%;
`;

const TalentCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6%;
  box-sizing: border-box;
`;

const TalentImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f0f0f0;
  margin-bottom: 6%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TalentCardTitle = styled.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 3%;
`;

const TalentCardDescription = styled.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`;

const AboutUs = () => {
  const coreValues = [
    {
      icon: "🎯",
      text: "We are committed to empowering your business with cutting-edge solutions that align with your goals."
    },
    {
      icon: "⚙️",
      text: "Our primary focus is on delivering customized technology that caters to your unique requirements."
    },
    {
      icon: "🤝",
      text: "Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."
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
      title: "Increased efficiency",
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
      image: null, // Placeholder for actual image
      title: "Hands-On Training",
      description: "Training and workshops covering the latest technologies and industry best practices."
    },
    {
      image: null,
      title: "Performance Feedback",
      description: "Training and workshops covering the latest technologies and industry best practices."
    },
    {
      image: null,
      title: "Community Engagement",
      description: "Participate in advancing local technological innovation and progress."
    }
  ];

  return (
    <PageContainer>
      <MainContent>
        {/* Our Story Section */}
        <Section>
          <SectionTitle>Our Story</SectionTitle>
          <BodyText>
            Día: Dev & Design organically developed as the next step venture for Ironhack graduates 
            and it came to fruition after one of those intense conversations about the state of affairs 
            in the tech industry. Día: Dev & Design organically developed as the next step venture for 
            Ironhack graduates and it came to fruition after one of those intense conversations about 
            the state of affairs in the tech industry.
          </BodyText>
          <BodyText>
            In the early days, our discussions often turned into achieving two goals: delivering valuable 
            technological solutions to businesses and individuals while nurturing the community and emerging 
            local talent. Our vision is a business that fosters continuous learning and growth while making 
            a tangible impact on the tech industry.
          </BodyText>
          <BodyText>
            Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a 
            collaborative effort that embodies our passion for problem-solving and innovation. And so 
            we also crafted an Incubator program designed to offer internships and mentorship to jump-start 
            careers in tech. By nurturing local enterprises, we aim to foster a community of skilled 
            professionals propelling the technological progress of our region.
          </BodyText>

          <LogoContainer>
            <img src={logoSubmark} alt="Día Dev & Design Logo" />
          </LogoContainer>
        </Section>

        {/* Why We Do It Section (Light Background) */}
        <Section>
          <SectionTitle>Why We Do It</SectionTitle>
          <BodyText>
            We are committed to empowering your business with cutting-edge solutions that align with your 
            goals. Our primary focus is on delivering customized technology that caters to your unique 
            requirements. Simultaneously we support our community through continuous learning and creative 
            collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.
          </BodyText>

          <FeatureList>
            {coreValues.map((value, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>
                  <span style={{ fontSize: '32px' }}>{value.icon}</span>
                </FeatureIcon>
                <FeatureText>{value.text}</FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
        </Section>

        {/* Why We Do It Section (Blue Sky with Fisherman Scene) */}
        <WhySection>
          <WhySectionTitle>Why We Do It</WhySectionTitle>
          
          {/* Fisherman Scene with Sky Elements */}
          <FishermanScene>
            <Sun />
            <Birds>
              <Bird />
              <Bird />
              <Bird />
            </Birds>
            <Seagull />
            <FishermanBoat>
              <img src={fishermanBoat} alt="Fisherman in boat" />
            </FishermanBoat>
          </FishermanScene>

          <WhyBodyText>
            At &lt;Dia, Dev, & Design&gt;, we offer tailored solutions to meet your unique challenges, 
            ensuring that your business benefits from rapid responses and minimal downtime. Our team 
            conducts thorough analyses to pinpoint the root causes of technical issues, helping you 
            enhance your operational efficiency and streamline your processes. By addressing problems 
            quickly and effectively, we drive cost savings and maximize the value of your technology 
            investments. Let us help you boost your business performance with our cost-efficient services.
          </WhyBodyText>
          <WhyBodyText>
            At &lt;Dia, Dev, & Design&gt;, we are committed to fostering a collaborative partnership 
            with your team, ensuring we fully grasp the context and impact of each issue. Using advanced 
            tools and techniques, we conduct comprehensive diagnostics to identify problems and perform 
            in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies 
            are crafted to meet your specific objectives. We also offer preventative monitoring through 
            systems which are designed to anticipate and mitigate future issues. Additionally, we offer 
            continuous support with ongoing recommendations to drive your business's continual improvement.
          </WhyBodyText>

          {/* Sea Wave at Bottom */}
          <SeaWave>
            <img src={seaWave} alt="Ocean waves" />
          </SeaWave>
        </WhySection>

        {/* We Build Card */}
        <Section>
          <GlassCard>
            <CardTitle>We build…</CardTitle>
            <CardItemList>
              {buildFeatures.map((feature, index) => (
                <CardItem key={index}>
                  <CardItemTitle>{feature.title}</CardItemTitle>
                  <CardItemDescription>{feature.description}</CardItemDescription>
                </CardItem>
              ))}
            </CardItemList>
          </GlassCard>

          {/* You Get Card */}
          <GlassCard>
            <CardTitle>You get…</CardTitle>
            <CardItemList>
              {benefits.map((benefit, index) => (
                <CardItem key={index}>
                  <CardItemTitle>{benefit.title}</CardItemTitle>
                  <CardItemDescription>{benefit.description}</CardItemDescription>
                </CardItem>
              ))}
            </CardItemList>
          </GlassCard>
        </Section>

        {/* Talent Incubator Section */}
        <TalentSection>
          <TalentTitle>Talent Incubator</TalentTitle>
          <TalentCardList>
            {incubatorPrograms.map((program, index) => (
              <TalentCard key={index}>
                <TalentImage>
                  {program.image ? (
                    <img src={program.image} alt={program.title} />
                  ) : (
                    <span style={{ fontSize: '64px', color: '#ccc' }}>📷</span>
                  )}
                </TalentImage>
                <TalentCardTitle>{program.title}</TalentCardTitle>
                <TalentCardDescription>{program.description}</TalentCardDescription>
              </TalentCard>
            ))}
          </TalentCardList>
        </TalentSection>
      </MainContent>
    </PageContainer>
  );
};

export default AboutUs;
