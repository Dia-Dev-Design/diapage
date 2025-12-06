import styled from "styled-components";
import BalloonDog from "../../assets/BalloonDog.svg";
import WavyBottom from "../../assets/Mobile-Bottom-Wavy.png";

// Decorative Bottom Section - Footer area for AboutUs page
const DecorativeBottomSection = styled.section`
  width: 100%;
  position: relative;
  height: 300px;
  background-color: #f2f2f2;
  overflow-x: hidden;
  margin-top: -30%;
  padding: 0;
  z-index: 99;
  overflow-y: visible;
  container-type: size;
`;

const WavyBottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 99.7vw;
  height: calc(100cqw * 1000%);
  z-index: 2;
  pointer-events: none;
`;

const BalloonDogImage = styled.img`
  position: absolute;
  bottom: 30%;
  left: 2%;
  width: 18%;
  height: auto;
  pointer-events: none;
`;

const DecorativeBottom = () => {
  return (
    <DecorativeBottomSection>
      <BalloonDogImage
        src={BalloonDog}
        alt="Decorative balloon dog illustration"
      />
      <WavyBottomImage
        src={WavyBottom}
        alt="Decorative wavy bottom shape"
      />
    </DecorativeBottomSection>
  );
};

export default DecorativeBottom;

