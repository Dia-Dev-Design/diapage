import styled from "styled-components";

import Story from "../components/Story";
import WhyWeDoIt from "../components/WhyWeDoIt";
import Consulting from "../components/Consulting";
import WeBuildCards from "../components/WeBuildCards";
import Incubator from "../components/Incubator";

const AboutUsPage = styled.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`;

const AboutUs = () => {
  return (
    <AboutUsPage>
      <Story />
      <WhyWeDoIt />
      <Consulting />
      <WeBuildCards />
      <Incubator />
    </AboutUsPage>
  );
};

export default AboutUs;
