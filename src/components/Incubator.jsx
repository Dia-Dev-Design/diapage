import styled from "styled-components";

import Plant from "../assets/Plant.svg";
import HandsOnTraining from "../assets/Hands-On-Training.svg";
import Performance from "../assets/Performance.svg";
import CommunityEngagement from "../assets/Community-Engagement.svg";
import BallonDog from "../assets/BalloonDog.svg";
import BottomWavyTopRectangle from "../assets/Bottom-Wavy-Top-Rectangle.svg";

const IncubatorPage = styled.div`
  width: 100%;
  border: 2px solid black;
  display: block;
`;

const PageContainer = styled.div`
  position: absolute;
  width: 100%
`;

const CardsContainer = styled.div`
  width: 71%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  left: 14%;
  border: 1px solid black
`;

const WeBuildContainerLeft = styled.div`
  display: flex;
  height: 67vh;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(-15deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
  z-index: 2;
`;

const WeBuildContainerRight = styled.div`
  display: flex;
  height: 67vh;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(15deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
`;

const CardHeadline = styled.p`

`
const CardDetails = styled.div`

`


const Incubator = () => {
  return (
    <IncubatorPage>
      <PageContainer>
        <CardsContainer>
            <WeBuildContainerLeft>

            </WeBuildContainerLeft>

            <WeBuildContainerRight>

            </WeBuildContainerRight>

        </CardsContainer>

        <img src={Plant} alt="plant-image" />
        <h1>Tech & Talent Incubator</h1>
        <div>
          <div>
            <img src={HandsOnTraining} alt="hands-on-training" />
            <h4>Hands-On Training</h4>
            <p>
              Training and workshops covering the latest technologies and
              industry best practices.
            </p>
          </div>
          <div>
            <img src={Performance} alt="performance" />
            <h4>Performance Feedback</h4>
            <p>
              Training and workshops covering the latest technologies and
              industry best practices.
            </p>
          </div>
          <div>
            <img src={CommunityEngagement} alt="community-engagement" />
            <h4>Community Engagement</h4>
            <p>
              Participate in advancing local technological innovation and
              progress.
            </p>
          </div>
        </div>
        <img src={BallonDog} alt="ballon-dog" />
        <br />
        <img src={BottomWavyTopRectangle} alt="bottom-wavy-top-rectangle" />
      </PageContainer>
    </IncubatorPage>
  );
};

export default Incubator;
