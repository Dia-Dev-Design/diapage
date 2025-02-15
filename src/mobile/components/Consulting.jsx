import styled from "styled-components";

import MainContainer from "./MainContainer";

import Fishermen from "../../assets/Fishermen.svg";
import Sea from "../../assets/Sea.svg";

const ConsultingPage = styled.div`
  height: 80vh;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${Sea});
  background-position: 50% 100%;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  overflow-y: visible;
`;

const ConsultingPageContainer = styled.div`
  height: 100%;
  width: 100%;
  ${
    "" /* background-image: url(${Sea});
    background-position: center;
    background-size: 100% 105%;
    background-repeat: no-repeat; */
  }
  z-index: 10;
  ${"" /* overflow-y: visible; */}
  display: flex;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const SeaImage = styled.img`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   z-index: 12;
//   ${'' /* top: 110em; */}
// `
const ConsultingContent = styled.div`
  width: 100%;
  height: 50%;
  ${"" /* position: relative; */}
  ${"" /* top: -25%; */}
  ${'' /* margin: -25% 0; */}
  margin-top: -10%;
  z-index: 13;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FishermenContainer = styled.div`
  width: 14%;
  height: 37%;
  position: absolute;
  left: 15.4%;
  top: -6.2%;
  ${"" /* top: 17%; */}
  z-index: 13
`;

const FishermenImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Headline = styled.h1`
  color: var(--Natural-2, #070d0d);
  /* Display */
  font-family: Aileron;
  font-size: 9.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const InformationContainer = styled.div`
  width: 100%;
  margin-top: -2%;

`;

const Information = styled.p`
  color: var(--Natural-2, #070d0d);
  font-family: "Roboto";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center;
  @media (min-width: 1800px) {
      font-size: 22px;
    }
`;

const Consulting = () => {
  return (
    <ConsultingPage>
      <ConsultingPageContainer>
        <FishermenContainer>
          <FishermenImage src={Fishermen} alt="fishermen" />
        </FishermenContainer>

        <MainContainer>

          <ConsultingContent>
            <Headline>Consulting</Headline>
            <InformationContainer>
              <Information>
                At {"<Día Dev & Design>"}, we offer tailored solutions to meet
                your unique challenges, ensuring that your business benefits from
                rapid responses and minimal downtime. Our team conducts thorough
                analyses to pinpoint the root causes of technical issues, helping
                you enhance your operational efficiency and streamline your
                processes. By addressing problems quickly and effectively, we
                drive cost savings and maximize the value of your technology
                investments. Let us help you boost your business performance with
                our cost-efficient services.
              </Information>
              <Information>
                At {"<Día Dev & Design>"}, we are committed to fostering a
                collaborative partnership with your team, ensuring we fully grasp
                the context and impact of each issue. Using advanced tools and
                techniques, we conduct comprehensive diagnostics to identify
                problems and perform in-depth root cause analysis to ensure
                recurring issues are fixed. Our tailored strategies are crafted to
                meet your specific objectives. We also offer preventative
                monitoring through systems which are designed to anticipate and
                mitigate future issues. Additionally, we offer continuous support
                with ongoing recommendations to drive your business's continual
                improvement.
              </Information>
            </InformationContainer>
          </ConsultingContent>

        </MainContainer>

      </ConsultingPageContainer>
    </ConsultingPage>
  );
};

export default Consulting;
