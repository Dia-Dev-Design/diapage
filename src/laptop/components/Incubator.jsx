import styled from "styled-components";

import Plant from "../../assets/Plant.svg";
import HandsOnTraining from "../../assets/Hands-On-Training.svg";
import Performance from "../../assets/Performance.svg";
import CommunityEngagement from "../../assets/Community-Engagement.svg";
import BallonDog from "../../assets/BalloonDog.svg";
import BottomWavyTopRectangle from "../../assets/Bottom-Wavy-Top-Rectangle.svg";

import MainContainer from "./MainContainer";

// const PageContainer = styled.div`
//   align-self: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-top: -10%;
//   position: relative;
//   width: 100%
// `;

const PageContainer = styled.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%;
  width: 100%; /* Make sure this has a defined width */
`;

const IncubatorTitle = styled.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
  z-index: 2;
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

// const DogImage = styled.img`
//   height: 40vh;
//   margin: 0 0 -2.5 -80;
//   margin-left: -80%;
//   margin-bottom: -2.5%;
//   padding: 0;
//   z-index: 1;
//   @media (max-width: 1200px) {
//     margin: 0% 0% -10% 90%;
//   }
// `;

const DogImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 10;
  z-index: 1;
  height: 40vh;
  ${'' /* margin: 0 0 -2.5 -80;
  margin-left: -80%;
  margin-bottom: -2.5%; */}
  padding: 0;
  z-index: 1;
  
  @media (max-width: 1200px) {
    left: 85%;
    bottom: 3%;
  }
`;


const BottomWavyImage = styled.img`
  width: 100vw;
  z-index: 2;
  padding: 0;
  display: block;
  @media (max-width: 1200px) {
  margin-top: 25%;
  ${'' /* margin-bottom: 0%; */}
  }
`

const Incubator = () => {
  return (
    <PageContainer>
      <img
        style={{ height: "40vh", marginRight: "-55%", marginBottom: "-5%" }}
        src={Plant}
        alt="plant-image"
      />
      <MainContainer style={{ marginTop: "-20%", height: "fit-content" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "-20%",
          }}
        >
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
      <DogImage
        // style={{ height: "40vh",
        //  marginLeft: "-80%"
        //  }}
        // src="../../assets/BalloonDog.svg"
        src={BallonDog}
        alt="ballon-dog"
      />
      <BottomWavyImage
        // style={{ width: "100vw", zIndex: 2 }}
        src={BottomWavyTopRectangle}
        alt="bottom-wavy-top-rectangle"
      />
    </PageContainer>
  );
};

export default Incubator;
