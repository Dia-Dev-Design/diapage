import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 12% 6%;
  box-sizing: border-box;
`;

const PageTitle = styled.h1`
  font-size: clamp(3.6rem, 9vw, 5rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 6% 0;
  text-align: center;
`;

const UnderConstructionText = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 10% 0;
  text-align: center;
`;

const ConstructionEmoji = styled.div`
  font-size: clamp(5rem, 15vw, 8rem);
  text-align: center;
  line-height: 1;
  filter: none !important;
`;

const ClientStories = () => {
  return (
    <PageContainer>
      <PageTitle>Client Stories</PageTitle>
      <UnderConstructionText>🚧 Under Construction 🚧</UnderConstructionText>
      <ConstructionEmoji>👷‍♂️🏗️👷‍♀️</ConstructionEmoji>
    </PageContainer>
  );
};

export default ClientStories;
