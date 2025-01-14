import styled from "styled-components";

import Plant from "../../assets/Plant.svg";
import HandsOnTraining from "../../assets/Hands-On-Training.svg";
import Performance from "../../assets/Performance.svg";
import CommunityEngagement from "../../assets/Community-Engagement.svg";
import BallonDog from "../../assets/BalloonDog.svg";
import BottomWavyTopRectangle from "../../assets/Bottom-Wavy-Top-Rectangle.svg";

const IncubatorPage = styled.div`
  width: 100%;
  border: 2px solid black;
  display: block;
`;

const PageContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const CardsContainer = styled.div`
  width: 71%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  left: 14%;
  border: 1px solid black;
`;

const WeBuildContainerLeft = styled.div`
  display: flex;
  height: 67vh;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(-10deg);
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
  transform: rotate(10deg);
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

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5%;
`;

const InnerHeadline = styled.h3`
  color: #070D0D;
  font-family: Aileron;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5% 0
`

const Section = styled.div`
  align-self: stretch;
  ${'' /* height: 7.5%; */}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${'' /* gap: 0.6%; */}
`;

const LargeText = styled.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 2rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
`;

const SmallText = styled.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 1.6rem;
  font-family: "Aileron";
  font-weight: 400;
  word-wrap: break-word;
`;

const Incubator = () => {
  return (
    <IncubatorPage>
      <PageContainer>
        <CardsContainer>
          <WeBuildContainerLeft>
            <InnerContainer>
              <InnerHeadline>We build...</InnerHeadline>
              <Section>
                <LargeText>Tailored</LargeText>
                <SmallText>
                  Solutions for your unique business needs and goals.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Scalable</LargeText>
                <SmallText>
                  Applications that evolve as your business grows.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Responsive</LargeText>
                <SmallText>
                  Seamlessly compatible with all devices and screen sizes.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Cross-Platform Integration</LargeText>
                <SmallText>
                  Incorporate custom applications with your current systems and software.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Robust Architecture</LargeText>
                <SmallText>
                  Reliable and scalable software that can handle increasing loads and complexities.
                </SmallText>
              </Section>
              <Section>
                <LargeText>User-Centered Experience</LargeText>
                <SmallText>Intuitive design and engaging interfaces.</SmallText>
              </Section>
              <Section>
                <LargeText>Agile Development</LargeText>
                <SmallText>
                  To deliver projects on time and adapt to changing requirements quickly.
                </SmallText>
              </Section>
            </InnerContainer>
          </WeBuildContainerLeft>

          <WeBuildContainerRight>
            <InnerContainer>
            <InnerHeadline>You get...</InnerHeadline>
              <Section>
                <LargeText>Increased efficiency</LargeText>
                <SmallText>
                  Save time and cut costs with automated, streamlined processes.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Competitive Advantage</LargeText>
                <SmallText>
                  Cutting-edge technology to stay ahead in your industry and set you apart.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Advanced Analytics</LargeText>
                <SmallText>
                  Reporting features to provide valuable insights into your operations.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Security</LargeText>
                <SmallText>
                  Safeguard your data and observe compliance with advanced measures and best practices.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Maintenance and Support</LargeText>
                <SmallText>
                  Keep your software up-to-date and optimized with ongoing care.
                </SmallText>
              </Section>
              <Section>
                <LargeText>Excellence</LargeText>
                <SmallText>With our dedication to always delivering cutting-edge design, development, and marketing, we ensure you always get the very best!</SmallText>
              </Section>
            </InnerContainer>
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
