import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 6% 4%;
  box-sizing: border-box;
`;

const PageTitle = styled.h1`
  font-size: clamp(4rem, 6vw, 7rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 2% 0;
  text-align: center;
`;

const UnderConstructionText = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 6% 0;
  text-align: center;
`;

const ConstructionEmoji = styled.div`
  font-size: clamp(6rem, 10vw, 12rem);
  text-align: center;
  line-height: 1;
  margin-bottom: 3%;
  filter: none !important;
`;

const Services = () => {
  return (
    <PageContainer>
      <PageTitle>Services</PageTitle>
      <UnderConstructionText>🚧 Under Construction 🚧</UnderConstructionText>
      <ConstructionEmoji>👷‍♂️🏗️👷‍♀️</ConstructionEmoji>
    </PageContainer>
  );
};

export default Services;
