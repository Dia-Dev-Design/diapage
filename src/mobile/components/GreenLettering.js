import styled from "styled-components";

const GreenLetteringContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreenLettering = () => {
  return (
    <GreenLetteringContainer>
      <h1>Hello, welcome to GreenLettering</h1>
    </GreenLetteringContainer>
  );
};

export default GreenLettering;
