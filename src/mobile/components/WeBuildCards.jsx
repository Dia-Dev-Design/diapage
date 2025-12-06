import styled from "styled-components";
import Plant from "../../assets/Plant.svg";

const Section = styled.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
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
  position: relative;
  z-index: 3;
`;

const CardWithPlant = styled.div`
  position: relative;
  width: 100%;
`;

const PlantImage = styled.img`
  position: absolute;
  bottom: -16%;
  right: 0;
  width: 30%;
  max-width: 120px;
  height: auto;
  z-index: 2;
  pointer-events: none;
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

const WeBuildCards = () => {
  const buildFeatures = [
    {
      title: "Tailored",
      description: "Solutions for your unique business needs and goals.",
    },
    {
      title: "Scalable",
      description: "Applications that evolve as your business grows.",
    },
    {
      title: "Responsive",
      description: "Seamlessly compatible with all devices and screen sizes.",
    },
    {
      title: "Cross-Platform Integration",
      description:
        "Incorporate custom applications with your current systems and software.",
    },
    {
      title: "Robust Architecture",
      description:
        "Reliable and scalable software that can handle increasing loads and complexities.",
    },
    {
      title: "User-Centered Experience",
      description: "Intuitive design and engaging interfaces.",
    },
    {
      title: "Agile Development",
      description:
        "To deliver projects on time and adapt to changing requirements quickly.",
    },
  ];

  const benefits = [
    {
      title: "Increased efficiency",
      description:
        "Save time and cut costs with automated, streamlined processes.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Cutting-edge technology to stay ahead in your industry and set you apart.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Reporting features to provide valuable insights into your operations.",
    },
    {
      title: "Security",
      description:
        "Safeguard your data and observe compliance with advanced measures and best practices.",
    },
    {
      title: "Maintenance and Support",
      description:
        "Keep your software up-to-date and optimized with ongoing care.",
    },
  ];

  return (
    <Section>
      {/* We Build Card */}
      <GlassCard>
        <CardTitle>We build…</CardTitle>
        <CardItemList>
          {buildFeatures.map((feature, index) => (
            <CardItem key={index}>
              <CardItemTitle>{feature.title}</CardItemTitle>
              <CardItemDescription>
                {feature.description}
              </CardItemDescription>
            </CardItem>
          ))}
        </CardItemList>
      </GlassCard>

      {/* You Get Card */}
      <CardWithPlant>
        <GlassCard>
          <CardTitle>You get…</CardTitle>
          <CardItemList>
            {benefits.map((benefit, index) => (
              <CardItem key={index}>
                <CardItemTitle>{benefit.title}</CardItemTitle>
                <CardItemDescription>
                  {benefit.description}
                </CardItemDescription>
              </CardItem>
            ))}
          </CardItemList>
        </GlassCard>
        <PlantImage src={Plant} alt="Decorative plant illustration" />
      </CardWithPlant>
    </Section>
  );
};

export default WeBuildCards;
