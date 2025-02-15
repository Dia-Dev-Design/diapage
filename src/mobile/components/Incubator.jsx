import styled from "styled-components";

import Plant from "../../assets/Plant.svg";
import HandsOnTraining from "../../assets/Hands-On-Training.svg";
import Performance from "../../assets/Performance.svg";
import CommunityEngagement from "../../assets/Community-Engagement.svg";
import BallonDog from "../../assets/BalloonDog.svg";
import BottomWavyTopRectangle from "../../assets/Bottom-Wavy-Top-Rectangle.svg";

import MainContainer from "./MainContainer";

const PageContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%
`

const IncubatorTitle = styled.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`;

const ItemContainer = styled.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`;

const ContentContainer = styled.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const Title = styled.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

const Description = styled.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 16px;
  font-family: "Aileron", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;
const Incubator = () => {
  return (
    <PageContainer>
      <img
        style={{ height: "40vh", marginRight: "-60%", marginBottom: "-5%" }}
        src={Plant}
        alt="plant-image"
      />
      <MainContainer style={{marginTop: "-20%", height: "fit-content"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "-20%"}}>
        <IncubatorTitle>Tech Incubator</IncubatorTitle>
        <Container>
          <ItemContainer>
            <Image src={HandsOnTraining} alt="hands-on-training" />
            <ContentContainer>
              <Title>Hands-On Training</Title>
              <Description>
                Training and workshops covering the latest technologies and
                industry best practices.
              </Description>
            </ContentContainer>
          </ItemContainer>
          <ItemContainer>
            <Image src={Performance} alt="performance" />
            <ContentContainer>
              <Title>Performance Feedback</Title>
              <Description>
                Training and workshops covering the latest technologies and
                industry best practices.
              </Description>
            </ContentContainer>
          </ItemContainer>
          <ItemContainer>
            <Image src={CommunityEngagement} alt="community-engagement" />
            <ContentContainer>
              <Title>Community Engagement</Title>
              <Description>
                Participate in advancing local technological innovation and
                progress.
              </Description>
            </ContentContainer>
          </ItemContainer>
        </Container>
        </div>

      </MainContainer>
        <img
          style={{ height: "40vh",
           marginLeft: "-80%" 
           }}
          src={BallonDog}
          alt="ballon-dog"
        />
        <img
          style={{ width: "100vw" }}
          src={BottomWavyTopRectangle}
          alt="bottom-wavy-top-rectangle"
        />
    </PageContainer>
  );
};

export default Incubator;
