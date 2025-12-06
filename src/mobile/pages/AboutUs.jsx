import styled from "styled-components";

import Story from "../components/Story";
import WhyWeDoIt from "../components/WhyWeDoIt";
import Consulting from "../components/Consulting";
import WeBuildCards from "../components/WeBuildCards";
import Incubator from "../components/Incubator";
import DecorativeBottom from "../components/DecorativeBottom";

// Page Container
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

// Main Content Container
const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <MainContent>
        <Story />
        <WhyWeDoIt />
        <Consulting />
        <WeBuildCards />
        <Incubator />
        <DecorativeBottom />
      </MainContent>
    </PageContainer>
  );
};

export default AboutUs;
