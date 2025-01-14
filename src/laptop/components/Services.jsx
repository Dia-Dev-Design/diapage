import WebDev from "../../assets/WebDev.svg";
import CustomApplications from "../../assets/CustomApplications.svg";
import ProblemSolutions from "../../assets/ProblemSolutions.svg";
import TalentIncubator from "../../assets/TalenIncubator.svg";
import styled from "styled-components";

const ServicesContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  height: 100vh;

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
`;
const AboutUsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 7vh;
  gap: 5%;
  position: relative;
  left: 10%;

  margin-top: 2rem;

  @media (max-width: 1200px) {
    .landing-page-about-us-container {
      top: 10vh;
    }
  }

  @media (max-width: 1100px) {
    .landing-page-about-us-container {
      top: 15vh;
    }
  }

  @media (max-width: 885px) {
    .landing-page-about-us-container {
      top: 20vh;
    }
  }
`;
const SectionTitleThin = styled.span`
  font-weight: 100;
  font-size: 128px;
  margin-left: -8%;
  margin-top: -2.2%;
`;
const AboutUsDescription = styled.div`
  width: 50rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 25px;
  margin-top: -1.2%;
`;

const ServicesMainHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 128px;
  margin: 0px;
  font-weight: 100;
  ${"" /* margin-right: -6%; */}
  margin-top: 4%;
`;

const ServicesFlexContainer = styled.div`
  ${"" /* margin-top: 5%; */}
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 50%
`;

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f9f9f9;
  font-size: 10px;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  height: 40%;
  margin-bottom: 2%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${'' /* flex: 1; */}
  ${'' /* text-align: left; */}
  ${'' /* height: 100%;
  width: 100%; */}
  width: 15%;
  border: 1px solid black
`;

const ServiceImage = styled.img`
  height: 100%;
  width: 100%;
  border: 1px solid black
`

const ServicesDescriptionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%

`

const ServicesHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 5px;
`;

const ServicesDescription = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: left;
  margin-left: 5px;
`;



// const AboutUs = () => {
//   return (
//     <AboutUsContainer>
//       <SectionTitleThin>We Are</SectionTitleThin>
//       <AboutUsDescription>
//         <p>
//           We are committed to empowering your business with cutting-edge solutions that align with your goals.
//         </p>

//         <p>
//           Our primary focus is on delivering customized technology that caters to your unique requirements.
//         </p>

//         <p>
//           Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.
//         </p>
//       </AboutUsDescription>
//     </AboutUsContainer>
//   );
// };

const Services = () => {
  return (
    <ServicesContainer>
      <AboutUsContainer>
        <SectionTitleThin>We Are</SectionTitleThin>
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
            Simultaneously we support our community through continuous learning
            and creative collaboration, turning our efforts into sustainable,
            fulfilling careers and successful businesses.
          </p>
        </AboutUsDescription>
      </AboutUsContainer>
      <ServicesMainHeader>What We Do</ServicesMainHeader>

      <ServicesFlexContainer>
        <ServiceCard1>
          <ServicesImageContainer>
            <ServiceImage src={WebDev} alt="web-dev" />
          </ServicesImageContainer>

          <ServicesDescriptionContainer>
            <ServicesHeader>Web Dev</ServicesHeader>

            <ServicesDescription>
              Save time and cut costs with automated, streamlined processes.
              Safeguard your data and observe compliance with advanced measures
              and best practices. Keep your software up-to-date and optimized
              with ongoing care.
            </ServicesDescription>
          </ServicesDescriptionContainer>
        </ServiceCard1>

        <ServiceCard2>
          <ServicesImageContainer>
            <ServiceImage src={CustomApplications} alt="custom-applications" />
          </ServicesImageContainer>

          <ServicesDescriptionContainer>
            <ServicesHeader>Custom Applications</ServicesHeader>

            <ServicesDescription>
              Solutions for your unique business needs and goals. Applications
              that evolve as your business grows. Seamlessly compatible with all
              devices and screen sizes. Intuitive design and engaging
              interfaces.
            </ServicesDescription>
          </ServicesDescriptionContainer>
        </ServiceCard2>

        <ServiceCard3>
          <ServicesImageContainer>
            <ServiceImage src={ProblemSolutions} alt="problem-solutions" />
          </ServicesImageContainer>

          <ServicesDescriptionContainer>
            <ServicesHeader>Problem Solutions</ServicesHeader>

            <ServicesDescription>
              Solutions that address your specific challenges. Fast and
              efficient responses that minimize downtime and disruption. Drive
              savings through swift and effective issue resolution.
            </ServicesDescription>
          </ServicesDescriptionContainer>
        </ServiceCard3>

        <ServiceCard4>
          <ServicesImageContainer>
            <ServiceImage src={TalentIncubator} alt="tech-talent-incubator" />
          </ServicesImageContainer>

          <ServicesDescriptionContainer>
            <ServicesHeader>Tech & Talent Incubator</ServicesHeader>

            <ServicesDescription>
              Fosters the next generation of tech talent. Our program is
              designed to nurture recent graduates and emerging professionals.
              We aim to cultivate skilled professionals who can contribute to
              the technological advancement of Puerto Rico and the world.
            </ServicesDescription>
          </ServicesDescriptionContainer>
        </ServiceCard4>
      </ServicesFlexContainer>
    </ServicesContainer>
  );
};

export default Services;
