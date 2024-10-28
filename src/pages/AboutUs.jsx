import styled from "styled-components";

import Story from "../components/Story";
import WhyWeDoIt from "../components/WhyWeDoIt";
import Consulting from "../components/Consulting";
import Incubator from "../components/Incubator";

const AboutUsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutUs = () => {
  return (
    <AboutUsPage>
      <Story />
      <WhyWeDoIt />
      <Consulting />
      <Incubator />
    </AboutUsPage>
  );
};

export default AboutUs;
