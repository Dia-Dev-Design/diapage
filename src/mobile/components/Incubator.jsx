import styled from "styled-components";

const IncubatorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Incubator = () => {
  return (
    <IncubatorContainer>
      <h1>Hello, welcome to Incubator</h1>
    </IncubatorContainer>
  );
};

export default Incubator;
