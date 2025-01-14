import styled from "styled-components"

import TargetIcon from '../../assets/TargetIcon.svg'
import EyeIcon from '../../assets/EyeIcon.svg'
import HandsIcon from '../../assets/HandsIcon.svg'

const WhyPageContainer = styled.div`
    height: 51vh;
    width: 85%;
    ${'' /* border: 2px solid black; */}
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 5%
`
const Headline = styled.h1`
    font-family: 'Aileron-Bold';
    font-size: 7.9rem;
    font-weight: 700;
`
const Why = styled.p`
  width: 39%;
  font-family: "Aileron-Light"; 
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`
const WhyContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: -3%
`
const WhyIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%
`
const WhyIconsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%
`
const IconDivs = styled.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center
`
const Icon = styled.img`
  height: 60%
`
const IconExplanations = styled.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%
`

const WhyWeDoIt = () => {
  return (
    <WhyPageContainer>

        <Headline>Why We Do It</Headline>
        <WhyContent>
          <Why>We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.</Why>

          <WhyIconsContainer>

            <WhyIconsContent>
              <IconDivs>
                <Icon src={TargetIcon} alt='target-icon'/>
              </IconDivs>
              <IconExplanations>We are committed to empowering your business with cutting-edge solutions that align with your goals.</IconExplanations>
            </WhyIconsContent>

            <WhyIconsContent>
              <IconDivs>
                <Icon src={EyeIcon} alt='eye-icon'/>
              </IconDivs>
              <IconExplanations>Our primary focus is on delivering customized technology that caters to your unique requirements.</IconExplanations>

            </WhyIconsContent>

            <WhyIconsContent>
              <IconDivs>
                <Icon src={HandsIcon} alt='hands-icon'/>
              </IconDivs>
              <IconExplanations>Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.</IconExplanations>
            </WhyIconsContent>
          </WhyIconsContainer>

        </WhyContent>

    </WhyPageContainer>
  )
}

export default WhyWeDoIt

