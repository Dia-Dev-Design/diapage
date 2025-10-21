import styled from "styled-components";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Story = () => {
  return (
    <StoryContainer>
      <h1>Hello, welcome to Story</h1>
    </StoryContainer>
  );
};

export default Story;
