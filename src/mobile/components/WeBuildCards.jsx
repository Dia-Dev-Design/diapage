import styled from "styled-components";

const WeBuildCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeBuildCards = () => {
  return (
    <WeBuildCardsContainer>
      <h1>Hello, welcome to WeBuildCards</h1>
    </WeBuildCardsContainer>
  );
};

export default WeBuildCards;
