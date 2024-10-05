import styled from "styled-components"

import BalloonCat from '../assets/BalloonCat.svg'
import DiaGreenLogo from '../assets/DDDGreenLogoClearBackGround.svg'

const StoryContainer = styled.div`
    height: 85vh;
    background-color: #F2F2F2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`
const StoryTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 80%;

`

const StoryHeadline = styled.h1`
    font-family: 'Aileron-Bold';
    font-size: 7.9rem;
    font-weight: 700;
`
const CatImage = styled.img`
    height: 80%
`

const StoryBottom = styled.div`
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const GreenDiaLogo = styled.img`
    height: 85%;
    margin-left: 1%
`

const StoryParagraphs =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    width: 74%
`
const StoryText = styled.div`
    font-size: 1.6rem;
`

const Story = () => {
  return (
    <StoryContainer>
        <StoryTop>
            <StoryHeadline>Our Story</StoryHeadline>
            <CatImage src={BalloonCat} alt='ballon-cat'/>
        </StoryTop>
        <StoryBottom>
            <GreenDiaLogo src={DiaGreenLogo} alt='dia-green-logo'/>
            <StoryParagraphs>
                <StoryText>Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry.</StoryText>
                <StoryText>In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and inStoryContaineriduals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry.</StoryText>
                <StoryText>Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region.</StoryText>
            </StoryParagraphs>
        </StoryBottom>
    </StoryContainer>
  )
}

export default Story