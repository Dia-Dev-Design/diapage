import styled from "styled-components"

const Container = styled.div`
    width: 1200px;
    height: inherit;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    align-self: inherit;
    ${'' /* border: 2px solid red; */}
`

const MainContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default MainContainer