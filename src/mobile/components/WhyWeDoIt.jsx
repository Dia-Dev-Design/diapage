import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
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

  svg,
  img {
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

const WhyWeDoIt = () => {
  const coreValues = [
    {
      icon: "🎯",
      text: "We are committed to empowering your business with cutting-edge solutions that align with your goals.",
    },
    {
      icon: "⚙️",
      text: "Our primary focus is on delivering customized technology that caters to your unique requirements.",
    },
    {
      icon: "🤝",
      text: "Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.",
    },
  ];

  return (
    <Section>
      <SectionTitle>Why We Do It</SectionTitle>
      <BodyText>
        We are committed to empowering your business with cutting-edge
        solutions that align with your goals. Our primary focus is on
        delivering customized technology that caters to your unique
        requirements. Simultaneously we support our community through
        continuous learning and creative collaboration, turning our efforts
        into sustainable, fulfilling careers and successful businesses.
      </BodyText>

      <FeatureList>
        {coreValues.map((value, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>
              <span style={{ fontSize: "32px" }}>{value.icon}</span>
            </FeatureIcon>
            <FeatureText>{value.text}</FeatureText>
          </FeatureItem>
        ))}
      </FeatureList>
    </Section>
  );
};

export default WhyWeDoIt;
