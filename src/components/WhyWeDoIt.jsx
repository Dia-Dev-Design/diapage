import styled from "styled-components"

import TargetIcon from '../assets/TargetIcon.svg'
import EyeIcon from '../assets/EyeIcon.svg'
import HandsIcon from '../assets/HandsIcon.svg'

const WhyPageContainer = styled.div`
    height: 50vh;
    widht: 100%;
    border: 2px solid black;
    z-index: 9;
`

const WhyWeDoIt = () => {
  return (
    <WhyPageContainer>

        <h1>Why We Do It</h1>
        <img src={TargetIcon} alt='target-icon'/>
        <p>We are committed to empowering your business with cutting-edge solutions that align with your goals.</p>
        <img src={EyeIcon} alt='eye-icon'/>
        <p>Our primary focus is on delivering customized technology that caters to your unique requirements.</p>
        <img src={HandsIcon} alt='hands-icon'/>
        <p>Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.</p>

    </WhyPageContainer>
  )
}

export default WhyWeDoIt

