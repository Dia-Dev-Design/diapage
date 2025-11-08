import styled from "styled-components";

import MainContainer from "./MainContainer";

import TargetIcon from "../../assets/TargetIcon.svg";
import EyeIcon from "../../assets/EyeIcon.svg";
import HandsIcon from "../../assets/HandsIcon.svg";

const WhyPageContainer = styled.div`
  ${"" /* height: 510vh; */}
  width: 100%;

  background-color: #f2f2f2;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

const MainContainerAmmended = styled(MainContainer)`
  flex-direction: column;
`;

const Headline = styled.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
  ${"" /* padding: 0; */}
  ${"" /* margin-top: -50% */}
`;
const WhyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: 1%;
`;
const Why = styled.p`
  width: 39%;
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;
const WhyIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const WhyIconsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const IconDivs = styled.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  height: 60%;
`;
const IconExplanations = styled.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`;

const WhyWeDoIt = () => {
  return (
    <WhyPageContainer>
      <MainContainerAmmended>
        <Headline>Why We Do It</Headline>
        <WhyContent>
          <Why>
            We are committed to empowering your business with cutting-edge
            solutions that align with your goals. Our primary focus is on
            delivering customized technology that caters to your unique
            requirements. Simultaneously we support our community through
            continuous learning and creative collaboration, turning our efforts
            into sustainable, fulfilling careers and successful businesses.
          </Why>

          <WhyIconsContainer>
            <WhyIconsContent>
              <IconDivs>
                <Icon src={TargetIcon} alt="target-icon" />
              </IconDivs>
              <IconExplanations>
                We are committed to empowering your business with cutting-edge
                solutions that align with your goals.
              </IconExplanations>
            </WhyIconsContent>

            <WhyIconsContent>
              <IconDivs>
                <Icon src={EyeIcon} alt="eye-icon" />
              </IconDivs>
              <IconExplanations>
                Our primary focus is on delivering customized technology that
                caters to your unique requirements.
              </IconExplanations>
            </WhyIconsContent>

            <WhyIconsContent>
              <IconDivs>
                <Icon src={HandsIcon} alt="hands-icon" />
              </IconDivs>
              <IconExplanations>
                Simultaneously we support our community through continuous
                learning and creative collaboration, turning our efforts into
                sustainable, fulfilling careers and successful businesses.
              </IconExplanations>
            </WhyIconsContent>
          </WhyIconsContainer>
        </WhyContent>
      </MainContainerAmmended>
    </WhyPageContainer>
  );
};

export default WhyWeDoIt;
