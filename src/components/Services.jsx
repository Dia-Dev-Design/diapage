import WebDev from "../../src/assets/WebDev.svg";
import CustomApplications from "../../src/assets/CustomApplications.svg";
import ProblemSolutions from "../../src/assets/ProblemSolutions.svg";
import TalentIncubator from "../../src/assets/TalenIncubator.svg";
import styled from "styled-components";

const ServicesContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1200px) {
    .services-container {
      margin-top: 10vh;
    }
  }
  @media (max-width: 1100px) {
    .services-container {
      margin-top: 15vh;
    }
  }

  @media (max-width: 885px) {
    .services-container {
      margin-top: 20vh;
    }
  }
`

const ServicesMainHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 128px;
  margin: 0px;
  font-weight: 100;
`

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const ServiceCard1 = styled(ServiceCard)`
  background-color: #EDF3FF;
`
const ServiceCard2 = styled(ServiceCard)`
  background-color: #FFFAEC;
`
const ServiceCard3 = styled(ServiceCard)`
  background-color: #F0FFF4;
`
const ServiceCard4 = styled(ServiceCard)`
  background-color: #FFF5F3;
`

const ServicesImageContainer = styled.div`
  flex: 1;
  text-align: left;

  &img {
    width: 100px;
    height: 100px;
  }
`

const ServicesHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 5px;
`

const ServicesDescription = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: left;
  margin-left: 5px;
`

const ServicesWrapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesMainHeader>What We Do</ServicesMainHeader>

      <ServicesWrapContainer>
        <ServiceCard1>
          <ServicesImageContainer>
            <img src={WebDev} alt="" />
          </ServicesImageContainer>

          <div>
            <ServicesHeader>Web Dev</ServicesHeader>

            <ServicesDescription>
              Save time and cut costs with automated, streamlined processes.
              Safeguard your data and observe compliance with advanced measures
              and best practices. Keep your software up-to-date and optimized
              with ongoing care.
            </ServicesDescription>
          </div>
        </ServiceCard1>

        <ServiceCard2>
          <ServicesImageContainer>
            <img src={CustomApplications} alt="" />
          </ServicesImageContainer>

          <div>
            <ServicesHeader>Custom Applications</ServicesHeader>

            <ServicesDescription>
              Solutions for your unique business needs and goals. Applications
              that evolve as your business grows. Seamlessly compatible with all
              devices and screen sizes. Intuitive design and engaging
              interfaces.
            </ServicesDescription>
          </div>
        </ServiceCard2>

        <ServiceCard3>
          <ServicesImageContainer>
            <img src={ProblemSolutions} alt="" />
          </ServicesImageContainer>

          <div>
            <ServicesHeader>Problem Solutions</ServicesHeader>

            <ServicesDescription>
              Solutions that address your specific challenges. Fast and
              efficient responses that minimize downtime and disruption. Drive
              savings through swift and effective issue resolution.
            </ServicesDescription>
          </div>
        </ServiceCard3>

        <ServiceCard4>
          <ServicesImageContainer>
            <img src={TalentIncubator} alt="" />
          </ServicesImageContainer>

          <div>
            <ServicesHeader>Tech & Talent Incubator</ServicesHeader>

            <ServicesDescription>
              Fosters the next generation of tech talent. Our program is
              designed to nurture recent graduates and emerging professionals.
              We aim to cultivate skilled professionals who can contribute to
              the technological advancement of Puerto Rico and the world.
            </ServicesDescription>
          </div>
        </ServiceCard4>
      </ServicesWrapContainer>
    </ServicesContainer>
  );
};

export default Services;
