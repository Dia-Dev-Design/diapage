import styled from "styled-components";
import seaWave from "../../assets/Sea.svg";
import fishermanBoat from "../../assets/Fishermen.svg";

// Fisherman Scene Section (Off-white background, just the fisherman on sea)
const FishermanSceneSection = styled.section`
  width: 100%;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 4% 0;
  box-sizing: border-box;
  overflow: hidden;
`;

// Fisherman and Sea Container (fisherman sits on water in valley between crests)
const FishermanSeaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
`;

// Sea Wave (spans FULL width, creates wave crests rising on left/right edges)
const SeaWave = styled.div`
  position: absolute;
  bottom: -238%;
  left: -10%;
  width: 220%;
  height: auto;
  z-index: 1;

  @media (max-width: 321px) {
    bottom: -188%;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Fisherman floating ON TOP of sea in the valley (middle)
const FishermanContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 212px;
  margin-bottom: 15px;
  z-index: 5;

  img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 5;
  }
`;

// Blue Text Section (starts where boat meets water - seamless with sea!)
const BlueTextSection = styled.section`
  width: 100%;
  background-color: #77b9f3;
  padding: 0 4% 8%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 0;
`;

const WhySectionTitle = styled.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 6% 0;
  text-align: center;
  position: relative;
  z-index: 3;
`;

const WhyBodyText = styled.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Roboto", "Aileron-Regular", sans-serif;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  text-align: center;
  max-width: 361px;
  position: relative;
  z-index: 3;
`;

const Consulting = () => {
  return (
    <>
      {/* Fisherman Scene (Off-white background) */}
      <FishermanSceneSection>
        {/* Fisherman floating on sea in valley between wave crests */}
        <FishermanSeaContainer>
          <SeaWave>
            <img src={seaWave} alt="Ocean waves" />
          </SeaWave>
          <FishermanContainer>
            <img src={fishermanBoat} alt="Fisherman in boat" />
          </FishermanContainer>
        </FishermanSeaContainer>
      </FishermanSceneSection>

      {/* Blue Section (title + text - seamlessly continues from sea) */}
      <BlueTextSection>
        <WhySectionTitle>We Bring Good Tech to Life!</WhySectionTitle>

        <WhyBodyText>
          At &lt;Dia, Dev, & Design&gt;, we offer tailored solutions to meet
          your unique challenges, ensuring that your business benefits from
          rapid responses and minimal downtime. Our team conducts thorough
          analyses to pinpoint the root causes of technical issues, helping
          you enhance your operational efficiency and streamline your
          processes. By addressing problems quickly and effectively, we drive
          cost savings and maximize the value of your technology investments.
          Let us help you boost your business performance with our
          cost-efficient services.
        </WhyBodyText>
        <WhyBodyText>
          At &lt;Dia, Dev, & Design&gt;, we are committed to fostering a
          collaborative partnership with your team, ensuring we fully grasp
          the context and impact of each issue. Using advanced tools and
          techniques, we conduct comprehensive diagnostics to identify
          problems and perform in-depth root cause analysis to ensure
          recurring issues are fixed. Our tailored strategies are crafted to
          meet your specific objectives. We also offer preventative monitoring
          through systems which are designed to anticipate and mitigate future
          issues. Additionally, we offer continuous support with ongoing
          recommendations to drive your business&apos;s continual improvement.
        </WhyBodyText>
      </BlueTextSection>
    </>
  );
};

export default Consulting;
