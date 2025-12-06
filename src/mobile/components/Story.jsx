import styled from "styled-components";
import DiaGreenLogo from "../../assets/DiaGreenLogo-2.png";

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

const Story = () => {
  return (
    <Section>
      <SectionTitle>Our Story</SectionTitle>
      <BodyText>
        Día: Dev & Design organically developed as the next step venture for
        Ironhack graduates and it came to fruition after one of those
        intense conversations about the state of affairs in the tech
        industry. Día: Dev & Design organically developed as the next step
        venture for Ironhack graduates and it came to fruition after one of
        those intense conversations about the state of affairs in the tech
        industry.
      </BodyText>
      <BodyText>
        In the early days, our discussions often turned into achieving two
        goals: delivering valuable technological solutions to businesses and
        individuals while nurturing the community and emerging local talent.
        Our vision is a business that fosters continuous learning and growth
        while making a tangible impact on the tech industry.
      </BodyText>
      <BodyText>
        Driven by this vision, we founded Día: Dev & Design. More than just
        a business, it is a collaborative effort that embodies our passion
        for problem-solving and innovation. And so we also crafted an
        Incubator program designed to offer internships and mentorship to
        jump-start careers in tech. By nurturing local enterprises, we aim
        to foster a community of skilled professionals propelling the
        technological progress of our region.
      </BodyText>

      <LogoContainer>
        <img src={DiaGreenLogo} alt="Día Dev & Design Logo" />
      </LogoContainer>
    </Section>
  );
};

export default Story;
