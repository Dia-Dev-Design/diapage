import styled from "styled-components";

const AboutUsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  top: 10%;
  width: 100%;
  gap: 3%;
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
`

const SectionTitleThin = styled.span`
  font-weight: 100;
  font-size: 128px;
`
const AboutUsDescription = styled.div`
  width: 50rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 25px;
`

const AboutUs = () => {
  return (
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
  );
};

export default AboutUs;
