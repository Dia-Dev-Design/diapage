import styled from "styled-components"

const Container = styled.div`
    width: 1200px
`

const MainContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default MainContainer