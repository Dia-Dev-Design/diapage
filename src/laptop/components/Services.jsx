import WebDev from "../../assets/WebDevNew.svg";
import CustomApplications from "../../assets/CustomApplicationsNew.svg";
import ProblemSolutions from "../../assets/ProblemSolutionsNew.svg";
import TalentIncubator from "../../assets/TalentIncubatorNew.svg";
import styled from "styled-components";

import MainContainer from "./MainContainer";

const ServicesContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  border: solid 2px red;
`;

const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AboutUsContainer = styled.div`
  margin-top: 1%;
  width: 81%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SectionTitleThin = styled.span`
  font-weight: 700;
  font-size: 9.6rem;
`;
const AboutUsDescription = styled.div`
  width: 60%;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 4%;
`;

const ServicesMainContainer = styled.div`
  height: 71%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: space-around; */}
`

const ServicesMainHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 9.6rem;
  margin: 0px;
  font-weight: 700;
  ${"" /* margin-right: -6%; */}
  ${"" /* margin-top: 4%; */}
`;

const ServicesFlexContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`;


const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f9f9f9;
  font-size: 10px;
  padding: 20px;
  border-radius: 10px;
  width: 44%;
  height: 45%;
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
  ${"" /* flex: 1; */}
  ${"" /* text-align: left; */}
  ${
    "" /* height: 100%;
  width: 100%; */
  }
  width: 38%;
  ${'' /* border: 1px solid black; */}
`;

const ServiceImage = styled.img`
  height: 62%;
  width: 62%;
  ${'' /* border: 1px solid black; */}
`;

const ServicesDescriptionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: space-around; */}
  ${'' /* justify-content: flex-start; */}
  width: 56%;
  padding: 0;
  margin: 0
  `;

const ServicesHeader = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${'' /* margin-bottom: 2%; */}
  text-align: left;
  margin: 0;
  padding: 0
`;

const ServicesDescription = styled.p`
  ${
    "" /* font-size: 1rem;
  color: #666;
  text-align: left;
  margin-left: 5px; */
  }

  color: var(--Natural-2, #070D0D);
  
  font-family: Aileron;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  paddding: 0;
  letter-spacing: -0.5px;
  text-align: justify;
  margin-top: 5%;
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
      <MainContainer>
        <PageContainer>
          <AboutUsContainer>
            <SectionTitleThin>We Are</SectionTitleThin>
            <AboutUsDescription>
              <p>
                We are committed to empowering your business with cutting-edge
                solutions that align with your goals.
              </p>

              <p>
                Our primary focus is on delivering customized technology that
                caters to your unique requirements.
              </p>

              <p>
                Simultaneously, we support our community through continuous
                learning and creative collaboration, turning our efforts into
                sustainable, fulfilling careers and successful businesses.
              </p>
            </AboutUsDescription>
          </AboutUsContainer>

          <ServicesMainContainer>
            <ServicesMainHeader>What We Do</ServicesMainHeader>

            <ServicesFlexContainer>
              <ServiceCard1>
                <ServicesImageContainer>
                  <ServiceImage src={WebDev} alt="web-dev" />
                </ServicesImageContainer>

                <ServicesDescriptionContainer>
                  <ServicesHeader>Web Development</ServicesHeader>

                  <ServicesDescription>
                    Save time and cut costs with automated, streamlined
                    processes. Safeguard your data and observe compliance with
                    advanced measures and best practices. Keep your software
                    up-to-date and optimized with ongoing care.
                  </ServicesDescription>
                </ServicesDescriptionContainer>
              </ServiceCard1>

              <ServiceCard2>
                <ServicesImageContainer>
                  <ServiceImage
                    src={CustomApplications}
                    alt="custom-applications"
                  />
                </ServicesImageContainer>

                <ServicesDescriptionContainer>
                  <ServicesHeader>Custom Applications</ServicesHeader>

                  <ServicesDescription>
                    Solutions for your unique business needs and goals.
                    Applications that evolve as your business grows. Seamlessly
                    compatible with all devices and screen sizes. Intuitive
                    design and engaging interfaces.
                  </ServicesDescription>
                </ServicesDescriptionContainer>
              </ServiceCard2>

              <ServiceCard3>
                <ServicesImageContainer>
                  <ServiceImage
                    src={ProblemSolutions}
                    alt="problem-solutions"
                  />
                </ServicesImageContainer>

                <ServicesDescriptionContainer>
                  <ServicesHeader>Marketing</ServicesHeader>

                  <ServicesDescription>
                    Solutions that address your specific challenges. Fast and
                    efficient responses that minimize downtime and disruption.
                    Drive savings through swift and effective issue resolution.
                  </ServicesDescription>
                </ServicesDescriptionContainer>
              </ServiceCard3>

              <ServiceCard4>
                <ServicesImageContainer>
                  <ServiceImage
                    src={TalentIncubator}
                    alt="tech-talent-incubator"
                  />
                </ServicesImageContainer>

                <ServicesDescriptionContainer>
                  <ServicesHeader>Tech Incubator</ServicesHeader>

                  <ServicesDescription>
                    If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!
                  </ServicesDescription>
                </ServicesDescriptionContainer>
              </ServiceCard4>
            </ServicesFlexContainer>
          </ServicesMainContainer>
        </PageContainer>
      </MainContainer>
    </ServicesContainer>
  );
};

export default Services;
