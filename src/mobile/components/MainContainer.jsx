import styled from "styled-components";

const MainContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = () => {
  return (
    <MainContainerWrapper>
      <h1>Hello, welcome to MainContainer</h1>
    </MainContainerWrapper>
  );
};

export default MainContainer;
