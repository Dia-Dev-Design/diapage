import styled from "styled-components";
import WebDev from "../../assets/WebDevNew.svg";
import CustomApplications from "../../assets/CustomApplicationsNew.svg";
import ProblemSolutions from "../../assets/ProblemSolutionsNew.svg";
import TalentIncubator from "../../assets/TalentIncubatorNew.svg";

const ServicesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 6% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const AboutUsSection = styled.div`
  width: 100%;
  margin-bottom: 8%;
`;

const SectionTitle = styled.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 5%;
  font-family: "Aileron-Bold";
`;

const AboutUsDescription = styled.div`
  width: 100%;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  line-height: 2.2rem;

  p {
    margin: 0 0 4%;
    text-align: left;
  }
`;

const ServicesMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ServicesMainHeader = styled.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`;

const ServicesFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding: 6%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
`;

const ServiceCard1 = styled(ServiceCard)`
  background-color: #edf3ff;
`;

const ServiceCard2 = styled(ServiceCard)`
  background-color: #fffaec;
`;

const ServiceCard3 = styled(ServiceCard)`
  background-color: #f0fff4;
`;

const ServiceCard4 = styled(ServiceCard)`
  background-color: #fff5f3;
`;

const ServicesImageContainer = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
`;

const ServicesDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ServicesHeader = styled.h3`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-weight: 700;
  color: #77b9f3;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
`;

const ServicesDescription = styled.p`
  font-size: clamp(1.3rem, 3.5vw, 1.5rem);
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.3px;
  margin: 0;
  color: #070d0d;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <AboutUsSection>
        <SectionTitle>We Are</SectionTitle>
        <AboutUsDescription>
          <p>
            We are committed to empowering your business with cutting-edge
            solutions that align with your goals.
          </p>
          <p>
            Our primary focus is on delivering customized technology that caters
            to your unique requirements.
          </p>
          <p>
            Simultaneously, we support our community through continuous learning
            and creative collaboration, turning our efforts into sustainable,
            fulfilling careers and successful businesses.
          </p>
        </AboutUsDescription>
      </AboutUsSection>

      <ServicesMainContainer>
        <ServicesMainHeader>What We Do</ServicesMainHeader>

        <ServicesFlexContainer>
          <ServiceCard1>
            <ServicesImageContainer>
              <ServiceImage src={WebDev} alt="Web Development" />
            </ServicesImageContainer>
            <ServicesDescriptionContainer>
              <ServicesHeader>Web Development</ServicesHeader>
              <ServicesDescription>
                Save time and cut costs with automated, streamlined processes.
                Safeguard your data and observe compliance with advanced
                measures and best practices. Keep your software up-to-date and
                optimized with ongoing care.
              </ServicesDescription>
            </ServicesDescriptionContainer>
          </ServiceCard1>

          <ServiceCard2>
            <ServicesImageContainer>
              <ServiceImage
                src={CustomApplications}
                alt="Custom Applications"
              />
            </ServicesImageContainer>
            <ServicesDescriptionContainer>
              <ServicesHeader>Custom Applications</ServicesHeader>
              <ServicesDescription>
                Solutions for your unique business needs and goals. Applications
                that evolve as your business grows. Seamlessly compatible with
                all devices and screen sizes. Intuitive design and engaging
                interfaces.
              </ServicesDescription>
            </ServicesDescriptionContainer>
          </ServiceCard2>

          <ServiceCard3>
            <ServicesImageContainer>
              <ServiceImage src={ProblemSolutions} alt="Marketing Solutions" />
            </ServicesImageContainer>
            <ServicesDescriptionContainer>
              <ServicesHeader>Marketing</ServicesHeader>
              <ServicesDescription>
                Solutions that address your specific challenges. Fast and
                efficient responses that minimize downtime and disruption. Drive
                savings through swift and effective issue resolution.
              </ServicesDescription>
            </ServicesDescriptionContainer>
          </ServiceCard3>

          <ServiceCard4>
            <ServicesImageContainer>
              <ServiceImage src={TalentIncubator} alt="Tech Talent Incubator" />
            </ServicesImageContainer>
            <ServicesDescriptionContainer>
              <ServicesHeader>Tech Incubator</ServicesHeader>
              <ServicesDescription>
                If feel you have a really marketable tech concept that needs
                help, we are ready to take your business concept and, with our
                focus on excellence, turn it into a product the changes the
                world!
              </ServicesDescription>
            </ServicesDescriptionContainer>
          </ServiceCard4>
        </ServicesFlexContainer>
      </ServicesMainContainer>
    </ServicesContainer>
  );
};

export default Services;
