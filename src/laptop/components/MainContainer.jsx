import styled from "styled-components"

const Container = styled.div`
    width: 1200px;
    border: 2px solid red;
`

const MainContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default MainContainer